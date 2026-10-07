// JSON-LD sicher in <script type="application/ld+json"> einbetten: JSON.stringify escaped kein
// "<", ein "</script>" in Titeln würde das Script beenden; "<" wird daher als \u003c
// ausgegeben (bleibt gültiges JSON).
export function jsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
