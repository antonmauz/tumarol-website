// Stationen des Kamillen-Lebenszyklus für den Slider KamillenLebenszyklus.astro: Titel,
// Fließtext (HTML erlaubt, Fußnoten per hinweisLink, Ausgabe per set:html) und Foto aus
// src/assets/images/content/ (4:3 per object-cover). Reihenfolge = Slider-Reihenfolge.
import type { ImageMetadata } from 'astro';
import { hinweisGacp, hinweisGmp, hinweisLink } from './hinweise';

import thueringenLandschaft from '../assets/images/content/thueringen-landschaft.jpg';
import kia from '../assets/images/content/kia.jpg';
import qualitaetsicherung from '../assets/images/content/qualitaetsicherung.jpg';
import extraktion from '../assets/images/content/extraktion.jpg';
import abfuellung from '../assets/images/content/abfuellung.jpg';

export interface LebenszyklusStep {
  title: string;
  /** Fließtext; darf HTML enthalten (Fußnoten-Links), wird per set:html gerendert. */
  text: string;
  /** Optionales Foto (relativer Import). Ohne Bild zeigt die Karte eine
   *  neutrale Fläche „Bild folgt“. */
  image?: ImageMetadata;
  imageAlt?: string;
}

export const lebenszyklusSteps: LebenszyklusStep[] = [
  {
    title: 'Anbau in Thüringen',
    text:
      'Unsere Kamille wächst auf mehreren hundert Hektar in Thüringen, einer der traditionsreichsten Regionen für den Arzneipflanzenanbau in Deutschland. Angebaut werden ausschließlich unsere eigenen, geschützten Spezialsorten.',
    image: thueringenLandschaft,
    imageAlt: 'Hügelige Feldlandschaft in Thüringen',
  },
  {
    title: 'Kontrolliert-Integrierter Anbau',
    text:
      'Saatgutselektion, Anbau und Ernte liegen vollständig in unserer Hand. Der Kontrolliert-Integrierte Anbau (KIA) verbindet die gute landwirtschaftliche Praxis nach GACP' +
      hinweisLink(hinweisGacp, 'GACP') +
      ' mit dokumentierten, nachvollziehbaren Abläufen – vom Feld bis zur Charge.',
    image: kia,
    imageAlt: 'Erntemaschinen im blühenden Kamillenfeld',
  },
  {
    title: 'Ernte und Qualitätssicherung',
    text:
      'Die Blüten werden zur Blütezeit geerntet und schonend getrocknet. Jede Charge wird auf Identität, Reinheit und Gehalt geprüft; jede Extraktionscharge untersuchen externe Labore zusätzlich auf Pyrrolizidin-Alkaloide.',
    image: qualitaetsicherung,
    imageAlt: 'Mitarbeiter in Schutzkleidung dokumentiert Prüfwerte an einer Produktionsanlage',
  },
  {
    title: 'Extraktion in Esslingen',
    text:
      'In Esslingen gewinnen wir aus den Blüten unseren pharmazeutischen Kamillenextrakt in hoher Konzentration. Die wirksamkeitsbestimmenden Komponenten, ätherisches Öl mit (–)-α-Bisabolol und Chamazulen sowie Flavonoide wie Apigenin, werden chargenweise quantifiziert.',
    image: extraktion,
    imageAlt: 'Mitarbeiterin in Schutzkleidung an einer Extraktionsanlage aus Edelstahl',
  },
  {
    title: 'Produktion und Abfüllung',
    text:
      'Aus dem Extrakt entstehen bei ROBUGEN in Esslingen die KAMILLIN-Präparate. Produktion und Abfüllung erfolgen nach den pharmazeutischen Qualitätsstandards der GMP' +
      hinweisLink(hinweisGmp, 'GMP') +
      ' – so gelangt der Auszug in gleichbleibender Qualität in jedes Präparat.',
    image: abfuellung,
    imageAlt: 'Braunglasflaschen auf einer Abfülllinie, eine Hand im Handschuh prüft eine Flasche',
  },
];
