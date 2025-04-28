import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as origins from "aws-cdk-lib/aws-cloudfront-origins";
import * as certificatemanager from "aws-cdk-lib/aws-certificatemanager";
import * as iam from "aws-cdk-lib/aws-iam"; // Import IAM
import * as s3deploy from "aws-cdk-lib/aws-s3-deployment";

export interface SiteStackProps extends cdk.StackProps {
  /**
   * The custom domain name for the site (e.g., [www.example.com](https://www.example.com)).
   * This domain must be managed in your external DNS provider (e.g., Cloudflare).
   */
  readonly domainName: string;
}

export class SiteStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: SiteStackProps) {
    super(scope, id, props);

    // --- S3 Bucket for Website Content ---
    // Secure, private bucket for website content. Access is restricted to CloudFront.
    const siteBucket = new s3.Bucket(this, "SiteBucket", {
      // bucketName: props.domainName, // Bucket names must be globally unique. Using CDK-generated name is safer.
      encryption: s3.BucketEncryption.S3_MANAGED, // SSE-S3 encryption
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL, // Block all public access
      versioned: true, // Enable versioning for rollback capabilities
      objectOwnership: s3.ObjectOwnership.BUCKET_OWNER_ENFORCED,
      enforceSSL: true, // Require SSL connections to the bucket
      removalPolicy: cdk.RemovalPolicy.RETAIN, // Keep the bucket even if the stack is deleted (safer for production)
      // autoDeleteObjects: true, // Uncomment for non-production stacks for easier cleanup (requires removalPolicy: DESTROY)
    });

    // --- S3 Bucket for CloudFront Access Logs ---
    // Separate bucket recommended for storing CloudFront access logs.
    const logBucket = new s3.Bucket(this, "LogBucket", {
      encryption: s3.BucketEncryption.S3_MANAGED,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: cdk.RemovalPolicy.RETAIN, // Or DESTROY with autoDeleteObjects: true for non-prod
      // autoDeleteObjects: true, // Enable for non-prod cleanup
      accessControl: s3.BucketAccessControl.LOG_DELIVERY_WRITE, // Grant CloudFront Log Delivery service permissions
    });

    // --- ACM Certificate ---
    // Request a certificate using DNS validation (preferred for automated renewals with Cloudflare DNS).
    const certificate = new certificatemanager.Certificate(
      this,
      "SiteCertificate",
      {
        domainName: props.domainName,
        subjectAlternativeNames: ["www." + props.domainName],
        validation: certificatemanager.CertificateValidation.fromDns(),
      }
    );

    // --- CloudFront Origin Access Control (OAC) ---
    // Modern way to grant CloudFront secure access to the S3 bucket.
    const cfnOriginAccessControl = new cloudfront.CfnOriginAccessControl(
      this,
      "SiteOriginAccessControl",
      {
        originAccessControlConfig: {
          // Generate a unique name for the OAC
          name: `oac-${cdk.Aws.STACK_NAME}-${cdk.Aws.REGION}-${props.domainName}`,
          originAccessControlOriginType: "s3",
          signingBehavior: "always",
          signingProtocol: "sigv4",
          description: `Origin Access Control for ${props.domainName}`,
        },
      }
    );

    // --- CloudFront Response Headers Policy ---
    // Defines security headers added to responses from CloudFront.
    const responseHeadersPolicy = new cloudfront.ResponseHeadersPolicy(
      this,
      "SecurityHeadersPolicy",
      {
        responseHeadersPolicyName: `SecurityHeaders-${cdk.Aws.REGION}-${id}`,
        comment: "Security headers policy for the static site",
        securityHeadersBehavior: {
          contentSecurityPolicy: {
            contentSecurityPolicy: "default-src 'self';", // Adjust as needed for your site
            override: true,
          },
          strictTransportSecurity: {
            accessControlMaxAge: cdk.Duration.seconds(63072000), // 2 years
            includeSubdomains: true,
            preload: true,
            override: true,
          },
          xssProtection: {
            protection: true,
            modeBlock: true,
            override: true,
          },
          contentTypeOptions: {
            override: true,
          },
          referrerPolicy: {
            referrerPolicy:
              cloudfront.HeadersReferrerPolicy.STRICT_ORIGIN_WHEN_CROSS_ORIGIN,
            override: true,
          },
          frameOptions: {
            frameOption: cloudfront.HeadersFrameOption.DENY,
            override: true,
          },
        },
      }
    );

    // --- CloudFront Distribution ---
    const distribution = new cloudfront.Distribution(this, "SiteDistribution", {
      comment: `CloudFront distribution for ${props.domainName}`,
      defaultRootObject: "index.html",
      domainNames: [props.domainName, "www." + props.domainName],
      certificate: certificate,
      minimumProtocolVersion: cloudfront.SecurityPolicyProtocol.TLS_V1_2_2021,
      enableLogging: true,
      logBucket: logBucket,
      logFilePrefix: "cloudfront-access-logs/",
      logIncludesCookies: true,
      defaultBehavior: {
        origin: new origins.S3Origin(siteBucket, {
          // OAC will be configured below
        }),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        responseHeadersPolicy: responseHeadersPolicy,
        allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
        cachedMethods: cloudfront.CachedMethods.CACHE_GET_HEAD_OPTIONS,
        compress: true,
      },
      // Optional: Configure custom error responses
      // errorResponses: [ ... ],
    });

    // --- Deploy static assets ---
    new s3deploy.BucketDeployment(this, "DeployHelloWorld", {
      destinationBucket: siteBucket,
      sources: [
        s3deploy.Source.data(
          "index.html",
          `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>Hello</title></head><body><h1>Hello, world!</h1></body></html>`
        ),
      ],
      distribution,
      distributionPaths: ["/*"],
    });

    // --- Grant CloudFront Access to S3 via OAC ---
    const cfnDistribution = distribution.node
      .defaultChild as cloudfront.CfnDistribution;

    // Remove OAI if it exists and apply OAC
    cfnDistribution.addPropertyOverride(
      "DistributionConfig.Origins.0.S3OriginConfig.OriginAccessIdentity",
      ""
    );
    cfnDistribution.addPropertyOverride(
      "DistributionConfig.Origins.0.OriginAccessControlId",
      cfnOriginAccessControl.attrId
    );

    // Update S3 Bucket Policy for OAC
    siteBucket.addToResourcePolicy(
      new iam.PolicyStatement({
        actions: ["s3:GetObject"],
        resources: [siteBucket.arnForObjects("*")],
        principals: [new iam.ServicePrincipal("cloudfront.amazonaws.com")],
        conditions: {
          StringEquals: {
            "AWS:SourceArn": `arn:aws:cloudfront::${cdk.Aws.ACCOUNT_ID}:distribution/${distribution.distributionId}`,
          },
        },
      })
    );

    // --- Outputs ---
    new cdk.CfnOutput(this, "SiteBucketName", {
      value: siteBucket.bucketName,
      description: "Name of the S3 bucket storing website content",
    });

    new cdk.CfnOutput(this, "DistributionDomainName", {
      value: distribution.distributionDomainName,
      description:
        "CloudFront distribution domain name (Use this for CNAME in Cloudflare)",
    });

    new cdk.CfnOutput(this, "WebsiteURL", {
      value: `https://${props.domainName}`,
      description:
        "Target URL of the deployed website (after DNS configuration)",
    });
  }
}
