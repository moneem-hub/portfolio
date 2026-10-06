// Base path the site is served from. Keep this in sync with `next.config.ts`.
// On a GitHub Pages project site the app lives under /<repo>/, so assets in
// `public/` must be referenced with this prefix instead of a bare "/".
export const BASE_PATH =
  process.env.NEXT_PUBLIC_BASE_PATH !== undefined
    ? process.env.NEXT_PUBLIC_BASE_PATH
    : process.env.NODE_ENV === "production"
      ? "/portfolio"
      : "";
