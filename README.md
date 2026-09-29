# Graig Global

# CGE — Corporate Site · Lovable Build Spec v1

Build spec for **CGE Corporate**, an assets holding company. Reference standard for look, feel, and function: **rolex.com** — restrained luxury, immense whitespace, large cinematic imagery, precise typography, slow and confident motion. Palette is **navy · black · white · gold**, not Rolex green.

How to use: paste the **Knowledge** section into Lovable's project Knowledge (Settings → Knowledge), then run the numbered prompts in order, one per message. Don't combine prompts — Lovable does better one section at a time.

---

## ⚠️ PLACEHOLDERS — read first

The full company brief is still pending. Everything tagged **`[PLACEHOLDER]`** below is structurally correct but uses stand-in copy / names / images — replace before launch. Build the site exactly as specified; the placeholders are designed so swapping real content later requires no layout changes.

Confirm before launch:
1. **What "CGE" stands for.** Working assumption: **Craig Global Enterprises** (CEO surname is Craig). Used throughout as the full name — confirm or correct.
2. **Executive surnames / bios / headshots** — Taalib, Lynn have first names only; all five need bios + portraits.
3. **Board of Directors roster** — the entire board below is `[PLACEHOLDER]`. Real names, seats, and Chairman pending the brief.
4. **The holdings / portfolio companies** — the assets this company holds. All portfolio entries are `[PLACEHOLDER]`.
5. **Contact details, registered address, legal entity name.**

---

## KNOWLEDGE (paste this whole block into project Knowledge)

### Mission

Corporate website for **CGE Corporate** — an **assets holding company**. This is not a product site and not a startup landing page. It is the public face of a holding company that owns and stewards a portfolio of operating businesses and assets. The job of the site: project institutional permanence, disciplined stewardship, and quiet authority. Communicate *what we hold, how we lead, and the standard we hold it all to.* Convert serious visitors (partners, operators, investors, press, candidates) into a contact.

The founder/CEO is a **Sergeant Major** — the ethos is earned discipline, chain of command, stewardship, the long view. Lean into that without turning it into camouflage-and-eagles iconography. The expression is boardroom, not barracks.

### Reference (look / feel / function)

**rolex.com** is the bar. Specifically:
- Predominantly calm pages with one decisive element each — a single hero image, one headline, one link. Never busy.
- Alternating immersive sections: a bright editorial section, then a full-bleed dark cinematic section, repeating.
- Enormous whitespace and generous section padding. Content breathes.
- Slow, confident motion only: gentle fade-and-rise on scroll, slow image zoom (Ken Burns) behind heroes, animated underlines. Nothing bouncy, nothing fast.
- Refined "Discover more →" style links with an arrow that nudges on hover.
- Multi-page structure with a minimal sticky header and a deep, organized footer.
- Restraint is the brand. When in doubt, remove.

### Voice rules

- Measured, declarative, institutional. Short sentences with weight. The confidence of an entity that does not need to oversell.
- No exclamation points. No emoji. No startup softeners ("we'd love to," "let's chat," "awesome," "exciting").
- Stewardship vocabulary: hold, steward, allocate, build, endure, standard, discipline, the long view, generational.
- Headlines are normal case (luxury convention), not shouting uppercase. Uppercase is reserved for small tracked eyebrow labels only.
- Use the copy in this spec **verbatim** unless it is tagged `[PLACEHOLDER]`. Placeholder copy may be replaced with the real brief; do not paraphrase non-placeholder copy.

### Tech

- React + Vite + Tailwind + shadcn/ui (Lovable default). React Router.
- Install `gsap` (ScrollTrigger + ScrollToPlugin) for scroll reveals and smooth anchor/route motion.
- Routes: `/` (Home), `/about`, `/leadership`, `/holdings`, `/approach`, `/newsroom`, `/contact`, `*` (styled 404 with full nav).
- Shared components: `Nav`, `Footer`, `Hero` (full-bleed image + headline + arrow link), `SectionReveal` (scroll fade-rise wrapper), `ArrowLink`, `PersonCard` (leadership/board), `OrgChart`, `Crest` (the CGE monogram mark).
- Google Fonts: **Playfair Display** (display serif — headlines, 500/600/700 + italic) and **Manrope** (sans — body/UI/eyebrows, 300/400/500/600/700).
- This site has both light and dark surfaces. Drive them with surface tokens, not a global dark class — sections opt into `.surface-light` or `.surface-dark`.

