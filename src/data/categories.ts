// Themen-Cluster der Ratgeber-Collection: zentrale Quelle für Reihenfolge, Labels und
// Zod-Enum (Übersicht /wissenswertes, Breadcrumbs, Links). Cluster und URL-Slug
// /wissenswertes festgelegt 02.09.2026; der interne Collection-Name bleibt „ratgeber“.

import type { PharmacyProduct } from './pharmacies';

export const ratgeberCategories = ['gutes-bauchgefuehl', 'gesunder-mund', 'heile-haut'] as const;
export type RatgeberCategory = (typeof ratgeberCategories)[number];

/** Standard-Belegung des Produkt-CTA je Cluster (Artikel überschreiben sie per ctaProducts).
 *  Nur Präparate mit passendem zugelassenem Anwendungsgebiet (§ 3a HWG): Die Cluster stammen
 *  noch aus der KAMILLIN-Vorlage und passen zu keinem Larylin-Präparat, daher leer. */
export const ctaProductsByCluster: Record<RatgeberCategory, PharmacyProduct[]> = {
  'gutes-bauchgefuehl': [],
  'gesunder-mund': [],
  'heile-haut': [],
};

/** Produkt-CTA-Vorgabe eines Clusters. */
export const ctaProductsFor = (category: RatgeberCategory): PharmacyProduct[] =>
  ctaProductsByCluster[category];

export const categoryClusters: { category: RatgeberCategory; heading: string }[] = [
  { category: 'gutes-bauchgefuehl', heading: 'Gutes Bauchgefühl' },
  { category: 'gesunder-mund', heading: 'Gesunder Mund' },
  { category: 'heile-haut', heading: 'Heile Haut' },
];

// URL-Slug je Cluster (Artikel-Pfad /wissenswertes/<slug>/<artikel>); kann bei
// Bedarf pro Cluster vom Key abweichen.
export const categorySlugs: Record<RatgeberCategory, string> = {
  'gutes-bauchgefuehl': 'gutes-bauchgefuehl',
  'gesunder-mund': 'gesunder-mund',
  'heile-haut': 'heile-haut',
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
