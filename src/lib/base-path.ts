// Base path the site is served from. Keep this in sync with `next.config.ts`.
// On a GitHub Pages project site the app lives under /<repo>/, so assets in
// `public/` must be referenced with this prefix instead of a bare "/".
export const BASE_PATH =
  process.env.NEXT_PUBLIC_BASE_PATH !== undefined
    ? process.env.NEXT_PUBLIC_BASE_PATH
    : process.env.NODE_ENV === "production"
      ? "/portfolio"
      : "";

/**
 * Prefix an asset path with the base path so it resolves both in local dev
 * (`""`) and on GitHub Pages (`/portfolio`).
 *
 * Pass the path as it sits inside `public/`, with or without a leading slash.
 * Keep it URL-encoded (spaces as `%20`) because static hosts serve the file by
 * its exact name.
 */
export function withBase(path: string): string {
  return `${BASE_PATH}/${path.replace(/^\/+/, "")}`;
}
