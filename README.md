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
npm install

# Start development server
cd packages/assets
npm run dev

# Build for production
npm run build

# Run linting and type checking
npm run quality
```

## Deployment

Assuming credentials are set:

```bash
cd packages/cdk
npm run cdk deploy
```

Deploys to AWS S3 + CloudFront with custom domain and SSL.

## Stack

- React 19 + TypeScript
- Tailwind CSS
- React Router v7
- AWS CDK
