# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Chris Hogan  
**Updated:** 2026-09-16  
**Category:** Premium personal brand — author / speaker / coach  
**Implementation:** Astro 7 + Tailwind CSS v4 (`src/styles/global.css`)  
**Design Dials:** Variance 4/10 (Balanced) | Motion 6/10 (Standard) | Density 3/10 (Spacious)

> **Brand override:** Official palette and type stack below supersede any earlier generated suggestions (Cormorant/gold, liquid glass, etc.).

---

## Global Rules

### Color Palette

| Role | Hex / Value | CSS Variable | Tailwind Alias |
|------|-------------|--------------|----------------|
| Obsidian | `#080808` | `--color-base-obsidian` | `bg-obsidian` |
| Canvas | `#FBFBFD` | `--color-base-canvas` | `bg-canvas` |
| Text Primary | `#1D1D1F` | `--color-text-primary` | `text-primary` |
| Text Inverted | `#FFFFFF` | `--color-text-inverted` | `text-inverted` |
| Titanium | `#86868B` | `--color-text-secondary` | `text-titanium` |
| Studio Cobalt | `#0071E3` | `--color-accent-blue` | `bg-cobalt` / `text-cobalt` |
| Burnished Copper | `#C65D21` | `--color-accent-copper` | `bg-copper` / `text-copper` |
| Border Light | `rgba(0,0,0,0.08)` | `--border-light` | `border-subtle` |
| Border Dark | `rgba(255,255,255,0.1)` | `--border-dark` | `border-subtle-dark` |

**Accent rule:** Cobalt + Copper combined coverage **&lt; 5%** of any viewport. Default surfaces are canvas/obsidian + neutrals.

### Typography

| Role | Family | Weight | Tracking / Notes |
|------|--------|--------|------------------|
| Headings | **DM Sans** (`--font-heading`) | 700 (500 available) | H1 `-0.03em`; H2/H3 `-0.025em` |
| Body / CTA / Nav | **Inter** (`--font-body`) | 400 body; **600** CTA/nav | Body `line-height: 1.6`; CTA `letter-spacing: 0.01em` |
| Badges / Metrics | **JetBrains Mono** (`--font-mono`) | 500 | Uppercase + `letter-spacing: 0.05em` (`.text-meta`) |

**Google Fonts (Layout.astro):** DM Sans 500/700 · Inter 400/500/600 · JetBrains Mono 500

### Spacing Variables

*Density: 3/10 — Spacious*

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` | Tight gaps |
| `--space-sm` | `8px` | Icon / inline |
| `--space-md` | `24px` | Standard padding |
| `--space-lg` | `32px` | Section padding |
| `--space-xl` | `48px` | Large gaps |
| `--space-2xl` | `64px` | Section margins |
| `--space-3xl` | `96px` | Hero padding |

### Motion

| Token | Value |
|-------|-------|
| `--ease-standard` | `cubic-bezier(0.22, 1, 0.36, 1)` |
| `--duration-fast` | `150ms` |
| `--duration-base` | `220ms` |
| `--duration-slow` | `320ms` |

Always honor `prefers-reduced-motion`. Prefer opacity/transform micro-interactions; no layout-shifting scale on buttons.

---

## Core Components

| Component | Path |
|-----------|------|
| Button | `src/components/ui/Button.astro` |
| Badge | `src/components/ui/Badge.astro` |
| Card | `src/components/ui/Card.astro` |
| SectionHeader | `src/components/ui/SectionHeader.astro` |
| Layout | `src/layouts/Layout.astro` |

### Button variants
- `primary` — Studio Cobalt fill, white text  
- `copper` — Burnished Copper fill (high-impact only)  
- `secondary` — 1px titanium border, transparent  
- `ghost` — Cobalt text, soft hover wash  

### Badge tones
`neutral` | `cobalt` | `copper` | `obsidian`

### Surfaces
- Default page: `bg-canvas` + `text-primary`  
- Dark blocks: `.theme-obsidian` or `bg-obsidian`  

---

## Style Guidelines

**Direction:** Apple-adjacent editorial precision — flat canvas, extreme-contrast obsidian heroes, sparse cobalt/copper accents. Not glassmorphism-heavy; not cream/serif luxury cliché.

**Landing pattern (recommended):** Hero (brand + one headline + one line + CTA) → Proof strip → Story/chapters → Topics → Testimonials → Final CTA.

**CTA placement:** Hero primary + end-of-section secondary + final climax CTA.

---

## Anti-Patterns (Do NOT Use)

- ❌ Accent overload (cobalt/copper > 5% of UI)
- ❌ Purple/indigo gradient themes
- ❌ Warm cream + terracotta + display serif default AI look
- ❌ Card-heavy heroes / floating badge stickers on hero media
- ❌ Emojis as icons — use SVG (Phosphor / Heroicons)
- ❌ Missing `cursor-pointer` on clickable controls
- ❌ Layout-shifting hover scales
- ❌ Invisible focus states
- ❌ Motion that ignores `prefers-reduced-motion`

---

## Pre-Delivery Checklist

- [ ] Tokens only from `global.css` (no one-off hex in components)
- [ ] Accents used sparingly
- [ ] Focus rings visible (`--focus-ring`)
- [ ] Contrast ≥ 4.5:1 on body text (canvas + obsidian)
- [ ] Responsive: 375 / 768 / 1024 / 1440
- [ ] Skip link works; `#main` target present
- [ ] Reduced motion: no hover translate / no scroll choreography