### Motion rules (carry these over — proven stable)

1. **Never use CSS `scroll-behavior: smooth`** on `html`/`body`/anywhere — it corrupts ScrollTrigger measurements. Do smooth anchor scrolling in JS with ScrollToPlugin: `gsap.to(window, { scrollTo: target, duration: 1.1, ease: 'power3.inOut' })`. Under `prefers-reduced-motion`, fall back to instant `scrollIntoView()` / jump to top on route change.
2. After `gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)`, call `ScrollTrigger.clearScrollMemory('manual')` and `window.scrollTo(0,0)`. On every route change, scroll to top and `ScrollTrigger.refresh()`.
3. Every image gets intrinsic `width`/`height` or CSS `aspect-ratio` so late loads never shift layout. Debounced (~200ms) `ScrollTrigger.refresh()` on `window` `load` and on lazy-image `load`.
4. The signature reveal (`SectionReveal`): opacity 0 → 1, `y` 28px → 0, duration 0.9, ease `power3.out`, `start: 'top 82%'`, `once: true`. Stagger children 0.08 where a section has a list/grid. This is the ONLY entrance motion — use it everywhere for consistency. Disable entirely under `prefers-reduced-motion`.
5. Hero background images get a slow Ken Burns: `scale 1.0 → 1.08` over ~12s, ease-out, infinite alternate. Skip under reduced motion.

### Design system (surface tokens — keep as CSS variables)

| Token | Hex | Use |
|---|---|---|
| `--midnight` | `#05080f` | darkest sections, footer — near-black with navy cast |
| `--navy` | `#0a1d38` | primary dark surface background |
| `--navy-2` | `#0d2747` | dark card / alt dark panel |
| `--paper` | `#ffffff` | primary light surface background |
| `--paper-2` | `#f4f5f7` | light alt section / light card |
| `--ink` | `#0a0e16` | primary text on light surfaces |
| `--ink-dim` | `rgba(10,14,22,.60)` | secondary text on light |
| `--bone` | `#f5f5f1` | primary text on dark surfaces |
| `--bone-dim` | `rgba(245,245,241,.62)` | secondary text on dark |
| `--gold` | `#c5a253` | the precious accent — eyebrows, rules, arrows, the crest |
| `--gold-hi` | `#e2c47e` | hover gold / highlight |
| `--gold-deep` | `#9a7a31` | gold borders, fine rules on light |
| `--line-dark` | `rgba(245,245,241,.16)` | hairlines/borders on dark surfaces |
| `--line-light` | `rgba(10,14,22,.12)` | hairlines/borders on light surfaces |

- **Display type**: Playfair Display, normal case, line-height 1.06–1.15. Hero h1 `clamp(2.6rem, 6vw, 5rem)`; section h2 `clamp(2rem, 4.5vw, 3.4rem)`. Use Playfair *italic* for a single emphasized word per headline, in gold.
- **Body/UI**: Manrope. Body `1.0625rem`, line-height 1.7, weight 400. Generous measure (max ~62ch).
- **Eyebrow labels**: Manrope 600, 0.72rem, letter-spacing 0.28em, uppercase, gold, optionally preceded by a 40px gold hairline.
- **Buttons**: pill (radius 999px), Manrope 600, 0.82rem, letter-spacing 0.12em.
  - Primary: solid `--gold`, `--ink` text; hover → `--gold-hi`.
  - On dark surfaces, secondary: 1px `--line-dark` outline, `--bone` text; hover → bone fill / navy text.
  - On light surfaces, secondary: 1px `rgba(10,14,22,.30)` outline, `--ink` text; hover → ink fill / paper text.
- **ArrowLink**: gold text + " →"; on hover the arrow translates +6px and a gold underline wipes in left-to-right. This is the primary "go deeper" affordance everywhere.
- **Sections**: desktop vertical padding ~120–160px; mobile ~72px. 1px hairline dividers in the surface-appropriate line color. No drop shadows on light surfaces beyond the faintest lift on cards; on dark, soft long shadows are fine.
- **Imagery**: large, editorial, desaturated-toward-cool. Treat all imagery with a subtle navy duotone/overlay so the palette stays coherent. Dark heroes get a bottom-up navy→transparent gradient scrim so text stays legible.
- Corners: pill buttons only; everything else square or 2px radius. Quiet, architectural.

### The Crest (CGE monogram mark)

