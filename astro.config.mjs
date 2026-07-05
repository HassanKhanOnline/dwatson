import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://explore.dwatson.pk',
  trailingSlash: 'always',
  integrations: [sitemap()],
  adapter: cloudflare()
});