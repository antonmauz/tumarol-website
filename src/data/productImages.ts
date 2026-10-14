// Zentrale Produktbilder: Packshots (freigestellt, normalisiert; Karten und Drawer) und
// Galerie-Slides (larylin-<produkt>-1…5.png, fertige Motive, nicht normalisieren) aus
// src/assets/images/products/<produkt>/. Neues Bild: Import ergänzen und mit Alt-Text eintragen.
// TODO (LARYLIN): das Hover-Motiv (Packung mit Inhalt) fehlt noch, bis
// dahin zeigt der Hover die Faltschachtel.
import type { ImageMetadata } from 'astro';
import type { PharmacyProduct } from './pharmacies';

// ── Larylin® Husten-Stiller Pastillen ────────────────────────────────────
import pastillenFaltschachtel from '../assets/images/products/pastillen/larylin-pastillen-faltschachtel.png';
import pastillen1 from '../assets/images/products/pastillen/larylin-pastillen-1.png';
import pastillen2 from '../assets/images/products/pastillen/larylin-pastillen-2.png';
import pastillen3 from '../assets/images/products/pastillen/larylin-pastillen-3.png';
import pastillen4 from '../assets/images/products/pastillen/larylin-pastillen-4.png';
import pastillen5 from '../assets/images/products/pastillen/larylin-pastillen-5.png';

// ── Larylin® Husten-Stiller Saft ─────────────────────────────────────────
import saftFaltschachtel from '../assets/images/products/saft/larylin-saft-faltschachtel.png';
import saft1 from '../assets/images/products/saft/larylin-saft-1.png';
import saft2 from '../assets/images/products/saft/larylin-saft-2.png';
import saft3 from '../assets/images/products/saft/larylin-saft-3.png';
import saft4 from '../assets/images/products/saft/larylin-saft-4.png';
import saft5 from '../assets/images/products/saft/larylin-saft-5.png';

export interface ProductImage {
  src: ImageMetadata;
  /** Deutscher Alt-Text; Text im Bild gehört mit hinein. */
  alt: string;
}

export interface ProductImageSet {
  /** Produktkarte (ProductHighlight) im Ruhezustand: nur die Faltschachtel.
   *  Auch im Apotheken-Drawer. */
  cardFront: ProductImage;
  /** Produktkarte beim Überfahren (Crossfade): Faltschachtel + Inhalt. */
  cardHover: ProductImage;
  /** Bild-Slider der Produktseite (Marketing-Slides, Reihenfolge = Slider);
   *  leer = der Slider zeigt cardFront. */
  gallery: ProductImage[];
}

const pastillen = {
  faltschachtel: {
    src: pastillenFaltschachtel,
    alt: 'Larylin® Husten-Stiller Pastillen – Faltschachtel, Wirkstoff Dropropizin, 20 mg pro Lutschpastille, 24 Lutschpastillen',
  },
  gallery: [
    { src: pastillen1, alt: 'Larylin® Husten-Stiller Pastillen – Faltschachtel mit Blisterpackung, Wirkstoff Dropropizin, 20 mg pro Lutschpastille, Blisterpackung mit 24 Lutschpastillen' },
    { src: pastillen2, alt: 'Frau mit Tasse am Tisch, daneben Faltschachtel und Blister der Larylin® Husten-Stiller Pastillen: Einfache Anwendung als Lutschpastille' },
    { src: pastillen3, alt: 'Grafik eines Oberkörpers mit Gehirn, Luftröhre und Lunge: Wirkstoff Dropropizin – hemmt den Hustenreiz direkt in den Atemwegen und der Lunge, anstatt im Gehirn, ist dadurch gut verträglich' },
    { src: pastillen4, alt: 'Bildcollage: Paar im herbstlichen Park, Mann mit Smartphone, lachende Kollegen im Büro – Für einen unbeschwerten Alltag' },
    { src: pastillen5, alt: 'Hände halten die Faltschachtel der Larylin® Husten-Stiller Pastillen auf einer herbstlichen Straße – Dosierung: 1–2 Pastillen bis zu 3-mal am Tag' },
  ],
};
const saft = {
  faltschachtel: {
    src: saftFaltschachtel,
    alt: 'Larylin® Husten-Stiller Saft – Faltschachtel, Wirkstoff Dropropizin, 300 mg in 100 g Sirup, 200 ml Sirup',
  },
  gallery: [
    { src: saft1, alt: 'Larylin® Husten-Stiller Saft – Faltschachtel und Flasche, Wirkstoff Dropropizin, 300 mg in 100 g Sirup, Antitussivum zum Einnehmen, Packung mit 200 ml Sirup' },
    { src: saft2, alt: 'Schlafende Frau im Bett, darüber Faltschachtel und Flasche des Larylin® Husten-Stiller Saft: Ideal für längere Anwendung und die abendliche Einnahme' },
    { src: saft3, alt: 'Grafik eines Oberkörpers mit Gehirn, Luftröhre und Lunge: Wirkstoff Dropropizin – hemmt den Hustenreiz direkt in den Atemwegen und der Lunge, anstatt im Gehirn, ist dadurch gut verträglich' },
    { src: saft4, alt: 'Bildcollage: lachendes Paar in der Küche, Mann mit Smartphone, Frau mit Decke auf dem Sofa – Für einen unbeschwerten Alltag' },
    { src: saft5, alt: 'Flasche Larylin® Husten-Stiller Saft auf einem Nachttisch – Dosierung: bis zu 3-mal täglich 10 ml (1 Messlöffel)' },
  ],
};

export const productImages: Record<PharmacyProduct, ProductImageSet> = {
  pastillen: {
    cardFront: pastillen.faltschachtel,
    cardHover: pastillen.faltschachtel,
    gallery: pastillen.gallery,
  },
  saft: {
    cardFront: saft.faltschachtel,
    cardHover: saft.faltschachtel,
    gallery: saft.gallery,
  },
};
