# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

- `pnpm run build` compile typescript to js
- `pnpm run watch` watch for changes and compile
- `pnpm run test` perform the jest unit tests
- `pnpm cdk deploy` deploy this stack to your default AWS account/region
- `pnpm cdk diff` compare deployed stack with current state
- `pnpm cdk synth` emits the synthesized CloudFormation template

## AWS Credentials

### Configure your profile with the `aws configure sso` wizard

https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html#cli-configure-sso-configure

### Manually update the profile name to default

1. Open file where AWS SSO config is stored: `nvim ~/.aws/config`
2. Update `[profile some-profile-name]` to `[default]`

### Login with `aws sso login`

https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html#cli-configure-sso-login
