# Simple Todo App (Vite + React + TypeScript)

Feature-first Todo app with localStorage persistence and bilingual UI (en-US / hu-HU), built with Vite and vanilla CSS.

## Features
- Add, edit, toggle, and remove todos.
- Filters: all / active / completed.
- Persistence to `localStorage`.
- Language switcher (English, Magyar) with persisted locale.
- Vanilla CSS with feature-scoped styles and shared primitives.

## Tech Stack
- React 18 + TypeScript + Vite
- ESLint (TypeScript, React Hooks, React Refresh)
- Vanilla CSS (no UI frameworks)

## Getting Started
```bash
npm install
npm run dev
# open http://localhost:5173
```

## Scripts
- `npm run dev` – start dev server
- `npm run build` – production build
- `npm run preview` – preview production build
- `npm run lint` – run eslint

## Project Structure (excerpt)
```
src/
  app/                 # app shell, providers, language switcher
  features/todos/      # todo feature (model + UI)
  shared/              # reusable UI, i18n, helpers
  styles/              # global variables, base, layout
```

## i18n
- Translations live in `src/shared/i18n/locales/en-US.json` and `hu-HU.json`.
- Locale is persisted in `localStorage` and selectable via the header dropdown.

## Persistence
- Todos are stored in `localStorage` under `todos:v1` via `storage.ts`.

## Linting
- ESLint with TypeScript + React Hooks + React Refresh; unused vars warn (allow `_` prefixes for unused args).

## Notes
- No UI framework; component styles are colocated with components/features.
