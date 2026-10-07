// Erzeugt src/data/icons.ts aus src/assets/images/icons/*.svg; nach jedem Icon-Tausch
// erneut ausführen: node scripts/build-icons.cjs. Entfernt Prolog, Kommentare, <defs>, IDs,
// Maße und Stilattribute; Füllungen/Konturen auf currentColor (Farbe kommt vom Umfeld).
const fs = require('fs');
const path = require('path');

const SRC = path.join(__dirname, '..', 'src', 'assets', 'images', 'icons');
const OUT = path.join(__dirname, '..', 'src', 'data', 'icons.ts');

// Dateiname (ohne Nummern-Suffix) → sprechender Icon-Name.
const NAMES = {
  germany: 'germany',
  group: 'people',
  medal: 'medal',
  ointment: 'tube',
  plant: 'plant',
  wait: 'clock',
  water: 'drops',
};

function clean(svg) {
  let s = svg.replace(/<\?xml[^>]*\?>/g, '').replace(/<!--[\s\S]*?-->/g, '');
  s = s.replace(/<defs[\s\S]*?<\/defs>/g, '');
  s = s.replace(
    /\s(id|xml:space|enable-background|version|xmlns:xlink|xmlns:svg|stroke-miterlimit|stroke-dasharray|stroke-opacity|clip-path|clipPathUnits)="[^"]*"/g,
    '',
  );
  s = s.replace(/\sstyle="([^"]*)"/g, (m, css) => {
    const attrs = [];
    for (const decl of css.split(';')) {
      const [k, v] = decl.split(':').map((x) => x && x.trim());
      if (!k || !v) continue;
      if (['stroke-miterlimit', 'stroke-dasharray', 'stroke-opacity', 'enable-background'].includes(k)) continue;
      if (k === 'fill') attrs.push(`fill="${v === 'none' ? 'none' : 'currentColor'}"`);
      else if (k === 'stroke') attrs.push(`stroke="${v === 'none' ? 'none' : 'currentColor'}"`);
      else attrs.push(`${k}="${v}"`);
    }
    return attrs.length ? ' ' + attrs.join(' ') : '';
  });
  s = s
    .replace(/\sfill="#[0-9a-fA-F]{3,6}"/g, ' fill="currentColor"')
    .replace(/\sstroke="#[0-9a-fA-F]{3,6}"/g, ' stroke="currentColor"');
  // Root: nur viewBox behalten; Klasse/aria setzt iconSvg() beim Einbau.
  s = s.replace(/<svg[^>]*viewBox="([^"]+)"[^>]*>/, (m, vb) => `<svg viewBox="${vb}" fill="none">`);
  s = s.replace(/\s+/g, ' ').replace(/>\s+</g, '><').replace(/<g>\s*<\/g>/g, '').trim();
  // Formen ohne explizite Füllung sind gefüllte Flächen (Root hat fill="none").
  s = s.replace(/<(path|circle|ellipse|rect|polygon)(?![^>]*\sfill=)([^>]*)\/>/g, '<$1 fill="currentColor"$2/>');
  return s;
}

const entries = [];
for (const file of fs.readdirSync(SRC).filter((f) => f.endsWith('.svg')).sort()) {
  const base = file.replace(/_\d+\.svg$/, '').replace(/\.svg$/, '');
  const name = NAMES[base];
  if (!name) {
    console.warn(`Übersprungen (kein Name in NAMES): ${file}`);
    continue;
  }
  entries.push([name, file, clean(fs.readFileSync(path.join(SRC, file), 'utf8'))]);
}

const escape = (s) => s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
const lines = [
  '// GENERIERT von scripts/build-icons.cjs — nicht von Hand bearbeiten.',
  '// Quelle: src/assets/images/icons/*.svg (Farben auf currentColor bereinigt).',
  "// Einbau: <span set:html={iconSvg('plant', 'w-7 h-7')} />",
  '',
  'export const icons = {',
  ...entries.map(([name, file, svg]) => `  /** ${file} */\n  ${name}:\n    '${escape(svg)}',`),
  '} as const;',
  '',
  'export type IconName = keyof typeof icons;',
  '',
  '/** SVG-String mit Größenklasse(n) am Root; dekorativ (aria-hidden). */',
  'export function iconSvg(name: IconName, className: string): string {',
  '  return icons[name].replace(\'<svg \', `<svg class="${className}" aria-hidden="true" `);',
  '}',
  '',
];
fs.writeFileSync(OUT, lines.join('\n'));
console.log(`geschrieben: ${path.relative(process.cwd(), OUT)} (${entries.map((e) => e[0]).join(', ')})`);
