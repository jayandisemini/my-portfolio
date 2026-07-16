import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming",
    skills: [
      { name: "Java", level: 85 },
      { name: "Python", level: 80 },
      { name: "JavaScript", level: 88 },
      { name: "C#", level: 70 },
      { name: "SQL", level: 78 },
    ],
  },
  {
    title: "Web",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "React", level: 85 },
      { name: "Node.js", level: 75 },
    ],
  },
  {
    title: "Mobile",
    skills: [
      { name: "Flutter", level: 88 },
      { name: "Firebase", level: 80 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 90 },
      { name: "Figma", level: 82 },
      { name: "VS Code", level: 95 },
    ],
  },
];
