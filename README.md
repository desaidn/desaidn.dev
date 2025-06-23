# desaidn.dev

Personal website: [desaidn.dev](https://desaidn.dev)

## Stack

- **Frontend**: React + TypeScript + Tailwind + React Router (SPA)
- **Infrastructure / Deployment**: AWS CDK + Cloudflare (domain ONLY)

## Project Structure

```
├── packages/
│   ├── assets/     # React app
│   └── cdk/        # AWS CDK IaC
├── CLAUDE.md       # Comprehensive development guide
└── package.json    # Workspace configuration with pnpm
```

## Quick Start

```bash
pnpm install         # Install all dependencies
pnpm run dev         # Start development server
pnpm run build       # Build all packages
pnpm run quality     # Run lint + typecheck + format
```

## Deployment

```bash
pnpm run deploy:prepare    # Build + synth + diff
pnpm run deploy           # Full deployment to AWS
```

## Documentation

- **[CLAUDE.md](./CLAUDE.md)** - Complete development workflows and commands
- **[Frontend README](./packages/assets/README.md)** - React application details
- **[Infrastructure README](./packages/cdk/README.md)** - AWS CDK stack information
