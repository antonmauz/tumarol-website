// Erzeugt die Marken-Bilder in public/ aus src/assets/images/logo/:
//   og-default.png (1200×630): Logo mittig auf Weiß (transparente OG-Bilder rendern auf
//     manchen Plattformen schwarz), favicon.svg + favicon-32.png + apple-touch-icon.png
//     (180×180, weißer Grund, iOS füllt Transparenz schwarz) aus der Bildmarke, und
//     larylin-logo.png (Logo für die strukturierten Daten).
// Aufruf: node scripts/make-brand-images.cjs — nach jedem Logo-Tausch erneut ausführen.
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const LOGO_DIR = path.join(__dirname, '..', 'src', 'assets', 'images', 'logo');
const PUBLIC = path.join(__dirname, '..', 'public');
const LOGO = path.join(LOGO_DIR, 'larylin-logo.png');
const SIGNET = path.join(LOGO_DIR, 'larylin-signet.svg');

// Logo eng zuschneiden und mit Rand mittig auf eine weiße Fläche setzen (nie hochskalieren:
// das PNG ist nur 599 px breit; ein größeres Original hier einfach austauschen).
async function logoOnWhite(out, W, H, maxW, maxH) {
  const motiv = await sharp(LOGO).trim().resize({ width: maxW, height: maxH, fit: 'inside', withoutEnlargement: true }).toBuffer();
  const meta = await sharp(motiv).metadata();
  await sharp({ create: { width: W, height: H, channels: 4, background: '#FFFFFF' } })
    .composite([{ input: motiv, left: Math.round((W - meta.width) / 2), top: Math.round((H - meta.height) / 2) }])
    .png()
    .toFile(out);
}

(async () => {
  await logoOnWhite(path.join(PUBLIC, 'og-default.png'), 1200, 630, 900, 300);

  // Schema-Logo: transparent, eng beschnitten (Google: Logo auf weißem Grund lesbar).
  await sharp(LOGO).trim().png().toFile(path.join(PUBLIC, 'larylin-logo.png'));

  fs.copyFileSync(SIGNET, path.join(PUBLIC, 'favicon.svg'));
  const svg = fs.readFileSync(SIGNET);
  await sharp(svg, { density: 300 }).resize(32, 32).png().toFile(path.join(PUBLIC, 'favicon-32.png'));
  await sharp(svg, { density: 600 })
    .resize(180, 180)
    .flatten({ background: '#FFFFFF' })
    .png()
    .toFile(path.join(PUBLIC, 'apple-touch-icon.png'));

  console.log('og-default.png, larylin-logo.png, favicon.svg, favicon-32.png, apple-touch-icon.png geschrieben');
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
