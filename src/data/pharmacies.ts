// Zentrale Liste der Online-Apotheken (Drawer und Bewertungen referenzieren sie über `name`):
// Name, Shop-Deeplinks je Produkt und Logo (src/assets/images/apologos/); Reihenfolge = Karten.
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
// Noch nicht gelistet (Logo liegt bereit): dm → src/assets/images/apologos/dm-med-logo.png

import { type PharmacyProduct } from './productKeys';
export type { PharmacyProduct };

/** Anzeige-Reihenfolge, Kurz-Labels (Drawer-Tabs) und volle Namen der Produkte. */
export const pharmacyProducts: { key: PharmacyProduct; label: string; name: string }[] = [
  { key: 'pastillen', label: 'Pastillen', name: 'Larylin® Husten-Stiller Pastillen' },
  { key: 'saft', label: 'Saft', name: 'Larylin® Husten-Stiller Saft' },
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
// (Stand: 09.10.2026). Datenschutzerklärung: Abschnitt „Affiliate-Links (AWIN)“.
// Ziel-URLs zeigen auf die Einzelpackung (Pastillen 24 Stück, PZN 04960257; Saft 200 ml,
// PZN 04759897), bei Shop Apotheke bewusst nicht auf die Doppelpackung (PZN 08141024).
// Healthii führt Larylin nicht (Logo liegt weiter unter apologos/).
export const pharmacies: Pharmacy[] = [
  {
    name: 'Shop Apotheke',
    urls: awinDeeplinks('13808', {
      pastillen: 'https://www.shop-apotheke.com/arzneimittel/4960257/larylin-husten-stiller-pastillen.htm',
      saft: 'https://www.shop-apotheke.com/arzneimittel/4759897/larylin-husten-stiller-saft.htm',
    }),
    logoImage: shopApothekeLogo,
  },
  {
    name: 'DocMorris',
    urls: awinDeeplinks('14485', {
      pastillen: 'https://www.docmorris.de/larylin-hustenstiller-lutschpastillen/04960257',
      saft: 'https://www.docmorris.de/larylin-hustenstiller-saft/04759897',
    }),
    logoImage: docMorrisLogo,
  },
  {
    name: 'medpex',
    urls: awinDeeplinks('36320', {
      pastillen: 'https://www.medpex.de/larylin-husten-stiller/04960257',
      saft: 'https://www.medpex.de/larylin-husten-stiller-saft/04759897',
    }),
    logoImage: medpexLogo,
  },
  {
    name: 'Apotal',
    urls: {
      pastillen: 'https://shop.apotal.de/larylin-husten-stiller-lutschpastillen-04960257',
      saft: 'https://shop.apotal.de/larylin-husten-stiller-saft-04759897',
    },
    logoImage: apotalLogo,
  },
  {
    name: 'Aponeo',
    // Saft: noch kein Link vorhanden.
    urls: {
      pastillen: 'https://www.aponeo.de/04960257-larylin-husten-stiller-lutschpastillen.html',
    },
    logoImage: aponeoLogo,
  },
  {
    name: 'Sanicare',
    urls: {
      pastillen: 'https://www.sanicare.de/p/larylin-husten-stiller-24-lutschpastillen-04960257',
      saft: 'https://www.sanicare.de/p/larylin-husten-stiller-saft-200-sirup-04759897',
    },
    logoImage: sanicareLogo,
  },
  {
    name: 'mycare',
    urls: {
      pastillen: 'https://www.mycare.de/online-kaufen/larylin-hustenstiller-d-pastillen-4960257',
      saft: 'https://www.mycare.de/online-kaufen/larylin-husten-stiller-saf-sirup-4759897',
    },
    logoImage: mycareLogo,
  },
  {
    name: 'apo-discounter',
    urls: awinDeeplinks('21216', {
      pastillen: 'https://www.apodiscounter.de/larylin-husten-stiller-24stk-pzn-04960257',
      saft: 'https://www.apodiscounter.de/larylin-husten-stiller-saft-200ml-pzn-04759897',
    }),
    logoImage: apoDiscounterLogo,
  },
  {
    name: 'apo.com',
    urls: awinDeeplinks('25679', {
      pastillen: 'https://www.apo.com/larylin-husten-stiller-24stk-pzn-04960257',
      saft: 'https://www.apo.com/larylin-husten-stiller-saft-200ml-pzn-04759897',
    }),
    logoImage: apoComLogo,
  },
  {
    name: 'medikamente-per-klick',
    urls: {
      pastillen: 'https://www.medikamente-per-klick.de/larylin-husten-stiller-lutschpastillen-24st-04960257',
      saft: 'https://www.medikamente-per-klick.de/larylin-husten-stiller-saft-200ml-04759897',
    },
    logoImage: medikamentePerKlickLogo,
  },
  {
    name: 'VersandApo',
    urls: awinDeeplinks('25685', {
      pastillen: 'https://www.versandapo.de/larylin-husten-stiller-24stk-pzn-04960257',
      saft: 'https://www.versandapo.de/larylin-husten-stiller-saft-200ml-pzn-04759897',
    }),
    logoImage: versandApoLogo,
  },
  {
    name: 'Amazon',
    // Kurzform über die ASIN; Saft: noch kein Link vorhanden.
    urls: {
      pastillen: 'https://www.amazon.de/dp/B00ABGJRZ2',
    },
    logoImage: amazonLogo,
  },
];
