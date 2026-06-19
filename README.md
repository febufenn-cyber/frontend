# Pet Marketplace

India's verified pet marketplace — built as an award-standard, share-ready demo.
Warm editorial dark art direction, a **real pet-video hero**, real curated pet photography,
and one signature interaction (the **Match Deck**). Mirrors the domain of the source pet
marketplace (categories, trust badges, listing fields, sections) — elevated to the bar.

See [`DESIGN.md`](./DESIGN.md) for the full art direction, palette tokens, type roles,
and the section-by-section scroll choreography table.

## Stack

- **Next.js 16** (App Router) · **TypeScript** · **Tailwind v4**
- **GSAP 3.15** — ScrollTrigger, Draggable + Inertia, DrawSVG, Flip, SplitText, CustomEase, MotionPath
- **Lenis** smooth scroll, wired to GSAP's ticker as one shared rAF
- **motion/react** for UI state transitions (toast, error presence) only

## Run

```bash
npm install
npm run dev -- -p 3007      # http://localhost:3007
npm run build && npm start  # production
```

Node 18.18+ required. All copy is synthetic and lives in typed constants under `src/data/`.
Hero footage is local at `public/hero-pets.mp4`; listing/seller imagery is curated Unsplash,
passed through one consistent duotone grade.

## What to look at (demo script)

1. **Load the page** — a sub-second knot-mark preloader, then the hero headline rises line-by-line
   over **real pet video**, warm-graded into the palette with saffron light and a legibility scrim.
2. **The Match Deck** (section 02) — a deck of verified listings *deals out* into a shelf you can
   **drag and fling**; verified seals draw themselves on. Tap a heart and the photo **flies into the
   shortlist tray** (bottom-right counter ticks up).
3. **Why verified** (section 03) — the three trust pillars and five listing badges
   (Verified Seller · Location Verified · Vaccination Records · Home Raised · KCI Certified).
4. **Begin the search** — type a bad number for inline validation, then a valid one for the optimistic
   toast. ₹ values use en-IN grouping; phone is +91 masked.
5. **Mistype the URL** (e.g. `/oops`) — an on-brand 404 with a paw wandering along a MotionPath.

## Notes

- Watch the **left index rail** (`/01`–`/07`) and its brass progress spine track your scroll.
- `prefers-reduced-motion` is fully honored: video pauses, pins/draws/drifts drop to plain fades,
  content always visible.
- OG image (`/opengraph-image`) and favicon are code-generated in the site's exact art direction.

---

Crafted by [Robofox AI](https://robofox.online).
