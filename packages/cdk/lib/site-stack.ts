import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as origins from "aws-cdk-lib/aws-cloudfront-origins";
import * as certificatemanager from "aws-cdk-lib/aws-certificatemanager";
import * as iam from "aws-cdk-lib/aws-iam"; // Import IAM
import * as s3deploy from "aws-cdk-lib/aws-s3-deployment";
import * as path from "node:path";

export interface SiteStackProps extends cdk.StackProps {
  /**
   * The custom domain name for the site.
   * This domain must be managed in your external DNS provider (e.g., Cloudflare).
   */
  readonly domainName: string;
}

export class SiteStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: SiteStackProps) {
    super(scope, id, props);

    //  S3 Bucket for Website Content
    const siteBucket = new s3.Bucket(this, "SiteBucket", {
      encryption: s3.BucketEncryption.S3_MANAGED,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      versioned: true,
      objectOwnership: s3.ObjectOwnership.BUCKET_OWNER_ENFORCED,
      enforceSSL: true,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
    });

    //  S3 Bucket for CloudFront Access Logs
    const logBucket = new s3.Bucket(this, "LogBucket", {
      encryption: s3.BucketEncryption.S3_MANAGED,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
      accessControl: s3.BucketAccessControl.LOG_DELIVERY_WRITE,
    });

    //  ACM Certificate
    const certificate = new certificatemanager.Certificate(
      this,
      "SiteCertificate",
      {
        domainName: props.domainName,
        subjectAlternativeNames: ["www." + props.domainName],
        validation: certificatemanager.CertificateValidation.fromDns(),
      }
    );

    //  CloudFront Response Headers Policy
    const responseHeadersPolicy = new cloudfront.ResponseHeadersPolicy(
      this,
      "SecurityHeadersPolicy",
      {
        responseHeadersPolicyName: `SecurityHeaders-${cdk.Aws.REGION}-${id}`,
        comment: "Security headers policy for the static site",
        securityHeadersBehavior: {
          // TODO add CSP and verify other security best practices
          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy
          //   contentSecurityPolicy: {
          //     contentSecurityPolicy: "",
          //     override: true,
          //   },
          contentTypeOptions: { override: true },
          frameOptions: {
            frameOption: cloudfront.HeadersFrameOption.DENY,
            override: true,
          },
          referrerPolicy: {
            referrerPolicy: cloudfront.HeadersReferrerPolicy.NO_REFERRER,
            override: true,
          },
          strictTransportSecurity: {
            accessControlMaxAge: cdk.Duration.seconds(600),
            includeSubdomains: true,
            override: true,
          },
          xssProtection: {
            protection: true,
            modeBlock: false,
            override: true,
          },
        },
      }
    );

    //  CloudFront Distribution
    // https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_cloudfront-readme.html#distribution-api
    // TODO support multiple domains pointing to the same Cloudfront distribution
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
        origin: origins.S3BucketOrigin.withOriginAccessControl(siteBucket),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        responseHeadersPolicy: responseHeadersPolicy,
        allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
        cachedMethods: cloudfront.CachedMethods.CACHE_GET_HEAD_OPTIONS,
        compress: true,
      },
      errorResponses: [
        {
          httpStatus: 403,
          responseHttpStatus: 200,
          responsePagePath: "/index.html",
          ttl: cdk.Duration.minutes(30),
        },
        {
          httpStatus: 404,
          responseHttpStatus: 200,
          responsePagePath: "/index.html",
          ttl: cdk.Duration.minutes(30),
        },
      ],
    });

    // Deploy assets
    new s3deploy.BucketDeployment(this, "DeployHelloWorld", {
      destinationBucket: siteBucket,
      sources: [
        s3deploy.Source.asset(
          path.resolve(__dirname, "../../assets/build/client")
        ),
      ],
      distribution,
      distributionPaths: ["/*"],
    });

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

    //  Outputs
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
