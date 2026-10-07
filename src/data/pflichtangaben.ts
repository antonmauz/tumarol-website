// Pflichtangaben nach § 4 HWG für KAMILLIN® KONZENTRAT ROBUGEN und KAMILLIN® EXTERN ROBUGEN:
// eine Quelle für /pflichtangaben und die Kurzform im Footer. Wortlaut aus den
// Gebrauchsinformationen (07.09.2026); die REPAIR CREME ist ein Kosmetikum ohne Pflichttext.

import { COMPANY_CITY, COMPANY_NAME } from './company';

export interface PflichtangabenSection {
  heading: string;
  /** Ein Absatz oder mehrere Absätze. */
  text: string | string[];
}

export interface PflichtangabenProduct {
  key: 'konzentrat' | 'extern';
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

export const pflichtangaben: PflichtangabenProduct[] = [
  {
    key: 'konzentrat',
    name: 'KAMILLIN® KONZENTRAT ROBUGEN',
    kurz: {
      wirkstoff: 'Kamillenblütenextrakt',
      anwendungsgebiete:
        'Traditionelles pflanzliches Arzneimittel zum Einnehmen bei krampfartigen und entzündlichen Erkrankungen im Magen-Darm-Bereich. Zur Inhalation bei entzündlichen Erkrankungen und Reizzuständen der oberen Atemwege. Als Zusatz für feuchte Umschläge, zu Waschungen oder Spülungen bei entzündlichen Haut- und Schleimhauterkrankungen einschließlich der Mundhöhle und des Zahnfleisches. Als Zusatz zu Teil- und Sitzbädern oder Spülungen bei Entzündungen im Analbereich und im Bereich der Geschlechtsorgane.',
      warnhinweis: 'Enthält 48 Vol.-% Alkohol.',
    },
    sections: [
      { heading: 'Wirkstoff', text: 'Kamillenblütenextrakt' },
      {
        heading: 'Zusammensetzung',
        text:
          '1 ml Flüssigkeit enthält 0,962 g Auszug aus Kamillenblüten (DEV 1:1,7–2,6). Auszugsmittel: Ethanol 48% (V/V). Sonstige Bestandteile: Gereinigtes Wasser, Natriumhydroxid. Enthält 48 Vol.-% Alkohol.',
      },
      {
        heading: 'Anwendungsgebiet',
        text:
          'Traditionelles pflanzliches Arzneimittel zum Einnehmen bei krampfartigen und entzündlichen Erkrankungen im Magen-Darm-Bereich. Zur Inhalation bei entzündlichen Erkrankungen und Reizzuständen der oberen Atemwege. Als Zusatz für feuchte Umschläge, zu Waschungen oder Spülungen bei entzündlichen Haut- und Schleimhauterkrankungen einschließlich der Mundhöhle und des Zahnfleisches. Als Zusatz zu Teil- und Sitzbädern oder Spülungen bei Entzündungen im Analbereich und im Bereich der Geschlechtsorgane. Bei Beschwerden, die länger als eine Woche andauern oder periodisch wiederkehren, sollte ein Arzt aufgesucht werden. Bei großflächigen oder eitrig infizierten Wunden ist die Rücksprache mit dem Arzt erforderlich.',
      },
      {
        heading: 'Gegenanzeigen',
        text:
          'Überempfindlichkeit (Allergie) gegen Kamille, gegen andere Korbblütler oder einen der sonstigen Bestandteile. Besondere Vorsicht ist erforderlich: Infolge des Alkoholgehaltes von KAMILLIN® KONZENTRAT ROBUGEN ist bei innerlicher Anwendung insbesondere bei Kindern auf die richtige Verdünnung zu achten. Im Augenbereich sollte KAMILLIN® KONZENTRAT ROBUGEN wegen der Gefahr von Reizerscheinungen nicht angewendet werden. Die inhalative Anwendung sollte ausschließlich mittels Wasserdampfinhalation und nicht mittels Aerosolgeräten erfolgen. Kamillenzubereitungen sind zur Anwendung als Darmspülung nicht geeignet. Im Einzelfall kam es dabei zu allergischen Reaktionen bis hin zum allergischen Schock.',
      },
      {
        heading: 'Schwangerschaft und Stillzeit',
        text:
          'Aus der verbreiteten Anwendung von Kamille als Lebensmittel haben sich bisher keine Hinweise auf Risiken in Schwangerschaft und Stillzeit ergeben. Ergebnisse experimenteller Untersuchungen liegen nicht vor. In der Schwangerschaft wird die Anwendung von KAMILLIN® KONZENTRAT ROBUGEN nicht empfohlen, in der Stillzeit soll es nicht angewendet werden.',
      },
      {
        heading: 'Nebenwirkungen',
        text:
          'Sehr selten können Überempfindlichkeitsreaktionen (z.B. Kontaktallergien) auftreten, auch bei Personen mit Überempfindlichkeit gegen andere Korbblütler (z.B. Beifuß) wegen so genannter Kreuzreaktionen. Sehr selten sind schwere allergische Reaktionen (Asthma, Kreislaufkollaps, allergischer Schock) nach Anwendung von Kamillenzubereitungen beobachtet worden.',
      },
      { heading: 'Warnhinweis', text: 'Enthält 48 Vol.-% Alkohol.' },
      {
        heading: 'Dosierung',
        text: [
          'Innerlich zur Einnahme: Kinder von 6 bis 12 Jahren 3 - 4 mal täglich zwischen den Mahlzeiten 13 bis 20 Tropfen in einer Tasse (150 ml) warmen Wassers. Erwachsene und Kinder über 12 Jahre 3 - 4 mal täglich zwischen den Mahlzeiten 30 Tropfen in einer Tasse (150 ml) warmen Wassers.',
          'Zum Inhalieren: 15 ml (1 Esslöffel = 15 ml) auf 1 Liter sehr warmes Wasser 1 - 2 mal täglich.',
          'Äußerlich: Für Umschläge, Waschungen oder Spülungen sowie für Teilbäder: 15 ml (1 Esslöffel = 15 ml) auf 1 Liter sehr warmes Wasser ein- bis mehrmals täglich.',
          'Überdosierungen nicht bekannt. Die bei Pflanzenauszügen mitunter auftretenden natürlichen Ausflockungen haben keinen Einfluss auf die Wirksamkeit des Präparates.',
        ],
      },
    ],
  },
  {
    key: 'extern',
    name: 'KAMILLIN® EXTERN ROBUGEN',
    kurz: {
      wirkstoff: 'Kamillenblütenextrakt',
      anwendungsgebiete:
        'Traditionelles pflanzliches Arzneimittel zur unterstützenden Behandlung von Reizungen der Haut und der Schleimhäute im Anal- und Genitalbereich, nachdem ernsthafte Erkrankungen durch einen Arzt ausgeschlossen worden sind und zur Behandlung von leichten Entzündungen der Haut (Sonnenbrand), oberflächlichen Wunden und kleinen Furunkeln. Wird äußerlich angewendet als Zusatz für Umschläge, Spülungen, Teil-, Sitz- und Vollbäder.',
      warnhinweis: 'Enthält 45 Vol.-% Isopropanol.',
    },
    sections: [
      { heading: 'Wirkstoff', text: 'Kamillenblütenextrakt' },
      {
        heading: 'Zusammensetzung',
        text:
          '1 ml Flüssigkeit enthält 942 mg Auszug aus Kamillenblüten (1:2,0-2,8). Auszugsmittel: Propan-2-ol 48% (V/V). Die sonstigen Bestandteile sind: Gereinigtes Wasser, Macrogollaurylether (Ph. Eur.) und Natriumhydroxid-Lösung 50% (m/m).',
      },
      {
        heading: 'Anwendungsgebiet',
        text:
          'KAMILLIN® EXTERN ROBUGEN ist ein traditionelles pflanzliches Arzneimittel zur unterstützenden Behandlung von Reizungen der Haut und der Schleimhäute im Anal- und Genitalbereich, nachdem ernsthafte Erkrankungen durch einen Arzt ausgeschlossen worden sind und zur Behandlung von leichten Entzündungen der Haut (Sonnenbrand), oberflächlichen Wunden und kleinen Furunkeln. KAMILLIN® EXTERN ROBUGEN wird äußerlich angewendet als Zusatz für Umschläge, Spülungen, Teil-, Sitz- und Vollbäder.',
      },
      {
        heading: 'Gegenanzeigen',
        text:
          'KAMILLIN® EXTERN ROBUGEN darf nicht angewendet werden: wenn Sie allergisch gegen Kamille, gegen andere Korbblütler oder einen der genannten sonstigen Bestandteile dieses Arzneimittels sind, im Bereich der Augen, zur Inhalation oder zu Darmspülungen. Teil- und Sitzbäder, Umschläge und Spülungen dürfen nicht durchgeführt werden bei: offenen Wunden, größeren Hautverletzungen und akuten Hauterkrankungen, hohem Fieber und schweren Infektionen.',
      },
      {
        heading: 'Schwangerschaft und Stillzeit',
        text:
          'Wenn Sie schwanger sind oder stillen, fragen Sie vor der Anwendung dieses Arzneimittels Ihren Arzt um Rat. Die Sicherheit während der Schwangerschaft und Stillzeit wurde nicht ausreichend untersucht. Es können für diese Patientinnen keine Untersuchungen und dokumentierte klinische Erfahrungen vorliegen.',
      },
      {
        heading: 'Warnhinweise und Vorsichtsmaßnahmen',
        text:
          'Sehr selten können Überempfindlichkeitsreaktionen (z.B. Kontaktallergien) auftreten, auch bei Personen mit Überempfindlichkeit gegen andere Korbblütler (z.B. Beifuß) wegen so genannter Kreuzreaktionen. Enthält 45 Vol.-% Isopropanol.',
      },
      {
        heading: 'Dosierung',
        text: [
          'Jugendliche ab 12 Jahren, Erwachsene und Senioren: Teil- und Sitzbad: 20-40 ml (½-1 Portionsbeutel, 4-8 Messbecher) auf 20-40 l Wasser, einmal täglich. Vollbad: 30 ml (¾ Portionsbeutel, 6 Messbecher) auf 150 l Wasser, einmal täglich. Umschläge und Spülungen: 20 ml (½ Portionsbeutel, 4 Messbecher) auf 1 l Wasser, ein- bis mehrmals täglich.',
          'Kinder (4 Wochen bis 11 Jahre): Teil- und Sitzbad: 10-20 ml (¼-½ Portionsbeutel, 2-4 Messbecher) auf 10-20 l Wasser, einmal täglich. Ein Vollbad ist nicht vorgesehen.',
          'Verwenden Sie pro Tag nicht mehr als 60 ml KAMILLIN® EXTERN ROBUGEN.',
          'Frühgeborene, Neugeborene unter 4 Wochen: KAMILLIN® EXTERN ROBUGEN soll bei diesen Personengruppen nicht angewendet werden wegen fehlender klinischer Daten.',
          'Badetemperatur handwarm (30-34°C), Badedauer: 10-12 Minuten.',
        ],
      },
    ],
  },
];
