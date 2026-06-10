"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";

export function AboutBar() {
  return (
    <section id="about" className="px-6 py-8 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex max-w-7xl flex-col items-center gap-6 rounded-2xl border border-gold/20 bg-card px-6 py-6 sm:flex-row sm:gap-8 sm:px-8"
      >
        <div className="flex shrink-0 items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10">
            <User className="h-5 w-5 text-gold" />
          </div>
          <span className="text-xs font-semibold tracking-[0.15em] text-white uppercase underline decoration-gold decoration-2 underline-offset-4">
            About Me
          </span>
        </div>

        <p className="flex-1 text-center text-sm leading-relaxed text-muted sm:text-left sm:text-base">
          I&apos;m a digital product designer and developer helping businesses
          build solutions that are modern, scalable and impactful.
        </p>

        <div className="flex shrink-0 items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10">
            <User className="h-5 w-5 text-gold" />
          </div>
          <span className="text-sm font-semibold text-white">
            4+ Years Experience
          </span>
        </div>
      </motion.div>
    </section>
  );
}
