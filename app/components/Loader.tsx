"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[500] bg-[#050505] flex flex-col items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Logo text */}
          <div style={{ overflow: "hidden" }}>
            <motion.span
              className="block text-[13px] tracking-[0.6em] uppercase font-medium text-white/80"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            >
              NUNK
            </motion.span>
          </div>

          {/* Progress line */}
          <motion.div
            className="mt-6 h-px bg-white/20 origin-left"
            style={{ width: 48 }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.6, ease: "linear", delay: 0.3 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
