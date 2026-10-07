// Zentrale Liste der Online-Apotheken (Drawer und Bewertungen referenzieren sie über `name`):
// Name, Shop-Deeplinks je Produkt und Logo (src/assets/images/apologos/); Reihenfolge = Karten.
// Die REPAIR CREME ist ein Kosmetikum (Claims-VO): keine krankheitsbezogenen Aussagen zu ihr.
import type { ImageMetadata } from 'astro';
import shopApothekeLogo from '../assets/images/apologos/shop-apotheke-logo.png';
import docMorrisLogo from '../assets/images/apologos/docmorris-logo.webp';
import medpexLogo from '../assets/images/apologos/medpex-logo.png';
import apotalLogo from '../assets/images/apologos/apotal-logo.png';
import aponeoLogo from '../assets/images/apologos/aponeo-logo.png';
import sanicareLogo from '../assets/images/apologos/sanicare-logo.png';
import mycareLogo from '../assets/images/apologos/mycare-logo.png';
import apoDiscounterLogo from '../assets/images/apologos/apo-discounter-logo.png';
import apoComLogo from '../assets/images/apologos/apo-com-logo.png';
import medikamentePerKlickLogo from '../assets/images/apologos/medikamente-per-klick-logo.png';
import versandApoLogo from '../assets/images/apologos/versandapo-logo.png';
import amazonLogo from '../assets/images/apologos/amazon-logo.png';
import healthiiLogo from '../assets/images/apologos/healthii-logo.png';
// Noch nicht gelistet (Logo liegt bereit): dm → src/assets/images/apologos/dm-med-logo.png

import { type PharmacyProduct } from './productKeys';
export type { PharmacyProduct };

/** Anzeige-Reihenfolge, Kurz-Labels (Drawer-Tabs) und volle Namen der Produkte. */
export const pharmacyProducts: { key: PharmacyProduct; label: string; name: string }[] = [
  { key: 'extern', label: 'EXTERN', name: 'KAMILLIN® EXTERN ROBUGEN' },
  { key: 'konzentrat', label: 'KONZENTRAT', name: 'KAMILLIN® KONZENTRAT ROBUGEN' },
  { key: 'repair', label: 'REPAIR CREME', name: 'KAMILLIN® REPAIR CREME' },
];

export interface Pharmacy {
  /** Anzeigename; zugleich Schlüssel für src/data/reviews/*.ts (exakte Schreibweise). */
  name: string;
  /** Shop-Deeplinks je Produkt; nicht gelistete Produkte einfach weglassen
   *  (der Shop erscheint dann für dieses Produkt weder im Drawer noch auf den Karten). */
  urls: Partial<Record<PharmacyProduct, string>>;
  /** Apotheken-Logo (Drawer: statt Name; Bewertungskarten). */
  logoImage?: ImageMetadata;
}

/** Unsere Publisher-ID im Affiliate-Netzwerk AWIN (identisch für alle Shops). */
const AWIN_AFFILIATE_ID = '3031405';

/**
 * Baut aus den Shop-Deeplinks eines AWIN-Partners die Affiliate-Links
 * (awin1.com-Weiterleitung mit Merchant-ID und kodierter Ziel-URL). So bleiben
 * die Ziel-URLs lesbar und die Merchant-ID steht nur einmal je Apotheke.
 * Die Platzierung (clickref) hängt pharmacyLinkUrl (utils/tracking.ts) beim Rendern an.
 */
function awinDeeplinks(
  merchantId: string,
  urls: Partial<Record<PharmacyProduct, string>>,
): Partial<Record<PharmacyProduct, string>> {
  return Object.fromEntries(
    Object.entries(urls).map(([product, url]) => [
      product,
      `https://www.awin1.com/cread.php?awinmid=${merchantId}&awinaffid=${AWIN_AFFILIATE_ID}&ued=${encodeURIComponent(url)}`,
    ]),
  );
}

