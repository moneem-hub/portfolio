"use client";

import {
  Code2,
  Briefcase,
  Mail,
  Globe,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  Github: Code2,
  Linkedin: Briefcase,
  Mail,
  Twitter: Globe,
};

type Props = {
  name: string;
  className?: string;
};

export function SocialIcon({ name, className }: Props) {
  const Icon = map[name] ?? Mail;
  return <Icon className={className} aria-hidden="true" />;
}
