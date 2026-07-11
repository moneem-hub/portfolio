"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Academic background."
      description="Formal study that grounds my practice in computer science fundamentals."
    >
      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-blue-500/40 via-white/10 to-transparent sm:left-1/2" />
        <div className="space-y-10">
          {education.map((e) => (
            <motion.div
              key={`${e.degree}-${e.institution}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative grid gap-4 sm:grid-cols-2 sm:gap-10"
            >
              <div className="relative pl-12 sm:pl-0 sm:pr-10 sm:text-right">
                <div className="absolute left-0 top-2 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border border-blue-500/40 bg-[#05060a] text-blue-300 shadow-[0_0_0_4px_rgba(59,130,246,0.08)] sm:left-1/2">
                  <GraduationCap className="h-4 w-4" aria-hidden="true" />
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-neutral-300">
                  {e.years}
                </div>
                <h3 className="mt-3 text-xl font-semibold text-white">
                  {e.degree}
                </h3>
                <div className="mt-1 text-sm text-blue-300">{e.institution}</div>
                {e.cgpa && (
                  <div className="mt-2 text-sm text-neutral-400">CGPA: {e.cgpa}</div>
                )}
              </div>
              <div className="pl-12 sm:pl-10">
                <p className="text-sm leading-relaxed text-neutral-400">
                  Coursework and self-driven study across computer science
                  fundamentals, with a focused passion for mobile development,
                  software engineering, and modern frameworks.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
