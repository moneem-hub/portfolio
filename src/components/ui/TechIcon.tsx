"use client";

import {
  Bell,
  Blocks,
  Braces,
  Cloud,
  Code2,
  Database,
  FileCode,
  Flame,
  GitBranch,
  Globe2,
  Hash,
  KeyRound,
  Layout,
  MonitorCog,
  Palette,
  Send,
  Server,
  ShieldCheck,
  Smartphone,
  Terminal,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  flutter: Smartphone,
  dart: Braces,
  python: FileCode,
  scripting: Terminal,
  automation: Terminal,
  linux: Terminal,
  ubuntu: Terminal,
  bash: Terminal,
  shell: Terminal,
  "tools & os": Terminal,
  firebase: Flame,
  firestore: Database,
  "cloud firestore": Database,
  "firebase auth": KeyRound,
  authentication: ShieldCheck,
  fcm: Bell,
  "cloud messaging": Bell,
  "google sign in": KeyRound,
  provider: Blocks,
  "state management": Blocks,
  "rest apis": Globe2,
  rest: Globe2,
  http: Globe2,
  "c#": Hash,
  "c# & .net": Hash,
  ".net": Server,
  sql: Database,
  html: Code2,
  css: Palette,
  javascript: Braces,
  git: GitBranch,
  github: Code2,
  "android studio": MonitorCog,
  "vs code": Code2,
  postman: Send,
  "ui/ux": Layout,
  "ui design": Palette,
  ux: Layout,
  "mobile development": Smartphone,
  "cross-platform": Smartphone,
};

type TechIconProps = {
  name: string;
  className?: string;
};

export function TechIcon({ name, className }: TechIconProps) {
  const Icon = ICONS[name.toLowerCase()] ?? Code2;

  return <Icon className={cn("h-4 w-4", className)} aria-hidden="true" />;
}
