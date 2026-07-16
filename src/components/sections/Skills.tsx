import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools of the trade"
      subtitle="A growing toolkit I use to build software end-to-end."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {skillGroups.map((g, gi) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: gi * 0.1 }}
            className="glass p-6 sm:p-8"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary" />
              {g.title}
            </h3>
            <div className="space-y-4">
              {g.skills.map((s, i) => (
                <div key={s.name}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-medium">{s.name}</span>
                    <span className="text-muted-foreground">{s.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