// Links ohne Such-/Tracking-Parameter eintragen; AWIN-Partner über awinDeeplinks()
// (Stand: 29.09.2026). Datenschutzerklärung: Abschnitt „Affiliate-Links (AWIN)“.
// AWIN-Ziel-URLs zeigen bewusst auf die kleinste Packungsgröße (PZN 00329289 statt
// 00329303): Die Website nennt keine Packungsgröße, der Link soll nur das Produkt
// treffen, damit im Shop möglichst selten noch die Größe gewechselt wird.
export const pharmacies: Pharmacy[] = [
  {
    name: 'Shop Apotheke',
    urls: awinDeeplinks('13808', {
      extern: 'https://www.shop-apotheke.com/arzneimittel/329289/kamillin-extern-robugen.htm',
      konzentrat: 'https://www.shop-apotheke.com/arzneimittel/329220/kamillin-konzentrat-robugen.htm',
      repair: 'https://www.shop-apotheke.com/beauty/19632760/kamillin-repair-creme.htm',
    }),
    logoImage: shopApothekeLogo,
  },
  {
    name: 'DocMorris',
    // REPAIR CREME: noch kein AWIN-Deeplink vorhanden.
    urls: awinDeeplinks('14485', {
      extern: 'https://www.docmorris.de/kamillin-extern-robugen-loesung/00329303',
      konzentrat: 'https://www.docmorris.de/kamillin-konzentrat-robugen/00329220',
    }),
    logoImage: docMorrisLogo,
  },
  {
    name: 'medpex',
    urls: awinDeeplinks('36320', {
      extern: 'https://www.medpex.de/kamillin-extern-robugen/00329303',
      konzentrat: 'https://www.medpex.de/kamillin-konzentrat-robugen/00329220',
    }),
    logoImage: medpexLogo,
  },
  {
    name: 'Apotal',
    urls: {
      extern: 'https://shop.apotal.de/kamillin-extern-robugen-loesung-00329289',
      konzentrat: 'https://shop.apotal.de/kamillin-konzentrat-robugen-00329220',
    },
    logoImage: apotalLogo,
  },
  {
    name: 'Aponeo',
    urls: {
      extern: 'https://www.aponeo.de/00329303-kamillin-extern-robugen-loesung.html',
      konzentrat: 'https://www.aponeo.de/00329220-kamillin-konzentrat-robugen.html',
      repair: 'https://www.aponeo.de/19632760-kamillin-repair-creme.html',
    },
    logoImage: aponeoLogo,
  },
  {
    name: 'Sanicare',
    urls: {
      extern: 'https://www.sanicare.de/p/kamillin-extern-robugen-loesung-6x40-loesung-00329272',
      konzentrat: 'https://www.sanicare.de/p/kamillin-konzentrat-robugen-40-loesung-00329214',
      repair: 'https://www.sanicare.de/p/kamillin-repair-creme-20-salbe-19632760',
    },
    logoImage: sanicareLogo,
  },
  {
    name: 'mycare',
    urls: {
      extern: 'https://www.mycare.de/online-kaufen/kamillin-extern-robugen-loesung-0329289',
      konzentrat: 'https://www.mycare.de/online-kaufen/kamillin-konzentrat-robuge-loesung-0329214',
    },
    logoImage: mycareLogo,
  },
  {
    name: 'apo-discounter',
    urls: awinDeeplinks('21216', {
      extern: 'https://www.apodiscounter.de/kamillin-extern-robugen-loesung-25x40ml-pzn-00329303',
      konzentrat: 'https://www.apodiscounter.de/kamillin-konzentrat-robugen-100ml-pzn-00329220',
      repair: 'https://www.apodiscounter.de/kamillin-repair-creme-20ml-pzn-19632760',
    }),
    logoImage: apoDiscounterLogo,
  },
  {
    name: 'apo.com',
    urls: awinDeeplinks('25679', {
      extern: 'https://www.apo.com/kamillin-extern-robugen-loesung-10x40ml-pzn-00329289',
      konzentrat: 'https://www.apo.com/kamillin-konzentrat-robugen-100ml-pzn-00329220',
      repair: 'https://www.apo.com/kamillin-repair-creme-20ml-pzn-19632760',
    }),
    logoImage: apoComLogo,
  },
  {
    name: 'medikamente-per-klick',
    urls: {
      extern: 'https://www.medikamente-per-klick.de/kamillin-extern-robugen-loesung-10x40ml-00329289',
      konzentrat: 'https://www.medikamente-per-klick.de/kamillin-konzentrat-robugen-100ml-00329220',
    },
    logoImage: medikamentePerKlickLogo,
  },
  {
    name: 'VersandApo',
    urls: awinDeeplinks('25685', {
      extern: 'https://www.versandapo.de/kamillin-extern-robugen-loesung-10x40ml-pzn-00329289',
      konzentrat: 'https://www.versandapo.de/kamillin-konzentrat-robugen-100ml-pzn-00329220',
      repair: 'https://www.versandapo.de/kamillin-repair-creme-20ml-pzn-19632760',
    }),
    logoImage: versandApoLogo,
  },
  {
    name: 'Amazon',
    // Kurzform über die ASIN; REPAIR CREME bei Amazon noch nicht gelistet.
    urls: {
      extern: 'https://www.amazon.de/dp/B00ELI8GQW',
      konzentrat: 'https://www.amazon.de/dp/B00ELI8DE2',
    },
    logoImage: amazonLogo,
  },
  {
    name: 'Healthii',
    urls: {
      extern: 'https://www.healthii.de/kamillin-extern-robugen-00329303',
      konzentrat: 'https://www.healthii.de/kamillin-konzentrat-robugen-00329220',
      repair: 'https://www.healthii.de/kamillin-repair-creme-19632760',
    },
    logoImage: healthiiLogo,
  },
];
