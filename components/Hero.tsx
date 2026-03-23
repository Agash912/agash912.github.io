"use client";

import { motion } from "framer-motion";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

export function Hero() {
  return (
    <section className="pt-44 sm:pt-52 pb-20 sm:pb-28">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h1
          {...fade(0.15)}
          className="text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold tracking-[-0.035em] leading-[1.08] mb-5"
        >
          Hey, I&apos;m Agash 👋
        </motion.h1>

        <motion.p
          {...fade(0.3)}
          className="text-xl sm:text-2xl text-fg-secondary leading-snug mb-14 max-w-2xl"
        >
          I build production AI and data systems.{" "}
          <span className="text-fg-muted">
            First principles, fast iteration, 0 → 1.
          </span>
        </motion.p>

        <motion.div
          {...fade(0.4)}
          className="h-px w-12 bg-accent/40 mb-10"
        />

        <div className="max-w-lg space-y-5 text-lg text-fg-secondary leading-[1.85]">
          <motion.p {...fade(0.5)}>
            I build across the full data and AI stack. Pipelines, ML models,
            agentic systems, voice agents. I start by asking what the
            architecture needs to solve, what the failure modes are, how
            systems stay loosely coupled. Then choose the tools.
          </motion.p>
          <motion.p {...fade(0.58)}>
            Six published research papers on improving ML algorithms.
            Co-founded four products across AI and SaaS. The research and
            the building feed each other.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
