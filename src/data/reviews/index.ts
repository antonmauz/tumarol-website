// Bewertungen der Online-Apotheken, je Produkt eine Datei (extern.ts, konzentrat.ts, repair.ts)
// mit nur den produktspezifischen Zahlen; Logo und Shop-Link kommen über den Apotheken-`name`
// aus src/data/pharmacies.ts. HWG: nur belegbare, echte Bewertungen veröffentlichen.
import type { ImageMetadata } from 'astro';
import { pharmacies, pharmacyProducts, type PharmacyProduct } from '../pharmacies';
import { externReviews } from './extern';
import { konzentratReviews } from './konzentrat';
import { repairReviews } from './repair';

/** Eintrag in den Produkt-Dateien (extern.ts, konzentrat.ts, repair.ts). */
export interface ProductReview {
  /** Anzeigename der Apotheke — muss exakt dem `name` in pharmacies.ts entsprechen. */
  pharmacy: string;
  /** Durchschnittsbewertung des Shops für dieses Produkt (0–5, z. B. 4.7). */
  rating: number;
  /** Anzahl der Bewertungen; 0 = Karte wird nicht angezeigt. */
  reviewCount: number;
  /** Stand der Zahlen, z. B. 'September' / 2026 (Monatsname aus MONTHS). */
  dateMonth: Month;
  dateYear: number;
  /** Beschriftung des Kauf-Links; Standard: "Jetzt kaufen". */
  ctaLabel?: string;
}

/** Für die Karten aufgelöste Bewertung (Logo + Shop-Link aus pharmacies.ts). */
export interface Review extends Required<ProductReview> {
  product: PharmacyProduct;
  /** Voller Produktname (z. B. "KAMILLIN® EXTERN ROBUGEN") für die Karte. */
  productName: string;
  logoImage?: ImageMetadata;
  /** Shop-Deeplink der Apotheke für genau dieses Produkt. */
  shopUrl: string;
}

const byProduct: Record<PharmacyProduct, ProductReview[]> = {
  extern: externReviews,
  konzentrat: konzentratReviews,
  repair: repairReviews,
};

// Verknüpfung mit pharmacies.ts. Fehler fliegen beim Build, nicht erst beim
// Klick: ein Tippfehler im Apothekennamen oder ein fehlender Shop-Link für
// das Produkt bricht den Build mit einer klaren Meldung ab.
function resolve(product: PharmacyProduct, entry: ProductReview): Review {
  const pharmacy = pharmacies.find((p) => p.name === entry.pharmacy);
  if (!pharmacy) {
    throw new Error(
      `reviews/${product}.ts: Apotheke "${entry.pharmacy}" fehlt in src/data/pharmacies.ts ` +
        `(Name muss exakt übereinstimmen).`,
    );
  }
  const shopUrl = pharmacy.urls[product];
  if (!shopUrl) {
    throw new Error(
      `reviews/${product}.ts: Für "${entry.pharmacy}" fehlt in pharmacies.ts der Shop-Link ` +
        `urls.${product}.`,
    );
  }
  return {
    ...entry,
    ctaLabel: entry.ctaLabel ?? 'Jetzt kaufen',
    product,
    productName: pharmacyProducts.find((p) => p.key === product)?.name ?? product,
    logoImage: pharmacy.logoImage,
    shopUrl,
  };
}

/** Anzeigbare Bewertungen (reviewCount > 0). Ohne `product`: alle Produkte
 *  in der Reihenfolge von pharmacyProducts (Startseite). */
export function reviewsFor(product?: PharmacyProduct): Review[] {
  const keys = product ? [product] : pharmacyProducts.map((p) => p.key);
  return keys.flatMap((key) =>
    byProduct[key].filter((r) => r.reviewCount > 0).map((r) => resolve(key, r)),
  );
}

const MONTHS = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August',
  'September', 'Oktober', 'November', 'Dezember'] as const;
export type Month = (typeof MONTHS)[number];

/** Jüngster Stand der angezeigten Bewertungen, z. B. "September 2026"
 *  (Hinweiszeile im ReviewsModal). Leerer String ohne Bewertungen. */
export function latestReviewDate(product?: PharmacyProduct): string {
  const latest = reviewsFor(product).reduce<Review | undefined>((best, r) => {
    if (!best) return r;
    const a = r.dateYear * 12 + MONTHS.indexOf(r.dateMonth);
    const b = best.dateYear * 12 + MONTHS.indexOf(best.dateMonth);
    return a > b ? r : best;
  }, undefined);
  return latest ? `${latest.dateMonth} ${latest.dateYear}` : '';
}

/** Gesamtbewertung (ReviewStars): nach Anzahl gewichteter Durchschnitt (average, gerundet auf
 *  eine Stelle, auch für die Sterne-Darstellung); count = 0 → Sterne/Slider/Modal rendern nichts. */
export function overallRatingFor(product?: PharmacyProduct): { score: string; count: number; average: number } {
  const rated = reviewsFor(product);
  const count = rated.reduce((sum, r) => sum + r.reviewCount, 0);
  const average = Math.round((rated.reduce((sum, r) => sum + r.rating * r.reviewCount, 0) / Math.max(count, 1)) * 10) / 10;
  return { score: `${average.toFixed(1).replace('.', ',')}/5,0`, count, average };
}
