# Page Override: Home

> Overrides `MASTER.md` for the homepage only.

## Hero Direction

**Concept:** Mainstage Authority — cinematic full-bleed keynote photography, not a portfolio intro.

**Composition (first viewport only):**
1. Brand name as the dominant text signal (`Chris Hogan`)
2. One headline
3. One supporting sentence
4. One CTA group (primary + secondary)
5. One full-bleed stage photograph

**Do not put in the hero:** stats, logo strips, floating badges, cards, schedule chips, or inset media panels.

## Photography

| Asset | Role | Treatment |
|-------|------|-----------|
| `/images/hero-chris-keynote.webp` (+ `.jpg`) | Primary hero plane | Upscaled 2.5× Lanczos + unsharp from `12389.jpg`; light grade only |
| `/12391.jpg` | Optional post-fold proof (not in hero) | Scale / crowd social proof |
| `/12394.jpg` | Avoid as hero primary | Studio portrait reads as portfolio |

## Color / Gradient

- Base: Obsidian `#080808`
- Scrim: left→right and bottom→top using obsidian only (no purple, no indigo)
- **Studio Cobalt** (`#0071E3`): primary CTA (`Book Chris`), link focus accents
- **Burnished Copper** (`#C65D21`): sparse meta accent (role rule) — paired with cobalt, not replacing it
- Combined accent coverage &lt; 5%

## Typography (hero)

- Nav wordmark: **DM Sans** 700, tight tracking
- Brand display: DM Sans 700
- Role: JetBrains Mono uppercase + copper rule
- Headline: DM Sans 500
- Support: Inter 400, `line-height: 1.65`, ~36–38ch measure
- Nav links / CTAs: Inter 500–600

## Motion (2–3)

1. Content fade/rise on load (stagger ~80ms, y ≤ 16px)
2. Subtle image ken-burns, paused under reduced motion
3. CTA hover brightness/border only (no layout shift)

## Copy Anchors (from brand research)

- Brand: Chris Hogan
- Role line: Author · Speaker · Coach
- Headline focus: purpose → leadership → execution
- Tagline source: think bigger, lead stronger, live with purpose
