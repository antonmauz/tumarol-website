// Bewertungen der Online-Apotheken für KAMILLIN® KONZENTRAT ROBUGEN; nur belegbare, echte Bewertungen (HWG).
// `pharmacy` muss exakt dem `name` in src/data/pharmacies.ts entsprechen (Logo und Shop-Link
// kommen von dort). Leeres Array = Sterne, Slider und Modal rendern für dieses Produkt nichts.
import type { ProductReview } from './index';

export const konzentratReviews: ProductReview[] = [
  // Stand: September 2026. Auskommentierte Shops hatten zu diesem Zeitpunkt
  // noch keine Bewertungen — Zahlen eintragen und Zeile einkommentieren.
  { pharmacy: 'Shop Apotheke', rating: 5.0, reviewCount: 6, dateMonth: 'September', dateYear: 2026 },
  { pharmacy: 'DocMorris', rating: 5.0, reviewCount: 3, dateMonth: 'September', dateYear: 2026 },
  { pharmacy: 'medpex', rating: 5.0, reviewCount: 3, dateMonth: 'September', dateYear: 2026 },
  // { pharmacy: 'Apotal', rating: 0.0, reviewCount: 0, dateMonth: 'September', dateYear: 2026 },
  // { pharmacy: 'Aponeo', rating: 0.0, reviewCount: 0, dateMonth: 'September', dateYear: 2026 },
  // { pharmacy: 'Sanicare', rating: 0.0, reviewCount: 0, dateMonth: 'September', dateYear: 2026 },
  // { pharmacy: 'mycare', rating: 0.0, reviewCount: 0, dateMonth: 'September', dateYear: 2026 },
  { pharmacy: 'apo-discounter', rating: 4.9, reviewCount: 7, dateMonth: 'September', dateYear: 2026 },
  // { pharmacy: 'apo.com', rating: 0.0, reviewCount: 0, dateMonth: 'September', dateYear: 2026 },
  // { pharmacy: 'medikamente-per-klick', rating: 0.0, reviewCount: 0, dateMonth: 'September', dateYear: 2026 },
  // { pharmacy: 'VersandApo', rating: 0.0, reviewCount: 0, dateMonth: 'September', dateYear: 2026 },
  { pharmacy: 'Amazon', rating: 4.7, reviewCount: 24, dateMonth: 'September', dateYear: 2026 },
  // { pharmacy: 'Healthii', rating: 0.0, reviewCount: 0, dateMonth: 'September', dateYear: 2026 },
];
