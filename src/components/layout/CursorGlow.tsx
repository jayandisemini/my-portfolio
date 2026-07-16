import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      className="fixed pointer-events-none -z-10 w-[500px] h-[500px] rounded-full opacity-30 blur-3xl transition-transform"
      style={{
        background: "radial-gradient(circle, rgba(139,92,246,0.6), transparent 70%)",
        transform: `translate(${pos.x - 250}px, ${pos.y - 250}px)`,
      }}
    />
  );
}
