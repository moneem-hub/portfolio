// Centralized portfolio data sourced from the resume.
// If any field is missing, a TODO placeholder is left.

export type SocialLink = {
  label: string;
  url: string;
  icon: string;
};

export type Skill = {
  name: string;
  level: number; // 0-100
  category: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  duration: string;
  responsibilities: string[];
  technologies: string[];
};

export type ProjectImage = {
  /**
   * Path inside `public/`, URL-encoded (spaces as `%20`) and case exact, since
   * GitHub Pages serves it from a case-sensitive file system. Prefixed with the
   * site base path at render time via `withBase()`.
   */
  src: string;
  alt: string;
  /** Short caption shown under the screenshot in the project details modal. */
  label?: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  features: string[];
  tech: string[];
  github?: string;
  live?: string;
  category: "Mobile" | "Web" | "Tool";
  featured?: boolean;
  /**
   * App screenshots, in display order: the first one is the card cover and all
   * of them appear as labelled screens in the details modal. Projects without
   * screenshots fall back to generated gradient artwork.
   */
  images?: ProjectImage[];
};

export type EducationItem = {
  degree: string;
  institution: string;
  years: string;
  cgpa?: string;
};

export type CertificationItem = {
  title: string;
  issuer: string;
  year?: string;
};

export type AchievementItem = {
  title: string;
  description: string;
  year?: string;
};

export const profile = {
  name: "Muhammad Moneem Raza",
  shortName: "Muhammad Moneem Raza",
  role: "Flutter & Software Developer",
  tagline: "Crafting production-ready mobile apps and software experiences with Flutter, Dart, Python, Linux, and Firebase.",
  email: "moneemraxa@gmail.com",
  phone: "+923081125201",
  location: "226 Executive Block, Street #12, Paragon City, Barki Road, Lahore",
  initials: "MR",
};

export const socials: SocialLink[] = [
  { label: "LinkedIn", url: "https://www.linkedin.com/in/muhammad-moneem/", icon: "Linkedin" },
  { label: "GitHub", url: "https://github.com/moneem-hub", icon: "Github" },
  { label: "Email", url: "mailto:moneemraxa@gmail.com", icon: "Mail" },
];

export const summary = {
  headline: "Flutter & Software Developer",
  story:
    "I am a passionate software and Flutter mobile application developer with hands-on experience building real-world apps and automation tools using Dart, Python, and Firebase across Linux and cross-platform environments. Through my internship and personal projects, I have developed multiple production-ready applications and refined my skills in writing clean, efficient code. I am committed to delivering meaningful user experiences and continuously learning modern software development practices.",
  education: "Bachelor of Science in Computer Science - University of Agriculture Faisalabad (Graduating June 2026)",
  interests: [
    "Cross-platform mobile development (Flutter & Dart)",
    "Python scripting, automation, and backend logic",
    "Linux environments and system workflows",
    "Clean architecture and scalable state management",
    "UI/UX design and interaction details",
    "Open source contribution and problem solving",
  ],
  objective:
    "To secure a challenging role as a software engineer where I can contribute to impactful mobile and software products, grow as a developer, and collaborate with teams that value craft and clarity.",
};

export const skills: Skill[] = [
  // Flutter / Mobile
  { name: "Flutter", level: 92, category: "Mobile Development" },
  { name: "Dart", level: 90, category: "Mobile Development" },
  { name: "Firebase", level: 90, category: "Mobile Development" },
  { name: "Firestore", level: 84, category: "Mobile Development" },
  { name: "REST APIs", level: 80, category: "Mobile Development" },

  // Backend & Scripting
  { name: "Python", level: 88, category: "Backend" },
  { name: "C#", level: 80, category: "Backend" },
  { name: ".NET", level: 75, category: "Backend" },
  { name: "SQL", level: 78, category: "Backend" },

  // Web
  { name: "HTML", level: 80, category: "Web" },
  { name: "CSS", level: 78, category: "Web" },
  { name: "JavaScript", level: 80, category: "Web" },

  // Tools & OS
  { name: "Linux", level: 88, category: "Tools" },
  { name: "Git", level: 90, category: "Tools" },
  { name: "GitHub", level: 85, category: "Tools" },
  { name: "Android Studio", level: 88, category: "Tools" },
  { name: "VS Code", level: 92, category: "Tools" },
  { name: "Postman", level: 85, category: "Tools" },

  // Design
  { name: "UI/UX", level: 84, category: "Design" },
];

export const skillCategories: { name: string; items: string[] }[] = [
  { name: "Flutter", items: ["Flutter", "Dart", "Provider", "State Management"] },
  { name: "Dart", items: ["Dart", "Async", "OOP"] },
  { name: "Python", items: ["Python", "Scripting", "Automation", "REST"] },
  { name: "Linux", items: ["Linux", "Ubuntu", "Bash", "Shell"] },
  { name: "Firebase", items: ["Firebase Auth", "Cloud Firestore", "FCM"] },
  { name: "REST APIs", items: ["REST", "Postman", "HTTP"] },
  { name: "C# & .NET", items: ["C#", ".NET"] },
  { name: "SQL", items: ["SQL", "Queries"] },
  { name: "Git", items: ["Git", "GitHub"] },
  { name: "UI/UX", items: ["UI Design", "UX", "Responsive Layouts"] },
  { name: "Mobile Development", items: ["Flutter", "Firebase", "Cross-platform"] },
  { name: "Tools & OS", items: ["Linux", "Android Studio", "VS Code", "Postman", "GitHub"] },
];

