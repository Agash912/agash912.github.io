"use client";

import { motion } from "framer-motion";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

export function Hero() {
  return (
    <section className="pt-44 sm:pt-56 pb-24 sm:pb-32">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h1
          {...fade(0.15)}
          className="text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold tracking-[-0.035em] leading-[1.08] mb-6"
        >
          Agash Uthayasuriyan
        </motion.h1>

        <motion.p
          {...fade(0.3)}
          className="text-lg sm:text-xl text-text-secondary leading-relaxed mb-16 max-w-xl"
        >
          I design and build data intensive systems.{" "}
          <span className="text-text-muted">
            Starting with the problem, not the tool.
          </span>
        </motion.p>

        <motion.div
          {...fade(0.4)}
          className="h-px w-12 bg-white/[0.15] mb-10"
        />

        <div className="max-w-lg space-y-4 text-[15px] text-text-muted leading-[1.85]">
          <motion.p {...fade(0.48)}>
            Data engineering, analytics, ML, AI — I work across the full stack.
            Architecture-level, not surface-level. Design for fault tolerance
            and loose coupling, then choose the tools.
          </motion.p>
          <motion.p {...fade(0.56)}>
            Six published papers on improving ML algorithm performance. Actively
            building products in AI and SaaS as CTO. The research and the
            building feed each other.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
