import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { certifications } from "@/data/certifications";

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Continuous learning"
      subtitle="Courses and credentials that sharpen my craft."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certifications.map((c, i) => (
          <motion.div
            key={`${c.title}-${i}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="glass p-6 group hover:-translate-y-2 hover:bg-white/[0.06] transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-secondary grid place-items-center mb-4 group-hover:rotate-6 transition-transform">
                <Award className="text-primary-foreground" size={20} />
              </div>
              <h4 className="font-semibold leading-snug">{c.title}</h4>
              <div className="flex items-center justify-between mt-3 text-xs text-muted-foreground">
                <span>{c.org}</span>
                <span>{c.year}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
