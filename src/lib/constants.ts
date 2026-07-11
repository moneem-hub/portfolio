// Application-wide constants.

export const SITE = {
  name: "Muhammad Moneem Raza",
  shortName: "Muhammad Moneem",
  description:
    "Portfolio of Muhammad Moneem Raza - Flutter Mobile Application Developer crafting production-ready mobile experiences with Dart, Firebase, and clean architecture.",
  url: "https://moneemraza.dev",
  ogImage: "/favicon.svg",
  twitter: "@iammoneem",
  keywords: [
    "Muhammad Moneem Raza",
    "Muhammad Moneem",
    "Flutter Developer",
    "Mobile App Developer",
    "Dart",
    "Firebase",
    "Portfolio",
    "Software Engineer",
  ],
};

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export const THEMES = ["dark", "light"] as const;
export type Theme = (typeof THEMES)[number];
export const DEFAULT_THEME: Theme = "dark";

