# desaidn.dev

Personal portfolio website.

**Live Site:** [desaidn.dev](https://desaidn.dev)

## Structure

```
├── packages/
│   ├── assets/     # React frontend
│   └── cdk/        # AWS infrastructure
```

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build

# Run linting and type checking
pnpm run quality
```

## Deployment

Assuming credentials are set:

```bash
# Build, synth, and show diff
pnpm run deploy:prepare

# Deploy to AWS (after reviewing diff)
pnpm run deploy
```

Deploys to AWS S3 + CloudFront with custom domain and SSL.

## Stack

- React 19 + TypeScript
- Tailwind CSS
- React Router v7
- AWS CDK
