# Produktbilder

Ein Unterordner je Präparat, benannt nach dem internen Produkt-Key
(`src/data/productKeys.ts`):

| Ordner        | Präparat                          |
| ------------- | --------------------------------- |
| `pastillen/`  | Larylin® Husten-Stiller Pastillen |
| `saft/`       | Larylin® Husten-Stiller Saft      |

Zwei Bildarten liegen nebeneinander im selben Ordner:

- **Packshots** — freigestellt mit weichem Schatten, transparent, sprechend benannt
  (`larylin-pastillen-faltschachtel.png`, `larylin-saft-faltschachtel.png`).
  Für die Produktkarten und den Apotheken-Drawer.
- **Galerie-Slides** — fertige Marketing-Motive (Packshot, Herkunft, Wirkung,
  Anwendung) mit weißem Grund und Text im Bild, nummeriert in Slider-Reihenfolge
  (`larylin-pastillen-1.png` … `-4.png`, 1500×1500). Nur für den Bild-Slider der
  Produktseite. Das Normalisierungs-Skript lässt sie aus (Endung `-<Zahl>.png`).

**Dateinamen:** Produkt-Präfix, klein, Bindestriche, keine Umlaute; Packshots
sprechend nach Motiv, Slides nummeriert.

**Verwendung** (Zuordnung in `src/data/productImages.ts`):

| Stelle                                  | Motiv                                |
| --------------------------------------- | ------------------------------------ |
| Produktkarte, Ruhezustand (`cardFront`) | Packshot: nur die Faltschachtel; auch im Apotheken-Drawer |
| Produktkarte, Hover (`cardHover`)       | Packshot: Faltschachtel mit Inhalt (Beutel / Flasche / Tube) |
| Bild-Slider Produktseite (`gallery`)    | die nummerierten Slides, Reihenfolge = Slider-Reihenfolge |

Der Startseiten-Hero nutzt keine Packshots aus diesem Ordner, sondern ein
Headermotiv mit einkomponierten Packungen
(`src/assets/images/hero/kamillin-header.jpg`).

**Einbinden:** ausschließlich über `src/data/productImages.ts` — dort Import
ergänzen und im Produkt-Eintrag mit Alt-Text eintragen. Die Komponenten
importieren keine Bilder direkt. Fehlt ein Bild, bleibt `produkt-platzhalter.png`
sichtbar.

**Format:** Packshots als PNG mit Transparenz (die Karten sind gelb — weißer
Bildhintergrund würde als Fläche sichtbar). Slides quadratisch, weißer Grund
(der Slider hat weißen Grund).

**Nach dem Ablegen neuer Packshots einmal ausführen:**

```
node scripts/normalize-product-images.cjs
```

Das Skript schneidet leere Ränder ab, passt das Motiv maximal ein und setzt es
unten bündig auf eine gemeinsame quadratische 1200×1200-Leinwand. So
stehen alle Faltschachteln auf derselben Höhe und sind gleich groß. Der Hover-
Versatz nach oben kommt aus dem CSS (`--product-card-lift` in ProductHighlight).
