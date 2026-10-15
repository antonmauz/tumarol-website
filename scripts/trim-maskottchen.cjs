// Schneidet die transparenten Ränder der Maskottchen-Bilder unter
// src/assets/images/maskottchen/ ab (wie normalize-product-images.cjs, aber ohne Leinwand)
// und schreibt das Ergebnis daneben als koala-3d-<pose>-trim.png; die Originale bleiben.
// Durch das Trimmen liegt das Motiv bündig an der Bildunterkante (wichtig für „kopf“:
// die Pfoten sitzen auf der Sektionskante). Idempotent; Aufruf: node scripts/trim-maskottchen.cjs.
const sharp = require('sharp');
const path = require('path');

const DIR = path.join(__dirname, '..', 'src', 'assets', 'images', 'maskottchen');
const POSES = ['stehend', 'winkend', 'kopf'];

(async () => {
  for (const pose of POSES) {
    const src = path.join(DIR, `koala-3d-${pose}.png`);
    const out = path.join(DIR, `koala-3d-${pose}-trim.png`);
    const info = await sharp(src)
      .ensureAlpha()
      .trim({ threshold: 10 })
      .png({ compressionLevel: 9 })
      .toFile(out);
    console.log(`${path.basename(out)}: ${info.width}x${info.height}`);
  }
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
