# Offene Punkte bis zum Launch

Diese Datei führt die offenen Launch-Punkte der Larylin®-Website. Detailstellen im Code
tragen den Marker `TODO (LARYLIN)` — Übersicht per:

```
grep -rn "TODO (LARYLIN)" src astro.config.mjs wrangler.jsonc public
```

## Technik

- **Cloudflare:** Worker-Projekt `larylin-website` anlegen (Git-Anbindung an `main`) und
  die Custom Domain larylin.de verbinden, bevor der erste Deploy läuft (`wrangler.jsonc`).
- **Search Console:** Property für larylin.de anlegen, `/sitemap-index.xml` einreichen.
- **Tracking/Consent:** prüfen, dass die GA4-Mess-ID in `src/data/analytics.ts` zur
  Property für larylin.de gehört; Cookiebot-Domain-Gruppe um larylin.de ergänzen.

## Inhalte und Freigaben

- Produkt- und Ratgebertexte fachlich freigeben lassen (HWG); die Stellen sind mit
  `TODO (LARYLIN)` markiert.
- Anwendungs-Sektion der Produktseiten folgt (`src/data/applications.ts`, `items` leer).

## Assets

- Gebrauchsinformationen (Packungsbeilagen) beider Präparate als PDF nach
  `public/downloads/` (`src/data/downloads.ts`); bis dahin werden die Einträge ausgeblendet.
- Galerie-Bilder der Produktseiten sind Platzhalter (`src/data/productImages.ts`);
  beim Austausch die Alt-Texte anpassen.
