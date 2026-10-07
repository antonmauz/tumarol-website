# Bilder „Anwendung und Dosierung“ (ApplicationSlider)

Ein Bild je Kachel, Dateiname `<produkt>-<motiv>.jpg|png` (klein, Bindestriche,
keine Umlaute), z. B.:

| Produkt    | Kacheln (src/data/applications.ts)                          | Dateien                                                                                                  |
| ---------- | ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| extern     | Teil-/Sitzbad · Umschläge · Spülungen · Säuglings-/Kinderbad · Vollbad | `extern-sitzbad`, `extern-umschlaege`, `extern-spuelungen`, `extern-kinderbad`, `extern-vollbad` |
| konzentrat | Inhalation · Einnahme · Mundspülung · Umschläge · Spülungen · Teil-/Sitzbad | `konzentrat-inhalation`, `konzentrat-einnahme`, `konzentrat-mundspuelung`; Umschläge, Spülungen und Sitzbad nutzen die `extern-*`-Motive |
| repair     | Normale Anwendung · Handpackung über Nacht                  | `repair-auftragen`, `repair-handpackung`                                                                 |

Die Kacheln zeigen das Bild im Format 4:3 (`object-cover`) — Motiv mittig
anlegen, Ränder werden ggf. beschnitten. Einbinden in `src/data/applications.ts`:
Import oben ergänzen und im Eintrag `image` (+ `imageAlt`) setzen.
