# Elevation Aviation: One-Page Demo

A one-page marketing site for **Elevation Aviation**, a personalized flight training school based at Manassas Regional Airport, Virginia.

Built with **Svelte + Vite + Tailwind CSS**.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Scripts

- `npm run dev`: start the dev server
- `npm run build`: build for production
- `npm run preview`: preview the production build locally

## Structure

```
src/
  App.svelte          # page composition
  app.css             # Tailwind base + design tokens
  main.js             # entry
  lib/
    Nav.svelte        # sticky top navigation
    Hero.svelte       # headline + primary CTAs
    Marquee.svelte    # key facts marquee
    Pillars.svelte    # three program pillars
    Training.svelte   # PPL / IR / CPL tracks
    Philosophy.svelte # quote + about
    Fleet.svelte      # PA-28 spec card
    DemoCTA.svelte    # demo flight call-out
    Contact.svelte    # inquiry form + contact details
    Footer.svelte     # site footer
    useReveal.js      # intersection-observer fade-up action
```

## Design notes

- **Ink** (near-black navy) base, **bone** (warm off-white) type, **brass** (muted gold) accent.
- Display type: *Space Grotesk*. Body type: *Inter*. Tabular numerics: *JetBrains Mono*.
- No iconography: numeric chapter markers and typographic rhythm carry the structure.
- Every section exposes at least one CTA (call, book demo, consultation, dispatch form).
