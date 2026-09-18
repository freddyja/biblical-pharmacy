# Biblical Pharmacy

A polished static educational web app exploring herbs and plants mentioned in Scripture. Inspired by a golden-hour garden mockup: deep forest green, cream-gold serif typography, circular vine-wreath herb cards, and a leaf-shaped CTA.

## Open locally

Open `index.html` in a browser, or serve the folder:

```bash
cd /workspace/biblical-pharmacy
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Files

| File | Role |
|------|------|
| `index.html` | Structure, modal, accessibility hooks |
| `styles.css` | Mock-matched theme (Cormorant Garamond + Montserrat) |
| `herbs.js` | Featured + full catalog data (educational monographs) |
| `app.js` | Search, detail modal, catalog reveal |
| `hero.jpg` / `hero-garden.jpg` | Mock asset / cropped garden hero |
| `docs/four-herb-monographs.md` | Hyssop, frankincense, myrrh, and aloes |
| `docs/remaining-twelve-monographs.md` | The other twelve catalog / featured plants |
| `docs/master-herb-inventory.md` | Tracking list for full-catalog expansion |

Full-catalog expansion is underway per [`docs/master-herb-inventory.md`](docs/master-herb-inventory.md). New entries are **educational only** and original content—not copied from any book.

## Behavior

- Click a featured or catalog herb for a full educational monograph (verse, botanical summary, ancient uses, modern research, side effects, parts used, preparations, and traditional dosage ranges) plus a strong educational disclaimer
- **Reveal the Full Biblical Pharmacy** expands the remaining Bible-linked plants
- Search filters by name, benefit, verse, and monograph text
- Mobile-responsive layout

## Important

This project is **educational / historical only**. It does not diagnose conditions or advise anyone to stop medications. Always consult a qualified clinician for health decisions.
