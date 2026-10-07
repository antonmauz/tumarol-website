// Zentrale FAQ-Daten, eine Liste je Präparat (Format des Faq-Moduls). EXTERN und KONZENTRAT
// aus den Fachinformationen (Oktober 2024 bzw. August 2023, public/downloads/) in Alltagssprache
// gekürzt; REPAIR CREME nur Pflegeaussagen. answer erlaubt **fett** und [Text](url).
import type { PharmacyProduct } from './pharmacies';

export interface FaqItem {
  question: string;
  /** Antwort; **fett** und [Text](url) erlaubt (Renderer in Faq.astro). */
  answer: string;
}

// ── KAMILLIN® EXTERN ROBUGEN ────────────────────────────────────────────
export const externFaqs: FaqItem[] = [
  {
    question: 'Wofür wird KAMILLIN® EXTERN ROBUGEN angewendet?',
    answer:
      'KAMILLIN® EXTERN ROBUGEN ist ein traditionelles pflanzliches Arzneimittel zur unterstützenden Behandlung von Reizungen der Haut und der Schleimhäute im Anal- und Genitalbereich, nachdem ernsthafte Erkrankungen durch einen Arzt ausgeschlossen worden sind, sowie zur Behandlung von leichten Entzündungen der Haut (Sonnenbrand), oberflächlichen Wunden und kleinen Furunkeln. Es wird äußerlich angewendet als Zusatz für Umschläge, Spülungen, Teil-, Sitz- und Vollbäder.',
  },
  {
    question: 'Wie wird KAMILLIN® EXTERN ROBUGEN dosiert?',
    answer:
      'Ab 12 Jahren: für ein Teil- oder Sitzbad 20 – 40 ml (½ – 1 Portionsbeutel) auf 20 – 40 l Wasser, für ein Vollbad 30 ml auf 150 l Wasser, jeweils einmal täglich. Für Umschläge und Spülungen 20 ml auf 1 l Wasser, ein- bis mehrmals täglich. Die maximale Tagesdosis beträgt **60 ml**. Alle Angaben, auch für Kinder, finden Sie unter [Anwendung und Dosierung](#anwendung).',
  },
  {
    question: 'Ab welchem Alter kann KAMILLIN® EXTERN ROBUGEN angewendet werden?',
    answer:
      'Teil- und Sitzbäder sind ab einem Alter von 4 Wochen möglich: bei Kindern von 4 Wochen bis 1 Jahr mit 10 ml auf 10 l Wasser, bei Kindern von 1 bis 11 Jahren mit 10 – 20 ml auf 10 – 20 l Wasser, jeweils einmal täglich. Ein Vollbad ist für Kinder unter 12 Jahren nicht vorgesehen. Bei Frühgeborenen und Neugeborenen unter 4 Wochen soll das Arzneimittel nicht angewendet werden.',
  },
  {
    question: 'Wie warm und wie lange sollte das Bad sein?',
    answer:
      'Die Badetemperatur sollte handwarm sein (30 – 34 °C), die Badedauer 10 – 12 Minuten. Geben Sie erst das Wasser und dann KAMILLIN® EXTERN ROBUGEN in die Wanne.',
  },
  {
    question: 'Kann ich einen angebrochenen Portionsbeutel aufbewahren?',
    answer:
      'Ein geöffneter Portionsbeutel ist innerhalb eines Tages aufzubrauchen oder zu verwerfen. Ungeöffnete Beutel benötigen keine besonderen Lagerungsbedingungen.',
  },
  {
    question: 'Wann darf KAMILLIN® EXTERN ROBUGEN nicht angewendet werden?',
    answer:
      'Bei bekannter Überempfindlichkeit gegen Kamille oder andere Korbblütler (z. B. Beifuß) oder einen der sonstigen Bestandteile. Das Arzneimittel darf nicht im Bereich der Augen, zur Inhalation oder zu Darmspülungen verwendet werden. Teil- und Sitzbäder, Umschläge und Spülungen sind nicht geeignet bei offenen Wunden, größeren Hautverletzungen, akuten Hauterkrankungen, hohem Fieber und schweren Infektionen. In Schwangerschaft und Stillzeit wird die Anwendung nicht empfohlen.',
  },
  {
    question: 'Wie lange darf ich KAMILLIN® EXTERN ROBUGEN anwenden?',
    answer:
      'Falls die Beschwerden während der Anwendung länger als eine Woche anhalten, sollte ein Arzt konsultiert werden. Bei Verschlimmerung oder fehlender Besserung innerhalb von 3 Tagen, großflächigen Entzündungen oder Hinweisen auf eine bakterielle Infektion (z. B. eitrig belegte Hautveränderungen) sollten Sie ebenfalls einen Arzt aufsuchen.',
  },
  {
    question: 'Verfärbt KAMILLIN® EXTERN ROBUGEN die Badewanne?',
    answer:
      'Die natürlichen Farbstoffe der Kamille können die Wanne verfärben. Geben Sie deshalb erst das Wasser und dann KAMILLIN® EXTERN ROBUGEN in die Wanne und reinigen Sie die Wanne unmittelbar nach dem Bad mit einem zitronensäure- oder salmiakhaltigen Reinigungsmittel.',
  },
];

