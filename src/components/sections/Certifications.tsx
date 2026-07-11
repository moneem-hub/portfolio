"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle2 } from "lucide-react";
import { certifications } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Continuous learning."
      description="Certificates earned to deepen my craft across web, marketing, and freelancing."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <GlassCard className="h-full p-6">
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-700/10 text-blue-300 ring-1 ring-blue-500/20">
                  <Award className="h-5 w-5" aria-hidden="true" />
                </div>
                <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-500">
                  Certified
                </span>
              </div>
              <h3 className="mt-4 text-base font-semibold text-white">
                {c.title}
              </h3>
              <p className="mt-1 text-sm text-blue-300">{c.issuer}</p>
              <div className="mt-4 flex items-center gap-2 text-xs text-neutral-400">
                <CheckCircle2 className="h-3.5 w-3.5 text-blue-400" aria-hidden="true" />
                Verified credential
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
