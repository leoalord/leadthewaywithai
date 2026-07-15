# Lead The Way with AI

Personal portfolio site for **Leo Lord** — AI Engineer and consultant via LTWwAI. A clean,
minimal, static informational site built around practical AI systems, healthcare
AI, agentic workflows, and teaching/writing.

Brand: **LTWwAI / Lead The Way with AI** — a solo AI engineer brand and platform
for teaching, writing, mentoring, and consulting around practical AI systems.

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- Fonts via `next/font/google` — Fraunces (display) + Inter (body)

Dependencies are intentionally minimal: `next`, `react`, `react-dom`, plus
Tailwind/PostCSS and TypeScript tooling.

## Pages

| Route         | Purpose                                                            |
| ------------- | ------------------------------------------------------------------ |
| `/`           | Hero + short bio + focus areas                                     |
| `/projects`   | Four featured open-source repositories                             |
| `/consulting` | "What I Do" overview — consulting, workshops, advisory (no pricing)|
| `/talks`      | Coding Agents Lunch & Learn series (MLOps Community co-host)        |

## Getting started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Project structure

```
app/
  layout.tsx        # Root layout: fonts, metadata, nav, footer, skip link
  page.tsx          # Home (/)
  globals.css       # Tailwind directives + base styles
  icon.svg          # Favicon mark
  projects/page.tsx
  consulting/page.tsx
  talks/page.tsx
components/
  Logo.tsx          # Inline SVG LTWwAI mark + wordmark
  Nav.tsx           # Sticky global navigation
  Footer.tsx        # Global footer
  RepoCard.tsx      # GitHub repository card
tailwind.config.ts  # Colorado earth-tone palette + font tokens
```

## Design

See [`docs/design-guide.md`](docs/design-guide.md) for the intended direction of
the site — a personal site about Leo Walker the person (AI engineer, leader,
builder/teacher/writer), with palettes, typography, layout blueprint, voice, and
a review checklist to guide future iterations.

Current skeleton:

- **Palette:** Colorado-inspired earth tones — warm tans (`sand`), sage greens
  (`sage`), slate blues (`slate`), deep terracotta accent (`terracotta`).
- **Typography:** Fraunces for display headings, Inter for body and UI chrome.
- **Accessibility:** semantic HTML, skip link, visible focus states, responsive
  mobile-first layout, descriptive link text, and per-page metadata + Open Graph.

## Notes

- Contact details on `/consulting` (email + Calendly) are placeholders.
- Talk recording links on `/talks` are placeholders pending publication.
