// Anwendung und Dosierung je Präparat (ApplicationSlider): je Anwendungsart Bild, Titel und Text.
// Dosierungen im Wortlaut der Fachinformation. Bilder: src/assets/images/content/anwendung/.
import type { ImageMetadata } from 'astro';
import type { PharmacyProduct } from './pharmacies';

export interface ApplicationItem {
  /** Anwendungsart, z. B. "Erwachsene". */
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

// TODO (LARYLIN): Dosierung aus der Fachinformation eintragen (leere items = Sektion entfällt).
const applications: Record<PharmacyProduct, ApplicationSection> = {
  pastillen: {
    heading: 'Anwendung und Dosierung',
    items: [],
  },
  saft: {
    heading: 'Anwendung und Dosierung',
    items: [],
  },
};

/** Anwendungs-Sektion eines Präparats (leere items = rendert nichts). */
export const applicationsFor = (product: PharmacyProduct): ApplicationSection =>
  applications[product];
