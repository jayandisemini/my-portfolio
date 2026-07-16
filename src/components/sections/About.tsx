import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { aboutCopy, highlights } from "@/data/about";

export function About() {
  return (
    <Section
      id="about"
      eyebrow={aboutCopy.eyebrow}
      title={aboutCopy.title}
      subtitle={aboutCopy.subtitle}
    >
      <div className="grid lg:grid-cols-5 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 glass p-8"
        >
          <h3 className="text-2xl font-bold mb-4">{aboutCopy.journeyTitle}</h3>
          {aboutCopy.journey.map((p, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">
              {p}
            </p>
          ))}
        </motion.div>
        <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass p-6 hover:-translate-y-1 hover:bg-white/[0.06] transition group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary grid place-items-center mb-4 group-hover:scale-110 transition-transform">
                <h.icon className="text-primary-foreground" size={22} />
              </div>
              <h4 className="font-semibold mb-1">{h.title}</h4>
              <p className="text-sm text-muted-foreground">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
