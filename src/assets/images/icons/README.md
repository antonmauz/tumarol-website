# Icons (SVG)

Quelle für `src/data/icons.ts`: Hier SVG-Dateien ablegen, Dateiname = Icon-Name
(z. B. `pastille.svg`, `drop.svg`), den Namen in `NAMES` in `scripts/build-icons.cjs`
eintragen und `node scripts/build-icons.cjs` ausführen. Farbe, Größe und Metadaten
werden dabei bereinigt (currentColor, ohne width/height). Formen ohne eigenes `fill`
werden als Fläche gefüllt; reine Konturen deshalb mit `fill="none"` anlegen.
`src/data/icons.ts` nie von Hand bearbeiten.
