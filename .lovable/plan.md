
# CGE Corporate — Build Plan

A multi-page corporate site for an assets holding company, modeled on rolex.com restraint: immense whitespace, alternating light/dark cinematic sections, slow confident motion, navy·black·white·gold palette. All non-placeholder copy used verbatim; every `[PLACEHOLDER]` tagged in code comments for later swap.

## Stack reconciliation (important)

Your spec assumes React + Vite + React Router. This project actually runs **TanStack Start + TanStack Router + Tailwind v4 (CSS-first) + shadcn/ui**. The plan keeps your design, motion, copy, and structure exactly — only the routing and CSS-config mechanics change:

- Routes become file-based under `src/routes/` (e.g. `about.tsx`, `leadership.tsx`), not a React Router table. `*` 404 uses the root `notFoundComponent`.
- Navigation uses TanStack `<Link>` (with `activeProps` for the gold active underline), not `react-router-dom`.
- Design tokens live in `src/styles.css` via `@theme`/`:root` (Tailwind v4), not `tailwind.config.js`.
- Fonts loaded via `<link>` in `__root.tsx` head (not `@import` URL — that breaks the v4 build).
- GSAP runs client-only inside `useEffect` (SSR has no `window`); reveals/Ken Burns guarded so SSR renders static, animation hydrates on client.

If you'd prefer I instead ask you to confirm anything in the placeholder checklist first, say so — otherwise I build exactly as specified with the stand-in content.

## Foundation (Prompt 1)

**Design system** — add surface tokens to `src/styles.css`:
- CSS variables for all tokens (`--midnight`, `--navy`, `--navy-2`, `--paper`, `--paper-2`, `--ink`, `--ink-dim`, `--bone`, `--bone-dim`, `--gold`, `--gold-hi`, `--gold-deep`, `--line-dark`, `--line-light`).
- `.surface-light` and `.surface-dark` utility classes (background + text + hairline color) so sections opt in — no global dark class.
- Map `font-serif` → Playfair Display, `font-sans` → Manrope; load both via `<link>` in `__root.tsx` head with the specified weights/italics.
- Type scale (hero h1 / section h2 clamps, eyebrow labels, body measure ~62ch), pill buttons, and the navy image-overlay/scrim helpers as utilities.
- `theme-color #05080f` + meta (title/description/OG) in `__root.tsx`; per-route overrides in each route's `head()`.

**GSAP foundation** — install `gsap`; create a `useGsapFoundation` setup + a route-change handler that scrolls to top and runs `ScrollTrigger.refresh()`. Registers `ScrollTrigger + ScrollToPlugin`, `clearScrollMemory('manual')`, debounced refresh on load/lazy-image load. No CSS `scroll-behavior: smooth` anywhere. All motion disabled under `prefers-reduced-motion`.

**Shared components** (`src/components/`):
- `SectionReveal` — opacity 0→1, y 28→0, dur 0.9, `power3.out`, `start: 'top 82%'`, `once: true`, child stagger 0.08; no-op under reduced motion. The only entrance motion.
- `Crest` — inline SVG: thin gold ring, "CGE" in gold Playfair, short gold hairline above; `size` prop (28 nav / 120 footer). Commented for real-logo swap.
- `ArrowLink` — gold text + "→"; hover nudges arrow +6px and wipes a gold underline L→R.
- `Hero` — full-bleed image + eyebrow + headline + sub + arrow link; Ken Burns (scale 1→1.08, ~12s, infinite alternate, skipped under reduced motion) + bottom-up navy scrim.
- `Nav` — sticky, transparent over hero → solid `--paper`/`--navy` past ~80px with bottom hairline + reduced height (0.3s). Crest + "CGE" wordmark left; About/Leadership/Holdings/Approach/Newsroom center-right; gold "Contact" pill; gold active underline. Mobile ≤900px hamburger → fully-opaque `--navy` full-screen overlay, large Playfair links with gold italic numerals *01–05*, Contact pill at bottom, burger morphs to X, focus-trapped.
- `Footer` — `.surface-dark` `--midnight`, top hairline; 120px Crest + "CGE Corporate" + "An assets holding company."; columns Company / Portfolio / Connect (exact links per spec); bottom hairline row with copyright + registered office + Legal/Privacy (→ /contact for now). Placeholders tagged.
- `PersonCard` and `OrgChart` (built/used in Prompt 4).

