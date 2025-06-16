# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

This is a monorepo containing a personal portfolio website with two main packages:

- `packages/assets/` - React frontend application
- `packages/cdk/` - AWS CDK infrastructure code

## Common Commands

### Frontend Development (packages/assets/)

```bash
cd packages/assets
npm run dev          # Start development server
npm run build        # Build for production
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run typecheck    # Run TypeScript compiler
npm run quality      # Run all quality checks (lint + typecheck)
```

### Infrastructure (packages/cdk/)

```bash
cd packages/cdk
npm run build        # Compile TypeScript
npm run test         # Run Jest tests
npm run cdk          # Run CDK CLI commands
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
- **Package Manager**: npm
- **Code Quality**: ESLint + Prettier + TypeScript strict mode
- **Testing**: Jest for CDK infrastructure tests

## Deployment Workflow

1. Frontend changes are built using Vite
2. CDK automatically deploys build artifacts to S3
3. CloudFront serves the static site with proper security headers
4. DNS is managed externally via Cloudflare
