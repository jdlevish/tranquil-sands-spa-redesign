# Tranquil Sands Scalp Spa — Design Document

## Three Stylistic Approaches (Considered)

**1. Desert Sanctuary** (probability: 0.07)
Warm travertine tones, arched architecture, limewash walls. Aman Resorts meets Santa Fe adobe.

**2. Japandi Mineral** (probability: 0.05)
Pale ivory and espresso, extreme restraint, wabi-sabi imperfection. Aesop meets Kyoto.

**3. Mediterranean Atelier** (probability: 0.08)
Warm plaster, olive trees, golden light. Flamingo Estate meets Four Seasons Spa.

---

## Chosen Approach: Desert Sanctuary × Japandi Mineral

A synthesis of the two strongest directions — the warmth and materiality of the Coachella Valley desert fused with the restraint and intentionality of Japandi minimalism. This is not a spa website. It is an invitation into a sanctuary.

### Design Movement
Quiet Luxury — Desert Modern × Wabi-Sabi × Organic Minimalism. Inspired by Aman Resorts, Aesop, Four Seasons Spa, and the landscape of Palm Desert, California.

### Core Principles
1. **Restraint over decoration** — every element earns its place; nothing is decorative for its own sake
2. **Tactile warmth** — the palette, typography, and imagery should feel like warm stone and linen, not a screen
3. **Breath and space** — generous whitespace is the primary design tool; sections breathe
4. **Emotion before information** — the visitor feels before they read

### Color Philosophy
The palette is drawn from the Coachella Valley at golden hour: warm ivory, natural sand, travertine, clay, warm taupe, muted olive, and espresso brown. No bright whites, no shiny metallics, no cool tones. Every color should feel like it was found in nature, not manufactured.

- `--color-ivory: oklch(0.975 0.012 85)` — warm ivory background
- `--color-cream: oklch(0.955 0.018 80)` — soft cream sections
- `--color-sand: oklch(0.88 0.035 75)` — natural sand accents
- `--color-travertine: oklch(0.82 0.04 70)` — travertine mid-tone
- `--color-taupe: oklch(0.65 0.04 65)` — warm taupe text
- `--color-clay: oklch(0.55 0.06 55)` — clay accent
- `--color-olive: oklch(0.52 0.055 120)` — muted olive
- `--color-espresso: oklch(0.28 0.03 55)` — espresso headings
- `--color-matte-black: oklch(0.18 0.01 55)` — matte black accents

### Layout Paradigm
Asymmetric editorial magazine layout. Full-bleed photography sections alternate with generous text-only breathing sections. No conventional grid boxes. Sections use offset compositions — image left with text floating right, or full-width image with text overlaid at the bottom edge. Navigation is minimal and transparent.

### Signature Elements
1. **Thin horizontal rules** in travertine — used sparingly as section separators, never as decoration
2. **Large-scale serif numerals** for service numbering — editorial, not functional
3. **Offset image + text compositions** — never centered, always asymmetric

### Interaction Philosophy
Slow, deliberate, unhurried. Hover states are subtle opacity shifts. Scroll-triggered fade-ins are gentle (not dramatic). No parallax distortion. The site should feel like turning pages in a luxury magazine, not navigating an app.

### Animation
- Entrance: `opacity: 0 → 1` with `translateY(20px → 0)` over 800ms `cubic-bezier(0.23, 1, 0.32, 1)`
- Stagger: 100ms between grouped elements
- Hover on links/buttons: `opacity: 0.7` transition 200ms ease-out
- Nav: transparent → `background: rgba(warm-ivory, 0.92) backdrop-blur` on scroll
- No bounce, no spring, no dramatic scale transforms
- Respect `prefers-reduced-motion`

### Typography System
- **Display / Headings**: `Cormorant Garamond` — elegant, high-contrast serif with editorial gravitas. Used at large scale (60–120px) with generous letter-spacing.
- **Body / UI**: `DM Sans` — clean, humanist sans-serif. Light weight (300) for body, regular (400) for UI labels.
- **Hierarchy**: H1 at 5–7rem, H2 at 3–4rem, H3 at 1.5–2rem, body at 1rem/1.75 line-height
- **Letter-spacing**: Headings at 0.02–0.05em; all-caps labels at 0.15–0.2em

### Brand Essence
*The only scalp spa in the desert that feels like a five-star retreat.* — Restorative. Intentional. Timeless.

### Brand Voice
Warm, calm, unhurried. Speaks like a trusted confidant, not a salesperson. Headlines are declarative and poetic. CTAs are invitations, not commands.
- Example headline: *"Where the desert teaches you to be still."*
- Example CTA: *"Reserve your ritual"* (not "Book Now")

### Wordmark & Logo
A single abstract arc — suggesting both a scalp's crown and a desert dune horizon — rendered as a thin espresso-brown line. No text in the mark. The wordmark is set in Cormorant Garamond, spaced wide, in espresso brown.

### Signature Brand Color
**Travertine** — `oklch(0.82 0.04 70)` — the warm, mineral stone tone that anchors the entire palette.

---

## Style Decisions
- Navigation: transparent over hero, transitions to warm ivory/92% opacity with backdrop-blur on scroll
- Buttons: pill shape, espresso border, no fill (ghost style), hover fills with espresso at 8% opacity
- Section rhythm: hero → philosophy → services → ritual detail → about → testimonial → booking → footer
- Photography: always full-bleed or large-format; never thumbnails or grids of small images
- Icons: thin stroke (1.5px), never filled, espresso color
