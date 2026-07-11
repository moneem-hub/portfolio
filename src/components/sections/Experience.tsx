"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experiences } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Building real products, not just demos."
      description="A timeline of where I've applied my craft on production-grade codebases and shipped real features."
    >
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-blue-500/40 via-white/10 to-transparent sm:left-1/2" />

        <div className="space-y-10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={`${exp.role}-${exp.company}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="relative grid gap-6 sm:grid-cols-2 sm:gap-10"
            >
              <div className="hidden sm:block" />
              <div className="relative pl-12 sm:pl-0">
                <div className="absolute left-0 top-2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-blue-500/40 bg-[#05060a] text-blue-300 shadow-[0_0_0_4px_rgba(59,130,246,0.08)] sm:left-1/2">
                  <Briefcase className="h-3.5 w-3.5" aria-hidden="true" />
                </div>
              </div>
              <div className="relative pl-12 sm:col-start-1 sm:pl-0 sm:pr-10 sm:text-right">
                <div className="absolute left-0 top-2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-blue-500/40 bg-[#05060a] text-blue-300 shadow-[0_0_0_4px_rgba(59,130,246,0.08)] sm:hidden">
                  <Briefcase className="h-3.5 w-3.5" aria-hidden="true" />
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-neutral-300">
                  {exp.duration}
                </div>
                <h3 className="mt-3 text-xl font-semibold text-white">
                  {exp.role}
                </h3>
                <div className="mt-1 text-sm text-blue-300">{exp.company}</div>
              </div>
              <div className="pl-12 sm:col-start-2 sm:pl-10">
                <ul className="space-y-3 text-sm leading-relaxed text-neutral-300">
                  {exp.responsibilities.map((r, i) => (
                    <li key={i} className="relative pl-4">
                      <span className="absolute left-0 top-2 h-1 w-1 rounded-full bg-blue-400" />
                      {r}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-neutral-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
