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
| `herbs.js` | Featured + full catalog data |
| `app.js` | Search, detail modal, catalog reveal |
| `hero.jpg` / `hero-garden.jpg` | Mock asset / cropped garden hero |

## Behavior

- Click a featured or catalog herb for verse, traditional uses, prep note, and a strong educational disclaimer
- **Reveal the Full Biblical Pharmacy** expands ~12 more Bible-linked plants
- Search filters by name or benefit
- Mobile-responsive layout

## Important

This project is **educational / historical only**. It does not diagnose conditions or advise anyone to stop medications. Always consult a qualified clinician for health decisions.
