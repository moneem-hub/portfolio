"use client";

import Link from "next/link";
import { type ButtonHTMLAttributes, type ReactNode, forwardRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const base =
  "relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05060a] disabled:pointer-events-none disabled:opacity-50 select-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-blue-500 text-white shadow-[0_8px_30px_-8px_rgba(59,130,246,0.6)] hover:bg-blue-400 hover:shadow-[0_12px_36px_-8px_rgba(59,130,246,0.7)]",
  secondary:
    "bg-white/5 text-white border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-white/20",
  ghost: "text-neutral-300 hover:text-white hover:bg-white/5",
  outline:
    "border border-white/15 text-white hover:border-blue-400/60 hover:text-blue-300",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps>;

type LinkProps = CommonProps & {
  href: string;
  external?: boolean;
  download?: boolean;
  ariaLabel?: string;
};

function classes(variant: Variant = "primary", size: Size = "md", extra?: string) {
  return cn(base, variants[variant], sizes[size], extra);
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { variant = "primary", size = "md", className, children, ...rest },
    ref
  ) {
    return (
      <motion.button
        ref={ref}
        whileHover={{ y: -2 }}
        whileTap={{ y: 0, scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={classes(variant, size, className)}
        {...(rest as HTMLMotionProps<"button">)}
      >
        {children}
      </motion.button>
    );
  }
);

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  external,
  download,
  ariaLabel,
}: LinkProps) {
  const cls = classes(variant, size, className);

  const motionProps: HTMLMotionProps<"a"> = {
    whileHover: { y: -2 },
    whileTap: { y: 0, scale: 0.98 },
    transition: { type: "spring", stiffness: 400, damping: 25 },
    className: cls,
  };

  if (external || download) {
    return (
      <motion.a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer noopener" : undefined}
        download={download}
        aria-label={ariaLabel}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <Link href={href} aria-label={ariaLabel} className={cls}>
      <motion.span
        whileHover={{ y: -2 }}
        whileTap={{ y: 0, scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="inline-flex items-center gap-2"
      >
        {children}
      </motion.span>
    </Link>
  );
}