export const experiences: ExperienceItem[] = [
  {
    role: "Flutter Developer Intern",
    company: "AutoSoft Dynamics Pvt. Limited",
    duration: "Internship",
    responsibilities: [
      "Enhanced and maintained EchoSafe (FYP), developed Cravely Restaurant App, and contributed to the FWBL Digital Banking Application by implementing features, fixing bugs, and improving application performance.",
      "Developed cross-platform mobile applications using Flutter, Dart, Firebase, Cloud Firestore, REST APIs, Provider, Google Sign In, and Firebase Cloud Messaging (FCM).",
      "Built reusable UI components, followed a structured Flutter project architecture, tested APIs using Postman, and collaborated with the development team using Git/GitHub.",
    ],
    technologies: ["Flutter", "Dart", "Firebase", "Cloud Firestore", "REST APIs", "Provider", "Google Sign In", "FCM", "Postman", "Git"],
  },
];

export const projects: Project[] = [
  {
    id: "echosafe",
    title: "EchoSafe",
    description:
      "Anonymous Student Complaint Application - a secure platform for students and administrators to manage complaints with role-based access.",
    longDescription:
      "EchoSafe is a secure, anonymous complaint management application built with Flutter and Firebase. It implements role based authentication, real time complaint management, and a user friendly interface for both students and administrators.",
    features: [
      "Role based authentication (Student / Admin)",
      "Anonymous complaint submission",
      "Real time updates via Firestore",
      "Admin dashboard for management",
      "Optimized Firebase operations for reliability and scale",
    ],
    tech: ["Flutter", "Dart", "Firebase", "Firestore", "Authentication"],
    github: "https://github.com/moneem-hub/EchoSafe",
    category: "Mobile",
    featured: true,
    images: [
      {
        src: "projects/EchoSafe/Home%20Screen.png",
        alt: "EchoSafe student portal home screen with submit complaint and advisor login actions",
        label: "Portal Home",
      },
      {
        src: "projects/EchoSafe/Student%20Complaint%20Screen.png",
        alt: "EchoSafe anonymous complaint form with roll number, department and evidence upload fields",
        label: "Submit Complaint",
      },
      {
        src: "projects/EchoSafe/splash%20screen.jpg",
        alt: "EchoSafe splash screen showing the Safe Echo branded logo",
        label: "Splash Screen",
      },
    ],
  },
  {
    id: "cravely",
    title: "Cravely",
    description:
      "Restaurant Application - a cross-platform restaurant app with clean, modular architecture and scalable component design.",
    longDescription:
      "Cravely is a cross-platform restaurant application built with Flutter, Firebase, REST APIs, and Provider. It follows a clean, modular architecture with reusable components and scalable code organization.",
    features: [
      "Cross-platform (iOS / Android)",
      "Firebase Authentication & Firestore",
      "Google Sign In",
      "Cloud Messaging (FCM) notifications",
      "REST API integration with Postman testing",
    ],
    tech: ["Flutter", "Firebase", "REST APIs", "Provider", "Google Sign In", "FCM"],
    github: "https://github.com/moneem-hub/cravely_restaurant_app",
    category: "Mobile",
    featured: true,
    images: [
      {
        src: "projects/Cravely/cravely.jpeg",
        alt: "Cravely restaurant app menu browsing screen with search, burger, pizza and drinks categories",
        label: "Menu & Search",
      },
      {
        src: "projects/Cravely/ccravely.jpeg",
        alt: "Cravely sign in screen with email, password and Google sign in options",
        label: "Sign In",
      },
    ],
  },
  {
    id: "fwbl",
    title: "FWBL Digital Banking",
    description:
      "Contributed to the FWBL Digital Banking Application - implemented features, fixed bugs, and improved performance.",
    features: [
      "Implemented new features",
      "Bug fixing and stability improvements",
      "Performance optimization",
    ],
    tech: ["Flutter", "Firebase", "REST APIs"],
    category: "Mobile",
  },
  {
    id: "average-marks",
    title: "Average Marks Calculator",
    description:
      "An interactive web and scripting tool for calculating semester GPA with dynamic subject input and instant result rendering.",
    features: [
      "Dynamic subject input",
      "Instant GPA calculation",
      "Python data logic & clean responsive UI",
    ],
    tech: ["Python", "HTML", "CSS", "JavaScript"],
    category: "Web",
  },
];

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Agriculture Faisalabad",
    years: "Graduated 2022-2026",
    cgpa: undefined,
  },
];

export const certifications: CertificationItem[] = [
  {
    title: "Certificate of CIT in Web Development",
    issuer: "NAVTTC Pakistan",
  },
  {
    title: "Certificate of Digital Marketing",
    issuer: "digiskills.pk",
  },
  {
    title: "Certificate of Freelancing",
    issuer: "Innovista learneasy.pk",
  },
];

export const achievements: AchievementItem[] = [
  {
    title: "Production-Ready Mobile Apps",
    description:
      "Developed and shipped multiple production-ready mobile applications during internship and personal projects.",
  },
  {
    title: "Final Year Project - EchoSafe",
    description:
      "Built a secure anonymous student complaint application with role-based authentication and real-time management.",
  },
  {
    title: "Continuous Learning",
    description:
      "Earned certifications in Web Development (NAVTTC), Digital Marketing (digiskills.pk), and Freelancing (Innovista).",
  },
];

export const stats = [
  { label: "Projects Built", value: 4 },
  { label: "Certifications", value: 3 },
  { label: "Core Technologies", value: 14 },
  { label: "Years of Study", value: 4 },
];

