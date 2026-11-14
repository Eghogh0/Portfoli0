# Eghogho Esele — Personal Portfolio Website

**Course:** CSC 419 · Advances in Web, Mobile and Blockchain Development — Personal Portfolio Website
**Institution:** Pan-Atlantic University, School of Science and Technology

| | |
|---|---|
| **Name** | Eghogho Esele |
| **Matric No.** | 24120111119 |
| **Live URL** | [https://portfoli0-eosin.vercel.app] |
| **GitHub** | [https://github.com/Eghogh0] |

---

## What this is

A fully hand-rolled, two-page portfolio — no frameworks, no build step, no component libraries.
Semantic HTML, one central design system in CSS (custom properties / design tokens), and a single
small vanilla-JS file for interactions. It is designed to be read by a person, not just run.

```
portfolio/
├── index.html        Home — hero, about, selected work, practice/skills,
│                     education, experience timeline, contact CTA, footer
├── walka.html        Dedicated project details page — Walka case study:
│                     problem, approach, four screen-level features with
│                     original device mockups, screen gallery, technology,
│                     what I learned, prev/next project navigation
├── css/
│   └── main.css      The complete design system (tokens + every component)
├── js/
│   └── main.js       CONFIG object (your links) + nav, scrollspy, scroll reveal
└── README.md
```

## Design system

| Token | Value | Role |
|---|---|---|
| Ivory | `#F3F0E8` | Primary background |
| Ivory deep | `#ECE8DC` | Secondary background / cards |
| Stone | `#D8D4CA` | Hairlines / muted surfaces |
| Ink | `#171717` | Primary text / dark surfaces |
| Brick | `#A63D32` | The single accent colour |

- **Type:** *General Sans* (display) + *Manrope* (body) + *Instrument Serif* (editorial
  accents) + *IBM Plex Mono* (labels, numerals, metadata). Fluid sizing via `clamp()`.
- **Space:** 4px-based scale (`--sp-1` … `--sp-10`); one 12-column layout
  (`--content: 80rem`) with clamped gutters.
- **Motion:** one expo-out easing curve, restrained scroll-reveal and hover
  micro-interactions, full `prefers-reduced-motion` support.


Honesty note, by design: all app visuals on this site are **original conceptual
mockups built in CSS/SVG**, not screenshots — this is stated on the pages themselves.
The Walka mockups are clearly labelled as conceptual throughout.

## Run locally

No build step. Either open `index.html` directly in a browser, or serve the folder:

```bash
# Python
python -m http.server 8000        # then open http://localhost:8000

# or Node
npx serve .                       # then open http://localhost:5000
```

## Deploy

It's a static site, so it deploys anywhere:

- **Vercel / Netlify / GitHub Pages** — point at this folder and publish. No config needed;
  `index.html` is the entry point and both pages are linked relatively.
- For **GitHub Pages**, either set the folder as the pages root or push it to a
  `gh-pages` branch.

## Technical notes

- Semantic structure throughout: `header / nav / main / section / article / figure / footer`.
- One stylesheet, organised in 15 numbered sections; every visual decision comes from a
  CSS custom property defined once at the top.
- `js/main.js` is the only script: link wiring, mobile menu, scrollspy and reveal,
  all guarded, no dependencies, no framework.
- Responsive is art-directed, not just squeezed: nav, hero grid, project cards, the
  Walka feature blocks and the screen gallery each have deliberate behaviour at
  desktop / tablet / small-mobile widths.

---
*Built and designed by Eghogho Esele, 2026.*
