import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { navLinks } from "@/data/navigation";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsLight(true);
      document.documentElement.classList.add("light");
    }
  }, []);

  const toggleTheme = () => {
    const nextLight = !isLight;
    setIsLight(nextLight);
    if (nextLight) {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "py-2" : "py-4"}`}>
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 ${scrolled ? "glass" : ""} transition-all`}>
        <div className="flex items-center justify-between h-14">
          <a href="#home" className="font-display text-xl font-bold gradient-text">
            JS.
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group font-medium"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Theme Toggle Switch */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2.5 rounded-full glass hover:bg-white/10 transition text-foreground border border-white/10"
              aria-label="Toggle theme mode"
              title={isLight ? "Switch to Dark Mode" : "Switch to Light Mode"}
            >
              {isLight ? (
                <Moon size={18} className="text-indigo-600 animate-spin-once" />
              ) : (
                <Sun size={18} className="text-amber-400 animate-spin-once" />
              )}
            </button>

            <a
              href="#contact"
              className="hidden lg:inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition shadow-md"
            >
              Let's talk
            </a>

            <button
              type="button"
              className="lg:hidden p-2 text-foreground"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="lg:hidden pb-4 flex flex-col gap-3 animate-fade-in pt-2 border-t border-white/10">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground py-1 font-medium"
              >
                {l.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
