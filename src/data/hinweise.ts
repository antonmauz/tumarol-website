// Erläuterungen zu Fachbegriffen (GACP, GMP), auf die Fließtexte per hochgestelltem Marker
// verweisen: Startseite (Warum-Sektion) und Kamillenanbau-Slider. Gerendert in „Quellen &
// Hinweise“ (SourcesSection); Ziffern bleiben den Produktquellen (produktSources.ts) vorbehalten.

export interface Hinweis {
  /** Sprungziel (id des Listeneintrags), aus dem Text per <a href="#id"> verlinkt. */
  id: string;
  /** Hochgestellter Marker im Text und in der Liste, z. B. "*". */
  marker: string;
  text: string;
}

export const hinweisGacp: Hinweis = {
  id: 'hinweis-gacp',
  marker: '*',
  text: 'GACP: Good Agricultural and Collection Practice – die Leitlinie der Europäischen Arzneimittel-Agentur (EMA) für Anbau, Ernte und Erstverarbeitung von Arzneipflanzen (EMEA/HMPC/246816/2005).',
};

export const hinweisGmp: Hinweis = {
  id: 'hinweis-gmp',
  marker: '**',
  text: 'GMP: Good Manufacturing Practice – die Gute Herstellungspraxis für Arzneimittel nach dem EU-GMP-Leitfaden (EudraLex, Band 4), in Deutschland umgesetzt in der Arzneimittel- und Wirkstoffherstellungsverordnung (AMWHV).',
};

/** Reihenfolge = Reihenfolge in „Quellen & Hinweise“. */
export const hinweise: Hinweis[] = [hinweisGacp, hinweisGmp];

/** Hochgestellter Marker als Link auf die Erläuterung — für Texte, die per
 *  set:html gerendert werden (z. B. kamillenLebenszyklus.ts). Direkt in
 *  .astro-Templates dasselbe Markup als JSX schreiben (siehe index.astro). */
export const hinweisLink = (hinweis: Hinweis, begriff: string): string =>
  `<sup><a href="#${hinweis.id}" class="text-primary hover:underline" aria-label="Erläuterung zu ${begriff}">${hinweis.marker}</a></sup>`;
