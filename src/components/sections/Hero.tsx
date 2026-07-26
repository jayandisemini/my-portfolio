import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Mail, Sparkles, ArrowDown } from "lucide-react";
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

      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6 text-xs font-medium border border-primary/20 shadow-lg"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-foreground/90">{heroProfile.availability}</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            Hi, I'm <span className="gradient-text">{heroProfile.name}</span>
          </h1>

          <p className="mt-4 text-xl sm:text-2xl text-foreground/90 font-medium tracking-wide">
            {heroProfile.role}
          </p>

          <div className="mt-3 h-8 text-lg sm:text-xl text-accent font-mono font-semibold flex items-center">
            <span>{text}</span>
            <span className="animate-blink text-primary ml-1">|</span>
          </div>

          <p className="mt-6 text-base text-muted-foreground max-w-xl leading-relaxed">
            {heroProfile.bio}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.98 }}
              href={heroProfile.cvUrl}
              download
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold glow-primary shadow-xl transition-all"
            >
              <Download size={18} /> Download CV
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass glass-hover font-semibold text-foreground transition-all"
            >
              <Mail size={18} /> Contact Me
            </motion.a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 max-w-md">
            {heroProfile.stats.map((s) => (
              <motion.div
                key={s.l}
                whileHover={{ y: -4, scale: 1.03 }}
                className="glass p-4 text-center border border-white/10 shadow-md transition-transform"
              >
                <div className="text-2xl font-extrabold gradient-text">{s.n}</div>
                <div className="text-xs text-muted-foreground font-medium mt-1">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 animate-float">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accent blur-3xl opacity-50" />
            <div className="absolute inset-1.5 rounded-full bg-gradient-to-br from-primary to-secondary p-1 shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden bg-card">
                <img
                  src="/profile.png"
                  alt={heroProfile.name}
                  width={768}
                  height={768}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  style={{ objectPosition: "50% 20%" }}
                />
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              className="absolute -top-3 -right-2 glass px-4 py-2 text-xs font-semibold rounded-2xl shadow-xl flex items-center gap-1.5 border border-white/20"
            >
              <Sparkles size={14} className="text-amber-400" /> Full-Stack Dev
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              className="absolute -bottom-3 -left-2 glass px-4 py-2 text-xs font-semibold rounded-2xl shadow-xl flex items-center gap-1.5 border border-white/20"
            >
              ✨ Creative UI/UX
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1 }, y: { repeat: Infinity, duration: 2 } }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 p-2 rounded-full glass hover:bg-white/10 transition text-muted-foreground hover:text-foreground hidden sm:flex items-center justify-center"
      >
        <ArrowDown size={18} />
      </motion.a>
    </section>
  );
}
