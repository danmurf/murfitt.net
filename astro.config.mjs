// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { remarkShortcodes } from './src/lib/remark-shortcodes.js';
import { satteri } from '@astrojs/markdown-satteri';
import redirects from './src/redirects.json' with { type: 'json' };

export default defineConfig({
  site: 'https://murfitt.net',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  redirects,
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    processor: satteri({
      features: { directive: true },
      mdastPlugins: [remarkShortcodes],
    }),
    shikiConfig: {
      theme: 'monokai',
      wrap: true,
      transformers: [
        {
          // line numbers via CSS counters (see global.css)
          pre(node) {
            node.properties.class = node.properties.class
              ? `${node.properties.class} line-numbers`
              : 'line-numbers';
          },
        },
      ],
    },
  },
});