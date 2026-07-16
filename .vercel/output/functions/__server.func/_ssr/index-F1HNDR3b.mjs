import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { C as CodeXml, L as Laptop, S as Smartphone, P as Palette, G as Globe, X, M as Menu, a as Sparkles, D as Download, b as Mail, R as Rocket, E as ExternalLink, c as Github, d as GraduationCap, e as Calendar, f as MapPin, B as Briefcase, A as ArrowRight, g as Award, h as Linkedin, F as Facebook, I as Instagram, i as Send, H as Heart, j as ArrowUp } from "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" }
];
function Navbar() {
  const [open, setOpen] = reactExports.useState(false);
  const [scrolled, setScrolled] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: `fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "py-2" : "py-4"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `mx-auto max-w-7xl px-4 sm:px-6 ${scrolled ? "glass" : ""} transition-all`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between h-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#home", className: "font-display text-xl font-bold gradient-text", children: "JS." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-7", children: navLinks.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: l.href,
          className: "text-sm text-muted-foreground hover:text-foreground transition-colors relative group",
          children: [
            l.label,
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all" })
          ]
        },
        l.href
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "#contact",
          className: "hidden lg:inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition",
          children: "Let's talk"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "lg:hidden p-2", onClick: () => setOpen(!open), "aria-label": "Toggle menu", children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 22 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { size: 22 }) })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "lg:hidden pb-4 flex flex-col gap-3 animate-fade-in", children: navLinks.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: l.href,
        onClick: () => setOpen(false),
        className: "text-sm text-muted-foreground hover:text-foreground py-1",
        children: l.label
      },
      l.href
    )) })
  ] }) });
}
const heroProfile = {
  name: "Jayandi Semini",
  role: "Computer Science Undergraduate",
  availability: "Available for internship opportunities",
  bio: "Passionate about Software Development, Web Development, Mobile Apps, and UI/UX Design. Building meaningful digital experiences one line of code at a time.",
  cvUrl: "/cv.pdf",
  stats: [
    { n: "10+", l: "Projects" },
    { n: "15+", l: "Technologies" },
    { n: "2027", l: "Graduation" }
  ]
};
const heroRoles = [
  "Full-Stack Developer",
  "Cloud Computing Enthusiast",
  "UI/UX Designer"
];
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-white/5 py-8 px-4 sm:px-6 mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold gradient-text text-lg", children: heroProfile.name }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " · Built with",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 12, className: "text-secondary fill-secondary" }),
      " & code"
    ] })
  ] }) });
}
function Particles() {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    const count = Math.min(80, Math.floor(window.innerWidth / 18));
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 0.5,
      hue: 230 + Math.random() * 80
    }));
    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue},90%,70%,0.7)`;
        ctx.shadowColor = `hsla(${p.hue},90%,70%,0.8)`;
        ctx.shadowBlur = 8;
        ctx.fill();
      }
      ctx.shadowBlur = 0;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 120) {
            ctx.strokeStyle = `rgba(139,92,246,${0.15 * (1 - d / 120)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("canvas", { ref, className: "fixed inset-0 -z-10 pointer-events-none" });
}
function BackToTop() {
  const [show, setShow] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
      "aria-label": "Back to top",
      className: "fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary grid place-items-center glow-primary hover:scale-110 transition-transform animate-fade-in",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { size: 20, className: "text-primary-foreground" })
    }
  );
}
function CursorGlow() {
  const [pos, setPos] = reactExports.useState({ x: -200, y: -200 });
  reactExports.useEffect(() => {
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "fixed pointer-events-none -z-10 w-[500px] h-[500px] rounded-full opacity-30 blur-3xl transition-transform",
      style: {
        background: "radial-gradient(circle, rgba(139,92,246,0.6), transparent 70%)",
        transform: `translate(${pos.x - 250}px, ${pos.y - 250}px)`
      }
    }
  );
}
const icons = [
  { Icon: CodeXml, delay: 0 },
  { Icon: Laptop, delay: 0.15 },
  { Icon: Smartphone, delay: 0.3 },
  { Icon: Palette, delay: 0.45 },
  { Icon: Globe, delay: 0.6 }
];
function SplashScreen() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      className: "fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0B1120]",
      initial: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.6, ease: "easeInOut" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-secondary/15 blur-[100px]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/4 right-1/4 w-[250px] h-[250px] rounded-full bg-accent/10 blur-[80px]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-28 h-28 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 border border-white/10 flex items-center justify-center relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { scale: 0, rotate: -180 },
              animate: { scale: 1, rotate: 0 },
              transition: { duration: 0.8, ease: "backOut" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(CodeXml, { size: 48, className: "text-primary" })
            }
          ) }),
          icons.map(({ Icon, delay }, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "absolute top-1/2 left-1/2",
              initial: { opacity: 0, scale: 0 },
              animate: { opacity: 1, scale: 1 },
              transition: { delay: 0.4 + delay, duration: 0.5 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  animate: { rotate: 360 },
                  transition: { duration: 8, repeat: Infinity, ease: "linear", delay: delay * 2 },
                  style: { transformOrigin: "0 0" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "glass rounded-lg p-2 absolute",
                      style: { transform: `rotate(${i * 72}deg) translateX(80px) rotate(-${i * 72}deg)` },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 18, className: "text-accent" })
                    }
                  )
                }
              )
            },
            i
          ))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.h1,
          {
            className: "text-3xl sm:text-4xl font-bold tracking-tight",
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.2, duration: 0.6 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: heroProfile.name })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.p,
          {
            className: "mt-2 text-sm text-muted-foreground tracking-widest uppercase",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 0.5, duration: 0.6 },
            children: "Portfolio Loading"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "mt-8 w-64 h-1 bg-white/5 rounded-full overflow-hidden",
            initial: { opacity: 0, scaleX: 0 },
            animate: { opacity: 1, scaleX: 1 },
            transition: { delay: 0.6, duration: 0.4 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent splash-progress" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.p,
          {
            className: "mt-3 text-xs text-muted-foreground font-mono",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 0.8 },
            children: "100%"
          }
        )
      ]
    }
  );
}
const url = "/__l5e/assets-v1/04785bba-7789-4549-8f17-fe6f62460fe2/profile.jpg";
const profileAsset = {
  url
};
const profile = profileAsset.url;
function Hero() {
  const [text, setText] = reactExports.useState("");
  const [idx, setIdx] = reactExports.useState(0);
  const [del, setDel] = reactExports.useState(false);
  reactExports.useEffect(() => {
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
      del ? 40 : 80
    );
    return () => clearTimeout(t);
  }, [text, del, idx]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "home",
      className: "relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/30 blur-3xl animate-drift" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-secondary/30 blur-3xl animate-drift" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.7 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full glass mb-6 text-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 14, className: "text-accent" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: heroProfile.availability })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight", children: [
                  "Hi, I'm ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: heroProfile.name })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xl sm:text-2xl text-foreground/90 font-medium", children: heroProfile.role }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 h-8 text-lg text-accent font-mono", children: [
                  text,
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-blink", children: "|" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-base text-muted-foreground max-w-xl leading-relaxed", children: heroProfile.bio }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: heroProfile.cvUrl,
                      download: true,
                      className: "inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium glow-primary hover:scale-105 transition-transform",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 18 }),
                        " Download CV"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: "#contact",
                      className: "inline-flex items-center gap-2 px-6 py-3 rounded-full glass hover:bg-white/10 transition font-medium",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 18 }),
                        " Contact Me"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid grid-cols-3 gap-4 max-w-md", children: heroProfile.stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass p-4 text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold gradient-text", children: s.n }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: s.l })
                ] }, s.l)) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.9 },
              animate: { opacity: 1, scale: 1 },
              transition: { duration: 0.8, delay: 0.2 },
              className: "relative flex justify-center lg:justify-end",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-72 h-72 sm:w-96 sm:h-96 animate-float", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accent blur-2xl opacity-60" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-2 rounded-full bg-gradient-to-br from-primary to-secondary p-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full rounded-full overflow-hidden bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: profile,
                    alt: heroProfile.name,
                    width: 768,
                    height: 768,
                    className: "w-full h-full object-cover object-top hover:scale-110 transition-transform duration-700",
                    style: { objectPosition: "50% 20%" }
                  }
                ) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute -top-4 -right-4 glass px-3 py-2 text-xs animate-float",
                    style: { animationDelay: "1s" },
                    children: "💻 Coding"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute -bottom-4 -left-4 glass px-3 py-2 text-xs animate-float",
                    style: { animationDelay: "2s" },
                    children: "🎨 Designing"
                  }
                )
              ] })
            }
          )
        ] })
      ]
    }
  );
}
function Section({ id, eyebrow, title, subtitle, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id, className: "relative py-24 px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.6 },
        className: "text-center mb-16",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm uppercase tracking-[0.3em] text-accent font-medium", children: eyebrow }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: title }) }),
          subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground max-w-2xl mx-auto", children: subtitle })
        ]
      }
    ),
    children
  ] }) });
}
const aboutCopy = {
  eyebrow: "About",
  title: "A little about me",
  subtitle: "Computer Science undergraduate at NSBM Green University, on a mission to turn ideas into impactful software.",
  journeyTitle: "My journey",
  journey: [
    "I'm Jayandi — a curious developer who fell in love with technology through the magic of building things from nothing but code. Today, I'm pursuing my BSc (Hons) in Computer Science at NSBM Green University.",
    "My career goal is to become a versatile software engineer who can bridge backend systems, polished mobile experiences, and thoughtful interface design. I thrive at the intersection of engineering and craft."
  ]
};
const highlights = [
  {
    icon: CodeXml,
    title: "Software Engineering",
    desc: "Building scalable, maintainable systems with clean architecture."
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Crafting cross-platform experiences with Flutter & Firebase."
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    desc: "Designing intuitive interfaces that feel effortless to use."
  },
  {
    icon: Rocket,
    title: "Always Learning",
    desc: "Constantly exploring new frameworks, tools, and ideas."
  }
];
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Section,
    {
      id: "about",
      eyebrow: aboutCopy.eyebrow,
      title: aboutCopy.title,
      subtitle: aboutCopy.subtitle,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-5 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -30 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { duration: 0.6 },
            className: "lg:col-span-2 glass p-8",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-4", children: aboutCopy.journeyTitle }),
              aboutCopy.journey.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4 last:mb-0", children: p }, i))
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-3 grid sm:grid-cols-2 gap-4", children: highlights.map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.5, delay: i * 0.1 },
            className: "glass p-6 hover:-translate-y-1 hover:bg-white/[0.06] transition group",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary grid place-items-center mb-4 group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(h.icon, { className: "text-primary-foreground", size: 22 }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-1", children: h.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: h.desc })
            ]
          },
          h.title
        )) })
      ] })
    }
  );
}
const skillGroups = [
  {
    title: "Programming",
    skills: [
      { name: "Java", level: 85 },
      { name: "Python", level: 80 },
      { name: "JavaScript", level: 88 },
      { name: "C#", level: 70 },
      { name: "SQL", level: 78 }
    ]
  },
  {
    title: "Web",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "React", level: 85 },
      { name: "Node.js", level: 75 }
    ]
  },
  {
    title: "Mobile",
    skills: [
      { name: "Flutter", level: 88 },
      { name: "Firebase", level: 80 }
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 90 },
      { name: "Figma", level: 82 },
      { name: "VS Code", level: 95 }
    ]
  }
];
function Skills() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Section,
    {
      id: "skills",
      eyebrow: "Skills",
      title: "Tools of the trade",
      subtitle: "A growing toolkit I use to build software end-to-end.",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-6", children: skillGroups.map((g, gi) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: gi * 0.1 },
          className: "glass p-6 sm:p-8",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-bold mb-6 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary" }),
              g.title
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: g.skills.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm mb-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: s.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                  s.level,
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 rounded-full bg-white/5 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { width: 0 },
                  whileInView: { width: `${s.level}%` },
                  viewport: { once: true },
                  transition: { duration: 1, delay: i * 0.1, ease: "easeOut" },
                  className: "h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
                }
              ) })
            ] }, s.name)) })
          ]
        },
        g.title
      )) })
    }
  );
}
const projects = [
  {
    title: "Food Ordering Mobile App",
    desc: "Cross-platform food delivery app with real-time order tracking and secure payments.",
    tech: ["Flutter", "Firebase", "Stripe"],
    gradient: "from-orange-500/40 to-pink-500/40",
    emoji: "🍔"
  },
  {
    title: "Student Study Planner",
    desc: "Smart planner that helps students organize tasks, track study time, and stay on schedule.",
    tech: ["Flutter", "SQLite", "Provider"],
    gradient: "from-emerald-500/40 to-cyan-500/40",
    emoji: "📚"
  },
  {
    title: "Portfolio Website",
    desc: "Personal portfolio with animated sections, glassmorphism UI, and dark theme aesthetic.",
    tech: ["React", "Tailwind", "Motion"],
    gradient: "from-indigo-500/40 to-violet-500/40",
    emoji: "💼"
  },
  {
    title: "E-commerce Application",
    desc: "Full-stack online store with cart, checkout, and admin dashboard for product management.",
    tech: ["React", "Node.js", "MongoDB"],
    gradient: "from-rose-500/40 to-amber-500/40",
    emoji: "🛍️"
  },
  {
    title: "University Management System",
    desc: "Web platform to manage students, courses, schedules, and grades for academic admins.",
    tech: ["Java", "MySQL", "Spring"],
    gradient: "from-sky-500/40 to-blue-600/40",
    emoji: "🎓"
  }
];
function Projects() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Section,
    {
      id: "projects",
      eyebrow: "Projects",
      title: "Things I've built",
      subtitle: "A selection of projects spanning mobile, web, and full-stack systems.",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: projects.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.article,
        {
          initial: { opacity: 0, y: 40 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: i * 0.08 },
          className: "glass overflow-hidden group hover:-translate-y-2 transition-all duration-300",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `relative h-44 bg-gradient-to-br ${p.gradient} flex items-center justify-center overflow-hidden`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-7xl group-hover:scale-125 transition-transform duration-500", children: p.emoji }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg mb-2", children: p.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-4 leading-relaxed", children: p.desc }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-4", children: p.tech.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground",
                  children: t
                },
                t
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: p.liveUrl ?? "#",
                    className: "flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { size: 14 }),
                      " Live Demo"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: p.repoUrl ?? "#",
                    className: "flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium border border-white/10 hover:bg-white/5 transition",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { size: 14 }),
                      " GitHub"
                    ]
                  }
                )
              ] })
            ] })
          ]
        },
        p.title
      )) })
    }
  );
}
const education = [
  {
    year: "2024 — 2027",
    title: "BSc (Hons) Computer Science",
    org: "NSBM Green University",
    desc: "Currently pursuing my undergraduate degree with focus on software engineering, mobile development, and modern web technologies.",
    current: true
  },
  {
    year: "Pre 2024",
    title: "Secondary Education",
    org: "G.C.E Advanced Level",
    desc: "Foundation in mathematics, ICT, and problem solving — the launchpad for my computer science journey."
  }
];
function Education() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "education", eyebrow: "Education", title: "My academic path", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-3xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-4 sm:left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" }),
    education.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5, delay: i * 0.15 },
        className: `relative mb-12 sm:w-1/2 ${i % 2 === 0 ? "sm:pr-12" : "sm:ml-auto sm:pl-12"} pl-12 sm:pl-0`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `absolute top-4 ${i % 2 === 0 ? "sm:-right-3" : "sm:-left-3"} left-1 sm:left-auto w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary glow-primary grid place-items-center`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { size: 12, className: "text-primary-foreground" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-accent mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 12 }),
              " ",
              it.year,
              it.current && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 px-2 py-0.5 rounded-full bg-accent/20 text-accent text-[10px] uppercase tracking-wider", children: "Current" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg", children: it.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-sm text-muted-foreground mt-1 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 12 }),
              " ",
              it.org
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: it.desc })
          ] })
        ]
      },
      it.title
    ))
  ] }) });
}
const experience = {
  heading: "Seeking",
  highlight: "Software Engineering Internship",
  body: "I'm actively looking for internships where I can contribute to real-world projects, learn from experienced engineers, and grow as a developer. Let's build something great together.",
  ctaLabel: "Get in touch",
  ctaHref: "#contact"
};
function Experience() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "experience", eyebrow: "Experience", title: "Open to opportunities", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.95 },
      whileInView: { opacity: 1, scale: 1 },
      viewport: { once: true },
      transition: { duration: 0.6 },
      className: "relative max-w-3xl mx-auto glass p-10 sm:p-14 text-center overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/20 blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-secondary/20 blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-secondary grid place-items-center mb-6 animate-float", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "text-primary-foreground", size: 28 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl sm:text-3xl font-bold mb-3", children: [
            experience.heading,
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: experience.highlight }),
            " ",
            "Opportunities"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed", children: experience.body }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: experience.ctaHref,
              className: "inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium glow-primary hover:scale-105 transition-transform",
              children: [
                experience.ctaLabel,
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
              ]
            }
          )
        ] })
      ]
    }
  ) });
}
const certifications = [
  { title: "Web Development", org: "Sololearn", year: "2025" },
  { title: "Web Design for Beginners", org: "CODL, University of Moratuwa", year: "2025" },
  { title: "Front-End Web Development", org: "CODL, University of Moratuwa", year: "2025" },
  { title: "Crash Course: AWS Basics", org: "KodeKloud", year: "2026" },
  { title: "Crash Course: Linux For Absolute Beginners", org: "KodeKloud", year: "2026" },
  { title: "AWS Well-Architected Foundations", org: "AWS Training & Certification", year: "2025" },
  { title: "Getting Started with AWS", org: "Simplilearn SkillUp", year: "2025" },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    org: "Oracle University",
    year: "2025"
  },
  { title: "Google Analytics Certification", org: "Google", year: "2025" },
  {
    title: "AI Essentials: Introduction to Artificial Intelligence",
    org: "Udemy — MTF Institute",
    year: "2025"
  },
  {
    title: "DynaLab: The MATLAB Workshop",
    org: "Mathematics & Statistics Circle, NSBM Green University",
    year: "2025"
  },
  { title: "FinOps Certified FOCUS Analyst", org: "FinOps Foundation", year: "2026" },
  { title: "Introduction to FinOps", org: "FinOps Foundation", year: "2025" },
  {
    title: "Introduction to Career Skills in Data Analytics",
    org: "LinkedIn Learning",
    year: "2025"
  },
  { title: "AI/ML Engineer — Stage 2", org: "SLIIT", year: "2025" },
  { title: "AI/ML Engineer — Stage 1", org: "SLIIT", year: "2025" },
  { title: "AI/ML Engineer — Stage 2", org: "SLIIT", year: "2025" },
  { title: "Business Analysis Foundations", org: "LinkedIn Learning (IIBA)", year: "2025" },
  { title: "Statistics Simplified: A Step-By-Step Guide", org: "Udemy", year: "2025" },
  { title: "Python for Beginners", org: "CODL, University of Moratuwa", year: "2025" },
  {
    title: "CyberSprint 2.0 — CTF Participation",
    org: "ISACA & CSSL, NSBM Green University",
    year: "2025"
  },
  {
    title: "TECHMATH 25' — Quiz Challenge Participation",
    org: "STEMUp, NSBM Green University",
    year: "2025"
  },
  {
    title: "Game Development Session — Participation",
    org: "CSSL GenZ Chapter, NSBM Green University",
    year: "2025"
  },
  {
    title: "Ignite 1.0 Web Hackathon — Participation",
    org: "STEMUP Club, NSBM Green University",
    year: "2026"
  },
  {
    title: "IDEATHON 1.0 — Certificate of Appreciation",
    org: "CompuVate, NSBM Green University",
    year: "2025"
  }
];
function Certifications() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Section,
    {
      id: "certifications",
      eyebrow: "Certifications",
      title: "Continuous learning",
      subtitle: "Courses and credentials that sharpen my craft.",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: certifications.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.4, delay: i * 0.06 },
          className: "glass p-6 group hover:-translate-y-2 hover:bg-white/[0.06] transition-all duration-300 relative overflow-hidden",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-secondary grid place-items-center mb-4 group-hover:rotate-6 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "text-primary-foreground", size: 20 }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold leading-snug", children: c.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-3 text-xs text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: c.org }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: c.year })
              ] })
            ] })
          ]
        },
        `${c.title}-${i}`
      )) })
    }
  );
}
const contactInfo = {
  email: "jayandisemini2003@gmail.com",
  location: "Based in Sri Lanka · Open to remote"
};
const socials = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/jayandi-semini-b6723a326",
    label: "LinkedIn"
  },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Facebook, href: "https://www.facebook.com/share/1BFNTxACD1/", label: "Facebook" },
  {
    icon: Instagram,
    href: "https://www.instagram.com/semini1101?igsh=cXBxbDljcGZvcmdq",
    label: "Instagram"
  },
  { icon: Mail, href: "mailto:jayandisemini2003@gmail.com", label: "Email" }
];
function Contact() {
  const [sent, setSent] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Section,
    {
      id: "contact",
      eyebrow: "Contact",
      title: "Let's build something",
      subtitle: "Have an opportunity, project, or just want to say hi? Drop a message.",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -30 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { duration: 0.6 },
            className: "lg:col-span-2 space-y-6",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass p-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg mb-2", children: "Reach me directly" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${contactInfo.email}`, className: "text-accent hover:underline text-sm", children: contactInfo.email }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-4", children: contactInfo.location })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass p-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg mb-4", children: "Find me online" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3", children: socials.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: s.href,
                    "aria-label": s.label,
                    className: "w-11 h-11 rounded-xl glass grid place-items-center hover:bg-gradient-to-br hover:from-primary hover:to-secondary transition-all hover:-translate-y-1",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { size: 18 })
                  },
                  s.label
                )) })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.form,
          {
            initial: { opacity: 0, x: 30 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { duration: 0.6 },
            onSubmit: (e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 3e3);
              e.target.reset();
            },
            className: "lg:col-span-3 glass p-8 space-y-5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium block mb-2", children: "Name" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      required: true,
                      maxLength: 100,
                      className: "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition",
                      placeholder: "Your name"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium block mb-2", children: "Email" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "email",
                      required: true,
                      maxLength: 255,
                      className: "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition",
                      placeholder: "you@example.com"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium block mb-2", children: "Message" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "textarea",
                  {
                    required: true,
                    maxLength: 1e3,
                    rows: 5,
                    className: "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition resize-none",
                    placeholder: "Tell me about your project or opportunity..."
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "submit",
                  className: "inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium glow-primary hover:scale-105 transition-transform",
                  children: sent ? "Message sent ✓" : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    "Send message ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 16 })
                  ] })
                }
              )
            ]
          }
        )
      ] })
    }
  );
}
function Portfolio() {
  const [showSplash, setShowSplash] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2800);
    return () => clearTimeout(timer);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen", children: [
    showSplash && /* @__PURE__ */ jsxRuntimeExports.jsx(SplashScreen, {}),
    !showSplash && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Particles, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CursorGlow, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skills, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Projects, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Education, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Experience, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Certifications, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(BackToTop, {})
    ] })
  ] });
}
export {
  Portfolio as component
};
