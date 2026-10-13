# larylin-website

Produktwebsite für **Larylin®** (Robugen GmbH Pharmazeutische Fabrik) mit zwei
Arzneimitteln und je einer eigenen Produktseite: **Larylin® Husten-Stiller Pastillen**
und **Larylin® Husten-Stiller Saft** (Wirkstoff Dropropizin).

Produktions-Domain ist https://larylin.de. Offene Punkte bis zum Launch stehen in
**[TEMPLATE-TODO.md](TEMPLATE-TODO.md)**. Einzelne Platzhalter im Code tragen den
Marker `TODO (LARYLIN)`.

## Stack

- [Astro 6](https://astro.build) — statischer Build (`output` via Adapter)
- [Tailwind CSS v4](https://tailwindcss.com) (`@tailwindcss/vite`, Theme-Tokens
  in `src/styles/global.css`)
- Cloudflare Worker als Hosting (`@astrojs/cloudflare`, `wrangler.jsonc`,
  Assets aus `dist/client`)
- Content Collection `ratgeber` für die Wissenswertes-Artikel
  (`src/content.config.ts`; Vorlage: `src/content/ratgeber/_beispiel.md.txt`)

## Befehle

| Befehl | Wirkung |
| :-- | :-- |
| `npm install` | Abhängigkeiten installieren |
| `npm run dev` | Dev-Server auf `localhost:4321` |
| `npm run build` | Produktions-Build nach `./dist/` |
| `npm run check` | `astro check` (Typprüfung) |
| `npm run preview` | Build lokal ansehen |
| `node scripts/build-icons.cjs` | `src/data/icons.ts` aus `src/assets/images/icons/*.svg` erzeugen |

## Deployment

Das Cloudflare-Worker-Projekt `larylin-website` deployt per Git-Anbindung aus
GitHub (Branch `main`), siehe `wrangler.jsonc`. Ausgeliefert wird nur unter der Custom
Domain larylin.de; workers.dev- und Preview-URLs sind abgeschaltet.
