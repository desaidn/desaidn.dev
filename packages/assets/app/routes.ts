import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home-route.tsx"),
  route("experience", "routes/experience-route.tsx"),
  route("*", "routes/any-route.tsx"),
] satisfies RouteConfig;
