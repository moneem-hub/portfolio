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

## Deploying To Vercel

1. Push the project to GitHub.
2. Import the repository at https://vercel.com/new.
3. Keep the default build command: `npm run build`.
4. Add a custom domain in Vercel project settings when ready.
