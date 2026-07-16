import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've built"
      subtitle="A selection of projects spanning mobile, web, and full-stack systems."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass overflow-hidden group hover:-translate-y-2 transition-all duration-300"
          >
            <div
              className={`relative h-44 bg-gradient-to-br ${p.gradient} flex items-center justify-center overflow-hidden`}
            >
              <div className="text-7xl group-hover:scale-125 transition-transform duration-500">
                {p.emoji}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>
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
              <div className="flex gap-2">
                <a
                  href={p.liveUrl ?? "#"}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition"
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
                <a
                  href={p.repoUrl ?? "#"}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium border border-white/10 hover:bg-white/5 transition"
                >
                  <Github size={14} /> GitHub
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
