// Grobe Lesezeit-Schätzung (Wortzahl / Lesegeschwindigkeit); Markdown-Syntax
// wird bewusst nicht entfernt — für "X Min." genau genug.

const WORDS_PER_MINUTE = 200;

function readingTimeMinutes(text: string, wpm = WORDS_PER_MINUTE): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / wpm));
}

/** Anzeige-Label, z. B. "3 Min. Lesezeit". */
export function readingTimeLabel(text: string): string {
  return `${readingTimeMinutes(text)} Min. Lesezeit`;
}
