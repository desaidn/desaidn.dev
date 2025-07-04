# Frontend Application (@desaidn.dev/assets)

Portfolio website frontend.

## Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4
- **Routing**: [React Router](https://reactrouter.com/) v7 (SPA mode)
- **Build**: Vite

## Directory Structure

```
packages/assets/
├── app/
│   ├── components/       # React components
│   ├── routes/           # Route files
│   └── root.tsx          # App root component
├── public/               # Static assets
└── package.json
```

## Architecture

SPA with client-side routing.

### Routes

- `/` - Home page (index-route.tsx)
- `/experience` - Experience page (experience-route.tsx)
- `/projects` - Projects page (projects-route.tsx)
- `/*` - Catch-all route (any-route.tsx)

**Note**: The newsletter menu item is an external link to Substack (https://desaidn.substack.com/) rather than a route. This design decision avoids the need to build a custom blog system while still providing content access.

## Getting Started

### Installation

Install the dependencies:

```bash
pnpm install
```

### Development

Start the development server with HMR:

```bash
pnpm run dev
```

Your application will be available at `http://localhost:5173`.

For complete development workflows, see [CLAUDE.md](../../CLAUDE.md#common-commands).

## Building for Production

Create a production build:

```bash
pnpm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `pnpm run build`

```
├── package.json
├── pnpm-lock.yaml
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Documentation

For complete development workflows and commands, see [CLAUDE.md](../../CLAUDE.md#common-commands).

---

Built with ❤️ using React Router.
