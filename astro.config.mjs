import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';
import vercel from '@astrojs/vercel/serverless';
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  site: 'https://designo-site-ivan.vercel.app/',
  experimental: {
    integrations: true,
  },
  integrations: [tailwind(), preact({ compat: true }), robotsTxt()],
  output: 'server',
  adapter: vercel(),
});
