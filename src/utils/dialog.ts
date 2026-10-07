// Gemeinsame Dialog-Mechanik für PharmacyDrawer und ReviewsModal:
// Fokusfalle (nur sichtbare Elemente), Scroll-Sperre und `inert` für den
// Seitenhintergrund, damit Screenreader und Tab-Reihenfolge im Dialog bleiben.

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

/** Sichtbare fokussierbare Elemente im Container (display:none-Zweige ausgenommen). */
export function getFocusable(container: HTMLElement): HTMLElement[] {
  return Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
    (el) => el.getClientRects().length > 0,
  );
}

/** Tab/Shift+Tab im Container halten; im keydown-Handler des Containers aufrufen. */
export function trapFocus(container: HTMLElement, e: KeyboardEvent): void {
  if (e.key !== 'Tab') return;
  const focusable = getFocusable(container);
  if (!focusable.length) {
    e.preventDefault();
    return;
  }
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  const active = document.activeElement;
  if (e.shiftKey && (active === first || !container.contains(active))) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && (active === last || !container.contains(active))) {
    e.preventDefault();
    first.focus();
  }
}

/** Alle Body-Kinder außer den angegebenen Wurzeln inert schalten (oder zurücknehmen). */
export function setBackgroundInert(roots: Element[], inert: boolean): void {
  for (const child of Array.from(document.body.children)) {
    if (roots.some((root) => root === child || root.contains(child) || child.contains(root))) continue;
    if (inert) child.setAttribute('inert', '');
    else child.removeAttribute('inert');
  }
}

/** Hintergrund-Scrollen sperren (overflow:hidden am Body). */
export function lockScroll(): void {
  document.body.style.overflow = 'hidden';
}

export function unlockScroll(): void {
  document.body.style.overflow = '';
}
