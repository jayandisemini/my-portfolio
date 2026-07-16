import { Code2, Palette, Rocket, Smartphone } from "lucide-react";
import type { Highlight } from "@/types";

export const aboutCopy = {
  eyebrow: "About",
  title: "A little about me",
  subtitle:
    "Computer Science undergraduate at NSBM Green University, on a mission to turn ideas into impactful software.",
  journeyTitle: "My journey",
  journey: [
    "I'm Jayandi — a curious developer who fell in love with technology through the magic of building things from nothing but code. Today, I'm pursuing my BSc (Hons) in Computer Science at NSBM Green University.",
    "My career goal is to become a versatile software engineer who can bridge backend systems, polished mobile experiences, and thoughtful interface design. I thrive at the intersection of engineering and craft.",
  ],
};

export const highlights: Highlight[] = [
  {
    icon: Code2,
    title: "Software Engineering",
    desc: "Building scalable, maintainable systems with clean architecture.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Crafting cross-platform experiences with Flutter & Firebase.",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    desc: "Designing intuitive interfaces that feel effortless to use.",
  },
  {
    icon: Rocket,
    title: "Always Learning",
    desc: "Constantly exploring new frameworks, tools, and ideas.",
  },
];
