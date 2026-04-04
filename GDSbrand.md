# Gary Does Strategy — Brand Guidelines
**GDS · Fractional AI Advisory · Dubai & UK**

---

## 1. Brand Identity

### Name Variants
| Use | Text |
|-----|------|
| Full legal name | Gary Does Strategy |
| Short mark | GDS |
| Trading as | Gary Does Strategy Ltd |
| Personal brand | Gary Quigley |
| Tagline | Different Thinking. Better Systems. |
| Sub-tagline | Embedded. Not Arms-Length. |
| Location line | Fractional AI Advisory · Dubai & UK |

### Brand Positioning
Gary Does Strategy is the personal brand of Gary Quigley — a Fractional AI Advisor embedded inside leadership teams. The brand communicates:
- **Precision** — operational systems thinking, not buzzwords
- **Directness** — no decks, no vanishing acts, real implementation
- **Neurodivergent edge** — sees patterns others miss
- **Senior judgment at fractional cost**

---

## 2. Colour Palette

### Primary Colours
| Name | Hex | CSS Variable | Usage |
|------|-----|--------------|-------|
| Ink | `#0F0F0F` | `--ink` | Primary text, borders, backgrounds |
| Beige (BG) | `#F0EDE8` | `--bg` | Light background, primary page colour |
| Red (Accent) | `#D90000` | `--accent` | CTAs, highlights, section numbers, hover states |
| Yellow | `#FFD600` | `--yellow` | Secondary accent, stamps, offset shadows |

### Dark Zone Colours
| Name | Hex | CSS Variable | Usage |
|------|-----|--------------|-------|
| Dark Surface | `#181818` | `--dark-surface` | Dark section card backgrounds |
| Dark Border | `#2A2A2A` | `--dark-border` | Borders within dark zones |
| Dark Muted | `#999999` | `--dark-muted` | Secondary text on dark backgrounds |
| Muted | `#555555` | `--muted` | Secondary text on light backgrounds |

### Colour Rules
- **Max 2 colours** in any single design application
- **No gradients** — flat, solid colour only
- **No rounded corners** — all geometry is angular
- Primary pairing: Ink + Beige (light mode)
- Dark mode pairing: Ink + White text
- Accent pairings: Red on Ink, Yellow on Ink, Red on Beige
- Offset shadow colour: Yellow on dark elements, Red on light elements

---

## 3. Typography

### Typefaces
| Role | Family | Weights | CSS Variable | Usage |
|------|--------|---------|--------------|-------|
| Display / Heading | Bebas Neue | 400 only | `--font-bebas` | Hero headlines, section numbers, stats, large impact text |
| UI / Labels | Barlow Condensed | 400, 600, 700, 900 | `--font-barlow-condensed` | Navigation, buttons, tags, eyebrows, captions |
| Body | Barlow | 400, 500, 600 | `--font-barlow` | Body copy, descriptions, paragraphs |

### Type Scale
| Element | Font | Size | Weight | Tracking | Transform |
|---------|------|------|--------|----------|-----------|
| Hero headline | Bebas Neue | `clamp(4.5rem, 12vw, 11rem)` | 400 | `tracking-wide` | — |
| Section headline | Bebas Neue | `clamp(1.8rem, 4vw, 3rem)` | 400 | `tracking-wide` | UPPERCASE |
| Section number tag | Bebas Neue | `1.1rem` | 400 | `0.08em` | — |
| Stats / big numbers | Bebas Neue | `clamp(2.2rem, 4.5vw, 3.8rem)` | 400 | — | — |
| CTA headline | Bebas Neue | `clamp(4rem, 10vw, 10rem)` | 400 | `tracking-wide` | UPPERCASE |
| Button text | Barlow Condensed | `0.8rem` | 900 | `0.15em` | UPPERCASE |
| Eyebrow / label | Barlow Condensed | `0.7rem` | 700 | `0.22em` | UPPERCASE |
| Caption / tag | Barlow Condensed | `0.6rem` | 700 | `0.2em` | UPPERCASE |
| Body copy | Barlow | `1rem–1.125rem` | 400 | — | — |
| Body lead | Barlow | `1.25rem` | 500 | — | — |
| Small print | Barlow Condensed | `0.75rem` | 700 | `0.12em` | UPPERCASE |

### Typography Rules
- Headlines always UPPERCASE when using Bebas Neue
- Never use italic on display type
- Line height for large headlines: `0.92–0.95`
- Line height for body: `1.65–1.75` (`leading-relaxed`)
- Ghost/outline text: `WebkitTextStroke: '3px #0F0F0F'`, `color: transparent`
- Yellow highlight on word: `<span class="bg-yellow text-ink px-3 inline-block">`
- Red accent word: `class="text-accent"`

