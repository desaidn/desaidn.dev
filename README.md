# desaidn.dev

Personal website: [desaidn.dev](https://desaidn.dev)

## Copyright

© 2025 Dhairya Desai. All Rights Reserved.

This code is provided for portfolio demonstration. While you may view and fork on GitHub, no license is granted for copying, modifying, or distributing elsewhere. Feel free to reach out if you'd like to discuss usage.

## Stack

- **Frontend**: React + TypeScript + Tailwind + React Router (SPA)
- **Infrastructure**: AWS CDK + Cloudflare (domain only)

## Directory Structure

```
├── packages/
│   ├── assets/     # React app
│   └── cdk/        # AWS CDK IaC
├── CLAUDE.md       # Comprehensive development guide
└── package.json    # Workspace configuration with pnpm
```

## Architecture

Monorepo with React frontend deployed to AWS S3 + CloudFront via CDK.

## Getting Started

### Quick Start

```bash
pnpm install         # Install all dependencies
pnpm run dev         # Start development server
pnpm run build       # Build all packages
pnpm run quality     # Run lint + typecheck + format
```

### Deployment

```bash
pnpm run deploy:prepare    # Build + synth + diff
pnpm run deploy           # Full deployment to AWS
```

## Documentation

- **[CLAUDE.md](./CLAUDE.md)** - Complete development workflows and commands
- **[Frontend README](./packages/assets/README.md)** - React application details
- **[Infrastructure README](./packages/cdk/README.md)** - AWS CDK stack information
