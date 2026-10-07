# kamillin-website

Produktwebsite für **KAMILLIN®** (Robugen GmbH Pharmazeutische Fabrik) mit drei
Produkten und je einer eigenen Produktseite: den Arzneimitteln **KAMILLIN® EXTERN
ROBUGEN** und **KAMILLIN® KONZENTRAT ROBUGEN** sowie dem Kosmetikum **KAMILLIN®
REPAIR CREME**.

Die Seite ist seit 17.09.2026 unter https://kamillin.de live und zur Indexierung
freigegeben. Verbleibende Punkte (Cookiebot-Manager, Search Console, Assets) stehen in
**[TEMPLATE-TODO.md](TEMPLATE-TODO.md)**. Einzelne Platzhalter im Code tragen den
Marker `TODO (KAMILLIN)`.

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

## Deployment

Das Cloudflare-Worker-Projekt `kamillin-website` deployt per Git-Anbindung aus
GitHub (Branch `main`), siehe `wrangler.jsonc`. Ausgeliefert wird nur unter der Custom
Domain kamillin.de; workers.dev- und Preview-URLs sind abgeschaltet.
