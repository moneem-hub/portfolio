import { Mail } from "lucide-react";
import { profile, socials } from "@/data/portfolio";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { SocialIcon } from "@/components/ui/SocialIcon";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-12 border-t border-white/5">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
      <div className="mx-auto w-full max-w-6xl px-6 py-14">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <a href="#home" className="inline-flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-sm font-semibold text-white">
                {profile.initials}
              </span>
              <span className="text-base font-semibold tracking-tight text-white">
                {profile.name}
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-neutral-400">
              {profile.role} crafting production-ready mobile experiences with
              Flutter, Dart, and Firebase.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-300">
              Navigation
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-y-2 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    className="text-neutral-400 transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-300">
              Connect
            </h3>
            <p className="mt-4 text-sm text-neutral-400">
              Open to full-time Flutter / Mobile opportunities and interesting
              collaborations.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target={s.url.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer noopener"
                  aria-label={s.label}
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-300 transition-colors hover:border-blue-400/50 hover:bg-blue-500 hover:text-white"
                >
                  <SocialIcon
                    name={s.icon}
                    className="h-4 w-4 transition-transform group-hover:scale-110"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 text-xs text-neutral-500 sm:flex-row">
          <p>© {year} {SITE.name}. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <Mail className="h-3.5 w-3.5" aria-hidden="true" />
            {profile.email}
          </p>
        </div>
      </div>
    </footer>
  );
}
