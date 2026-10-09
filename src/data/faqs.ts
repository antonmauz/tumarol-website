// Zentrale FAQ-Daten, eine Liste je Präparat (Format des Faq-Moduls), Inhalte aus der
// Gebrauchs- bzw. Fachinformation in Alltagssprache. answer erlaubt **fett** und [Text](url).
import type { PharmacyProduct } from './pharmacies';

export interface FaqItem {
  question: string;
  /** Antwort; **fett** und [Text](url) erlaubt (Renderer in Faq.astro). */
  answer: string;
}

// TODO (LARYLIN): Fragen und Antworten nach fachlicher Freigabe eintragen.
// ── Larylin® Husten-Stiller Pastillen ────────────────────────────────────
export const pastillenFaqs: FaqItem[] = [];

// ── Larylin® Husten-Stiller Saft ─────────────────────────────────────────
export const saftFaqs: FaqItem[] = [];

/** FAQ-Liste eines Präparats (leere Liste = Modul rendert nichts). */
export const faqsFor = (product: PharmacyProduct): FaqItem[] =>
  ({ pastillen: pastillenFaqs, saft: saftFaqs })[product];
