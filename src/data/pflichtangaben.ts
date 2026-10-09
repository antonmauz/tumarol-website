// Pflichtangaben nach § 4 HWG für Larylin® Husten-Stiller Pastillen und Saft: eine Quelle
// für /pflichtangaben und die Kurzform im Footer, Wortlaut aus den Gebrauchsinformationen.

import { COMPANY_CITY, COMPANY_NAME } from './company';
import type { PharmacyProduct } from './productKeys';

export interface PflichtangabenSection {
  heading: string;
  /** Ein Absatz oder mehrere Absätze. */
  text: string | string[];
}

export interface PflichtangabenProduct {
  key: PharmacyProduct;
  name: string;
  /** Kurzform für den Footer (§ 4 Abs. 3 HWG: Name, Wirkstoff,
   *  Anwendungsgebiete, Warnhinweis). */
  kurz: {
    wirkstoff: string;
    anwendungsgebiete: string;
    warnhinweis: string;
  };
  /** Vollständige Angaben für /pflichtangaben. */
  sections: PflichtangabenSection[];
}

/** Gemeinsamer Schlusssatz der Pflichtangaben. */
export const pflichtangabenSchluss =
  'Zu Risiken und Nebenwirkungen lesen Sie die Packungsbeilage und fragen Sie Ihre Ärztin, Ihren Arzt oder in Ihrer Apotheke.';

/** Pharmazeutischer Unternehmer (Footer-Kurzform). */
export const pflichtangabenHersteller = `${COMPANY_NAME}, ${COMPANY_CITY}.`;

/** Erster Satz der Zusammensetzung (Wirkstoff-Modul der Produktseiten), aus derselben Quelle. */
export const zusammensetzungSatz = (key: PflichtangabenProduct['key']): string => {
  const text = pflichtangaben.find((p) => p.key === key)?.sections.find((s) => s.heading === 'Zusammensetzung')?.text;
  const first = Array.isArray(text) ? text[0] : text ?? '';
  return first.split(/(?<=\.)\s/)[0];
};

// TODO (LARYLIN): Wortlaut aus den Gebrauchsinformationen der beiden Präparate eintragen.
// Pflicht vor dem Livegang: Ohne Einträge fehlen die Pflichtangaben auf /pflichtangaben und
// im Footer.
export const pflichtangaben: PflichtangabenProduct[] = [];
