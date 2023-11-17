import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  base: '.',
  site: 'https://www.carlosnava.dev/',
  markdown: {
    shikiConfig: {
      theme: 'monokai',
    },
  },
  integrations: [tailwind({}), sitemap(), robotsTxt()],
});
