// Gemeinsame Mechanik aller scroll-snap-Slider: seitenweise blättern, Pfeile nur bei
// scrollbarem Track (ResizeObserver), Anfang/Ende deaktivieren. Markup: [data-snap-slider]
// > [data-slider-track] (slider-bleed); Pfeile (SliderControls) im Root oder der <section>.

const READY = 'data-snap-slider-ready';

/** Wird der fokussierte Pfeil am Anfang/Ende deaktiviert, wandert der Fokus auf den
 *  Gegenpfeil — sonst fiele er auf <body> und Tastaturnutzer verlören ihre Position. */
export function keepFocus(
  focused: Element | null,
  prev: HTMLButtonElement | null,
  next: HTMLButtonElement | null,
): void {
  if (focused === prev && prev?.disabled && next && !next.disabled) next.focus();
  else if (focused === next && next?.disabled && prev && !prev.disabled) prev.focus();
}

function initSnapSlider(root: HTMLElement): void {
  if (root.hasAttribute(READY)) return;
  const track = root.querySelector<HTMLElement>('[data-slider-track]');
  if (!track) return;
  root.setAttribute(READY, '');

  const scope: ParentNode = root.closest('section') ?? root;
  const controls = scope.querySelector<HTMLElement>('[data-slider-controls]');
  const prev = scope.querySelector<HTMLButtonElement>('[data-slider-prev]');
  const next = scope.querySelector<HTMLButtonElement>('[data-slider-next]');

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const updateButtons = () => {
    const maxScroll = track.scrollWidth - track.clientWidth - 1;
    const focused = document.activeElement;
    if (prev) prev.disabled = track.scrollLeft <= 0;
    if (next) next.disabled = track.scrollLeft >= maxScroll;
    keepFocus(focused, prev, next);
  };

  // Pfeile nur, wenn es etwas zu scrollen gibt — entscheidet sich erst im
  // Browser (Viewport-Breite), nicht serverseitig anhand der Kartenzahl.
  const updateControls = () => {
    const scrollable = track.scrollWidth > track.clientWidth + 1;
    controls?.classList.toggle('hidden', !scrollable);
    controls?.classList.toggle('flex', scrollable);
    updateButtons();
  };

  // Seitenweise blättern: sichtbare Breite plus Spaltenabstand, sonst steht die
  // linke Karte um den gap versetzt; den Innenabstand aus slider-bleed herausrechnen.
  const page = (direction: number) => {
    const styles = getComputedStyle(track);
    const gap = parseFloat(styles.columnGap) || 0;
    const padding = (parseFloat(styles.paddingLeft) || 0) + (parseFloat(styles.paddingRight) || 0);
    track.scrollBy({
      left: direction * (track.clientWidth - padding + gap),
      behavior: reduceMotion.matches ? 'auto' : 'smooth',
    });
  };

  prev?.addEventListener('click', () => page(-1));
  next?.addEventListener('click', () => page(1));
  track.addEventListener('scroll', updateButtons, { passive: true });
  new ResizeObserver(updateControls).observe(track);
  updateControls();
}

export function initSnapSliders(selector = '[data-snap-slider]'): void {
  document.querySelectorAll<HTMLElement>(selector).forEach(initSnapSlider);
}
