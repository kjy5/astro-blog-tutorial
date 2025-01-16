// @ts-check
import { defineConfig } from 'astro/config'

import preact from '@astrojs/preact'

// https://astro.build/config
export default defineConfig({
  site: "https://kjy5.github.io",
  base: "astro-blog-tutorial",
  integrations: [preact()],
});