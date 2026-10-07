// Gemeinsame Sortierlogik für die Content-Collections.

import type { CollectionEntry } from 'astro:content';
import { categoryRank } from '../data/categories';

/** Ratgeber-Artikel: nach Cluster-Reihenfolge, innerhalb alphabetisch nach Slug. */
export function sortRatgeberArticles(
  entries: CollectionEntry<'ratgeber'>[],
): CollectionEntry<'ratgeber'>[] {
  return [...entries].sort(
    (a, b) =>
      categoryRank(a.data.category) - categoryRank(b.data.category) ||
      a.id.localeCompare(b.id),
  );
}

