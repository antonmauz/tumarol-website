// Themen-Cluster der Ratgeber-Collection: zentrale Quelle für Reihenfolge, Labels und
// Zod-Enum (Übersicht /wissenswertes, Cluster-Seiten, Breadcrumbs, Links); der interne
// Collection-Name bleibt „ratgeber“.

import type { PharmacyProduct } from './pharmacies';

export const ratgeberCategories = ['reizhusten-im-alltag', 'erkaeltungszeit', 'woher-der-husten-kommt'] as const;
export type RatgeberCategory = (typeof ratgeberCategories)[number];

/** Standard-Belegung des Produkt-CTA je Cluster (Artikel überschreiben sie per ctaProducts).
 *  Nur Präparate mit passendem zugelassenem Anwendungsgebiet (§ 3a HWG). Alle Cluster zeigen
 *  beide Präparate (Entscheidung 13.10.2026). TODO (LARYLIN): CTA in „woher-der-husten-kommt“
 *  (Ursachen wie Sodbrennen, Allergie, Medikamente) fachlich freigeben lassen. */
const ctaProductsByCluster: Record<RatgeberCategory, PharmacyProduct[]> = {
  'reizhusten-im-alltag': ['pastillen', 'saft'],
  'erkaeltungszeit': ['pastillen', 'saft'],
  'woher-der-husten-kommt': ['pastillen', 'saft'],
};

/** Produkt-CTA-Vorgabe eines Clusters. */
export const ctaProductsFor = (category: RatgeberCategory): PharmacyProduct[] =>
  ctaProductsByCluster[category];

// mark: Wort der Überschrift, das auf /wissenswertes gelb unterstrichen wird (mark-Utility).
// description: Meta-Description der Cluster-Seite /wissenswertes/<cluster>.
export const categoryClusters: { category: RatgeberCategory; heading: string; mark?: string; description: string }[] = [
  {
    category: 'reizhusten-im-alltag',
    heading: 'Reizhusten im Alltag',
    mark: 'Reizhusten',
    description: 'Reizhusten im Alltag: was bei trockenem Husten nachts, bei Heizungsluft, beim Sport oder unterwegs hilft. Verständliche Ratgeber rund um den Hustenreiz.',
  },
  {
    category: 'erkaeltungszeit',
    heading: 'Erkältungszeit',
    description: 'Husten in der Erkältungszeit: Erkältung oder Grippe, wie ansteckend Husten ist, wie lange er nach einer Erkältung bleibt und wie man vorbeugt.',
  },
  {
    category: 'woher-der-husten-kommt',
    heading: 'Woher der Husten kommt',
    mark: 'Husten',
    description: 'Woher der Husten kommt: Husten durch Sodbrennen, Pollenallergie oder Medikamente – Ursachen verständlich erklärt und wann ein Arztbesuch ratsam ist.',
  },
];

// URL-Slug je Cluster (Artikel-Pfad /wissenswertes/<slug>/<artikel>); kann bei
// Bedarf pro Cluster vom Key abweichen.
const categorySlugs: Record<RatgeberCategory, string> = {
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
