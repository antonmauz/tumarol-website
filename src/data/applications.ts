// Anwendung und Dosierung je Präparat (ApplicationSlider): je Anwendungsart Bild, Titel und Text.
// Dosierungen der Arzneimittel im Wortlaut der Fachinformationen (EXTERN Oktober 2024,
// KONZENTRAT August 2023); REPAIR CREME nur Pflegeaussagen. Bilder: src/assets/images/content/anwendung/.
import type { ImageMetadata } from 'astro';
import type { PharmacyProduct } from './pharmacies';

// ── KAMILLIN® EXTERN ROBUGEN
import externSitzbad from '../assets/images/content/anwendung/extern-sitzbad.png';
import externUmschlaege from '../assets/images/content/anwendung/extern-umschlaege.jpg';
import externSpuelungen from '../assets/images/content/anwendung/extern-spuelungen.jpg';
import externKinderbad from '../assets/images/content/anwendung/extern-kinderbad.jpg';
import externVollbad from '../assets/images/content/anwendung/extern-vollbad.jpg';
// ── KAMILLIN® KONZENTRAT ROBUGEN
import konzentratInhalation from '../assets/images/content/anwendung/konzentrat-inhalation.jpg';
import konzentratEinnahme from '../assets/images/content/anwendung/konzentrat-einnahme.jpg';
import konzentratMundspuelung from '../assets/images/content/anwendung/konzentrat-mundspuelung.jpg';
// Umschläge, Spülungen und Teil-/Sitzbad nutzen die EXTERN-Motive (gleiche
// Anwendungsart, Entscheidung 08.09.2026).
// ── KAMILLIN® REPAIR CREME
import repairAnwendung from '../assets/images/content/anwendung/repair-anwendung.jpg';
import repairHandpackung from '../assets/images/content/anwendung/repair-handpackung.jpg';

export interface ApplicationItem {
  /** Anwendungsart, z. B. "Sitzbad". */
  title: string;
  /** Dosierungs-/Anwendungstext (Wortlaut Fachinformation); mehrere Einträge = Absätze. */
  text: string | string[];
  image?: ImageMetadata;
  imageAlt?: string;
}

export interface ApplicationSection {
  heading: string;
  /** Optionaler Einleitungssatz unter der Überschrift. */
  intro?: string;
  items: ApplicationItem[];
}

