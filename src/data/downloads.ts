// Downloads je Präparat (DownloadsSection der Produktseiten); Dateien unter public/downloads/.
// Einträge ohne vorhandene Datei werden beim Build ausgeblendet. TODO (LARYLIN):
// Gebrauchs- und Fachinformationen unter den Pfaden unten ablegen.
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
  pastillen: [
    {
      label: 'Gebrauchsinformation',
      description: 'Packungsbeilage Larylin® Husten-Stiller Pastillen (TODO (LARYLIN): Stand)',
      href: '/downloads/larylin-husten-stiller-pastillen-gebrauchsinformation.pdf',
      type: 'PDF',
    },
    {
      label: 'Fachinformation',
      description: 'Für Fachkreise (TODO (LARYLIN): Stand)',
      href: '/downloads/larylin-husten-stiller-pastillen-fachinformation.pdf',
      type: 'PDF',
    },
  ],
  saft: [
    {
      label: 'Gebrauchsinformation',
      description: 'Packungsbeilage Larylin® Husten-Stiller Saft (TODO (LARYLIN): Stand)',
      href: '/downloads/larylin-husten-stiller-saft-gebrauchsinformation.pdf',
      type: 'PDF',
    },
    {
      label: 'Fachinformation',
      description: 'Für Fachkreise (TODO (LARYLIN): Stand)',
      href: '/downloads/larylin-husten-stiller-saft-fachinformation.pdf',
      type: 'PDF',
    },
  ],
};

/** Downloads eines Präparats, nur mit vorhandener Datei unter public/ (Prüfung zur
 *  Build-Zeit); leere Liste = Sektion rendert nichts. */
export const downloadsFor = (product: PharmacyProduct): DownloadItem[] =>
  downloads[product].filter((item) => available.has(item.href));
