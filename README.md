# Muhammad Moneem Raza - Portfolio

A responsive portfolio website built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and Lucide Icons.

## Highlights

- Next.js 16, React 19, and TypeScript
- Tailwind CSS v4 with custom design tokens
- Smooth Framer Motion interactions
- Dark mode by default with a light-mode toggle
- Sticky navigation, active section highlighting, scroll progress, and back-to-top controls
- Project search and filtering
- Contact form with client-side validation
- SEO metadata, JSON-LD, sitemap, robots route, and favicon

## Project Structure

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
    sitemap.ts
    robots.ts
  components/
    layout/
    sections/
    ui/
  data/
    portfolio.ts
  hooks/
  lib/
public/
  favicon.svg
  Muhammad Moneem Resume.pdf
```

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view the site.

## Production Check

```bash
npm run lint
npm run typecheck
npm run build
npm run start
```

## Customizing Content

All portfolio content lives in `src/data/portfolio.ts`. Edit that file to update profile details, skills, experience, projects, education, certifications, achievements, and social links.

The resume PDF is `public/Muhammad Moneem Resume.pdf`; the Download Resume button points to that file.

## Deploying To GitHub Pages

The site is exported as static files (`output: "export"`) and is served from the `/portfolio`
base path so it fits the project site URL `https://moneem-hub.github.io/portfolio/`.
That base path lives in two places that must stay in sync: `next.config.ts` and
`src/lib/base-path.ts` (used for links to files in `public/`). Renaming the repository
means changing both.

1. Push to `main` on https://github.com/moneem-hub/portfolio.
2. The `Deploy to GitHub Pages` workflow (`.github/workflows/deploy-pages.yml`) builds `out/`
   and publishes it. Pages must be configured with the GitHub Actions source.
3. The live site is https://moneem-hub.github.io/portfolio/.

## Deploying To Vercel

1. Import the repository at https://vercel.com/new.
2. Keep the default build command: `npm run build`.
3. Set `NEXT_PUBLIC_BASE_PATH` to an empty value if you serve the site from the domain root.
4. Add a custom domain in Vercel project settings when ready.
