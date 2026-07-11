"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Code2 as Github, X, Check } from "lucide-react";
import { useEffect } from "react";
import type { Project } from "@/data/portfolio";
import { TechIcon } from "@/components/ui/TechIcon";

type Props = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-[#0a0c14] shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-44 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-blue-700/10 to-transparent" />
              <div className="absolute inset-0 grid-pattern opacity-40" />
              <div className="absolute bottom-4 left-6 text-xs font-medium uppercase tracking-[0.18em] text-blue-200">
                {project.category}
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close details"
                className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-md transition-colors hover:bg-white/10"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400 sm:text-base">
                {project.longDescription ?? project.description}
              </p>

              <div className="mt-6">
                <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-300">
                  Features
                </h4>
                <ul className="mt-3 space-y-2">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-neutral-300">
                      <Check className="mt-0.5 h-4 w-4 text-blue-400" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-300">
                  Tech Stack
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-neutral-300"
                    >
                      <TechIcon name={t} className="h-3.5 w-3.5 text-blue-300" />
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex h-10 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 text-sm font-medium text-white transition-colors hover:border-blue-400/50 hover:bg-blue-500"
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                    View on GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex h-10 items-center gap-2 rounded-full bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400"
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    Live demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
