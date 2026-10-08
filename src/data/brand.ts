// Larylin-Akzentfolge: kurze Farbbalken auf Karten in der Folge Gelb, Orange, Rot
// (Farbwerte zentral in src/styles/global.css). Index modulo Länge ergibt die Farbe der n-ten Karte.
export const accentCycle = ['bg-yellow', 'bg-orange', 'bg-red'] as const;

export type AccentClass = (typeof accentCycle)[number];

export const accentAt = (index: number): AccentClass => accentCycle[index % accentCycle.length];
