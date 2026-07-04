// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// The site is served from the apex domain outpostlabs.dev (custom domain configured in
// the repo's GitHub Pages settings), so `base` stays at the default "/". `site` is used
// for canonical URLs, sitemaps, and absolute links.
export default defineConfig({
  site: 'https://outpostlabs.dev',

  // Emit /path/index.html so existing pretty URLs (e.g. /resurface/privacy/) keep working
  // on GitHub Pages, matching how the old Jekyll/plain-HTML site behaved.
  trailingSlash: 'ignore',

  build: {
    format: 'directory',
  },

  integrations: [sitemap()],
});