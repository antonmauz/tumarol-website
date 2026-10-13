import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Kanonische Produktions-URL – Basis für Canonicals, Sitemap und JSON-LD.
  site: 'https://larylin.de',
  // Kanonische URL-Form ist slash-los (Auslieferung via wrangler.jsonc "drop-trailing-slash").
  trailingSlash: 'never',
  integrations: [
    sitemap({
      // Sitemap-Einträge auf die slash-lose kanonische Form bringen.
      serialize: (item) => {
        const url = new URL(item.url);
        if (url.pathname !== '/') item.url = item.url.replace(/\/$/, '');
        return item;
      },
    }),
  ],
  // Bilder beim Build mit Sharp optimieren — die Seite ist statisch, kein Worker für /_image.
  adapter: cloudflare({
    imageService: 'compile',
  }),
  vite: {
    plugins: [tailwindcss()],
    server: {
      // Dev-Server: Polling statt fs.watch — unter Windows stirbt der native
      // Watcher mit EBUSY, sobald eine Datei (z. B. ein Bild per Explorer)
      // gerade kopiert wird. Polling ist robust, kostet etwas CPU.
      watch: { usePolling: true, interval: 1000, awaitWriteFinish: { stabilityThreshold: 800, pollInterval: 100 } },
    },
  },
});
