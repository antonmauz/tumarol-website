// Produktseiten der Präparate auf der Hersteller-Domain robugen.de: sameAs-Ziele im
// Product- und WebSite-JSON-LD. Die robugen.de-Seiten setzen ihrerseits den Canonical auf
// die jeweilige Seite unter kamillin.de. Für die REPAIR CREME gibt es dort keine Seite.
import type { PharmacyProduct } from './productKeys';

export const robugenProductUrls: Partial<Record<PharmacyProduct, string>> = {
  extern: 'https://robugen.de/produkte/kamillin-extern-robugen',
  konzentrat: 'https://robugen.de/produkte/kamillin-konzentrat-robugen',
};
