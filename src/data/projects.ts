import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Food Ordering Mobile App",
    desc: "Cross-platform food delivery app with real-time order tracking and secure payments.",
    tech: ["Flutter", "Firebase", "Stripe"],
    gradient: "from-orange-500/40 to-pink-500/40",
    emoji: "🍔",
  },
  {
    title: "Student Study Planner",
    desc: "Smart planner that helps students organize tasks, track study time, and stay on schedule.",
    tech: ["Flutter", "SQLite", "Provider"],
    gradient: "from-emerald-500/40 to-cyan-500/40",
    emoji: "📚",
  },
  {
    title: "Portfolio Website",
    desc: "Personal portfolio with animated sections, glassmorphism UI, and dark theme aesthetic.",
    tech: ["React", "Tailwind", "Motion"],
    gradient: "from-indigo-500/40 to-violet-500/40",
    emoji: "💼",
  },
  {
    title: "E-commerce Application",
    desc: "Full-stack online store with cart, checkout, and admin dashboard for product management.",
    tech: ["React", "Node.js", "MongoDB"],
    gradient: "from-rose-500/40 to-amber-500/40",
    emoji: "🛍️",
  },
  {
    title: "University Management System",
    desc: "Web platform to manage students, courses, schedules, and grades for academic admins.",
    tech: ["Java", "MySQL", "Spring"],
    gradient: "from-sky-500/40 to-blue-600/40",
    emoji: "🎓",
  },
];
