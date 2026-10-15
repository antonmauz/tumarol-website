// Zentrale Produktbilder: Packshots (freigestellt, normalisiert; Karten und Drawer) und
// Galerie-Slides (larylin-<produkt>-1…5.png, fertige Motive, nicht normalisieren) aus
// src/assets/images/products/<produkt>/. Neues Bild: Import ergänzen und mit Alt-Text eintragen.
// TODO (LARYLIN): das Hover-Motiv (Packung mit Inhalt) fehlt noch, bis
// dahin zeigt der Hover die Faltschachtel.
import type { ImageMetadata } from 'astro';
import type { PharmacyProduct } from './pharmacies';

// TODO (TUMAROL): Übergangslösung bis zum Umbau auf drei Produkte. Die Produkt-Keys
// (pastillen/saft) zeigen vorerst auf die Tumarol-Packshots Creme und Balsam, Galerien
// sind leer (der Slider zeigt dann cardFront).
import cremePackshot from '../assets/images/products/creme/tumarol-creme-nobg.png';
import balsamPackshot from '../assets/images/products/balsam/tumarol-balsam-nobg.png';

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
  faltschachtel: { src: cremePackshot, alt: 'Tumarol® Creme – Packung' },
  gallery: [] as ProductImage[],
};
const saft = {
  faltschachtel: { src: balsamPackshot, alt: 'Tumarol® N Balsam – Faltschachtel, 50 g' },
  gallery: [] as ProductImage[],
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
