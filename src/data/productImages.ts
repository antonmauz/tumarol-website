// Zentrale Produktbilder: Packshots (freigestellt, normalisiert; Karten und Drawer) und
// Galerie-Slides (larylin-<produkt>-1…4.png, fertige Motive, nicht normalisieren) aus
// src/assets/images/products/<produkt>/. Neues Bild: Import ergänzen und mit Alt-Text eintragen.
// TODO (LARYLIN): Hover-Motiv (Packung mit Inhalt) und Galerie-Slides fehlen noch; bis
// dahin zeigen Hover und Produktseiten-Slider die Faltschachtel.
import type { ImageMetadata } from 'astro';
import type { PharmacyProduct } from './pharmacies';

// ── Larylin® Husten-Stiller Pastillen ────────────────────────────────────
import pastillenFaltschachtel from '../assets/images/products/pastillen/larylin-pastillen-faltschachtel.png';

// ── Larylin® Husten-Stiller Saft ─────────────────────────────────────────
import saftFaltschachtel from '../assets/images/products/saft/larylin-saft-faltschachtel.png';

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
   *  leer = galleryFallback. */
  gallery: ProductImage[];
}

const pastillen = {
  faltschachtel: {
    src: pastillenFaltschachtel,
    alt: 'Larylin® Husten-Stiller Pastillen – Faltschachtel, Wirkstoff Dropropizin, 20 mg pro Lutschpastille, 24 Lutschpastillen',
  },
};
const saft = {
  faltschachtel: {
    src: saftFaltschachtel,
    alt: 'Larylin® Husten-Stiller Saft – Faltschachtel, Wirkstoff Dropropizin, 300 mg in 100 g Sirup, 200 ml Sirup',
  },
};

export const productImages: Record<PharmacyProduct, ProductImageSet> = {
  pastillen: {
    cardFront: pastillen.faltschachtel,
    cardHover: pastillen.faltschachtel,
    gallery: [pastillen.faltschachtel],
  },
  saft: {
    cardFront: saft.faltschachtel,
    cardHover: saft.faltschachtel,
    gallery: [saft.faltschachtel],
  },
};

/** Slides für Präparate ohne Galerie (derzeit haben alle mindestens den Packshot). */
export const galleryFallback: ProductImage[] = [];
