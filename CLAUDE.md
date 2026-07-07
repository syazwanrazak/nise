# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

A **zero-build static website** — the NISE Enterprise company profile / marketing page. No npm, no Node.js, no bundler. React 18 + Babel standalone are loaded from CDN at runtime; JSX files are transpiled in-browser.

To view: open `index.html` directly in a browser, or serve it with any static file server:
```
npx serve .
# or
python -m http.server 8080
```

## File Architecture

| File | Purpose |
|------|---------|
| `index.html` | Entry point — design system CSS (tokens, animations, global layout), loads all JSX via `<script type="text/babel">` |
| `tweaks-panel.jsx` | Live design tweaks panel + `useTweaks` hook. Loaded first. |
| `components.jsx` | Shared hooks (`useReveal`, `Reveal`, `Stagger`), `Icon` SVG library, Islamic pattern generator, `Btn`, `Nav`. Loaded second. |
| `sections-a.jsx` | `Hero`, `About`, `Problem` |
| `sections-b.jsx` | `Solution`, `Services`, `Why`, `Process` |
| `sections-c.jsx` | `Masjid`, `Portfolio`, `Team`, `Support`, `Vision`, `CTA`, `Footer` |
| `app.jsx` | Root `App` — wires `useTweaks`, renders all sections in order, mounts with `ReactDOM.createRoot` |

**Load order matters**: `tweaks-panel.jsx` → `components.jsx` → `sections-*.jsx` → `app.jsx`. Each file exposes its exports via `Object.assign(window, {...})` at the bottom — this is how components share across script tags.

## Design System (in `index.html`)

All tokens are CSS custom properties on `:root`:
- **Surfaces**: `--bg`, `--bg-elev`, `--bg-soft`, `--bg-deep`
- **Ink scale**: `--ink` through `--ink-4`, `--line`, `--line-2`
- **Accent**: switched via `[data-accent="deepgreen|emerald|navy"]` on `<html>` — sets `--accent`, `--accent-2`, `--accent-soft`
- **Islamic pattern**: `[data-pattern="off|subtle|visible"]` controls `--pattern-op`; pattern SVG is set by `setPatternVar()` in `components.jsx`
- **Motion**: `[data-motion="calm|snappy|off"]` — "off" disables all animations via CSS overrides
- **Spacing**: 8px grid — `--s-1` (8px) through `--s-8` (128px)
- **Type**: fluid `clamp()` for all headings; `--sans` (Geist) and `--serif` (Newsreader italic)

## Scroll Animation Pattern

`useReveal()` in `components.jsx` uses `IntersectionObserver` to add the `.in` class once an element enters the viewport. Two ready-made wrappers:
- `<Reveal delay={300}>` — single element fade-up
- `<Stagger>` — parent that triggers staggered children (delays defined in CSS via `:nth-child`)

All section-local CSS lives in `<style>{` ... `}</style>` template literal blocks inside each JSX component.

## Tweaks Panel & EDITMODE Protocol

The `useTweaks(defaults)` hook reads from `window.__NISE_DEFAULTS` (defined in `index.html` between `/*EDITMODE-BEGIN*/` and `/*EDITMODE-END*/` markers). When running inside an editor iframe, `setTweak()` posts `__edit_mode_set_keys` to `window.parent`, which rewrites the EDITMODE block on disk. The panel itself listens for `__activate_edit_mode` / `__deactivate_edit_mode` messages to show/hide.

For normal browser use, the tweaks panel is hidden by default and only opens when triggered by an external host message.

## Content & Branding

Content is **bilingual Malay/English** throughout — eyebrow labels use "BM / English" pattern (e.g. `"Siapa Kami / About us"`). The site targets Malaysian organizations, masjid, and communities. Portfolio entries reference live projects:
- Masjid Al-Itisam: `masjidalitisam.vercel.app`
- Design Cetak: `designcetak.com`

Contact: WhatsApp `+60 11-1142 0466` (Danny), email `ats.danial@nuklearmarketing.com`.

## Key Conventions

- No TypeScript, no linting config, no tests — pure JSX run through Babel standalone
- `/* eslint-disable */` at the top of every JSX file (global React destructuring from CDN)
- Section IDs used for nav anchor links: `#top`, `#solution`, `#services`, `#process`, `#masjid`, `#portfolio`, `#contact`
- Responsive breakpoints: 560px, 600px, 720px, 760px, 800px, 820px, 900px, 980px, 1000px, 1080px, 1100px, 1180px, 1240px — no strict system, each section picks what fits
- `.wrap` container: `max-width: 1240px`, `padding: 0 24px` (mobile), `0 40px` (≥768px)
- Utility grids: `.grid-2`, `.grid-3`, `.grid-4` defined in `index.html`