---

## 4. Spacing & Layout

### Page Structure
- Navigation height: `56px` (h-14)
- Ticker strip height: `~22px` (two rows)
- Total header offset: `108–110px`
- Horizontal padding: `px-6 md:px-12 lg:px-20` (24px / 48px / 80px)
- Section vertical padding (large): `py-20 md:py-28` (80px / 112px)
- Section vertical padding (small): `py-20 md:py-20` (80px)

### Grid System
- Single column (mobile): full width with `px-6`
- Two column (desktop): `md:grid-cols-2`, `md:grid-cols-[1fr_340px]`, `md:grid-cols-[2fr_1fr]`
- Three column (desktop): `md:grid-cols-3`
- Hero layout: `md:grid-cols-[1fr_400px] lg:grid-cols-[1fr_460px]`

### Border Weights
| Weight | Usage |
|--------|-------|
| `3px solid` | Section borders, card outer borders, nav borders |
| `2px solid` | Inner grid dividers, card inner borders |
| `1px solid` | Subtle dividers, credential lists |

---

## 5. Component Patterns

### Section Header Bar
Every section opens with an identical bar:
```
[NUMBER] | [SECTION TITLE]
```
- 3px border top and bottom
- Section number in Bebas Neue red (light) or yellow (dark)
- Border-right separating number from title
- Title in Bebas Neue, `2xl–3xl`
- Numbers run: 00, 01, 02, 03, 04, 05, 06, 07

### Buttons
| Class | Background | Text | Border | Shadow |
|-------|------------|------|--------|--------|
| `btn-primary` | Ink | Beige | 3px ink | 4px red offset |
| `btn-red` | Red | White | 3px red | 4px yellow offset |
| `btn-ghost-light` | Transparent | Ink | 3px ink | none |
| `btn-ghost-dark` | Transparent | White | 3px white/30 | none |

**Hover behaviour:** Shadow disappears, element translates `4px, 4px` to fill the gap. `btn-primary` fills red on hover.

### Offset Shadow System
The site's signature visual motif — an element with a solid background has a same-size shadow offset `4–8px` bottom-right:
- Button: `box-shadow: 4px 4px 0 var(--accent)` (red) or `4px 4px 0 var(--yellow)`
- Cards: `box-shadow: 6px 6px 0 #D90000`
- Large image frames: `box-shadow: 8px 8px 0 #D90000`
- Stamps: `box-shadow: 4px 4px 0 #0F0F0F`

### Diamond Accent
Small rotated square used as a decorative corner detail:
```css
width: 12–14px; height: 12–14px;
border: 2px solid var(--accent);
transform: rotate(45deg);
position: absolute; top: 12px; right: 12px;
```

### Guarantee Badge
```css
border: 2px solid var(--accent);
padding: 8px 16px;
font: Barlow Condensed 700, 0.75rem, 0.12em tracking, UPPERCASE
```
Includes a shield SVG icon left of text.

### Tags / Pills
```
font: Barlow Condensed 600, 0.6–0.75rem, 0.08–0.2em tracking, UPPERCASE
border: 1–2px solid ink/30
padding: px-2.5 py-1 or px-3 py-1.5
```
No background fill — just border.

### Section Number Tags
```
font: Bebas Neue, 1.1rem, 0.08em tracking
colour: var(--accent) on light, var(--yellow) on dark
border-right: 2px solid ink (light) or white/20 (dark)
padding-right: 24px
```

---

## 6. Zone System

The site alternates between light and dark zones to create rhythm:

| Class | Background | Text Colour | Usage |
|-------|------------|-------------|-------|
| `zone-light` | `#F0EDE8` | Ink | Default content sections |
| `zone-dark` | `#0F0F0F` | White | Pain points, testimonials, CTA |
| `zone-dark-surface` | `#181818` | White | Secondary dark sections |
| `zone-surface` | `#E5E0D8` | Ink | Subtle light variant |

**Noise overlay:** Dark zones use `.noise-overlay` — an SVG fractal noise at 4% opacity overlaid as `::before` pseudo-element, adding subtle texture.

---

## 7. Animation & Motion

### Scroll Reveal
Elements with `.reveal` class animate on scroll via IntersectionObserver:
- Start: `opacity: 0; transform: translateY(20px)`
- End: `opacity: 1; transform: translateY(0)`
- Duration: `0.65s ease`
- Stagger delays: `0.08s` per level (`.reveal-delay-1` → `.reveal-delay-5`)

