"use client";

import { motion } from "framer-motion";

export function HeroBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.18),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.10),transparent_60%)]" />

      {/* Grid */}
      <div className="absolute inset-0 grid-pattern opacity-40 mask-fade-y" />

      {/* Floating orbs */}
      <motion.div
        className="absolute -top-24 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl"
        animate={{ y: [0, 30, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -left-32 h-72 w-72 rounded-full bg-blue-700/20 blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-400/15 blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating shapes */}
      <motion.div
        className="absolute right-10 top-28 h-20 w-20 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md"
        animate={{ rotate: [0, 8, 0], y: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 left-12 h-14 w-14 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md"
        animate={{ rotate: [0, -10, 0], y: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-1/4 top-1/2 hidden h-3 w-3 rounded-full bg-blue-400/80 shadow-[0_0_20px_rgba(59,130,246,0.6)] lg:block"
        animate={{ y: [0, -20, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-1/3 top-1/3 hidden h-2 w-2 rounded-full bg-blue-300/80 shadow-[0_0_18px_rgba(59,130,246,0.6)] lg:block"
        animate={{ y: [0, 18, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      />
    </div>
  );
}
