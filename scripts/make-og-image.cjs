// Erzeugt public/og-default.png (1200×630): KAMILLIN-Wort-Bild-Marke mittig auf Weiß,
// weil transparente OG-Bilder auf manchen Plattformen schwarz rendern. Aufruf:
// node scripts/make-og-image.cjs. Liefert Marketing ein eigenes Motiv, Datei ersetzen.
const path = require('path');
const sharp = require('sharp');

const SRC = path.join(__dirname, '..', 'src', 'assets', 'images', 'logo', 'kamillin-og-default.png');
const OUT = path.join(__dirname, '..', 'public', 'og-default.png');

const W = 1200, H = 630;
// Motiv mit Rand einpassen (max. Breite/Höhe der nutzbaren Fläche).
const MAX_W = 1000, MAX_H = 460;

(async () => {
  const motiv = await sharp(SRC).resize({ width: MAX_W, height: MAX_H, fit: 'inside' }).toBuffer();
  const meta = await sharp(motiv).metadata();

  await sharp({ create: { width: W, height: H, channels: 4, background: '#FFFFFF' } })
    .composite([{ input: motiv, left: Math.round((W - meta.width) / 2), top: Math.round((H - meta.height) / 2) }])
    .png()
    .toFile(OUT);

  console.log(`og-default.png geschrieben — Motiv ${meta.width}x${meta.height} auf ${W}x${H}`);
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