const applications: Record<PharmacyProduct, ApplicationSection> = {
  // ── KAMILLIN® EXTERN ROBUGEN — Fachinformation Abschnitt 4.2 (Oktober 2024).
  // Portionsbeutel = 40 ml, Messbecher = 5 ml.
  extern: {
    heading: 'Anwendung und Dosierung',
    // Kurzfassung (04.09.2026): nur Mengenangaben, Altersgruppen verkürzt
    // ("Ab 12 Jahren" = Jugendliche ab 12, Erwachsene, Senioren). Vollständiger
    // Wortlaut in der Fach-/Gebrauchsinformation (Downloads).
    intro: 'Badetemperatur handwarm (30 – 34 °C), Badedauer 10 – 12 Minuten. Maximale Tagesdosis 60 ml.',
    // Reihenfolge (08.09.2026): Bäder zuerst (Vollbad, Teil-/Sitzbad,
    // Kinderbad), danach Umschläge und Spülungen.
    items: [
      {
        title: 'Vollbad',
        text: 'Ab 12 Jahren: 30 ml (¾ Portionsbeutel) auf 150 l Wasser, einmal täglich. Für Kinder unter 12 Jahren siehe Kinderbad.',
        image: externVollbad,
        imageAlt: 'KAMILLIN® EXTERN ROBUGEN als Vollbad',
      },
      {
        title: 'Teil- oder Sitzbad',
        text: 'Ab 12 Jahren: 20 – 40 ml (½ – 1 Portionsbeutel) auf 20 – 40 l Wasser, einmal täglich.',
        image: externSitzbad,
        imageAlt: 'KAMILLIN® EXTERN ROBUGEN als Teil- oder Sitzbad',
      },
      {
        title: 'Säuglings- und Kinderbad',
        text: [
          '1 bis 11 Jahre: 10 – 20 ml (¼ – ½ Portionsbeutel) auf 10 – 20 l Wasser.',
          '4 Wochen bis 1 Jahr: 10 ml (¼ Portionsbeutel) auf 10 l Wasser.',
          'Jeweils einmal täglich, nicht bei Neugeborenen unter 4 Wochen.',
        ],
        image: externKinderbad,
        imageAlt: 'KAMILLIN® EXTERN ROBUGEN als Säuglings- und Kinderbad',
      },
      {
        title: 'Umschläge',
        text: 'Ab 12 Jahren: 20 ml (½ Portionsbeutel) auf 1 l Wasser, ein- bis mehrmals täglich.',
        image: externUmschlaege,
        imageAlt: 'KAMILLIN® EXTERN ROBUGEN für Umschläge',
      },
      {
        title: 'Spülungen',
        text: 'Ab 12 Jahren: 20 ml (½ Portionsbeutel) auf 1 l Wasser, ein- bis mehrmals täglich.',
        image: externSpuelungen,
        imageAlt: 'KAMILLIN® EXTERN ROBUGEN für Spülungen',
      },
    ],
  },

  // ── KAMILLIN® KONZENTRAT ROBUGEN — Fachinformation Abschnitt 4.2 (August 2023).
  konzentrat: {
    heading: 'Anwendung und Dosierung',
    // Kurzfassung (04.09.2026), siehe Kommentar bei EXTERN.
    intro: '1 ml entspricht 20 Tropfen, 1 Dosierkappe entspricht 5 ml.',
    items: [
      {
        title: 'Inhalation',
        text: 'Ab 12 Jahren: 15 ml (3 Dosierkappen) auf 1 l heißes Wasser, 1 – 2mal täglich.',
        image: konzentratInhalation,
        imageAlt: 'KAMILLIN® KONZENTRAT ROBUGEN zur Inhalation',
      },
      {
        title: 'Einnahme',
        text: [
          'Ab 12 Jahren: 30 Tropfen auf 1 Tasse (150 ml) warmes Wasser.',
          '6 bis 12 Jahre: 13 – 20 Tropfen auf 1 Tasse (150 ml) warmes Wasser.',
          '3 – 4mal täglich zwischen den Mahlzeiten trinken.',
        ],
        image: konzentratEinnahme,
        imageAlt: 'KAMILLIN® KONZENTRAT ROBUGEN zur Einnahme',
      },
      {
        // Fachinformation spricht nur von "den Mund spülen", nicht von Gurgeln; Titel deshalb ohne "Gurgeln".
        title: 'Mundspülung',
        text: [
          'Ab 12 Jahren: 30 Tropfen auf 1 Tasse (150 ml) warmes Wasser.',
          '6 bis 12 Jahre: 13 – 20 Tropfen auf 1 Tasse (150 ml) warmes Wasser.',
          '3 – 4mal täglich zwischen den Mahlzeiten den Mund spülen.',
        ],
        image: konzentratMundspuelung,
        imageAlt: 'KAMILLIN® KONZENTRAT ROBUGEN zur Mundspülung',
      },
      // Äußere Anwendung laut Fachinformation ("Umschläge, Waschungen oder Spülungen sowie
      // Teil- und Sitzbäder: 15 ml auf 1 Liter heißes Wasser ein- bis mehrmals täglich")
      // als drei Kacheln mit identischer Dosierung (08.09.2026).
      {
        title: 'Umschläge',
        text: 'Ab 12 Jahren: 15 ml (3 Dosierkappen) auf 1 l heißes Wasser, ein- bis mehrmals täglich.',
        image: externUmschlaege,
        imageAlt: 'KAMILLIN® KONZENTRAT ROBUGEN für Umschläge',
      },
      {
        title: 'Spülungen',
        text: 'Ab 12 Jahren: 15 ml (3 Dosierkappen) auf 1 l heißes Wasser, ein- bis mehrmals täglich.',
        image: externSpuelungen,
        imageAlt: 'KAMILLIN® KONZENTRAT ROBUGEN für Spülungen',
      },
      {
        title: 'Teil- oder Sitzbad',
        text: 'Ab 12 Jahren: 15 ml (3 Dosierkappen) auf 1 l heißes Wasser, ein- bis mehrmals täglich.',
        image: externSitzbad,
        imageAlt: 'KAMILLIN® KONZENTRAT ROBUGEN als Teil- oder Sitzbad',
      },
    ],
  },

  repair: {
    heading: 'Anwendung',
    intro: 'Die Creme kann auf allen Hautstellen aufgetragen werden.',
    // Kosmetikum: zwei Anwendungsarten (03.09.2026), Texte auf Pflegeebene.
    items: [
      {
        title: 'Normale Anwendung',
        text: 'Dünn auf die gereinigte Haut auftragen und sanft einmassieren, bei Bedarf mehrmals täglich.',
        image: repairAnwendung,
        imageAlt: 'KAMILLIN® REPAIR CREME wird auf die Haut aufgetragen',
      },
      {
        title: 'Handpackung über Nacht',
        text: 'Abends großzügig eincremen, Baumwollhandschuhe oder Socken darüberziehen und über Nacht einwirken lassen.',
        image: repairHandpackung,
        imageAlt: 'KAMILLIN® REPAIR CREME als Handpackung über Nacht mit Baumwollhandschuhen',
      },
    ],
  },
};

/** Anwendungs-Sektion eines Präparats (leere items = rendert nichts). */
export const applicationsFor = (product: PharmacyProduct): ApplicationSection =>
  applications[product];
