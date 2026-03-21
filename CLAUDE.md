# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio site with a Next.js 16 (App Router) frontend and a Strapi v5 headless CMS backend.

## Commands

### Frontend (`/frontend`)
```bash
pnpm install       # Install dependencies
pnpm dev           # Dev server at http://localhost:3000
pnpm build         # Production build
pnpm lint          # ESLint check
```

### Backend CMS (`/backend-cms`)
```bash
npm install        # Install dependencies
npm run develop    # Dev server at http://localhost:1337/admin
npm run build      # Build admin panel
npm start          # Start production server
```

## Architecture

### Frontend (`/frontend`)

**Data flow**: Page/server components in `app/` call data-fetching functions in `app/data/` → hit Strapi REST API with Bearer token → render via React Server Components.

- `app/data/` — all Strapi API calls; uses `EnvConfig()` from `lib/utils.ts` for URL + API key
- `app/types/index.ts` — shared TypeScript interfaces for all Strapi content types
- `components/sections/` — full-page sections (Hero, About, Projects, Skills, Contact)
- `components/ui/` — reusable UI primitives (shadcn components + custom animated components)
- `components/blog-components/` — dynamic zone component registry for rendering Strapi block content; `BlockRenderer.tsx` maps block `__component` strings to React components

**Dynamic routes**: `app/projects/[projectSlug]/` fetches a single project post by slug from the `ProjectPost` collection.

**Styling**: Tailwind CSS v4 with OKLCH color variables in `globals.css`. Dark mode is the default. Use `cn()` from `lib/utils.ts` for conditional class merging.

**Animations**: GSAP for scroll-based animations; Motion (Framer Motion) for component-level transitions. Animation wrapper components live in `components/ui/animate-section/`.

**Images**: Always use Next.js `<Image>` component. Images come from Cloudinary (production) or `localhost:1337` (dev). The helper `lib/map-strapi-image.ts` normalizes Strapi image URLs.

### Backend CMS (`/backend-cms`)

Strapi v5 with these content types:
- **Project** — portfolio project with slug, cover image, tools, tags, dynamic zone blocks
- **ProjectPost** — blog-style post per project with dynamic zone blocks (`post-components.*`)
- **Stack** / **Tool** / **Tag** — taxonomy for projects
- **StackCard** — card display configs

Dynamic zone components live in `src/components/`. New post block types need a Strapi component definition there AND a corresponding React component registered in `BlockRenderer.tsx`.

### Environment Variables

**Frontend** (`.env.local`):
```
STRAPI_API_KEY=           # Bearer token for Strapi API
NEXT_PUBLIC_STRAPI_URL=   # Strapi base URL (e.g. http://localhost:1337)
```

**Backend CMS** (`.env`):
```
HOST / PORT
APP_KEYS / API_TOKEN_SALT / ADMIN_JWT_SECRET / TRANSFER_TOKEN_SALT / JWT_SECRET / ENCRYPTION_KEY
DATABASE_CLIENT / DATABASE_* (SQLite in dev, Postgres in prod)
CLOUDINARY_NAME / CLOUDINARY_KEY / CLOUDINARY_SECRET
```

## Key Conventions

- **Server vs client components**: default to server components; add `"use client"` only for interactivity/animations.
- **Strapi population**: include `populate` query params when fetching relational fields (images, tags, tools, blocks).
- **Path alias**: `@/` maps to the `frontend/` root (configured in `tsconfig.json`).
- **Package manager**: frontend uses `pnpm`; backend uses `npm`.
