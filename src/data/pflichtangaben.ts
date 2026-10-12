// Pflichtangaben nach § 4 HWG für Larylin® Husten-Stiller Pastillen und Saft: eine Quelle
// für /pflichtangaben und die Kurzform im Footer.

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

// Wortlaut aus den Fachinformationen (Pastillen: Stand März 2026, Saft: Stand Mai 2024),
// Abschnitte 2, 4.1, 4.3, 4.4, 4.8 und 11. TODO (LARYLIN): vor dem Livegang mit den
// Gebrauchsinformationen abgleichen und fachlich freigeben lassen.
export const pflichtangaben: PflichtangabenProduct[] = [
  {
    key: 'pastillen',
    name: 'Larylin® Husten-Stiller Pastillen',
    kurz: {
      wirkstoff: 'Dropropizin',
      anwendungsgebiete:
        'Reiz- und Krampfhusten (trockener, unproduktiver Husten), Irritationen und Reizungen der oberen Atemwege.',
      warnhinweis: 'Enthält Levomenthol, Eucalyptusöl, Pfefferminzöl, Glucose und Saccharose.',
    },
    sections: [
      {
        heading: 'Zusammensetzung',
        text: [
          '1 Lutschpastille enthält 20 mg Dropropizin.',
          'Sonstige Bestandteile: Natriumchlorid, Saccharin-Natrium, wasserfreie Citronensäure, ätherische Öle (Eucalyptusöl, Levomenthol, Citronenöl, Pfefferminzöl, Sternanisöl), Saccharose, Glucose-Sirup, gereinigtes Wasser.',
        ],
      },
      {
        heading: 'Anwendungsgebiete',
        text: 'Reiz- und Krampfhusten (trockener, unproduktiver Husten), Irritationen und Reizungen der oberen Atemwege.',
      },
      {
        heading: 'Gegenanzeigen',
        text: 'Überempfindlichkeit gegen den Wirkstoff Dropropizin, ätherische Öle (Eucalyptusöl, Levomenthol, Citronenöl, Pfefferminzöl, Sternanisöl) oder einen der sonstigen Bestandteile; schwere Herz- und Kreislaufbeschwerden; eingeschränkte Leber- oder Nierenfunktion; Kinder unter 12 Jahren; Schwangerschaft und Stillzeit; Asthma bronchiale oder andere Atemwegserkrankungen, die mit einer ausgeprägten Überempfindlichkeit der Atemwege einhergehen (wegen des Gehalts an Levomenthol, Eucalyptusöl und Pfefferminzöl).',
      },
      {
        heading: 'Nebenwirkungen',
        text: 'Gelegentlich Müdigkeit und Somnolenz. Selten Magen-Darm-Beschwerden (z. B. Erbrechen, Bauchschmerzen, leichte Durchfälle) sowie allergische Reaktionen wie Hautausschlag, Gesichtsschwellungen, Atemnot, Temperaturanstieg mit Schüttelfrost; in einem Fall wurde über einen anaphylaktischen Schock berichtet. Bei hoher Dosierung oder Überdosierung, besonders bei empfindlichen Patienten, kurzfristige Blutdrucksenkungen und Herzklopfen. Bei entsprechend sensibilisierten Patienten können die ätherischen Öle Überempfindlichkeitsreaktionen (einschließlich Atemnot) auslösen.',
      },
      {
        heading: 'Warnhinweise',
        text: 'Enthält Levomenthol, Eucalyptusöl, Pfefferminzöl, Glucose und Saccharose. 1 Lutschpastille enthält etwa 1,41 g Saccharose und 1,13 g Glucose; dies ist bei Diabetes mellitus zu berücksichtigen. Nicht gleichzeitig mit Alkohol, sedierenden oder blutdrucksenkenden Arzneimitteln anwenden.',
      },
      {
        heading: 'Verkaufsabgrenzung',
        text: 'Apothekenpflichtig.',
      },
    ],
  },
  {
    key: 'saft',
    name: 'Larylin® Husten-Stiller Saft',
    kurz: {
      wirkstoff: 'Dropropizin',
      anwendungsgebiete:
        'Reiz- und Krampfhusten (trockener, unproduktiver Husten), Irritationen und Reizungen der oberen Atemwege.',
      warnhinweis: 'Enthält Saccharose, Ethanol (Alkohol), Ponceau 4R und Levomenthol.',
    },
    sections: [
      {
        heading: 'Zusammensetzung',
        text: [
          '100 g Sirup (entsprechend 78,95 ml) enthalten 300 mg Dropropizin.',
          'Sonstige Bestandteile: Saccharose, gereinigtes Wasser, Ethanol 96 %, Diammoniumhydrogencitrat, Orangen-Aroma, Zitronen-Essenz, Levomenthol, Chinolingelb (E 104) und Ponceau 4R (E 124).',
        ],
      },
      {
        heading: 'Anwendungsgebiete',
        text: 'Reiz- und Krampfhusten (trockener, unproduktiver Husten), Irritationen und Reizungen der oberen Atemwege.',
      },
      {
        heading: 'Gegenanzeigen',
        text: 'Überempfindlichkeit gegenüber Dropropizin, Ponceau 4R oder einen der sonstigen Bestandteile; schwere Herz- und Kreislaufbeschwerden; eingeschränkte Leber- oder Nierenfunktion; Kinder unter 12 Jahren; Schwangerschaft und Stillzeit; Asthma bronchiale oder andere Atemwegserkrankungen, die mit einer ausgeprägten Überempfindlichkeit der Atemwege einhergehen (wegen des Gehalts an Levomenthol).',
      },
      {
        heading: 'Nebenwirkungen',
        text: 'Gelegentlich Müdigkeit und Somnolenz. Selten Magen-Darm-Beschwerden (z. B. Erbrechen, Bauchschmerzen, leichte Durchfälle) sowie allergische Reaktionen wie Hautausschlag, Gesichtsschwellungen, Atemnot, Temperaturanstieg mit Schüttelfrost; in einem Fall wurde über einen anaphylaktischen Schock berichtet. Bei hoher Dosierung oder Überdosierung, besonders bei empfindlichen Patienten, kurzfristige Blutdrucksenkungen und Herzklopfen. Ponceau 4R kann Überempfindlichkeitsreaktionen hervorrufen; bei entsprechend sensibilisierten Patienten kann Levomenthol Überempfindlichkeitsreaktionen (einschließlich Atemnot) auslösen.',
      },
      {
        heading: 'Warnhinweise',
        text: 'Enthält Saccharose, Ethanol (Alkohol), Ponceau 4R und Levomenthol. 1 Messlöffel (10 ml) enthält 7,6 g Saccharose; dies ist bei Diabetes mellitus zu berücksichtigen. 1 Messlöffel (10 ml) enthält 80 mg Alkohol (Ethanol). Nicht gleichzeitig mit Alkohol, sedierenden oder blutdrucksenkenden Arzneimitteln anwenden.',
      },
      {
        heading: 'Verkaufsabgrenzung',
        text: 'Apothekenpflichtig.',
      },
    ],
  },
];
