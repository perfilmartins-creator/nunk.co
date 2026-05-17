"use client";

import { motion } from "framer-motion";

const WORDS = [
  "Fotografia Humanizada",
  "Recife, PE",
  "Profissionais",
  "Marcas",
  "Criadores",
  "Estúdio",
  "Editorial",
  "Campanha",
];

const TRACK = [...WORDS, ...WORDS];

export default function Marquee({ className = "" }: { className?: string }) {
  return (
    <div className={`overflow-hidden border-y border-white/30 py-5 ${className}`}>
      <motion.div
        className="flex gap-20 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, ease: "linear", repeat: Infinity }}
      >
        {TRACK.map((word, i) => (
          <span key={i} className="flex items-center gap-20 shrink-0">
            <span className="text-[13px] tracking-[0.35em] uppercase font-bold opacity-15">{word}</span>
            <span className="text-white/10 text-[8px]">◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
