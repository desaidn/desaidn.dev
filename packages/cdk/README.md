# Infrastructure (@desaidn.dev/cdk)

AWS CDK stack for hosting the portfolio website on S3 + CloudFront.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

For complete deployment workflows, see [CLAUDE.md](../../CLAUDE.md#deployment-workflow).

## AWS Credentials

### Configure your profile with the `aws configure sso` wizard

[AWS CLI SSO Configuration Guide](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html#cli-configure-sso-configure)

### Manually update the profile name to default

1. Open AWS SSO config: `nvim ~/.aws/config`
2. Update `[profile some-profile-name]` to `[default]`

### Login with `aws sso login`

[AWS SSO Login Guide](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html#cli-configure-sso-login)
