import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify/functions";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";

import solidJs from "@astrojs/solid-js";
import { remarkReadingTime } from "./src/lib/remark-reading-time.mjs";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://singrank.com/",
  integrations: [
    sitemap(),
    robotsTxt({
      sitemap: [
        "https://singrank.com/sitemap-index.xml",
        "https://singrank.com/sitemap-0.xml",
      ],
    }),
    solidJs(),
    UnoCSS({ injectReset: true }),
    icon({
      iconify: {
        iconSize: 24,
        scale: 1.2,
      },
    }),
    svelte(),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  output: "server",
  adapter: netlify(),
  vite: {
    assetsInclude: "**/*.riv",
    build: {
      cssCodeSplit: true,
      minify: 'terser',
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['solid-js', 'd3', 'gsap'],
            animations: ['motion', 'lenis'],
          },
        },
      },
    },
    ssr: {
      noExternal: ['astro-icon'],
    },
    optimizeDeps: {
      include: ['solid-js', 'd3', 'gsap', 'motion', 'lenis'],
    },
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
    format: ['avif', 'webp', 'jpg'],
    quality: 80,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
