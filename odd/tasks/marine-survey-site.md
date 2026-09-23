# Feature: Marine Survey Static Site

## Objective
Bilingual (es/en) informational website for a cargo & marine surveyor company, styled after comecasvc.com (modern, animated, responsive), deployable as a static site to an S3 bucket.

## Scope
- Pages (same as comecasvc.com): Home, About (`/sobre-nosotros`), Services (`/servicios`), Projects (`/proyectos`), Contact (`/contacto`) — under `/es` and `/en`.
- Content: marine/cargo surveyor services (reference: orinocosurvey.com — blocked by Cloudflare, content authored from domain knowledge).
- Brand name configurable via `NEXT_PUBLIC_SITE_NAME` env var (default "Vinsepet").
- Palette: #222E50 (navy), #007991 (teal), #439A86 (green), #BCD8C1 (mint), #E9D985 (sand).

## Constraints
- Next.js 16.3 `output: 'export'`, `trailingSlash: true`, `images.unoptimized: true`.
- No middleware, route handlers, server actions (unsupported in export).
- i18n via `app/[lang]` + `generateStaticParams` + JSON dictionaries.
- Contact form: no backend → `mailto:` based.
- Tests: explicitly not required by the user (overrides Strict TDD default). Checks: `npm run lint`, `npm run build`.

## Tasks
- [x] T1 Scaffold: next.config export, env, i18n dictionaries, layout, header/footer, language switcher, root redirect.
- [x] T2 Pages & sections with animations (home, about, services, projects, contact), responsive.
- [x] T3 Verify lint + build, `out/` structure; README deploy notes for S3.

## Route
- T1–T2: delegated direct (writer trigger: 2+ non-trivial files).
- T3: inline verification by parent.

## Delivery
- Strategy: single-pr (greenfield site; one coherent unit). RDD: off (global).

## Progress / Evidence
- T1–T2: delegated writer (stalled by watchdog after writing all pages; parent completed the rest inline).
- Parent fix: `<html lang>` was set client-side only (en pages shipped lang="es"). Now multiple root layouts: `app/[lang]/layout.tsx` + `app/(redirect)/layout.tsx`, plus `app/global-not-found.tsx` (`experimental.globalNotFound`).
- `siteConfig.legalName`/`url` now derive from env (`NEXT_PUBLIC_SITE_NAME`, `NEXT_PUBLIC_SITE_URL`).
- `npm run lint`: 0 problems.
- `npm run build`: OK, 12 localized pages + `/` + 404.html in `out/`.
- `<html lang>`: out/en/*.html → "en", out/es/*.html → "es".
- `NEXT_PUBLIC_SITE_NAME=Acme npm run build`: 10 "Acme" hits, 0 "Vinsepet" in out/es/index.html.
- `.env.example` NOT created: `.env*` writes denied by user permission settings (content in README).
- Not verified: visual/browser check of animations and responsiveness.

## Next step
User visual review (`npm run dev`), real content/contact data, images in `public/images`.
