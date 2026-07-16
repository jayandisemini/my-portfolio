import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary grid place-items-center glow-primary hover:scale-110 transition-transform animate-fade-in"
    >
      <ArrowUp size={20} className="text-primary-foreground" />
    </button>
  );
}
