"use client";

import { motion } from "framer-motion";
import { Code2, GraduationCap, Heart, Target } from "lucide-react";
import { summary } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";

const CARDS = [
  {
    icon: GraduationCap,
    title: "Education",
    body: summary.education,
  },
  {
    icon: Heart,
    title: "Interests",
    items: summary.interests,
  },
  {
    icon: Target,
    title: "Objective",
    body: summary.objective,
  },
  {
    icon: Code2,
    title: "Engineering Values",
    body: "Clean architecture, reusable components, performance, and accessibility - applied to every project I ship.",
  },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="A developer who cares about the details."
      description="I build mobile products end-to-end - from architecture to pixel - with a strong focus on clarity, performance, and user experience."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <GlassCard className="h-full p-8 sm:p-10">
            <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-blue-300">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              My story
            </div>
            <p className="mt-5 text-pretty text-base leading-relaxed text-neutral-300 sm:text-lg">
              {summary.story}
            </p>
            <p className="mt-4 text-pretty text-base leading-relaxed text-neutral-400">
              Through my internship and personal projects, I&apos;ve shipped
              production-ready applications across restaurant, banking, and
              education domains. I write code I would be proud to ship, and I
              obsess over the small things that make a product feel right.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Flutter & Dart",
                "Python & Scripting",
                "Linux Environment",
                "Cross-platform mobile",
                "Clean architecture",
                "Firebase & REST APIs",
                "UI/UX & Performance",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {CARDS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: 0.1 + i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <GlassCard className="h-full p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300 ring-1 ring-blue-500/20">
                    <c.icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <h3 className="text-sm font-semibold text-white">{c.title}</h3>
                </div>
                {c.body && (
                  <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                    {c.body}
                  </p>
                )}
                {c.items && (
                  <ul className="mt-3 space-y-1.5 text-sm text-neutral-400">
                    {c.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1 w-1 rounded-full bg-blue-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

