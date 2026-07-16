import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Mail, Sparkles } from "lucide-react";
import { heroProfile, heroRoles } from "@/data/hero";

export function Hero() {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const cur = heroRoles[idx];
    const t = setTimeout(
      () => {
        if (!del) {
          const next = cur.slice(0, text.length + 1);
          setText(next);
          if (next === cur) setTimeout(() => setDel(true), 1500);
        } else {
          const next = cur.slice(0, text.length - 1);
          setText(next);
          if (next === "") {
            setDel(false);
            setIdx((idx + 1) % heroRoles.length);
          }
        }
      },
      del ? 40 : 80,
    );
    return () => clearTimeout(t);
  }, [text, del, idx]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden"
    >
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/30 blur-3xl animate-drift" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-secondary/30 blur-3xl animate-drift" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass mb-6 text-xs">
            <Sparkles size={14} className="text-accent" />
            <span className="text-muted-foreground">{heroProfile.availability}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Hi, I'm <span className="gradient-text">{heroProfile.name}</span>
          </h1>
          <p className="mt-4 text-xl sm:text-2xl text-foreground/90 font-medium">
            {heroProfile.role}
          </p>
          <div className="mt-3 h-8 text-lg text-accent font-mono">
            {text}
            <span className="animate-blink">|</span>
          </div>
          <p className="mt-6 text-base text-muted-foreground max-w-xl leading-relaxed">
            {heroProfile.bio}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={heroProfile.cvUrl}
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium glow-primary hover:scale-105 transition-transform"
            >
              <Download size={18} /> Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass hover:bg-white/10 transition font-medium"
            >
              <Mail size={18} /> Contact Me
            </a>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-4 max-w-md">
            {heroProfile.stats.map((s) => (
              <div key={s.l} className="glass p-4 text-center">
                <div className="text-2xl font-bold gradient-text">{s.n}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 animate-float">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accent blur-2xl opacity-60" />
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-primary to-secondary p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-background">
                <img
                  src="/profile.png"
                  alt={heroProfile.name}
                  width={768}
                  height={768}
                  className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-700"
                  style={{ objectPosition: "50% 20%" }}
                />
              </div>
            </div>
            <div
              className="absolute -top-4 -right-4 glass px-3 py-2 text-xs animate-float"
              style={{ animationDelay: "1s" }}
            >
              💻 Coding
            </div>
            <div
              className="absolute -bottom-4 -left-4 glass px-3 py-2 text-xs animate-float"
              style={{ animationDelay: "2s" }}
            >
              🎨 Designing
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
