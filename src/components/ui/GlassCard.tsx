"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type GlassCardProps = {
  className?: string;
  hover?: boolean;
  children: ReactNode;
} & Omit<HTMLMotionProps<"div">, "className" | "children">;

export function GlassCard({
  className,
  hover = true,
  children,
  ...rest
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl glass p-6",
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:opacity-0 before:transition-opacity before:duration-500",
        "hover:before:opacity-100",
        "before:bg-[radial-gradient(400px_circle_at_var(--mx,50%)_var(--my,0%),rgba(59,130,246,0.12),transparent_60%)]",
        className
      )}
      onMouseMove={(e) => {
        const target = e.currentTarget;
        const rect = target.getBoundingClientRect();
        target.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        target.style.setProperty("--my", `${e.clientY - rect.top}px`);
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
