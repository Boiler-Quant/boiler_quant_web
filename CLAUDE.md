# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

BoilerQuant's official club website — a React SPA for Purdue's Quantitative Finance Club, deployed on Vercel at boilerquant.com.

## Commands

```bash
npm start        # Dev server on port 3000
npm run build    # Production build
npm test         # Run tests (CRA/Jest)
```

Environment variables required (create `.env`):
- `REACT_APP_AIRTABLE_API_KEY`
- `REACT_APP_AIRTABLE_BASE_ID`

## Architecture

**Stack**: React 19 (Create React App), React Router v7, Tailwind CSS, MUI components, Axios, deployed on Vercel.

**Routing** (`src/App.js`): Client-side routes are `/`, `/about-us`, `/projects`, `/sponsors`, `/join-us`. The `App.js` wraps everything in `ThemeProvider` and renders `NavigationBar` + page content + `BottomContact`.

**Theme system** (`src/theme-context.js`): All colors are managed through a central context. Use `useTheme()` hook in any component to get the color palette. Never hardcode colors — use the theme keys (`background`, `dust`, `aged`, etc.).

**Content management**: Static JSON files in `public/jsons/` are the primary data source (executives, projects, company logos). There is also a Vercel serverless function at `api/fetchData.js` for Airtable. The old client-side `src/utils/airtableService.js` is deprecated — don't use it.

**Styling approach**: Tailwind utilities first. Custom responsive utilities (text-heading-*, text-body-*, section-padding, gap-responsive) are defined in `src/styles.css`. Custom fonts (catchy, serif, frank) are declared in `src/fonts.css` and registered in `tailwind.config.js`. MUI components are styled with `sx` prop or `className`.

**Responsive design**: Mobile-first. The `NavigationBar` shows a hamburger + MUI Drawer below the `md` breakpoint. Page layouts use Tailwind responsive prefixes (sm/md/lg/xl).

## Key Files

- `src/App.js` — router, layout shell, ThemeProvider
- `src/theme-context.js` — color palette and `useTheme()` hook
- `src/styles.css` — custom Tailwind utilities and typography scale
- `public/jsons/` — club data (executives, projects, placements)
- `api/fetchData.js` — Vercel serverless Airtable proxy
