# Infrastructure (@desaidn.dev/cdk)

AWS CDK stack for hosting the portfolio website on S3 + CloudFront.

## Tech Stack

- **Infrastructure as Code**: AWS CDK (TypeScript) deploys React SPA
- **Hosting**: S3 + CloudFront
- **Domain**: SSL certificate + custom domain (Cloudflare)

## Directory Structure

```
packages/cdk/
├── lib/
│   └── site-stack.ts     # Main CDK stack definition
├── bin/
│   └── cdk.ts           # CDK app entry point
├── cdk.json             # CDK configuration
└── package.json
```

## Getting Started

### AWS Credentials Setup

### Configure your profile with the `aws configure sso` wizard

[AWS CLI SSO Configuration Guide](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html#cli-configure-sso-configure)

### Manually update the profile name to default

1. Open AWS SSO config: `nvim ~/.aws/config`
2. Update `[profile some-profile-name]` to `[default]`

### Login with `aws sso login`

[AWS SSO Login Guide](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html#cli-configure-sso-login)

## Documentation

For complete deployment workflows and commands, see [CLAUDE.md](../../CLAUDE.md#deployment-workflow).
