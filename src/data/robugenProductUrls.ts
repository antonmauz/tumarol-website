// Produktseiten der Präparate auf der Hersteller-Domain robugen.de: sameAs-Ziele im
// Product- und WebSite-JSON-LD.
import type { PharmacyProduct } from './productKeys';

export const robugenProductUrls: Partial<Record<PharmacyProduct, string>> = {
  pastillen: 'https://robugen.de/produkte/larylin-hustenstiller-pastillen',
  saft: 'https://robugen.de/produkte/larylin-hustenstiller-saft',
};
