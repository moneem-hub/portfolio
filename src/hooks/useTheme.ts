"use client";

import { useEffect, useState } from "react";
import { DEFAULT_THEME, THEMES, type Theme } from "@/lib/constants";

/**
 * Manage light/dark theme with localStorage persistence.
 */
function getInitialTheme(): Theme {
  if (typeof window === "undefined") return DEFAULT_THEME;
  try {
    const stored = window.localStorage.getItem("theme") as Theme | null;
    return stored && (THEMES as readonly string[]).includes(stored)
      ? stored
      : DEFAULT_THEME;
  } catch {
    return DEFAULT_THEME;
  }
}

function syncDocumentTheme(next: Theme) {
  document.documentElement.classList.toggle("light", next === "light");
  document.documentElement.classList.toggle("dark", next === "dark");
  document.documentElement.dataset.theme = next;
  document.body.dataset.theme = next;
  document.documentElement.style.colorScheme = next;
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    syncDocumentTheme(theme);
  }, [theme]);

  const applyTheme = (next: Theme) => {
    setTheme(next);
    syncDocumentTheme(next);
    try {
      window.localStorage.setItem("theme", next);
    } catch {
      /* ignore */
    }
  };

  const toggle = () => {
    const current = document.documentElement.dataset.theme === "light" ? "light" : "dark";
    applyTheme(current === "dark" ? "light" : "dark");
  };

  return { theme, setTheme: applyTheme, toggle };
}
