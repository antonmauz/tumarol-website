// Interne Produkt-Keys (nicht die URL-Slugs): drei eigenständige Produkte, drei Produktseiten.
// Einzige Quelle für den Typ PharmacyProduct und das Zod-Enum in src/content.config.ts;
// bewusst ohne Bild-Imports, damit das Content-Schema die Datei leicht laden kann.
export const pharmacyProductKeys = ['extern', 'konzentrat', 'repair'] as const;
export type PharmacyProduct = (typeof pharmacyProductKeys)[number];
