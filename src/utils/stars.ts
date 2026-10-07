// Sterne-Darstellung für ReviewCard und ReviewStars: ab 4,8 fünf volle Sterne (der exakte
// Wert steht daneben); halbe Sterne als CSS-Überlagerung statt Glyph, weil das Zeichen
// in vielen System-Fonts fehlt. Ergebnis ist HTML für set:html (nur eigene Daten).
export function starDisplay(rating: number): string {
  const effective = rating >= 4.8 ? 5 : rating;
  const fullStars = Math.floor(effective);
  const hasHalfStar = effective % 1 !== 0;

  let stars = '';
  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars += '<span class="text-yellow-400">★</span>';
    } else if (i === fullStars && hasHalfStar) {
      stars +=
        '<span class="relative inline-block text-neutral-300">★<span class="absolute inset-0 w-1/2 overflow-hidden text-yellow-400" aria-hidden="true">★</span></span>';
    } else {
      stars += '<span class="text-neutral-300">★</span>';
    }
  }
  return stars;
}
