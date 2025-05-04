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
          //   contentSecurityPolicy: {
          // contentSecurityPolicy:
          //   "default-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com", // Default policy for loading content such as JavaScript, Images, CSS, Fonts, AJAX requests, Frames, HTML5 Media
          //       + "script-src 'self'; " + // Defines valid sources for JavaScript
          //       "style-src 'self' https://fonts.googleapis.com; " + // Defines valid sources for stylesheets (CSS) - Added Google Fonts
          //       "font-src 'self' https://fonts.gstatic.com; " + // Defines valid sources for fonts loaded using @font-face - Added Google Fonts static content
          //       "img-src 'self' data:; " + // Defines valid sources of images and favicons (data: allows inline base64 images)
          //       "connect-src 'self'; " + // Applies to XMLHttpRequest (AJAX), WebSocket or EventSource. If you connect to other APIs, add their domains here.
          //       "object-src 'none'; " + // Defines valid sources for the <object>, <embed>, and <applet> elements (set to 'none' for safety)
          //       "frame-ancestors 'none'; " + // Specifies valid parents that may embed a page using <frame>, <iframe>, <object>, <embed>, or <applet>. Replaces X-Frame-Options. 'none' is equivalent to DENY.
          //       "base-uri 'self'; " + // Restricts the URLs which can be used in a document's <base> element.
          //       "form-action 'self';", // Restricts the URLs which can be used as the target of form submissions from a given context.
          // override: true,
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
      // Optional: Configure custom error responses
      // errorResponses: [ ... ],
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
