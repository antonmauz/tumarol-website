// Kurzinfos im Akkordeon unter dem Kauf-Button (ProductHero): Wirkung, Dosierung,
// Inhaltsstoffe, Warnhinweise. Inhaltsstoffe und Warnhinweise kommen aus pflichtangaben.ts,
// damit der Wortlaut nur an einer Stelle gepflegt wird.
// TODO (LARYLIN): Wortlaut fachlich freigeben lassen (HWG).
import { pflichtangaben } from './pflichtangaben';
import type { PharmacyProduct } from './productKeys';

export interface ProduktInfoItem {
  title: string;
  /** Ein Absatz oder mehrere Absätze. */
  text: string[];
}

const section = (key: PharmacyProduct, heading: string): string[] => {
  const text = pflichtangaben.find((p) => p.key === key)?.sections.find((s) => s.heading === heading)?.text;
  return Array.isArray(text) ? text : text ? [text] : [];
};

// FI 5.1, gleiche Aussage wie WirkungsweiseSection.astro.
const wirkung = (name: string, plural: boolean): string =>
  `${name} ${plural ? 'enthalten' : 'enthält'} den Wirkstoff Dropropizin. Er wirkt vor allem dort, wo der Hustenreiz entsteht, und schwächt die Nervensignale aus der Lunge ab, die den Hustenreflex auslösen. Im Hustenzentrum des Gehirns wirkt er nur teilweise, die Atmungssteuerung wird nicht gehemmt.`;

// FI 4.3, verkürzt.
const gegenanzeigen =
  'Nicht anwenden bei Kindern unter 12 Jahren, in Schwangerschaft und Stillzeit, bei schweren Herz- und Kreislaufbeschwerden, eingeschränkter Leber- oder Nierenfunktion sowie bei Asthma bronchiale oder überempfindlichen Atemwegen.';

// FI 4.2
const dosierung: Record<PharmacyProduct, string[]> = {
  pastillen: [
    'Erwachsene und Jugendliche ab 12 Jahren: bis zu 3-mal täglich 1 bis 2 Pastillen langsam im Mund zergehen lassen, höchstens 5 Pastillen pro Tag. Eine Einnahme am Abend ist sinnvoll.',
    'Für eine Anwendung über mehr als 2 Wochen liegen keine ausreichenden Erfahrungen vor.',
  ],
  saft: [
    'Erwachsene und Jugendliche ab 12 Jahren: bis zu 3-mal täglich 10 ml (1 Messlöffel), höchstens 30 ml pro Tag. Eine Einnahme am Abend ist sinnvoll.',
    'Für eine Anwendung über mehr als 2 Wochen liegen keine ausreichenden Erfahrungen vor.',
  ],
};

export const produktInfoFor = (key: PharmacyProduct): ProduktInfoItem[] => {
  const name = pflichtangaben.find((p) => p.key === key)?.name ?? 'Larylin®';
  // „Pastillen“ ist Mehrzahl: wirken/enthalten statt wirkt/enthält.
  const plural = key === 'pastillen';
  return [
    { title: `Wie ${plural ? 'wirken' : 'wirkt'} ${name} gegen Reizhusten?`, text: [wirkung(name, plural)] },
    { title: 'Dosierung', text: dosierung[key] },
    { title: `${name} Inhaltsstoffe`, text: section(key, 'Zusammensetzung') },
    { title: 'Warnhinweise', text: [gegenanzeigen, ...section(key, 'Warnhinweise')] },
  ];
};
