import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/index-route.tsx'),
  route('experience', 'routes/experience-route.tsx'),
  route('projects', 'routes/projects-route.tsx'),
  route('blog', 'routes/blog-route.tsx'),
  route('*', 'routes/any-route.tsx'),
] as const satisfies RouteConfig;
