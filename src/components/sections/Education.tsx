import { motion } from "framer-motion";
import { Calendar, GraduationCap, MapPin } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { education } from "@/data/education";

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="My academic path">
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />
        {education.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className={`relative mb-12 sm:w-1/2 ${i % 2 === 0 ? "sm:pr-12" : "sm:ml-auto sm:pl-12"} pl-12 sm:pl-0`}
          >
            <div
              className={`absolute top-4 ${i % 2 === 0 ? "sm:-right-3" : "sm:-left-3"} left-1 sm:left-auto w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary glow-primary grid place-items-center`}
            >
              <GraduationCap size={12} className="text-primary-foreground" />
            </div>
            <div className="glass p-6">
              <div className="flex items-center gap-2 text-xs text-accent mb-2">
                <Calendar size={12} /> {it.year}
                {it.current && (
                  <span className="ml-2 px-2 py-0.5 rounded-full bg-accent/20 text-accent text-[10px] uppercase tracking-wider">
                    Current
                  </span>
                )}
              </div>
              <h3 className="font-bold text-lg">{it.title}</h3>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground mt-1 mb-3">
                <MapPin size={12} /> {it.org}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