// ── KAMILLIN® KONZENTRAT ROBUGEN ────────────────────────────────────────
export const konzentratFaqs: FaqItem[] = [
  {
    question: 'Wofür wird KAMILLIN® KONZENTRAT ROBUGEN angewendet?',
    answer:
      'KAMILLIN® KONZENTRAT ROBUGEN ist ein traditionelles pflanzliches Arzneimittel zum Einnehmen bei leichten krampfartigen Beschwerden im Magen-Darm-Bereich, zur Inhalation als Dampf zur Linderung von Erkältungssymptomen, als Zusatz für feuchte Umschläge, Waschungen oder Spülungen bei leichten Haut- und Schleimhautentzündungen einschließlich der Mundhöhle und des Zahnfleisches sowie als Zusatz zu Teil- und Sitzbädern oder Spülungen unterstützend bei Entzündungen im Anal- und Genitalbereich, sofern ernsthafte Erkrankungen von einem Arzt ausgeschlossen worden sind.',
  },
  {
    question: 'Wie wird KAMILLIN® KONZENTRAT ROBUGEN eingenommen?',
    answer:
      'Ab 12 Jahren: 30 Tropfen auf 1 Tasse (150 ml) warmes Wasser. Kinder von 6 bis 12 Jahren: 13 – 20 Tropfen auf 1 Tasse (150 ml) warmes Wasser. Jeweils 3 – 4mal täglich zwischen den Mahlzeiten trinken. 1 ml entspricht 20 Tropfen. Alle Dosierungen finden Sie unter [Anwendung und Dosierung](#anwendung).',
  },
  {
    question: 'Wie inhaliere ich mit KAMILLIN® KONZENTRAT ROBUGEN richtig?',
    answer:
      'Ab 12 Jahren: 15 ml (3 Dosierkappen) auf 1 l heißes Wasser, 1 – 2mal täglich. Verwenden Sie einen Topf oder eine Schüssel mit sicherem Stand, legen Sie ein Tuch über Kopf und Gefäß und atmen Sie den Dampf ein. Halten Sie dabei die Augen geschlossen und bringen Sie das Gesicht nicht zu nahe an den Dampf (**Verbrühungsgefahr**). Alternativ eignet sich ein Dampfinhalator mit festem Mund-Nasen-Aufsatz aus der Apotheke. Die Inhalation sollte ausschließlich als Wasserdampfinhalation erfolgen, nicht mit Aerosolgeräten.',
  },
  {
    question: 'Ab welchem Alter kann KAMILLIN® KONZENTRAT ROBUGEN angewendet werden?',
    answer:
      'Die Einnahme und die Anwendung in der Mundhöhle sind ab 6 Jahren möglich. Die Inhalation sowie die äußere Anwendung als Zusatz für Umschläge, Waschungen, Spülungen und Teil- oder Sitzbäder werden ab 12 Jahren empfohlen.',
  },
  {
    question: 'Enthält KAMILLIN® KONZENTRAT ROBUGEN Alkohol?',
    answer:
      'Ja. Das Auszugsmittel ist Ethanol 48 % (V/V). Eine Dosis von 30 Tropfen enthält 570 mg Alkohol, das entspricht weniger als 14 ml Bier oder 6 ml Wein. Ein gesundheitliches Risiko besteht unter anderem bei Schwangeren, Stillenden und Alkoholkranken. Die Alkoholmenge kann außerdem die Wirkung anderer Arzneimittel verändern.',
  },
  {
    question: 'Wann darf KAMILLIN® KONZENTRAT ROBUGEN nicht angewendet werden?',
    answer:
      'Bei Überempfindlichkeit (Allergie) gegen Kamille und andere Korbblütler. Teil- und Sitzbäder sind bei offenen Wunden, großen Hautverletzungen, akuten Erkrankungen, hohem Fieber und schweren Infektionen nicht geeignet. Das Arzneimittel sollte nicht im Augenbereich und nicht als Darmspülung angewendet werden. In der Schwangerschaft wird die Anwendung nicht empfohlen, in der Stillzeit soll es nicht angewendet werden.',
  },
  {
    question: 'Wie lange ist die Flasche nach dem Öffnen haltbar?',
    answer:
      'Nach Anbruch ist KAMILLIN® KONZENTRAT ROBUGEN 6 Monate haltbar. Besondere Lagerungsbedingungen sind nicht erforderlich.',
  },
  {
    question: 'Wie lange darf ich KAMILLIN® KONZENTRAT ROBUGEN anwenden?',
    answer:
      'Wenn die Symptome mehr als eine Woche anhalten, ist ein Arzt oder eine andere in einem Heilberuf tätige qualifizierte Person zu konsultieren. Bei Auftreten von Nebenwirkungen ist die Anwendung zu beenden und ein Arzt aufzusuchen.',
  },
];

