import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="relative py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-sm uppercase tracking-[0.3em] text-accent font-medium">
            {eyebrow}
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">
            <span className="gradient-text">{title}</span>
          </h2>
          {subtitle && <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
