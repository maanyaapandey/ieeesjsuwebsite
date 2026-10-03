# IEEE SJSU — Electric Circuit Redesign

This package contains two versions of the same redesigned IEEE SJSU website:

1. **Next.js source** (`src/`, `public/`) — the maintainable app version with routes `/`, `/events`, and `/membership`.
2. **Standalone static build** (`static/`) — opens and runs without npm or a framework build. Serve the `static` folder from any ordinary web server.

## Design system
- Exact uploaded IEEE logo is used as the brand asset; the raster is not redrawn.
- Logo gleam is generated with an animated light layer masked to the uploaded logo shape.
- Circuitry is custom SVG/CSS, not pasted stock imagery.
- Circuit paths use layered metal trace / blue bloom / white-core signal animation.
- Animated junction nodes and circuit continuity are used across hero, content sections, cards, calendar, sponsorship, and footer.
- Real IEEE SJSU event photography remains visible and readable; effects are kept around, not over, important content.
- Reduced-motion accessibility is supported.

## Pages
- `/` — title/hero, chapter overview, stats, activities, calendar, sponsorship packet, tiers, past partners.
- `/events` — featured events, complete uploaded photo archive grouped into workshops/projects/industry/talks/networking, live calendar, Discord CTA.
- `/membership` — signup, membership tiers, chapter demographics, benefits, ENGR 376 lab hours, contact/Discord CTAs.
- `/projects` redirects to `/events` in the Next.js version.

## Standalone version
From this directory:

```bash
cd static
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Next.js version
The app targets Next.js 15.1.6 + React 19.

```bash
npm install
npm run dev
```

All local asset references were checked. The standalone pages and JS/CSS were served locally and returned HTTP 200 during validation.