**Routes** created with placeholder pages: `/`, `/about`, `/leadership`, `/holdings`, `/approach`, `/newsroom`, `/contact`, plus styled 404 (`.surface-dark`, Playfair "Page not found", gold "Return home", Nav + Footer render). Each route gets its own `head()` metadata.

## Home (Prompt 2)
Six alternating sections, each in `SectionReveal`, decisive single idea each:
1. Dark full-viewport Hero (Ken Burns + scrim), eyebrow "ASSETS HOLDING COMPANY", H1 "We hold for the *long* view." (gold italic *long*), sub, "Discover CGE →" smooth-scroll, animated "SCROLL" cue.
2. Light Statement section ("WHO WE ARE", verbatim copy, "Our approach →").
3. Dark Holdings preview ("THE PORTFOLIO" → placeholder tiles → "View all holdings →").
4. Light The Standard (four principles in 2×2 bordered grid).
5. Dark Leadership preview (five exec PersonCards → "Meet the leadership →").
6. Dark `--midnight` closing CTA band → /contact.

## About (Prompt 3)
Light base + one dark interlude: page hero; two-column "The company" (image + holding-model copy); dark "Origin/ethos" interlude with gold-bordered Playfair italic pull quote; The Standard reused; CTA band.

## Leadership (Prompt 4)
- Page hero + Executive Leadership grid (5 PersonCards, 3/2/1-up; CEO **Sergeant Major Keith L. Craig** first, larger, gold hairline frame; exact roles/names from spec; initials-in-gold placeholder portraits).
- Dark Board of Directors grid (6 placeholder seats, Chairman first) + "Board roster pending final confirmation." caption (tagged for removal).
- `OrgChart` (CSS/SVG, not image): top **CGE Corporate — Assets Holding Company** navy node, gold connectors to placeholder holding nodes, governance tier (Board dashed-gold oversight line, Executive Leadership operating line); collapses to vertical stack on mobile.

## Holdings (Prompt 5)
Light alternating: page hero; 4–6 placeholder holdings as alternating two-column rows (logo tile, Playfair name, gold sector eyebrow, one-liner, "Established/ownership" stat, optional external ArrowLink); quiet sector strip; CTA band → /contact.

## Approach (Prompt 6)
Dark base + light interludes: dark hero "Stewardship over *speculation*."; four principles each as full-width alternating band (gold numeral 01–04, Playfair title, body); "How we work" process strip (Identify → Acquire → Strengthen → Hold, gold numerals, hairline connectors); gold italic pull quote; CTA band.

## Newsroom + Contact (Prompt 7)
- **/newsroom** (light): hero; 3–6 placeholder press items (gold date eyebrow, Playfair headline, excerpt, "Read →" to `#`); empty-state note tag.
- **/contact** (dark): hero "Speak with CGE."; two columns — left form (Name, Company, Email, Nature-of-inquiry select [Partnership/Investor/Press/Careers/Other], Message, gold "Send inquiry" pill, basic validation + calm success/error states); right contact cards (Email/Phone/Registered office placeholders) + partnership note. Form is client-side only for now (no backend) — submits to a local success state.

## QA (Prompt 8)
Verify all links resolve and unknown URLs hit the styled 404; route changes scroll to top + refresh ScrollTrigger; light/dark alternation and contrast; only approved motions exist and all respect reduced-motion; leadership/board/OrgChart correctness; every placeholder tagged; 390px responsive pass; gold focus rings, form labels, focus-trapped menu, image alt text; meta/title/OG/theme-color.

## Technical notes
- GSAP effects are client-only (`useEffect`, guarded for SSR/`window`); components render static markup server-side and animate after hydration.
- Contact form has no backend in this build (local success state). If you want submissions stored or emailed, I'd enable Lovable Cloud as a follow-up — flag this and it'll be a separate step.
- Placeholder images use on-palette navy→black gradient blocks with faint gold hairline grid (no external image dependency), each tagged `[PLACEHOLDER IMAGE]`.

I'll build in the spec's order (foundation → pages → QA) so each layer is verifiable before the next.
