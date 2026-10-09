// Bewertungen der Online-Apotheken für Larylin® Husten-Stiller Pastillen; nur belegbare, echte Bewertungen (HWG).
// `pharmacy` muss exakt dem `name` in src/data/pharmacies.ts entsprechen (Logo und Shop-Link
// kommen von dort). Leeres Array = Sterne, Slider und Modal rendern für dieses Produkt nichts.
import type { ProductReview } from './index';

export const pastillenReviews: ProductReview[] = [
  // Stand: Oktober 2026 (09.10.2026). Auskommentierte Shops hatten zu diesem Zeitpunkt
  // noch keine Bewertungen — Zahlen eintragen und Zeile einkommentieren.
  { pharmacy: 'Shop Apotheke', rating: 4.9, reviewCount: 7, dateMonth: 'Oktober', dateYear: 2026 },
  { pharmacy: 'DocMorris', rating: 4.7, reviewCount: 7, dateMonth: 'Oktober', dateYear: 2026 },
  { pharmacy: 'medpex', rating: 4.8, reviewCount: 8, dateMonth: 'Oktober', dateYear: 2026 },
  // { pharmacy: 'Apotal', rating: 0.0, reviewCount: 0, dateMonth: 'Oktober', dateYear: 2026 },
  // { pharmacy: 'Aponeo', rating: 0.0, reviewCount: 0, dateMonth: 'Oktober', dateYear: 2026 },
  // { pharmacy: 'Sanicare', rating: 0.0, reviewCount: 0, dateMonth: 'Oktober', dateYear: 2026 },
  { pharmacy: 'mycare', rating: 5.0, reviewCount: 2, dateMonth: 'Oktober', dateYear: 2026 },
  { pharmacy: 'apo-discounter', rating: 4.8, reviewCount: 13, dateMonth: 'Oktober', dateYear: 2026 },
  // TODO (LARYLIN): apo.com, medikamente-per-klick und VersandApo blockten den automatischen
  // Abruf; Zahlen von Hand prüfen und eintragen.
  // { pharmacy: 'apo.com', rating: 0.0, reviewCount: 0, dateMonth: 'Oktober', dateYear: 2026 },
  // { pharmacy: 'medikamente-per-klick', rating: 0.0, reviewCount: 0, dateMonth: 'Oktober', dateYear: 2026 },
  // { pharmacy: 'VersandApo', rating: 0.0, reviewCount: 0, dateMonth: 'Oktober', dateYear: 2026 },
  { pharmacy: 'Amazon', rating: 4.5, reviewCount: 7, dateMonth: 'Oktober', dateYear: 2026 },
];
