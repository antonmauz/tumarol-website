// Zentrale Produktbilder: Packshots (freigestellt, normalisiert; Karten und Drawer) und
// Galerie-Slides (fertige Motive, nicht normalisieren) aus src/assets/images/products/<produkt>/.
// Neues Bild: Import ergänzen und mit Alt-Text eintragen.
// TODO (LARYLIN): Packshots und Galerie-Slides für Pastillen und Saft fehlen noch; bis dahin
// zeigen Karten, Drawer und Produktseiten den Platzhalter.
import type { ImageMetadata } from 'astro';
import type { PharmacyProduct } from './pharmacies';

import platzhalter from '../assets/images/products/produkt-platzhalter.png';

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
   *  leer = Platzhalter-Slides. */
  gallery: ProductImage[];
}

const pastillen = {
  faltschachtel: { src: platzhalter, alt: 'Larylin® Husten-Stiller Pastillen – Faltschachtel' },
};
const saft = {
  faltschachtel: { src: platzhalter, alt: 'Larylin® Husten-Stiller Saft – Faltschachtel' },
};

export const productImages: Record<PharmacyProduct, ProductImageSet> = {
  pastillen: {
    cardFront: pastillen.faltschachtel,
    cardHover: pastillen.faltschachtel,
    gallery: [],
  },
  saft: {
    cardFront: saft.faltschachtel,
    cardHover: saft.faltschachtel,
    gallery: [],
  },
};

/** Platzhalter-Slides für Präparate ohne Galerie. */
export const galleryFallback: ProductImage[] = [
  { src: platzhalter, alt: 'TODO (LARYLIN): Produktabbildung 1' },
  { src: platzhalter, alt: 'TODO (LARYLIN): Produktabbildung 2' },
];
