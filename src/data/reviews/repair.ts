// Bewertungen der Online-Apotheken für KAMILLIN® REPAIR CREME (Kosmetikum: keine krankheits-
// bezogenen Aussagen, auch nicht im ctaLabel). `pharmacy` muss exakt dem `name` in
// src/data/pharmacies.ts entsprechen. Leeres Array = Sterne, Slider und Modal rendern nichts.
import type { ProductReview } from './index';

// Stand 03.09.2026 noch keine Bewertungen in den Online-Shops. Format, sobald welche vorliegen:
// { pharmacy: 'Shop Apotheke', rating: 4.7, reviewCount: 12, dateMonth: 'September', dateYear: 2026 },
export const repairReviews: ProductReview[] = [];
