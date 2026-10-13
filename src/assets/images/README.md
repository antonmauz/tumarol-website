# Bilder zur Website hinzufügen

Konvention für **alle** Bilder der Larylin®-Website. Immer die Astro-Komponente
`<Image />` aus `astro:assets` verwenden – **nie** rohe `<img>`-Tags. So werden
Bilder automatisch optimiert (Komprimierung, modernes Format, Lazy-Loading) und
das Seitenverhältnis bleibt ohne Layout-Shift korrekt.

---

## 1. Originaldatei ablegen

Lege die Originaldatei in den passenden Unterordner von `src/assets/images/`:

| Ordner       | Wofür                                                        | Standard-Ladeverhalten |
| ------------ | ------------------------------------------------------------ | ---------------------- |
| `hero/`      | Große Bilder im ersten sichtbaren Bereich (above the fold)   | `eager`                |
| `products/`  | Packshots und Galerie-Slides (Faltschachtel, Flasche, Blister)| je nach Position       |
| `backgrounds/` | Hintergrundflächen (Produktkarten, Vertrauensbanner)       | `lazy` (Standard)      |
| `social/`    | Logos verbundener Marken (Footer: Korodin, Antihydral)        | `lazy`                 |
| `logo/`      | Larylin- und Robugen-Logos (Navigation, Footer)              | Navigation `eager`     |
| `apologos/`  | Apotheken-Logos (Drawer, Bewertungen; `src/data/pharmacies.ts`) | `lazy`              |
| `icons/`     | SVG-Icons; `node scripts/build-icons.cjs` erzeugt `src/data/icons.ts` | inline (kein Bild) |

> **Warum `src/assets/` und nicht `public/`?**
> Nur Bilder aus `src/assets/` werden von Astro **optimiert** (Größe, `width`/`height`,
> modernes Format). Bilder aus `public/` werden 1:1 **unoptimiert** ausgeliefert.

**Dateinamen:** klein, mit Bindestrichen, sprechend – z. B. `produkt-hero-flasche.jpg`.
**Formate:** JPG/PNG/WebP für Fotos.

---

## 2. Bild einbinden mit `<Image />`

### a) Import + Basis

```astro
---
import { Image } from 'astro:assets';
import packshot from '../assets/images/products/produkt-platzhalter.png';
---

<Image src={packshot} alt="Beschreibung des Packshots" />
```

Bei einem lokalen Import liest Astro **`width` und `height` automatisch aus der
Originaldatei**. Das Seitenverhältnis stimmt dadurch immer – die Maße müssen nicht
von Hand gesetzt werden.

### b) Above the fold → `loading="eager"`

Nur für Bilder, die **sofort sichtbar** sind (Hero ganz oben):

```astro
<Image src={heroBild} alt="…" loading="eager" fetchpriority="high" />
```

### c) Weiter unten → lazy (Standard)

Alle Bilder, die **erst beim Scrollen** erscheinen: `loading` weglassen
(Astro lädt standardmäßig `lazy`) oder explizit setzen:

```astro
<Image src={inhaltsBild} alt="…" loading="lazy" />
```

### d) Anzeigegröße ändern (Seitenverhältnis bleibt erhalten)

Zum Skalieren **nur `width`** angeben – Astro berechnet die `height` passend:

```astro
<Image src={bild} alt="…" width={400} />
```

> ⚠️ `width` **und** `height` nur zusammen setzen, wenn beide exakt dem
> Original-Seitenverhältnis entsprechen – sonst wird das Bild verzerrt.

---

## 3. Checkliste pro Bild

- [ ] Datei liegt in `src/assets/images/<kategorie>/`
- [ ] `<Image />` aus `astro:assets` (kein rohes `<img>`)
- [ ] Aussagekräftiger deutscher `alt`-Text (oder `alt=""` nur bei rein dekorativen Bildern)
- [ ] `loading="eager"` **nur** above the fold; sonst lazy (Standard)
- [ ] Maße aus dem Import übernommen (kein verzerrtes Seitenverhältnis)

---

## 4. SVGs

Kleine Vektor-Icons werden hier meist **inline** als `<svg>` eingebaut (siehe
bestehende Komponenten). SVG-Grafiken, die als Bild dienen, können importiert und
ebenfalls über `<Image />` eingebunden werden.

---

## 5. Bestehende Vorlagen im Code

Diese Dateien nutzen `<Image />` bereits korrekt – gut zum Abschauen:

- `src/components/ProductImageSlider.astro` – `eager` für die 1. Slide, `lazy` für den Rest
- `src/components/PharmacyDrawer.astro`
- `src/pages/index.astro`

> Produktbilder: ein Unterordner je Präparat unter `src/assets/images/products/`
> (siehe README dort); Einbindung ausschließlich über `src/data/productImages.ts`.
