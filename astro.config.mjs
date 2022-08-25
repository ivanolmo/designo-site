import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact({ compat: true })],
  output: 'server',
  adapter: vercel(),
});
