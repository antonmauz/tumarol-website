// Tumarol-Koala (3D-Maskottchen): freigestellte, getrimmte Posen aus
// src/assets/images/maskottchen/ (koala-3d-<pose>-trim.png, erzeugt per
// scripts/trim-maskottchen.cjs aus den Originalen daneben). Neue Pose: Original ablegen,
// Skript laufen lassen, hier mit Import, Alt-Text und Bildbreiten eintragen.
// HWG: Der Koala spricht keine Kinder an (keine Sprechblasen, keine Aufforderungen) und
// steht nie direkt an einem Kinderbalsam-CTA.
import type { ImageMetadata } from 'astro';
import stehend from '../assets/images/maskottchen/koala-3d-stehend-trim.png';
import winkend from '../assets/images/maskottchen/koala-3d-winkend-trim.png';
import kopf from '../assets/images/maskottchen/koala-3d-kopf-trim.png';

export type MascotPose = 'stehend' | 'winkend' | 'kopf';

export interface MascotImage {
  src: ImageMetadata;
  /** Alt-Text nur für die Hero-Pose; sonst dekorativ (leer). */
  alt: string;
  /** srcset-Breiten passend zur größten Anzeige (inkl. 2x). */
  widths: number[];
}

export const mascot: Record<MascotPose, MascotImage> = {
  // Startseiten-Hero: bis 400px breit.
  stehend: { src: stehend, alt: 'Tumarol-Koala mit Eukalyptuszweig', widths: [200, 300, 400, 600, 800] },
  // 404-Seite: bis 200px breit.
  winkend: { src: winkend, alt: '', widths: [160, 200, 320, 400] },
  // Auf der Oberkante der Arzt-Sektion (/husten): bis 260px breit.
  kopf: { src: kopf, alt: '', widths: [160, 260, 320, 520] },
};
