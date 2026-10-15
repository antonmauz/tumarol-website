# Offene Punkte bis zum Launch

Diese Datei führt die offenen Launch-Punkte der Larylin®-Website. Detailstellen im Code
tragen den Marker `TODO (LARYLIN)` — Übersicht per:

```
grep -rn "TODO (LARYLIN)" src astro.config.mjs public
```

## Technik

- **Hosting (Cloudflare):** Adapter `@astrojs/cloudflare` und `wrangler.jsonc` wurden
  entfernt; bei der Anbindung neu einrichten.
- **Search Console:** Property für larylin.de anlegen, `/sitemap-index.xml` einreichen.
- **Tracking/Consent:** GA4-Mess-ID (`src/data/analytics.ts`) und Cookiebot-ID
  (`src/data/cookiebot.ts`) der Tumarol-Konten eintragen. Solange sie leer sind, werden
  die Skripte nicht eingebunden.

## Inhalte und Freigaben

- Produkt- und Ratgebertexte fachlich freigeben lassen (HWG); die Stellen sind mit
  `TODO (LARYLIN)` markiert.
- Anwendungs-Sektion der Produktseiten folgt (`src/data/applications.ts`, `items` leer).

## Assets

- Gebrauchsinformationen (Packungsbeilagen) beider Präparate als PDF nach
  `public/downloads/` (`src/data/downloads.ts`); bis dahin werden die Einträge ausgeblendet.
- Galerie-Bilder der Produktseiten sind Platzhalter (`src/data/productImages.ts`);
  beim Austausch die Alt-Texte anpassen.
