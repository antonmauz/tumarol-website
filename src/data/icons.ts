// GENERIERT von scripts/build-icons.cjs — nicht von Hand bearbeiten.
// Quelle: src/assets/images/icons/*.svg (Farben auf currentColor bereinigt).
// Einbau: <span set:html={iconSvg('pastille', 'w-7 h-7')} />

export const icons = {
  /** drop.svg */
  drop:
    '<svg viewBox="0 0 24 24" fill="none"><path d="M12 2.5C9.2 6.6 5.5 10.9 5.5 14.8a6.5 6.5 0 0 0 13 0c0-3.9-3.7-8.2-6.5-12.3Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M9 15.2a3 3 0 0 0 2.6 3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  /** pastille.svg */
  pastille:
    '<svg viewBox="0 0 24 24" fill="none"><ellipse cx="12" cy="10.5" rx="9" ry="4.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M3 10.5v2.2c0 2.5 4 4.5 9 4.5s9-2 9-4.5v-2.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M7.5 9.4c1-.8 2.6-1.3 4.5-1.4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
} as const;

export type IconName = keyof typeof icons;

/** SVG-String mit Größenklasse(n) am Root; dekorativ (aria-hidden). */
export function iconSvg(name: IconName, className: string): string {
  return icons[name].replace('<svg ', `<svg class="${className}" aria-hidden="true" `);
}
