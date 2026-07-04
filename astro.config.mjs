import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://explore.dwatson.pk',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
