"use client";

import { useCountUp } from "@/hooks/useCountUp";

type AnimatedNumberProps = {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
};

export function AnimatedNumber({
  value,
  suffix = "",
  duration = 1500,
  className,
}: AnimatedNumberProps) {
  const { ref, value: current } = useCountUp(value, duration);
  return (
    <span ref={ref} className={className}>
      {current}
      {suffix}
    </span>
  );
}
