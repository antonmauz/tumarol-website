// Zentrale FAQ-Daten, eine Liste je Präparat (Format des Faq-Moduls), Inhalte aus der
// Gebrauchs- bzw. Fachinformation in Alltagssprache. answer erlaubt **fett** und [Text](url).
import type { PharmacyProduct } from './pharmacies';

export interface FaqItem {
  question: string;
  /** Antwort; **fett** und [Text](url) erlaubt (Renderer in Faq.astro). */
  answer: string;
}

// TODO (LARYLIN): Wortlaut fachlich freigeben lassen (HWG). Inhalte aus den
// Fachinformationen (Pastillen: Stand März 2026, Saft: Stand Mai 2024), Abschnittsnummern
// jeweils am Eintrag; vor Livegang mit der Gebrauchsinformation abgleichen.
// ── Larylin® Husten-Stiller Pastillen ────────────────────────────────────
export const pastillenFaqs: FaqItem[] = [
  {
    // FI 4.1
    question: 'Bei welcher Art von Husten helfen Larylin® Husten-Stiller Pastillen?',
    answer:
      'Larylin® Husten-Stiller Pastillen sind für **Reiz- und Krampfhusten** gedacht, also trockenen Husten ohne Schleim, sowie für Reizungen der oberen Atemwege.',
  },
  {
    // FI 4.2, 4.3
    question: 'Ab welchem Alter sind die Pastillen geeignet?',
    answer:
      'Die Pastillen sind zugelassen für **Erwachsene und Jugendliche ab 12 Jahren**.',
  },
  {
    // FI 4.2
    question: 'Wie viele Pastillen darf ich am Tag nehmen?',
    answer:
      'Lutschen Sie bis zu **3-mal täglich 1 bis 2 Pastillen**. Mehr als **5 Pastillen am Tag** sollten es nicht sein. Für Jugendliche richtet sich die Menge zusätzlich nach dem Körpergewicht, fragen Sie dazu in Ihrer Apotheke nach.',
  },
  {
    // FI 4.2
    question: 'Wann nehme ich die Pastillen am besten?',
    answer:
      'Über den Tag verteilt, wann immer der Hustenreiz stört. Eine Einnahme **am Abend** ist sinnvoll. Weil die Pastillen ohne Wasser gelutscht werden, passen sie gut in die Tasche für unterwegs.',
  },
  {
    // FI 4.2
    question: 'Wie lange darf ich die Pastillen anwenden?',
    answer:
      'Für eine Anwendung über **mehr als 2 Wochen** liegen keine ausreichenden Erfahrungen vor. Hält der Husten länger an, lassen Sie die Ursache bitte ärztlich abklären.',
  },
  {
    // FI 4.3, 4.6
    question: 'Darf ich die Pastillen in der Schwangerschaft oder Stillzeit nehmen?',
    answer:
      'Nein. In **Schwangerschaft und Stillzeit** dürfen Larylin® Husten-Stiller Pastillen nicht angewendet werden.',
  },
  {
    // FI 4.4
    question: 'Enthalten die Pastillen Zucker?',
    answer:
      'Ja. Eine Pastille enthält etwa **1,41 g Saccharose und 1,13 g Glucose**. Das ist bei Diabetes zu berücksichtigen.',
  },
  {
    // FI 11
    question: 'Wo bekomme ich Larylin® Husten-Stiller Pastillen?',
    answer:
      'Die Pastillen sind **apothekenpflichtig**, aber ohne Rezept erhältlich: in Ihrer Apotheke vor Ort oder in einer Online-Apotheke.',
  },
];

// ── Larylin® Husten-Stiller Saft ─────────────────────────────────────────
export const saftFaqs: FaqItem[] = [
  {
    // FI 4.1
    question: 'Bei welcher Art von Husten hilft Larylin® Husten-Stiller Saft?',
    answer:
      'Larylin® Husten-Stiller Saft ist für **Reiz- und Krampfhusten** gedacht, also trockenen Husten ohne Schleim, sowie für Reizungen der oberen Atemwege.',
  },
  {
    // FI 4.2, 4.3
    question: 'Ab welchem Alter ist der Saft geeignet?',
    answer:
      'Der Saft ist zugelassen für **Erwachsene und Jugendliche ab 12 Jahren**.',
  },
  {
    // FI 4.2, 6.5
    question: 'Wie viel Saft darf ich am Tag nehmen?',
    answer:
      'Nehmen Sie bis zu **3-mal täglich 10 ml**, das ist ein Messlöffel. Mehr als **30 ml am Tag** sollten es nicht sein. Der Messlöffel liegt der Packung bei. Für Jugendliche richtet sich die Menge zusätzlich nach dem Körpergewicht, fragen Sie dazu in Ihrer Apotheke nach.',
  },
  {
    // FI 4.2
    question: 'Wann nehme ich den Saft am besten?',
    answer:
      'Eine Einnahme **am Abend** ist sinnvoll. Deshalb eignet sich der Saft gut vor dem Schlafengehen, wenn der Hustenreiz nachts besonders stört.',
  },
  {
    // FI 4.2
    question: 'Wie lange darf ich den Saft einnehmen?',
    answer:
      'Für eine Anwendung über **mehr als 2 Wochen** liegen keine ausreichenden Erfahrungen vor. Hält der Husten länger an, lassen Sie die Ursache bitte ärztlich abklären.',
  },
  {
    // FI 4.3, 4.6
    question: 'Darf ich den Saft in der Schwangerschaft oder Stillzeit nehmen?',
    answer:
      'Nein. In **Schwangerschaft und Stillzeit** darf Larylin® Husten-Stiller Saft nicht eingenommen werden.',
  },
  {
    // FI 2, 4.4
    question: 'Enthält der Saft Zucker oder Alkohol?',
    answer:
      'Ein Messlöffel (10 ml) enthält **7,6 g Saccharose**. Das ist bei Diabetes zu berücksichtigen. Außerdem enthält ein Messlöffel **80 mg Alkohol**. Das ist weniger als in 3 ml Bier und hat keine wahrnehmbaren Auswirkungen.',
  },
  {
    // FI 6.3, 6.4
    question: 'Wie lange ist der Saft nach dem Öffnen haltbar?',
    answer:
      'Nach dem Öffnen ist der Saft **3 Monate** haltbar. Bewahren Sie die Flasche gut verschlossen und nicht über 30 °C auf.',
  },
  {
    // FI 11
    question: 'Wo bekomme ich Larylin® Husten-Stiller Saft?',
    answer:
      'Der Saft ist **apothekenpflichtig**, aber ohne Rezept erhältlich: in Ihrer Apotheke vor Ort oder in einer Online-Apotheke.',
  },
];

/** FAQ-Liste eines Präparats (leere Liste = Modul rendert nichts). */
export const faqsFor = (product: PharmacyProduct): FaqItem[] =>
  ({ pastillen: pastillenFaqs, saft: saftFaqs })[product];
