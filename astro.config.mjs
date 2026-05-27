// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config

export default defineConfig({
  site: "https://belimdel.github.io",
  base: "/masis",
  adapter: cloudflare()
});