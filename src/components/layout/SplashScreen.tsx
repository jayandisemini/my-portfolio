import { motion } from "framer-motion";
import { Code2, Globe, Laptop, Palette, Smartphone } from "lucide-react";
import { heroProfile } from "@/data/hero";

const icons = [
  { Icon: Code2, delay: 0 },
  { Icon: Laptop, delay: 0.15 },
  { Icon: Smartphone, delay: 0.3 },
  { Icon: Palette, delay: 0.45 },
  { Icon: Globe, delay: 0.6 },
];

export function SplashScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0B1120]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-secondary/15 blur-[100px]" />
      <div className="absolute top-1/4 right-1/4 w-[250px] h-[250px] rounded-full bg-accent/10 blur-[80px]" />

      <div className="relative mb-12">
        <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 border border-white/10 flex items-center justify-center relative z-10">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "backOut" }}
          >
            <Code2 size={48} className="text-primary" />
          </motion.div>
        </div>

        {icons.map(({ Icon, delay }, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + delay, duration: 0.5 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: delay * 2 }}
              style={{ transformOrigin: "0 0" }}
            >
              <div
                className="glass rounded-lg p-2 absolute"
                style={{ transform: `rotate(${i * 72}deg) translateX(80px) rotate(-${i * 72}deg)` }}
              >
                <Icon size={18} className="text-accent" />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.h1
        className="text-3xl sm:text-4xl font-bold tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <span className="gradient-text">{heroProfile.name}</span>
      </motion.h1>

      <motion.p
        className="mt-2 text-sm text-muted-foreground tracking-widest uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        Portfolio Loading
      </motion.p>

      <motion.div
        className="mt-8 w-64 h-1 bg-white/5 rounded-full overflow-hidden"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
      >
        <div className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent splash-progress" />
      </motion.div>

      <motion.p
        className="mt-3 text-xs text-muted-foreground font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        100%
      </motion.p>
    </motion.div>
  );
}
