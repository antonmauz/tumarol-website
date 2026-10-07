// GA4-Event "pharmacy_click": Links tragen data-pharmacy/data-placement, ein
// delegierter Click-Listener im Layout feuert nicht-blockierend das Event.

/** GA4-Parameter-Slug aus dem Anzeigenamen, z. B. "Shop Apotheke" → "shop-apotheke". */
export function pharmacySlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** AWIN-Affiliate-Link (awin1.com-Weiterleitung, siehe awinDeeplinks in data/pharmacies.ts)? */
export function isAffiliateLink(url: string): boolean {
  return url.includes('awin1.com');
}

/**
 * Ausgabe-URL eines Apotheken-Links. Bei AWIN-Affiliate-Links wird die Platzierung
 * als clickref angehängt, damit AWIN die Klicks nach Website-Stelle aufschlüsselt
 * (gleiche Werte wie data-placement). Direktlinks bleiben unverändert.
 */
export function pharmacyLinkUrl(url: string, placement: string): string {
  if (!isAffiliateLink(url)) return url;
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}clickref=${encodeURIComponent(placement)}`;
}

/** rel-Attribut eines Apotheken-Links: Affiliate-Links zusätzlich als „sponsored“ kennzeichnen (Google-Richtlinie). */
export function pharmacyLinkRel(url: string): string {
  return isAffiliateLink(url) ? 'sponsored noopener noreferrer' : 'noopener noreferrer';
}

/** Feuert das GA4-Event, sofern gtag verfügbar ist — die Navigation wird nie blockiert. */
export function trackPharmacyClick(pharmacy: string, placement: string): void {
  const gtag = (window as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag !== 'function') return;
  try {
    gtag('event', 'pharmacy_click', { pharmacy, placement });
  } catch {
    // Tracking-Fehler niemals an den Klick durchreichen.
  }
}

/** Registriert den delegierten Click-Listener für alle [data-pharmacy]-Links. */
export function initPharmacyClickTracking(): void {
  document.addEventListener('click', (event) => {
    const target = event.target instanceof Element ? event.target : null;
    const link = target?.closest('[data-pharmacy]');
    if (!(link instanceof HTMLElement)) return;
    trackPharmacyClick(link.dataset.pharmacy ?? '', link.dataset.placement ?? '');
  });
}
