// Downloads je Präparat (DownloadsSection der Produktseiten); Dateien unter public/downloads/.
// Einträge ohne vorhandene Datei werden beim Build ausgeblendet. TODO (KAMILLIN):
// Gebrauchsinformationen und REPAIR-Produktinformation unter den Pfaden unten ablegen.
import type { PharmacyProduct } from './pharmacies';

// Vorhandene PDFs unter public/downloads/ (Vite löst das Glob zur Build-Zeit statisch auf).
const available = new Set(
  Object.keys(import.meta.glob('/public/downloads/*.pdf')).map((p) => p.slice('/public'.length)),
);

export interface DownloadItem {
  /** Sichtbarer Titel, z. B. "Gebrauchsinformation". */
  label: string;
  /** Kurze Erläuterung (z. B. Stand) — wird derzeit NICHT gerendert (Entscheidung 04.09.2026). */
  description?: string;
  /** Pfad unter public/, z. B. "/downloads/….pdf". */
  href: string;
  /** Dateityp-Label auf der Karte. */
  type?: 'PDF';
}

const downloads: Record<PharmacyProduct, DownloadItem[]> = {
  extern: [
    {
      label: 'Gebrauchsinformation',
      description: 'Packungsbeilage KAMILLIN® EXTERN ROBUGEN (TODO (KAMILLIN): Stand)',
      href: '/downloads/kamillin-extern-robugen-gebrauchsinformation.pdf',
      type: 'PDF',
    },
    {
      label: 'Fachinformation',
      description: 'Für Fachkreise (Stand: Oktober 2024)',
      href: '/downloads/kamillin-extern-robugen-fachinformationen.pdf',
      type: 'PDF',
    },
  ],
  konzentrat: [
    {
      label: 'Gebrauchsinformation',
      description: 'Packungsbeilage KAMILLIN® KONZENTRAT ROBUGEN (TODO (KAMILLIN): Stand)',
      href: '/downloads/kamillin-konzentrat-robugen-gebrauchsinformation.pdf',
      type: 'PDF',
    },
    {
      label: 'Fachinformation',
      description: 'Für Fachkreise (Stand: August 2023)',
      href: '/downloads/kamillin-konzentrat-robugen-fachinformationen.pdf',
      type: 'PDF',
    },
  ],
  repair: [
    {
      label: 'Produktinformation',
      description: 'KAMILLIN® REPAIR CREME (TODO (KAMILLIN): Stand)',
      href: '/downloads/kamillin-repair-creme-produktinformation.pdf',
      type: 'PDF',
    },
  ],
};

/** Downloads eines Präparats, nur mit vorhandener Datei unter public/ (Prüfung zur
 *  Build-Zeit); leere Liste = Sektion rendert nichts. */
export const downloadsFor = (product: PharmacyProduct): DownloadItem[] =>
  downloads[product].filter((item) => available.has(item.href));
