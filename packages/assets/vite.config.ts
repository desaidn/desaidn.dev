import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import TailwindcssMangle from 'unplugin-tailwindcss-mangle/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import cspPlugin from './cspPlugin';

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';

  return {
    plugins: [
      tailwindcss(),
      reactRouter(),
      tsconfigPaths(),
      cspPlugin(),
      ...(isProduction ? [TailwindcssMangle()] : []),
    ],
  };
});
