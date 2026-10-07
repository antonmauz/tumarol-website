// Zentrale Produktbilder: Packshots (freigestellt, normalisiert; Karten und Drawer) und
// Galerie-Slides (kamillin-<produkt>-1…4.png, fertige Motive, nicht normalisieren) aus
// src/assets/images/products/<produkt>/. Neues Bild: Import ergänzen und mit Alt-Text eintragen.
import type { ImageMetadata } from 'astro';
import type { PharmacyProduct } from './pharmacies';

import platzhalter from '../assets/images/products/produkt-platzhalter.png';

// ── KAMILLIN® EXTERN ROBUGEN ─────────────────────────────────────────────
import externFaltschachtel from '../assets/images/products/extern/kamillin-extern-faltschachtel.png';
// Beutel mit neuem Packungstext und Schatten (Anton, 29.09.2026), normalisiert.
import externBeutel from '../assets/images/products/extern/kamillin-extern-schatten-beutel.png';
import externSlide1 from '../assets/images/products/extern/kamillin-extern-1.png';
import externSlide2 from '../assets/images/products/extern/kamillin-extern-2.png';
import externSlide3 from '../assets/images/products/extern/kamillin-extern-3.png';
import externSlide4 from '../assets/images/products/extern/kamillin-extern-4.png';

// ── KAMILLIN® KONZENTRAT ROBUGEN ─────────────────────────────────────────
import konzentratFaltschachtel from '../assets/images/products/konzentrat/kamillin-konzentrat-faltschachtel.png';
import konzentratFlascheFaltschachtel from '../assets/images/products/konzentrat/kamillin-konzentrat-flasche-faltschachtel.png';
import konzentratSlide1 from '../assets/images/products/konzentrat/kamillin-konzentrat-1.png';
import konzentratSlide2 from '../assets/images/products/konzentrat/kamillin-konzentrat-2.png';
import konzentratSlide3 from '../assets/images/products/konzentrat/kamillin-konzentrat-3.png';
import konzentratSlide4 from '../assets/images/products/konzentrat/kamillin-konzentrat-4.png';

// ── KAMILLIN® REPAIR CREME ───────────────────────────────────────────────
import repairFaltschachtel from '../assets/images/products/repair/kamillin-repair-creme-faltschachtel.png';
import repairTubeFaltschachtel from '../assets/images/products/repair/kamillin-repair-creme-tube-faltschachtel.png';
import repairSlide1 from '../assets/images/products/repair/kamillin-repair-creme-1.png';
import repairSlide2 from '../assets/images/products/repair/kamillin-repair-creme-2.png';
import repairSlide3 from '../assets/images/products/repair/kamillin-repair-creme-3.png';
import repairSlide4 from '../assets/images/products/repair/kamillin-repair-creme-4.png';

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

const extern = {
  faltschachtel: { src: externFaltschachtel, alt: 'KAMILLIN® EXTERN ROBUGEN – Faltschachtel' },
  beutel: { src: externBeutel, alt: 'KAMILLIN® EXTERN ROBUGEN – Beutel' },
  // Galerie-Slides (Text im Bild → im Alt-Text wiedergegeben).
  slides: [
    { src: externSlide1, alt: 'KAMILLIN® EXTERN ROBUGEN – Beutel, DEV 1:2,0–2,8' },
    { src: externSlide2, alt: 'Kamillenanbau in Thüringen, extrahiert und abgefüllt in Esslingen, DEV (1:2,0–2,8): konzentrierter Kamillenblüten-Auszug – Landschaft in Thüringen' },
    { src: externSlide3, alt: 'Entzündungshemmend und wundheilend bei oberflächlichen Wunden – Fotos: gepflegte Beine, Babyfuß mit Waschlappen, Verband am Knie' },
    { src: externSlide4, alt: 'Zur Anwendung in Umschlägen und Spülungen, Teil-, Sitz- oder Vollbädern, Säuglings- oder Kinderbädern – Tropfen fallen in Flüssigkeit' },
  ],
};
const konzentrat = {
  faltschachtel: { src: konzentratFaltschachtel, alt: 'KAMILLIN® KONZENTRAT ROBUGEN – Faltschachtel' },
  flascheFaltschachtel: { src: konzentratFlascheFaltschachtel, alt: 'KAMILLIN® KONZENTRAT ROBUGEN – Flasche und Faltschachtel' },
  // Galerie-Slides (Text im Bild → im Alt-Text wiedergegeben).
  slides: [
    { src: konzentratSlide1, alt: 'KAMILLIN® KONZENTRAT ROBUGEN – Faltschachtel und 40-ml-Flasche, DEV 1:1,7–2,6' },
    { src: konzentratSlide2, alt: 'Kamillenanbau in Thüringen, extrahiert und abgefüllt in Esslingen, DEV (1:1,7–2,6): stark konzentrierter Kamillenblüten-Auszug – Landschaft in Thüringen' },
    { src: konzentratSlide3, alt: 'Entzündungshemmend und wundheilend, äußerlich und innerlich – Fotos: Person ruht auf dem Sofa, Frau mit Kopfschmerzen, Frau trinkt ein Glas Wasser' },
    { src: konzentratSlide4, alt: 'Zur Anwendung als Inhalation, Einnahme, Mundspülung, Teil- oder Sitzbad, Umschläge oder Spülung – Tropfen' },
  ],
};
const repair = {
  faltschachtel: { src: repairFaltschachtel, alt: 'KAMILLIN® REPAIR CREME – Faltschachtel' },
  tubeFaltschachtel: { src: repairTubeFaltschachtel, alt: 'KAMILLIN® REPAIR CREME – Tube und Faltschachtel' },
  // Galerie-Slides (Text im Bild → im Alt-Text wiedergegeben).
  slides: [
    { src: repairSlide1, alt: 'KAMILLIN® REPAIR CREME – Faltschachtel und Tube, Vitamin E und Kamillenblütenextrakt' },
    { src: repairSlide2, alt: 'Kamillenanbau in Thüringen, extrahiert in Esslingen, Vitamin E und Kamillenblütenextrakt – Landschaft in Thüringen' },
    { src: repairSlide3, alt: 'Zur Pflege beanspruchter Haut – Fotos: Creme auf der Fingerkuppe, Rasierer und Handtuch, Verband am Knie' },
    { src: repairSlide4, alt: 'Zur Anwendung auf die betroffene Stelle oder als Hand- oder Fußpackung zum Einziehen – Cremestrich' },
  ],
};

export const productImages: Record<PharmacyProduct, ProductImageSet> = {
  extern: {
    cardFront: extern.faltschachtel,
    cardHover: extern.beutel,
    gallery: extern.slides,
  },
  konzentrat: {
    cardFront: konzentrat.faltschachtel,
    cardHover: konzentrat.flascheFaltschachtel,
    gallery: konzentrat.slides,
  },
  repair: {
    cardFront: repair.faltschachtel,
    cardHover: repair.tubeFaltschachtel,
    gallery: repair.slides,
  },
};

/** Platzhalter-Slides für Präparate ohne Galerie. */
export const galleryFallback: ProductImage[] = [
  { src: platzhalter, alt: 'TODO (KAMILLIN): Produktabbildung 1' },
  { src: platzhalter, alt: 'TODO (KAMILLIN): Produktabbildung 2' },
];