// ── KAMILLIN® REPAIR CREME (Kosmetikum) ─────────────────────────────────
// TODO (KAMILLIN): Angaben zu Inhaltsstoffen, Verträglichkeit und Vertriebsweg ergänzen.
export const repairFaqs: FaqItem[] = [
  {
    question: 'Was ist die KAMILLIN® REPAIR CREME?',
    answer:
      'Die KAMILLIN® REPAIR CREME ist eine Pflegecreme mit hohem Vitamin-E-Gehalt und Kamillenblütenextrakt. Sie ist ein Kosmetikum und kein Arzneimittel.',
  },
  {
    question: 'Wo kann ich die Creme anwenden?',
    answer:
      'Die Creme kann auf allen Hautstellen aufgetragen werden, zum Beispiel auf trockener oder beanspruchter Haut an Händen, Füßen und Ellenbogen.',
  },
  {
    question: 'Wie oft kann ich die Creme anwenden?',
    answer:
      'Tragen Sie die Creme dünn auf die gereinigte Haut auf und massieren Sie sie sanft ein. Bei Bedarf können Sie sie mehrmals täglich anwenden.',
  },
  {
    question: 'Wie funktioniert die Handpackung über Nacht?',
    answer:
      'Cremen Sie abends Hände oder Füße großzügig ein, ziehen Sie Baumwollhandschuhe oder Socken darüber und lassen Sie die Creme über Nacht einwirken. Weitere Hinweise finden Sie unter [Anwendung](#anwendung).',
  },
  {
    question: 'In welcher Packungsgröße gibt es die Creme?',
    answer: 'Die KAMILLIN® REPAIR CREME ist in der 20-ml-Tube erhältlich.',
  },
];

/** FAQ-Liste eines Präparats (leere Liste = Modul rendert nichts). */
export const faqsFor = (product: PharmacyProduct): FaqItem[] =>
  ({ extern: externFaqs, konzentrat: konzentratFaqs, repair: repairFaqs })[product];
