# The Signal — Animation Uplift Plan

## Research Summary

### Dribbble Trends (Service/Consulting Sites)
- Dark/moody aesthetic dominates high-engagement designs (300K+ views)
- Scroll-triggered text reveals (word-by-word) create premium "unveiled" feel
- Number/stat counter animations build credibility momentum
- Hover cards with depth/spotlight effects signal interactivity
- Subtle background motion (not distracting) in hero sections
- Staggered entrance animations guide eye through grids

### Selected Animation Stack
| Layer | Library | Why |
|-------|---------|-----|
| Text animations | Framer Motion (MagicUI) | Word-by-word hero reveal, blur-fade reveals |
| Number counters | Framer Motion (MagicUI NumberTicker) | Stats in Hero + savings in Case Studies |
| Card hover effects | Framer Motion (MagicUI MagicCard) | Spotlight tracking on dark pricing/service cards |
| Card borders | CSS (MagicUI BorderBeam) | Animated beam orbiting highlighted service card |
| Marquee | CSS (MagicUI Marquee) | Infinite scroll for org credibility pills |
| Beam connections | Framer Motion (MagicUI AnimatedBeam) | Connect 3 steps in PEAK13 Diagnostic |
| Custom animation | Remotion + @remotion/player | DataFlow scene in Diagnostic section |
| Background | CSS (Flickering Grid) | Subtle dark-zone hero background texture |

---

## Execution Plan

### Phase 1 — Install dependencies
```bash
npm install framer-motion remotion @remotion/player
```

### Phase 2 — Build animation primitives
Create the following in `components/ui/animations/`:
1. `number-ticker.tsx` — Spring-based number counter (MagicUI source)
2. `blur-fade.tsx` — Blur + fade IntersectionObserver reveal (replaces CSS .reveal)
3. `text-animate.tsx` — Word-by-word or character-by-character Framer Motion reveal
4. `marquee.tsx` — CSS infinite horizontal scroll for org pills
5. `magic-card.tsx` — Mouse-tracking gradient spotlight on cards
6. `border-beam.tsx` — Animated beam orbiting card border (CSS)
7. `animated-beam.tsx` — SVG beam connecting two element refs

### Phase 3 — Remotion custom animation
Create `components/remotion/DataFlowAnimation.tsx`:
- SVG-based data flow scene showing process nodes connecting
- "Waste" nodes dissolving (red X → fades out)
- Accent-coloured connecting lines animate in with spring physics
- 5-second loop, autoPlay, transparent background
- Embedded via `@remotion/player` Player component

### Phase 4 — Apply to sections
| Section | Animation Applied |
|---------|-----------------|
| Hero | TextAnimate on headline, NumberTicker on all 4 stats, BlurFade on CTAs |
| Origin | Marquee replaces static org pills |
| Discovery | BlurFade stagger on pain cards with 150ms delay each |
| Career | AnimatedBeam connecting step circles, Remotion DataFlow player |
| Services | MagicCard spotlight on all 3 tiers, BorderBeam on highlighted tier |
| Proof | NumberTicker on all £ saving amounts, BlurFade on finding cards |
| Testimonials | BlurFade stagger, MagicCard on dark testimonial cards |
| CTA | TextAnimate on final headline |

### Phase 5 — Build, commit, deploy
```bash
npm run build && git add -A && git commit && git push && npx vercel --prod --yes
```

---

## Design Constraints
- Every animation must serve a PURPOSE (not decoration)
- Durations: text reveals 0.5–0.8s, counters 2s, card hover instant
- No bounce/overshoot on professional consulting elements (damping: 200)
- Respect prefers-reduced-motion media query
- Mobile: disable or simplify hover-only effects (MagicCard)
- Bundle size: Remotion Player adds ~200KB — acceptable for the impact
