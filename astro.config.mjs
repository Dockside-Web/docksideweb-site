// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  build: {
    // Inlines all CSS files smaller than 10kb directly into the HTML
    inlineStylesheets: 'always' 
  },

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: cloudflare()
});