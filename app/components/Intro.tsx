"use client";

import { useEffect, useState } from "react";

export default function Intro() {
  const [phase, setPhase] = useState<"visible" | "fadeout" | "gone">("visible");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("fadeout"), 1600);
    const t2 = setTimeout(() => setPhase("gone"), 2300);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (phase === "gone") return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-[#080808]"
      style={{ transition: "opacity 700ms ease", opacity: phase === "fadeout" ? 0 : 1 }}
    >
      <span
        className="text-xs tracking-[0.55em] uppercase text-white/70 font-light"
        style={{ fontFamily: "var(--font-poppins), sans-serif", animation: "introText 1s ease forwards" }}
      >
        NUNK
      </span>
    </div>
  );
}
