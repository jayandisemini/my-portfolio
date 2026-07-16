import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/navigation";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
                className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all" />
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition"
          >
            Let's talk
          </a>
          <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {open && (
          <nav className="lg:hidden pb-4 flex flex-col gap-3 animate-fade-in">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground py-1"
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
