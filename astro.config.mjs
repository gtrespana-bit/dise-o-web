import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://diseñoweb-venezuela.com',
  output: 'static',
  server: {
    host: '0.0.0.0',
    port: 4321,
  },
  vite: {
    server: {
      host: '0.0.0.0',
      port: 4321,
      hmr: { clientPort: 443 },
      headers: { 'X-Frame-Options': 'ALLOWALL' },
      allowedHosts: true,
    },
    preview: {
      host: '0.0.0.0',
      port: 4321,
    }
  },
  integrations: [
    tailwind(),
    sitemap()
  ]
});
