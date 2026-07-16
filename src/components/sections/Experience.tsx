import { motion } from "framer-motion";
import { ArrowRight, Briefcase } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Open to opportunities">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative max-w-3xl mx-auto glass p-10 sm:p-14 text-center overflow-hidden"
      >
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-secondary/20 blur-3xl" />
        <div className="relative">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-secondary grid place-items-center mb-6 animate-float">
            <Briefcase className="text-primary-foreground" size={28} />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-3">
            {experience.heading} <span className="gradient-text">{experience.highlight}</span>{" "}
            Opportunities
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
            {experience.body}
          </p>
          <a
            href={experience.ctaHref}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium glow-primary hover:scale-105 transition-transform"
          >
            {experience.ctaLabel} <ArrowRight size={16} />
          </a>
        </div>
      </motion.div>
    </Section>
  );
}
