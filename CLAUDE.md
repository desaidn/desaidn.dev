# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

This is a monorepo containing a personal portfolio website with two main packages:

- `packages/assets/` - React frontend application
- `packages/cdk/` - AWS CDK infrastructure code

## Common Commands

### Workspace Commands (from root)

```bash
pnpm install         # Install all dependencies
pnpm run build       # Build all packages
pnpm run dev         # Start frontend development server
pnpm run test        # Run tests in all packages
pnpm run quality     # Run all quality checks (lint + typecheck + format)
pnpm run clean       # Clean build artifacts in all packages
```

### Enhanced Deployment Commands

```bash
# Simplified deployment workflow
pnpm run deploy:prepare    # Build assets + CDK synth + diff (your usual steps 1-2)
pnpm run deploy           # Full deployment (build + synth + deploy)

# Utility commands
pnpm run cdk              # Run CDK commands from root (e.g., pnpm run cdk list)
```

### Package-Specific Commands

```bash
# Frontend Development (packages/assets/)
pnpm --filter @desaidn.dev/assets dev        # Start development server
pnpm --filter @desaidn.dev/assets build      # Build for production
pnpm --filter @desaidn.dev/assets lint       # Run ESLint
pnpm --filter @desaidn.dev/assets typecheck  # Run TypeScript compiler

# Infrastructure (packages/cdk/)
pnpm --filter @desaidn.dev/cdk build         # Compile TypeScript
pnpm --filter @desaidn.dev/cdk test          # Run Jest tests
pnpm --filter @desaidn.dev/cdk cdk           # Run CDK CLI commands
```

## Architecture Overview

### Frontend Architecture

- **Framework**: React 19 with TypeScript
- **Routing**: React Router v7 with file-based routing (SPA mode, no SSR)
- **Styling**: Tailwind CSS v4 with Inter font from Google Fonts
- **Build Tool**: Vite with React Router integration
- **Routes**:
  - `/` - Home page (index-route.tsx)
  - `/experience` - Experience page (experience-route.tsx)
  - `/projects` - Projects page (projects-route.tsx)
  - `/blog` - Blog page (blog-route.tsx)
  - `/*` - Catch-all route (any-route.tsx)

### Component Structure

- `AppLayout.tsx` - Main layout wrapper
- `About.tsx` - About section component
- `ComingSoon.tsx` - Placeholder component
- `experience/` - Experience-related components
- Shared constants for experiences and menu items

### Infrastructure Architecture

- **Hosting**: AWS S3 + CloudFront distribution
- **Domain**: Custom domain (desaidn.dev) with SSL certificate
- **Security**: Comprehensive security headers including CSP, HSTS, and permissions policy
- **Access**: Origin Access Control (OAC) for secure S3 access
- **DNS**: External management via Cloudflare

### CDK Stack Details

- Single `SiteStack` that provisions S3 bucket and CloudFront distribution
- Automated deployment of frontend build assets to S3
- Security-focused CloudFront configuration with strict CSP policies
- SSL certificate management for custom domain

## Development Environment

- **Node.js**: Version 23 (managed via mise.toml)
- **Package Manager**: pnpm (workspace-enabled monorepo)
- **Code Quality**: ESLint + Prettier + TypeScript strict mode
- **Testing**: Jest for CDK infrastructure tests

## Monorepo Structure

- **Root**: Contains workspace configuration and shared dependencies
- **packages/assets/**: `@desaidn.dev/assets` - React frontend application
- **packages/cdk/**: `@desaidn.dev/cdk` - AWS CDK infrastructure code
- **Shared Dependencies**: TypeScript, Prettier, and common dev tools managed at root level

## Deployment Workflow

1. Frontend changes are built using Vite (`pnpm run build`)
2. CDK automatically deploys build artifacts to S3
3. CloudFront serves the static site with proper security headers
4. DNS is managed externally via Cloudflare
