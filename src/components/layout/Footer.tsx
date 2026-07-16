import { Heart } from "lucide-react";
import { heroProfile } from "@/data/hero";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-4 sm:px-6 mt-12">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="font-display font-bold gradient-text text-lg">{heroProfile.name}</div>
        <div className="flex items-center gap-1.5">
          © {new Date().getFullYear()} · Built with{" "}
          <Heart size={12} className="text-secondary fill-secondary" /> & code
        </div>
      </div>
    </footer>
  );
}
