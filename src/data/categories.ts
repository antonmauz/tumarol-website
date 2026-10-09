// Themen-Cluster der Ratgeber-Collection: zentrale Quelle für Reihenfolge, Labels und
// Zod-Enum (Übersicht /wissenswertes, Breadcrumbs, Links). Larylin-Cluster seit 09.10.2026
// (vorher die drei KAMILLIN-Cluster); der interne Collection-Name bleibt „ratgeber“.

import type { PharmacyProduct } from './pharmacies';

export const ratgeberCategories = ['reizhusten-im-alltag', 'erkaeltungszeit', 'woher-der-husten-kommt'] as const;
export type RatgeberCategory = (typeof ratgeberCategories)[number];

/** Standard-Belegung des Produkt-CTA je Cluster (Artikel überschreiben sie per ctaProducts).
 *  Nur Präparate mit passendem zugelassenem Anwendungsgebiet (§ 3a HWG). Bleibt leer, bis die
 *  Larylin-Präparate (Pastillen, Saft) in pharmacies.ts / productKeys.ts angelegt sind;
 *  „woher-der-husten-kommt“ bleibt auch danach ohne CTA (Abklärung statt Selbstbehandlung). */
export const ctaProductsByCluster: Record<RatgeberCategory, PharmacyProduct[]> = {
  'reizhusten-im-alltag': [],
  'erkaeltungszeit': [],
  'woher-der-husten-kommt': [],
};

/** Produkt-CTA-Vorgabe eines Clusters. */
export const ctaProductsFor = (category: RatgeberCategory): PharmacyProduct[] =>
  ctaProductsByCluster[category];

export const categoryClusters: { category: RatgeberCategory; heading: string }[] = [
  { category: 'reizhusten-im-alltag', heading: 'Reizhusten im Alltag' },
  { category: 'erkaeltungszeit', heading: 'Erkältungszeit' },
  { category: 'woher-der-husten-kommt', heading: 'Woher der Husten kommt' },
];

// URL-Slug je Cluster (Artikel-Pfad /wissenswertes/<slug>/<artikel>); kann bei
// Bedarf pro Cluster vom Key abweichen.
export const categorySlugs: Record<RatgeberCategory, string> = {
  'reizhusten-im-alltag': 'reizhusten-im-alltag',
  'erkaeltungszeit': 'erkaeltungszeit',
  'woher-der-husten-kommt': 'woher-der-husten-kommt',
};

/** URL-Slug eines Clusters (für den Artikel-Pfad). */
export const categorySlug = (category: RatgeberCategory): string =>
  categorySlugs[category];

/** Kanonischer Pfad eines Wissenswertes-Artikels: /wissenswertes/<cluster>/<slug>. */
export const ratgeberArticleUrl = (
  category: RatgeberCategory,
  id: string,
): string => `/wissenswertes/${categorySlug(category)}/${id}`;

/** Anzeige-Label eines Clusters (für Breadcrumb & Überschriften). */
export const categoryLabel = (category: RatgeberCategory): string =>
  categoryClusters.find((c) => c.category === category)?.heading ?? '';

/** Position eines Clusters in der definierten Reihenfolge (für stabiles Sortieren). */
export const categoryRank = (category: RatgeberCategory): number =>
  categoryClusters.findIndex((c) => c.category === category);
