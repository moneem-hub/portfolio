"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2 as Github, Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { projects } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";
import { ProjectModal } from "@/components/sections/ProjectModal";
import { ProjectBanner } from "@/components/ui/ProjectBanner";
import { TechIcon } from "@/components/ui/TechIcon";
import type { Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const FILTERS = ["All", "Mobile", "Web"] as const;
type Filter = (typeof FILTERS)[number];

export function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<Project | null>(null);

  const visible = useMemo(() => {
    return projects.filter((p) => {
      const matchesFilter = filter === "All" || p.category === filter;
      const matchesQuery =
        !query.trim() ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase()) ||
        p.tech.some((t) => t.toLowerCase().includes(query.toLowerCase()));
      return matchesFilter && matchesQuery;
    });
  }, [filter, query]);

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work."
      description="A few projects I've built, contributed to, or shipped during my internship and personal time."
    >
      <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex flex-wrap items-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={cn(
                "relative inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                filter === f
                  ? "border-blue-500/40 bg-blue-500/10 text-white"
                  : "border-white/10 bg-white/5 text-neutral-400 hover:border-white/20 hover:text-white"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
          <input
            type="text"
            placeholder="Search projects or tech..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="h-10 w-full rounded-full border border-white/10 bg-white/5 pl-9 pr-9 text-sm text-white placeholder-neutral-500 outline-none transition-colors focus:border-blue-500/50 focus:bg-white/10"
            aria-label="Search projects"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1 text-neutral-400 hover:text-white"
              aria-label="Clear search"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>

      {visible.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-white/10 p-12 text-center text-neutral-400">
          No projects match your search.
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {visible.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <GlassCard className="flex h-full flex-col p-0" hover={false}>
                <ProjectBanner project={p} variant="card" />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-blue-300">
                      {p.category}
                    </span>
                    {p.featured && (
                      <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-blue-200">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight text-white">
                    {p.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-400">
                    {p.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-neutral-300"
                      >
                        <TechIcon name={t} className="h-3.5 w-3.5 text-blue-300" />
                        {t}
                      </span>
                    ))}
                    {p.tech.length > 4 && (
                      <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] text-neutral-500">
                        +{p.tech.length - 4}
                      </span>
                    )}
                  </div>
                  <div className="mt-5 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setActive(p)}
                      className="inline-flex h-9 items-center justify-center rounded-full bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400"
                    >
                      View details
                    </button>
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${p.title} GitHub`}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-300 transition-colors hover:border-blue-400/50 hover:bg-blue-500 hover:text-white"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${p.title} live demo`}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-300 transition-colors hover:border-blue-400/50 hover:bg-blue-500 hover:text-white"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      )}

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </Section>
  );
}
