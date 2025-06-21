import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import TailwindcssMangle from 'unplugin-tailwindcss-mangle/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import cspPlugin from './cspPlugin';

export default defineConfig(({ mode }) => {
  const plugins = [tailwindcss(), reactRouter(), tsconfigPaths(), cspPlugin()];

  if (mode === 'production') {
    plugins.push(TailwindcssMangle());
  }

  return { plugins };
});
