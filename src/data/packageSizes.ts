// Packungsgrößen je Präparat (ProductHero, künftig Product-JSON-LD): Größen und PZNs aus den
// gelisteten Shop-URLs abgeleitet (Stand 03.09.2026). Die REPAIR CREME ist ein Kosmetikum
// mit PZN für den Apothekenvertrieb.
import type { PharmacyProduct } from './pharmacies';

export interface PackageSize {
  /** Zu welchem Präparat die Packungsgröße gehört (Keys aus pharmacies.ts). */
  product: PharmacyProduct;
  /** Anzeige-Label, z. B. "25 × 40 ml". */
  size: string;
  /** Pharmazentralnummer der Packungsgröße. */
  pzn: string;
  /** Optionale Kurzbeschreibung, z. B. "Vorratspackung". */
  description?: string;
}

export const packageSizes: PackageSize[] = [
  // ── KAMILLIN® EXTERN ROBUGEN — Beutel zu 40 ml
  { product: 'extern', size: '6 × 40 ml', pzn: '00329272' },
  { product: 'extern', size: '10 × 40 ml', pzn: '00329289' },
  { product: 'extern', size: '25 × 40 ml', pzn: '00329303' },

  // ── KAMILLIN® KONZENTRAT ROBUGEN — Flasche
  { product: 'konzentrat', size: '40 ml', pzn: '00329214' },
  { product: 'konzentrat', size: '100 ml', pzn: '00329220' },

  // ── KAMILLIN® REPAIR CREME — Tube
  { product: 'repair', size: '20 ml', pzn: '19632760' },
];

/** Packungsgrößen eines Präparats. */
export const packageSizesFor = (product: PharmacyProduct): PackageSize[] =>
  packageSizes.filter((p) => p.product === product);
