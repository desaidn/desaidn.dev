import type { Config } from "@react-router/dev/config";

export default {
  // TODO determine best rendering strategy
  // https://reactrouter.com/start/framework/rendering#client-side-rendering
  ssr: false,
} satisfies Config;
