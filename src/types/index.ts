import type { LucideIcon } from "lucide-react";

export type Project = {
  title: string;
  desc: string;
  tech: string[];
  gradient: string;
  emoji: string;
  liveUrl?: string;
  repoUrl?: string;
};

export type Skill = { name: string; level: number };
export type SkillGroup = { title: string; skills: Skill[] };

export type EducationItem = {
  year: string;
  title: string;
  org: string;
  desc: string;
  current?: boolean;
};

export type Certification = { title: string; org: string; year: string };

export type ExperienceCTA = {
  heading: string;
  highlight: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
};

export type Highlight = { icon: LucideIcon; title: string; desc: string };

export type NavLink = { href: string; label: string };
export type SocialLink = { icon: LucideIcon; href: string; label: string };
