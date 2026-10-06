"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import { profile, stats, socials } from "@/data/portfolio";
import { BASE_PATH } from "@/lib/base-path";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { ButtonLink } from "@/components/ui/Button";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { HeroBackground } from "@/components/sections/HeroBackground";

const ROLES = [
  "Flutter Developer",
  "Python & Linux Developer",
  "Mobile App Engineer",
  "Firebase Specialist",
  "Dart Craftsman",
];

function useRotatingRoles(roles: string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting">("typing");

  useEffect(() => {
    const current = roles[index % roles.length];
    let timeout: ReturnType<typeof setTimeout> | undefined;

    if (phase === "typing") {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 70);
      } else {
        timeout = setTimeout(() => setPhase("holding"), 1200);
      }
    } else if (phase === "holding") {
      timeout = setTimeout(() => setPhase("deleting"), 1200);
    } else if (phase === "deleting") {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), 40);
      } else {
        timeout = setTimeout(() => {
          setIndex((i) => i + 1);
          setPhase("typing");
        }, 0);
      }
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [text, phase, index, roles]);

  return text;
}

export function Hero() {
  const typedRole = useRotatingRoles(ROLES);

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] w-full items-center overflow-hidden pb-16 pt-28 sm:pt-32"
    >
      <HeroBackground />

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-neutral-200 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
          </span>
          Open to opportunities
        </motion.div>

        <div className="mt-6 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              Hi, I&apos;m <span className="gradient-text">{profile.shortName}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-4 flex items-center gap-2 text-lg text-neutral-300 sm:text-xl"
            >
              <Sparkles className="h-4 w-4 text-blue-400" aria-hidden="true" />
              <span className="font-medium text-white">{typedRole}</span>
              <span className="ml-0.5 inline-block h-5 w-[2px] animate-pulse bg-blue-400" aria-hidden="true" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-neutral-400 sm:text-lg"
            >
              {profile.tagline} I build clean, efficient, and user-centered
              applications - from idea to production.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <ButtonLink href="#contact" variant="primary" size="lg">
                <Mail className="h-4 w-4" aria-hidden="true" />
                Get in touch
              </ButtonLink>
              <ButtonLink
                href={`${BASE_PATH}/Muhammad%20Moneem%20Resume.pdf`}
                variant="secondary"
                size="lg"
                download
                ariaLabel="Download resume"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download Resume
              </ButtonLink>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-8 flex items-center gap-3"
            >
              <span className="text-xs uppercase tracking-[0.18em] text-neutral-500">
                Find me on
              </span>
              <div className="flex items-center gap-2">
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
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-blue-500/30 via-transparent to-blue-400/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
                <div className="flex items-center justify-between text-xs text-neutral-400">
                  <span>~/moneem</span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-blue-400" />
                    online
                  </span>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {stats.map((s, i) => (
                    <motion.div
                      key={s.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                    >
                      <div className="text-2xl font-semibold text-white sm:text-3xl">
                        <AnimatedNumber value={s.value} suffix={s.value >= 10 ? "" : "+"} />
                      </div>
                      <div className="mt-1 text-xs text-neutral-400">{s.label}</div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <div className="flex items-center gap-2 text-xs text-neutral-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                    Current focus
                  </div>
                  <p className="mt-2 text-sm text-neutral-200">
                    Flutter / Python / Linux / Firebase / Scalable apps
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="group absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-[0.18em] text-neutral-400 transition-colors hover:text-white sm:flex"
        >
          Scroll
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-8 w-5 items-start justify-center rounded-full border border-white/15 pt-1.5"
          >
            <ArrowDown className="h-3 w-3" aria-hidden="true" />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}

