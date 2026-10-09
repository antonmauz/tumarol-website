// Packungsgrößen je Präparat (ProductHero, Product-JSON-LD): Größen und PZNs aus den
// gelisteten Shop-URLs abgeleitet (Stand 09.10.2026).
import type { PharmacyProduct } from './pharmacies';

export interface PackageSize {
  /** Zu welchem Präparat die Packungsgröße gehört (Keys aus pharmacies.ts). */
  product: PharmacyProduct;
  /** Anzeige-Label, z. B. "24 Stück". */
  size: string;
  /** Pharmazentralnummer der Packungsgröße. */
  pzn: string;
  /** Optionale Kurzbeschreibung, z. B. "Vorratspackung". */
  description?: string;
}

export const packageSizes: PackageSize[] = [
  // ── Larylin® Husten-Stiller Pastillen — Lutschpastillen
  { product: 'pastillen', size: '24 Stück', pzn: '04960257' },

  // ── Larylin® Husten-Stiller Saft — Flasche
  { product: 'saft', size: '200 ml', pzn: '04759897' },
];

/** Packungsgrößen eines Präparats. */
export const packageSizesFor = (product: PharmacyProduct): PackageSize[] =>
  packageSizes.filter((p) => p.product === product);
