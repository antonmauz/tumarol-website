// Interne Produkt-Keys (nicht die URL-Slugs): zwei Darreichungsformen, zwei Produktseiten.
// Einzige Quelle für den Typ PharmacyProduct und das Zod-Enum in src/content.config.ts;
// bewusst ohne Bild-Imports, damit das Content-Schema die Datei leicht laden kann.
export const pharmacyProductKeys = ['pastillen', 'saft'] as const;
export type PharmacyProduct = (typeof pharmacyProductKeys)[number];