### BlurFade Component
React component for staggered entrance animations:
```tsx
<BlurFade delay={0.1}>...</BlurFade>
<BlurFade delay={0.2}>...</BlurFade>
```

### Page Transition
Black curtain (`bg-ink`) sweeps off screen upward on route change:
- Duration: `0.7s cubic-bezier(0.86, 0, 0.07, 1)`

### Magnetic Buttons
CTA buttons drift toward cursor (`strength: 0.28`), spring back on leave.

### Ticker Animations
- Row 1 (left-to-right): `20s linear infinite`
- Row 2 (right-to-left): `28s linear infinite`

### Scan Line
On `ImageBreak` section — red 2px line sweeps top to bottom, 5s loop:
```css
box-shadow: 0 0 14px 3px rgba(217,0,0,0.55);
```

### Cursor (Desktop)
Crosshair `+` in red (`var(--accent)`), 20px. On hover: expands to 36px and rotates 45° into `×`.

### Number Ticker
Animated counter using framer-motion spring (`damping: 60, stiffness: 100`). Counts up on scroll into view.

---

## 8. Iconography & Marks

### Recurring Visual Motifs
1. **Diamond accent** — 14px rotated square, accent border, top-right of cards
2. **Arrow `→`** — used for list items, CTA text, and link labels (never chevrons)
3. **Shield icon** — SVG `path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"`, used for guarantee badges
4. **Dashed connector** — `strokeDasharray="4 3"` line with red arrowhead, used between process steps
5. **Offset shadow** — the primary brand motif across all boxed elements

### Yellow Stamp
Positioned elements use a yellow-background stamp with ink border:
```css
background: var(--yellow);
border: 3px solid var(--ink);
box-shadow: 4px 4px 0 #0F0F0F;
```
Used for: role labels on images, name plates, the GDS stamp.

---

## 9. Photography & Imagery

### Style Direction
- High-contrast, editorial feel
- Dark overlay gradients (`from-ink/80 to-transparent`) on all images
- Professional / executive context for consultancy imagery
- Premium property / outdoor spaces for landscaping client
- No stock-looking "diverse team smiling" photography
- Prefer: boardrooms, strategy sessions, architectural spaces, outdoor luxury

### Overlay Treatment
All images use at minimum:
```css
background: linear-gradient(to top, rgba(15,15,15,0.8), transparent)
```
Some use dual-axis overlays (right-to-left + bottom-to-top).

### Skewed Treatment (Clients page)
```css
clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
```

---

## 10. Scrollbar

Custom scrollbar throughout:
```css
::-webkit-scrollbar { width: 3px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 0; }
```
Red, 3px, no radius — consistent with the brand's angular geometry.

---

## 11. Voice & Copy Style

- **All-caps for headlines** — never sentence case on Bebas Neue
- **Direct, no preamble** — "I don't hand over a deck and disappear."
- **Numbers as proof** — always specific: "8 years", "14 days", "÷10 the cost"
- **No jargon** — "AI tools" not "solutions", "build it" not "deploy a framework"
- **Binary** — "Most AI projects fail. Here's why." Not hedged.
- **Credentials inline** — ITIL 4, Six Sigma, UPenn, always abbreviated in caps
- **Location always Dubai & UK** — dual market, always in that order

---

## 12. Section Inventory

| Section | ID | Zone | Number |
|---------|----|------|--------|
| Hero | `#hero` | Light | — |
| Who I Am | `#about` | Light | 00 |
| Why AI Projects Fail | `#pain` | Dark | 01 |
| How I Work | `#how-i-work` | Light | 02 |
| Stats Break | — | Dark | — |
| Three Ways to Engage | `#services` | Light | 03 |
| Current Client Work | `#results` | Light | 04 |
| About Gary | `#gary` | Light | 05 |
| What Clients Say | `#testimonials` | Dark | 06 |
| Common Questions | `#faq` | Light | 07 |
| Contact / CTA | `#contact` | Dark | — |

---

## 13. Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + custom globals.css |
| Animation | GSAP + ScrollTrigger, framer-motion, CSS animations |
| Smooth scroll | Lenis |
| Fonts | Google Fonts (Bebas Neue, Barlow Condensed, Barlow) |
| Hosting | Vercel |
| Repo | github.com/Merlin37AI/the-signal |

---

*Last updated: April 2026 · Gary Does Strategy · the-signal-lemon.vercel.app*
