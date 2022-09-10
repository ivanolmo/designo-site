import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  site: 'https://designo-site-ivan.vercel.app',
  experimental: {
    integrations: true,
  },
  integrations: [tailwind(), react(), robotsTxt()],
  output: 'server',
  adapter: vercel(),
});
