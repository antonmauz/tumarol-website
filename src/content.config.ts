import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { ratgeberCategories } from './data/categories';
import { pharmacyProductKeys } from './data/productKeys';

// Collection "ratgeber": eine Markdown-Datei pro Ratgeberseite in
// src/content/ratgeber/<slug>.md (Frontmatter = Struktur, Body = Artikeltext);
// der Datei-Slug ist die Entry-ID.

const ratgeber = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/ratgeber' }),
  // image() löst relative Bildpfade aus dem Frontmatter in optimierbare Bild-Metadaten auf.
  schema: ({ image }) =>
    z.object({
      // ─── SEO / <head> ───────────────────────────────────────────────────────
      /** <title> der Seite. */
      title: z.string(),
      /** Meta-Description für Suchmaschinen. */
      metaDescription: z.string(),

      // ─── Themen-Cluster ──────────────────────────────────────────────────────
      /** Themen-Cluster (Werte aus src/data/categories.ts). Pflichtfeld ohne Default:
       *  das Cluster bestimmt die URL, ein vergessenes Feld soll den Build brechen. */
      category: z.enum(ratgeberCategories),

      // ─── Datum / Produkt-CTA ─────────────────────────────────────────────────
      /** Veröffentlichungsdatum: datePublished im Article-Schema und Fallback für lastUpdated. */
      publishDate: z.coerce.date().optional(),
      /** Datum der letzten inhaltlichen Bearbeitung. Erscheint neben der Lesezeit
       *  und als dateModified im Article-Schema. Ohne Feld greift publishDate. */
      lastUpdated: z.coerce.date().optional(),
      /** Steuert, ob der Produkt-CTA gerendert wird (nur mit zugelassenem Produktbezug, HWG). */
      showProductHighlight: z.boolean().default(false),
      /** Präparate des Produkt-CTA am Artikelende; ohne Feld greift die Cluster-Vorgabe
       *  (ctaProductsFor). Nur Präparate mit passendem zugelassenem Anwendungsgebiet
       *  eintragen (§ 3a HWG). */
      ctaProducts: z.array(z.enum(pharmacyProductKeys)).optional(),

      // ─── Hero ────────────────────────────────────────────────────────────────
      /** Sichtbare H1-Überschrift im Hero. */
      h1: z.string(),
      /** Letztes (aktuelles) Element in der Breadcrumb-Leiste. */
      breadcrumbLabel: z.string(),
      /** Einleitungsabsätze unter der H1 (ein Eintrag = ein Absatz). */
      intro: z.array(z.string()),
      /** Optionales Header-Bild (relativer Pfad ./_images/...); ohne Feld kein Bildbereich. */
      headerImage: image().optional(),
      /** Alt-Text des Header-Bilds (Fallback: title). */
      headerImageAlt: z.string().optional(),

      // ─── FAQ (häufige Fragen) ────────────────────────────────────────────────
      faq: z
        .array(
          z.object({
            question: z.string(),
            /** Antwort (Markdown-Inline erlaubt). */
            answer: z.string(),
          }),
        )
        .default([]),

      // ─── Quellen ─────────────────────────────────────────────────────────────
      sources: z.array(z.string()).default([]),
    }),
});

export const collections = { ratgeber };
