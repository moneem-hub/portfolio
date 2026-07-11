"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { skills, skillCategories } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";
import { TechIcon } from "@/components/ui/TechIcon";
import { cn } from "@/lib/utils";

const FILTERS = ["All", "Mobile Development", "Backend", "Web", "Tools", "Design"] as const;

export function Skills() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");

  const filtered = useMemo(() => {
    if (filter === "All") return skills;
    return skills.filter((s) => s.category === filter);
  }, [filter]);

  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="A toolkit shaped by real projects."
      description="Technologies I use day-to-day to design, build, and ship production-grade mobile applications."
    >
      <div className="mb-8 flex flex-wrap items-center gap-2">
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

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
          >
            <GlassCard className="h-full p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-700/10 text-blue-200 ring-1 ring-blue-500/20">
                    <TechIcon name={skill.name} />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      {skill.name}
                    </div>
                    <div className="text-xs text-neutral-500">
                      {skill.category}
                    </div>
                  </div>
                </div>
                <div className="text-sm font-medium text-neutral-300">
                  {skill.level}%
                </div>
              </div>
              <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-300"
                />
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      <div className="mt-10">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-neutral-400">
          Category map
        </h3>
        <div className="flex flex-wrap gap-2">
          {skillCategories.map((cat) => (
            <div
              key={cat.name}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
            >
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-300">
                {cat.name}
              </div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-neutral-300"
                  >
                    <TechIcon name={item} className="h-3.5 w-3.5 text-blue-300" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
