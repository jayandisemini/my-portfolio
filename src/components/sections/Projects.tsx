import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, CheckCircle2, Sparkles } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { projects } from "@/data/projects";
import type { Project } from "@/types";

export function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Mobile Application", "Web Development", "Full-Stack Web", "Enterprise System"];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've built"
      subtitle="A selection of projects spanning mobile, web, and full-stack systems."
    >
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all border ${
                isActive
                  ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground border-transparent shadow-lg scale-105"
                  : "glass text-muted-foreground hover:text-foreground border-white/10 hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredProjects.map((p, i) => (
            <motion.article
              layout
              key={p.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              onClick={() => setActiveProject(p)}
              className="glass overflow-hidden group hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div
                  className={`relative h-44 bg-gradient-to-br ${p.gradient} flex items-center justify-center overflow-hidden`}
                >
                  <div className="text-7xl group-hover:scale-125 transition-transform duration-500">
                    {p.emoji}
                  </div>
                  {p.category && (
                    <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-accent">
                      {p.category}
                    </span>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0 flex items-center gap-2">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveProject(p);
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all text-foreground"
                >
                  <Sparkles size={14} className="text-primary" /> View Details
                </button>
                {p.repoUrl && (
                  <a
                    href={p.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center justify-center p-2.5 rounded-xl text-xs font-semibold bg-white/5 border border-white/10 hover:bg-white/10 hover:text-primary hover:border-primary/40 transition-all text-muted-foreground"
                    title="View Source Code on GitHub"
                  >
                    <Github size={16} />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Interactive Project Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-2xl bg-card border border-white/15 rounded-3xl shadow-2xl overflow-hidden z-10 my-8"
            >
              {/* Header Gradient */}
              <div
                className={`relative h-48 bg-gradient-to-br ${activeProject.gradient} flex items-center justify-center`}
              >
                <div className="text-8xl animate-pulse">{activeProject.emoji}</div>
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition border border-white/20"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Body Content */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  {activeProject.category && (
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider block mb-1">
                      {activeProject.category}
                    </span>
                  )}
                  <h3 className="text-2xl font-bold text-foreground">{activeProject.title}</h3>
                </div>

                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {activeProject.longDesc ?? activeProject.desc}
                </p>

                {activeProject.features && activeProject.features.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Sparkles size={16} className="text-primary" /> Key Features
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                      {activeProject.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2">
                          <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="flex flex-wrap gap-3 pt-4 border-t border-white/10">
                  {activeProject.liveUrl && activeProject.liveUrl !== activeProject.repoUrl && (
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition text-primary-foreground shadow-lg"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                  {activeProject.repoUrl && (
                    <a
                      href={activeProject.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold border border-white/15 hover:bg-white/10 transition text-foreground"
                    >
                      <Github size={16} /> View Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
}
