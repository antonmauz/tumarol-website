// Normalisiert die Packshots unter src/assets/images/products/<produkt>/: Ränder trimmen,
// Motiv einpassen und auf eine 1200×1200-Leinwand setzen, zentriert und unten bündig
// (gleiche Standhöhe). Idempotent; Aufruf: node scripts/normalize-product-images.cjs.
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', 'src', 'assets', 'images', 'products');
const PRODUCTS = ['pastillen', 'saft'];

// Quadratische Leinwand (1:1 wie .product-card__media und der Produkt-Slider).
const W = 1200, H = 1200;
// Nutzbare Fläche: seitlich/oben wenig Luft, unten die Standlinie.
const PAD_X = 40, PAD_TOP = 40, BASELINE = 40;
const MAX_W = W - 2 * PAD_X, MAX_H = H - PAD_TOP - BASELINE;

async function normalize(file) {
  const trimmed = await sharp(file).ensureAlpha().trim({ threshold: 10 }).toBuffer();
  const motif = await sharp(trimmed)
    .resize({ width: MAX_W, height: MAX_H, fit: 'inside', withoutEnlargement: false })
    .toBuffer({ resolveWithObject: true });
  const left = Math.round((W - motif.info.width) / 2);
  const top = H - BASELINE - motif.info.height;
  const out = await sharp({
    create: { width: W, height: H, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
  })
    .composite([{ input: motif.data, left, top }])
    .png({ compressionLevel: 9 })
    .toBuffer();
  fs.writeFileSync(file, out);
  return motif.info;
}

(async () => {
  for (const product of PRODUCTS) {
    const dir = path.join(ROOT, product);
    if (!fs.existsSync(dir)) continue;
    // Nur Packshots. Die nummerierten Galerie-Slides (larylin-<produkt>-1.png …)
    // sind fertige Motive mit weißem Grund und Layout — nicht anfassen.
    const isPackshot = (f) => /\.png$/i.test(f) && !/-\d+\.png$/i.test(f);
    for (const name of fs.readdirSync(dir).filter(isPackshot)) {
      const info = await normalize(path.join(dir, name));
      console.log(`${product}/${name}: Motiv ${info.width}x${info.height} auf ${W}x${H}`);
    }
  }
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