CGE's equivalent of the Rolex crown. Build as an inline SVG component `Crest`:
- A thin gold (`--gold`) circular ring, inside it the letters **CGE** in Playfair Display, gold, tightly set. Above the ring, a short gold hairline; the whole mark reads as a seal/insignia (a quiet nod to the Sergeant Major's heraldic-but-restrained ethos — NO eagles, stars, or military clip-art).
- Sizes: 28px in nav, ~120px in footer/hero contexts.
- `[PLACEHOLDER]` — swap for the real logo file when supplied (`/images/cge-crest.svg`).

### Imagery placeholders

No real photography yet. Use tasteful, on-palette placeholders so layout is correct:
- Heroes / section imagery: dark navy-to-black gradients with a faint gold hairline grid, or Unsplash architecture/finance-district URLs treated with the navy overlay. Mark each `[PLACEHOLDER IMAGE]`.
- Leadership / board portraits: square, neutral, `aspect-ratio: 1`, navy-tinted placeholder blocks with the person's initials in gold Playfair until headshots arrive.
- Holdings logos: square monochrome placeholder tiles with the holding's `[PLACEHOLDER]` name.

### Corporate structure data

**CGE Corporate** is an **Assets Holding Company**. Structure: the holding company sits at the top; beneath it sit the portfolio holdings / operating subsidiaries (all `[PLACEHOLDER]` until the brief).

**Executive Leadership** (real — first names confirmed, surnames/bios `[PLACEHOLDER]` where noted):

| Role | Name | Notes |
|---|---|---|
| Chief Executive Officer | **Sergeant Major Keith L. Craig** | Founder/CEO. Use the rank "Sergeant Major" with the name; bio `[PLACEHOLDER]`. |
| Chief Operating Officer | **Taalib** `[surname PLACEHOLDER]` | bio `[PLACEHOLDER]` |
| Chief Strategy Officer / Chief Legal Officer | **Lynn** `[surname PLACEHOLDER]` | CSO/CLO dual role; bio `[PLACEHOLDER]` |
| Chief Financial Officer | **Ken Merritt** | bio `[PLACEHOLDER]` |
| Chief of Staff | **David Ash** | bio `[PLACEHOLDER]` |

**Board of Directors** — `[ENTIRE BOARD IS PLACEHOLDER]`. Render these seats with stand-in names so the layout is correct; replace with the real roster:
- **Chairman of the Board** — `[PLACEHOLDER NAME]`
- **Vice Chairman** — `[PLACEHOLDER NAME]`
- **Director** — `[PLACEHOLDER NAME]`
- **Director** — `[PLACEHOLDER NAME]`
- **Director** — `[PLACEHOLDER NAME]`
- **Independent Director** — `[PLACEHOLDER NAME]`

Note in a small caption under the board grid: "Board roster pending final confirmation." (remove before launch).

**Holdings / Portfolio** — `[ALL PLACEHOLDER]`. Use four to six stand-in holdings, each with a name, a one-line sector descriptor, and a short stewardship note:
1. `[Holding One]` — `[Sector]` — `[one-line description PLACEHOLDER]`
2. `[Holding Two]` — `[Sector]` — `[one-line description PLACEHOLDER]`
3. `[Holding Three]` — `[Sector]` — `[one-line description PLACEHOLDER]`
4. `[Holding Four]` — `[Sector]` — `[one-line description PLACEHOLDER]`

### The Standard (principles — usable as written, refine with the brief)

Four principles, drawn from the holding-company + Sergeant-Major ethos:
1. **Stewardship over speculation** — "We hold what we believe in, and we hold it for the long term. Ownership is a responsibility before it is an asset."
2. **Discipline as default** — "Every position is governed by process, accountability, and standards that do not move with the market's mood."
3. **The long view** — "We measure in decades, not quarters. Patience is a position."
4. **Operators, not bystanders** — "We build alongside the businesses we hold — capital, structure, and counsel, applied with intent."

### Contact / brand strings `[PLACEHOLDER]`

- Email: `[contact@PLACEHOLDER.com]`
- Phone: `[PLACEHOLDER]`
- Registered office / address: `[PLACEHOLDER]`
- Legal entity line (footer): "CGE Corporate" `[full legal entity name PLACEHOLDER]`
- Copyright: "© 2026 CGE Corporate. All rights reserved." `[confirm entity name]`
- Inquiry routing: a single contact form (Name, Company, Email, Nature of inquiry [Partnership / Investor / Press / Careers / Other], Message).

### Meta

- Title: `CGE Corporate — Assets Holding Company` `[confirm full name]`
- Description: `CGE Corporate is an assets holding company that owns and stewards a portfolio of operating businesses for the long term. Discipline, stewardship, and the long view.`
- OG image: the home hero `[PLACEHOLDER IMAGE]`.
- theme-color `#05080f`.

---

## PROMPT 1 — Foundation, Crest, Nav, Footer

Set up the design system from Knowledge as Tailwind config / CSS variables with the **surface token** approach: a `.surface-light` class (paper bg, ink text, light hairlines) and a `.surface-dark` class (navy/midnight bg, bone text, dark hairlines) that sections opt into — do NOT use a single global dark mode. Load Playfair Display + Manrope from Google Fonts; map `font-serif` → Playfair Display and `font-sans` → Manrope. Wire the GSAP foundation per the Motion rules (register ScrollTrigger + ScrollToPlugin, clear scroll memory, scroll-to-top + refresh on route change, NO CSS smooth scroll, build the `SectionReveal` wrapper component exactly per rule 4). Create all routes from Knowledge with placeholder pages. Then build:

**Crest** component — the gold CGE monogram seal described in Knowledge (thin gold ring, "CGE" in gold Playfair inside, short gold hairline above). Props for size (nav 28px / footer 120px). Tag `[PLACEHOLDER]` in a comment for the real logo swap.

**Nav** (sticky, minimal — Rolex restraint):
- Transparent over the hero; on scroll past ~80px it gains a solid `--paper` background (or `--navy` when over a dark section), a bottom hairline, and slightly reduced height. Smooth 0.3s transition.
- Left: `Crest` (28px) + "CGE" wordmark in Playfair.
- Center/right links: About, Leadership, Holdings, Approach, Newsroom.
- Right: gold pill button "Contact".
- Active route link carries a gold underline.
- Mobile (≤900px): hamburger → full-screen **fully opaque** `--navy` overlay menu. Links stacked large in Playfair with small gold serif-italic numerals (*01* About, *02* Leadership, *03* Holdings, *04* Approach, *05* Newsroom), Contact pill at the bottom. Burger morphs to an X.

**Footer** (`.surface-dark`, `--midnight`, hairline top, deep and organized like Rolex's):
- Top row: large `Crest` (120px) + "CGE Corporate" wordmark, and one restrained line: "An assets holding company." `[confirm]`
- Link columns:
  - **Company**: About, Leadership, Approach, Newsroom.
  - **Portfolio**: Holdings, Stewardship `[→ /approach]`, Partnerships `[→ /contact]`.
  - **Connect**: Contact, Careers `[→ /contact]`, Press `[→ /newsroom]`.
- Bottom hairline row: copyright line + registered office line (both `[PLACEHOLDER]`), and small "Legal / Privacy" links (route to `/contact` for now).
- All copy that's a placeholder stays tagged in comments.

**404**: `.surface-dark`, Playfair "Page not found", one calm line, gold pill "Return home". Nav + Footer render on it.

## PROMPT 2 — Home page

Build `/` as a sequence of calm, alternating light/dark sections, each wrapped in `SectionReveal`. One decisive idea per section. All non-placeholder copy verbatim.

1. **Hero** (`.surface-dark`, full-viewport `min-height: 100svh`):
   - Full-bleed `[PLACEHOLDER IMAGE]` background (navy-overlaid architecture / skyline) with the slow Ken Burns zoom and a bottom-up navy gradient scrim.
   - Eyebrow: "ASSETS HOLDING COMPANY"
   - H1 (Playfair): "We hold for the *long* view." (*long* = gold italic).
   - Sub (bone-dim, max ~52ch): "CGE Corporate owns and stewards a portfolio of operating businesses — with discipline, structure, and the patience to build across decades."
   - ArrowLink: "Discover CGE →" (smooth-scrolls to section 2).
   - Bottom-center scroll cue: thin gold hairline with a slow gold pulse traveling down, label "SCROLL".
2. **Statement** (`.surface-light`, centered, very generous whitespace):
   - Eyebrow "WHO WE ARE".
   - Large Playfair statement (max ~22ch per line): "An assets holding company built on stewardship, not speculation."
   - One paragraph of body: "CGE Corporate acquires, holds, and strengthens businesses worth building for the long term. We bring capital, structure, and operating discipline — then we stay." `[refine with brief]`
   - ArrowLink "Our approach →" → `/approach`.
3. **Holdings preview** (`.surface-dark`): eyebrow "THE PORTFOLIO", H2 "What we hold.", then a row/grid of the `[PLACEHOLDER]` holdings as monochrome tiles (name + sector). ArrowLink "View all holdings →" → `/holdings`.
4. **The Standard** (`.surface-light`): eyebrow "THE STANDARD", H2 "How we hold it.", the four principles from Knowledge as a 2×2 bordered grid (gold numeral, Playfair title, body). Hairline dividers, no shadows.
5. **Leadership preview** (`.surface-dark`): eyebrow "LEADERSHIP", H2 "Led from the front.", a short line referencing disciplined leadership, then the five executives as small `PersonCard`s (initials-in-gold placeholder portraits, name, title). ArrowLink "Meet the leadership →" → `/leadership`.
6. **Closing CTA band** (`.surface-dark`, `--midnight`, centered, hairlines top/bottom): H2 "Build with us, for the long term.", one line, gold pill "Contact CGE" → `/contact`.

## PROMPT 3 — About (`/about`)

`.surface-light` base with one full-bleed dark interlude. Sections in `SectionReveal`:
- **Page hero**: eyebrow "ABOUT", Playfair H1 "A holding company, built to endure." + one-line intro `[PLACEHOLDER]`.
- **The company**: two-column — left a `[PLACEHOLDER IMAGE]` (navy-toned), right body copy explaining the holding-company model: what it means to own and steward operating businesses, the long-view thesis. `[PLACEHOLDER, refine with brief]`.
- **Origin / ethos** (`.surface-dark` full-bleed interlude): a restrained note on the founder's ethos — disciplined leadership, chain of command, stewardship — expressed in boardroom language, not military imagery. Pull quote in Playfair italic gold with a 2px gold left border: "We measure in decades, not quarters. Patience is a position." `[PLACEHOLDER quote attribution]`.
- **The Standard**: reuse the four principles as a full section.
- CTA band → `/contact`.

## PROMPT 4 — Leadership (`/leadership`)

The core page. `.surface-light` base. Two distinct groups: **Executive Leadership** and **Board of Directors**, plus the **corporate structure** org chart.

- **Page hero**: eyebrow "LEADERSHIP", H1 "The people accountable for the standard."
- **Executive Leadership**: section eyebrow "EXECUTIVE LEADERSHIP". A refined grid of five `PersonCard`s (responsive: 3-up desktop, 2-up tablet, 1-up mobile). Each card: square portrait `[PLACEHOLDER — initials in gold Playfair on navy]`, name in Playfair, role in tracked gold eyebrow, short bio `[PLACEHOLDER]`, optional LinkedIn `[PLACEHOLDER]`. Use the exact roles/names from Knowledge:
  - **Sergeant Major Keith L. Craig** — Chief Executive Officer
  - **Taalib** `[surname]` — Chief Operating Officer
  - **Lynn** `[surname]` — Chief Strategy Officer / Chief Legal Officer
  - **Ken Merritt** — Chief Financial Officer
  - **David Ash** — Chief of Staff
  Give the CEO card visual primacy (first, slightly larger, gold hairline frame).
- **Board of Directors** (`.surface-dark` section): eyebrow "BOARD OF DIRECTORS". Grid of `PersonCard`s for the six `[PLACEHOLDER]` board seats from Knowledge (Chairman first, with primacy). Small caption beneath: "Board roster pending final confirmation." (tag for removal).
- **Corporate structure**: eyebrow "CORPORATE STRUCTURE", H2 "How CGE is organized.", then the `OrgChart` component (next).

**OrgChart** component: a clean, architectural org diagram (CSS/SVG, not an image), `.surface-light`:
- Top node: **CGE Corporate — Assets Holding Company** (navy box, gold hairline).
- Connector hairlines (gold) down to a row of holding/subsidiary nodes — the `[PLACEHOLDER]` holdings from Knowledge.
- Optional second tier under "CGE Corporate" for governance: a small node "Board of Directors" linked to the holding company with a dashed gold line (oversight), and "Executive Leadership" as the operating line. Keep it legible and uncluttered — Rolex-clean, lots of space. Fully responsive: on mobile it collapses to a vertical stack of nodes with vertical connectors.

## PROMPT 5 — Holdings (`/holdings`)

`.surface-light` base, alternating. All entries `[PLACEHOLDER]`.
- **Page hero**: eyebrow "PORTFOLIO", H1 "What we hold." + intro line about the portfolio thesis.
- **Holdings grid / list**: the four-to-six `[PLACEHOLDER]` holdings as large alternating two-column rows (image left/right alternating) OR a refined card grid — each: monochrome logo tile `[PLACEHOLDER]`, holding name (Playfair), sector eyebrow (gold), one-line description, "Established `[year]`" / "`[ownership %]`" stat line `[PLACEHOLDER]`, optional ArrowLink to an external site `[PLACEHOLDER]`.
- **Sector strip**: a quiet bordered row summarizing the sectors represented `[PLACEHOLDER]`.
- CTA band: "Considering a partnership or sale? Talk to CGE." → `/contact`.

## PROMPT 6 — Approach (`/approach`)

`.surface-dark` base with light interludes — the most editorial page.
- **Page hero** (dark, full-bleed): eyebrow "OUR APPROACH", H1 "Stewardship over *speculation*." (*speculation* gold italic).
- **The four principles**: each principle from Knowledge gets its own full-width band, alternating light/dark, with a large gold numeral (01–04), Playfair title, and a paragraph of body. Slow `SectionReveal` per band.
- **How we work**: a 3–4 step process strip `[PLACEHOLDER]` — e.g., Identify → Acquire → Strengthen → Hold. Gold numerals, hairline connectors on desktop.
- Pull quote (Playfair italic gold): "Ownership is a responsibility before it is an asset."
- CTA band → `/contact`.

## PROMPT 7 — Newsroom (`/newsroom`) + Contact (`/contact`)

**`/newsroom`** (`.surface-light`):
- Page hero: eyebrow "NEWSROOM", H1 "Newsroom." + intro line.
- A grid of `[PLACEHOLDER]` press items / announcements — each: date eyebrow (gold), Playfair headline, one-line excerpt, ArrowLink "Read →" (route to `#` for now). 3–6 placeholder entries with reserved `aspect-ratio` thumbnails.
- Empty-state note tag: "Press releases will appear here." (placeholder until real content).

**`/contact`** (`.surface-dark` for gravitas):
- Page hero: eyebrow "CONTACT", H1 "Speak with CGE." + one calm line.
- Two columns: left — form (Name, Company, Email, "Nature of inquiry" select [Partnership / Investor / Press / Careers / Other], Message textarea, gold pill "Send inquiry", success/error states, basic validation, gentle non-shouting error styling); right — contact cards: Email `[PLACEHOLDER]`, Phone `[PLACEHOLDER]`, Registered office `[PLACEHOLDER]`. Include a small line: "For partnership and acquisition inquiries, select Partnership above."
- Keep the form calm and institutional — no marketing nudges.

## PROMPT 8 — QA pass

- **Routes**: every nav, footer, and CTA link resolves; unknown URLs hit the styled 404 with working nav; route changes scroll to top and `ScrollTrigger.refresh()` runs (no stale reveal positions).
- **Surfaces**: light and dark sections alternate cleanly; text contrast passes on both; gold reads as precious (not neon) on navy and on paper; the navy image overlay keeps all photography on-palette.
- **Motion**: only the approved motions exist — `SectionReveal` fade-rise, hero Ken Burns, ArrowLink underline/arrow nudge, nav transition. Nothing bouncy or fast. All disabled/instant under `prefers-reduced-motion`. No CSS `scroll-behavior: smooth` anywhere.
- **Leadership**: five executives render with correct roles (CEO carries the "Sergeant Major" rank and visual primacy); board renders six placeholder seats (Chairman first) with the "pending confirmation" caption; OrgChart is legible on desktop and collapses to a vertical stack on mobile.
- **Placeholders**: every `[PLACEHOLDER]` is visibly tagged in code comments and easy to find/replace; no placeholder copy is mistaken for final.
- **390px pass**: nothing overflows; org chart stacks; person grids go 1-up; menu opens fully opaque; footer columns stack; forms are usable.
- **Accessibility**: gold focus rings on all interactive elements; labels on every form field; mobile menu focus-trapped; images have alt text (placeholders too).
- **Meta**: title, description, OG image, theme-color `#05080f` exactly per the Meta block. Confirm the full company name before shipping the `<title>`.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://craigglobal.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/117cec8e-fba8-454c-b91c-51125e823647).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
