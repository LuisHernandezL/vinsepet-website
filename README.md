# Cargo & Marine Surveyors — Static Website

Bilingual (Spanish / English) informational website for a cargo and marine surveying company. Built with Next.js 16 (App Router), Tailwind CSS v4 and `motion`, exported as a fully static site for Amazon S3.

## Pages

| Route | Page |
| --- | --- |
| `/` | Redirects to `/es/` |
| `/{es,en}/` | Home |
| `/{es,en}/sobre-nosotros/` | About us |
| `/{es,en}/servicios/` | Services |
| `/{es,en}/proyectos/` | Projects |
| `/{es,en}/contacto/` | Contact (form opens a prefilled WhatsApp chat) |

## Configuration

| Variable | Default | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_NAME` | `ARS Inspecciones` | Brand name used in the navbar, footer, titles and copy |
| `NEXT_PUBLIC_SITE_URL` | `https://www.example.com` | Public URL used for metadata |

Create a `.env.local` (or `.env.production`) file:

```bash
NEXT_PUBLIC_SITE_NAME="ARS Inspecciones"
NEXT_PUBLIC_SITE_URL=https://www.example.com
```

These values are **inlined at build time** — rebuild after changing them.

Contact details, socials and legal name live in `lib/site.ts`. Copy lives in `app/[lang]/dictionaries/{es,en}.json`; services, projects and ports data live in `content/`.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build   # static export to ./out
```

## Deploying to S3

`npm run build` produces the `out/` folder. With `trailingSlash: true`, every route is emitted as `<route>/index.html` (e.g. `out/es/servicios/index.html`).

1. Create a bucket and enable **Static website hosting** with index document `index.html` and error document `404.html`.
2. Allow public reads (bucket policy) or put CloudFront in front of it (recommended, for HTTPS and caching).
3. Upload:

   ```bash
   aws s3 sync out/ s3://YOUR_BUCKET --delete
   ```

**CloudFront note:** if you use the S3 *website endpoint* as the origin, `/es/servicios/` resolves to its `index.html` automatically. If you use the S3 *REST endpoint* (Origin Access Control), CloudFront only applies the default root object at `/`, so add a CloudFront Function that appends `index.html` to URIs ending in `/`.

## Project structure

```
app/
  (redirect)/        root layout + "/" → "/es/" redirect stub
  [lang]/            localized root layout and pages (es, en)
  global-not-found.tsx
components/
  layout/            Header, Footer, LanguageSwitcher, MobileMenu
  sections/          Hero, ServicesGrid, ProjectsGrid, ContactForm, ...
  ui/                Button, Container, Reveal, Counter, icons, ...
content/             typed services / projects / ports data
lib/
  i18n/              locale config, dictionaries, route helpers
  site.ts            brand and contact configuration
  fonts.ts           shared Figtree + Inter fonts
```
