# Offene Punkte bis zum Launch

Stand: 15.09.2026. Die ursprüngliche Bereinigungsliste der Vorlage
(virudermin-website → KAMILLIN®) ist abgearbeitet; diese Datei führt nur noch
die offenen Launch-Punkte. Alle Detailstellen im Code tragen den Marker
`TODO (KAMILLIN)` — Übersicht per:

```
grep -rn "TODO (KAMILLIN)" src astro.config.mjs wrangler.jsonc public/robots.txt
```

## Technik

- **Indexierung:** freigegeben am 17.09.2026 (noindex nur noch für Test-Umgebungen und
  Seiten mit Prop `noindex`; `public/robots.txt` erlaubt das Crawling und nennt die Sitemap).
- **Tracking/Consent:** Cookiebot, Consent Mode v2 und GA4 sind eingebaut (IDs in
  `src/data/cookiebot.ts` und `src/data/analytics.ts`). Im Cookiebot-Manager: Domain
  kamillin.de in der Domain-Gruppe, Google Consent Mode aktiv, Widget-Button statt
  Footer-Link; nach dem Launch Scan anstoßen (füllt die Cookie-Übersicht im Datenschutz).
- **Search Console:** Property für kamillin.de anlegen, `/sitemap-index.xml` einreichen.

## Inhalte und Freigaben

Regulatory hat die Produkt- und Ratgebertexte freigegeben, Legal die Firmenbezeichnung
(Website „GmbH Pharmazeutische Fabrik“, Impressum/Datenschutz „GmbH & Co. KG“), Stand
17.09.2026.

## Assets

- Headerbild der Startseite in Retina-Auflösung (2688 × 1024 px, `src/assets/images/hero/`).
- Foto für Station 2 (KIA) im Lebenszyklus-Slider; `kia.jpg` ist mit 516 px zu klein.
- Gebrauchsinformationen und REPAIR-Produktinformation als PDF (`src/data/downloads.ts`).
