"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const waveDots = Array.from({ length: 20 }, (_, row) =>
  Array.from({ length: 30 }, (_, col) => ({
    key: `${row}-${col}`,
    cx: col * 18 + 10,
    cy: Math.round(
      150 +
        Math.sin((col / 30) * Math.PI * 4 + row * 0.3) * 40 +
        row * 2,
    ),
    opacity: Math.round((0.2 + (col / 30) * 0.6) * 100) / 100,
  })),
).flat();

export function DigitalMarketingAbout() {
  return (
    <section id="about" className="px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-gold uppercase">
            About Us
          </p>
          <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
            We Help Businesses Grow Smarter.
          </h2>
          <p className="mb-8 max-w-md text-base leading-relaxed text-muted">
            We combine creativity, data, and performance marketing to build
            powerful strategies that drive measurable results.
          </p>
          <Link
            href="/#about"
            className="inline-flex items-center gap-1 text-sm font-medium text-gold transition-colors hover:text-gold-light"
          >
            More About Us
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative flex h-64 items-center justify-center lg:h-80"
        >
          <svg
            className="h-full w-full"
            viewBox="0 0 500 300"
            fill="none"
            aria-hidden="true"
          >
            {waveDots.map((dot) => (
              <circle
                key={dot.key}
                cx={dot.cx}
                cy={dot.cy}
                r="2"
                fill="#d4af37"
                opacity={dot.opacity}
              />
            ))}
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
