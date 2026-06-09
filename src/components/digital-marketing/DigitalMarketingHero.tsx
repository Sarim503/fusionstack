"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "../Button";

export function DigitalMarketingHero() {
  return (
    <section className="hero-grid relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-transparent" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-gold uppercase">
            Digital Marketing Agency
          </p>
          <h1 className="mb-6 text-4xl leading-tight font-extrabold text-white sm:text-5xl lg:text-6xl">
            We Scale Brands Through Strategic{" "}
            <span className="gold-text-gradient">Digital Marketing.</span>
          </h1>
          <p className="mb-8 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            Helping businesses generate more leads, increase revenue, and dominate
            their market through SEO, paid advertising, and data-driven growth
            strategies.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button href="#contact">Book a Call</Button>
            <Link
              href="#about"
              className="inline-flex items-center gap-1 text-sm font-medium text-gold transition-colors hover:text-gold-light"
            >
              Learn More
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative h-[420px] w-full max-w-md sm:h-[480px]">
            <svg
              className="absolute top-8 right-0 h-48 w-full opacity-60"
              viewBox="0 0 400 200"
              fill="none"
              aria-hidden="true"
            >
              <polyline
                points="0,160 60,140 120,100 180,120 240,60 300,80 360,20 400,40"
                stroke="#d4af37"
                strokeWidth="2"
                fill="none"
              />
              <circle cx="60" cy="140" r="4" fill="#d4af37" />
              <circle cx="120" cy="100" r="4" fill="#d4af37" />
              <circle cx="180" cy="120" r="4" fill="#d4af37" />
              <circle cx="240" cy="60" r="4" fill="#d4af37" />
              <circle cx="300" cy="80" r="4" fill="#d4af37" />
              <circle cx="360" cy="20" r="4" fill="#d4af37" />
              <rect x="40" y="170" width="12" height="30" fill="#d4af37" opacity="0.4" />
              <rect x="80" y="150" width="12" height="50" fill="#d4af37" opacity="0.4" />
              <rect x="120" y="130" width="12" height="70" fill="#d4af37" opacity="0.4" />
              <rect x="160" y="145" width="12" height="55" fill="#d4af37" opacity="0.4" />
            </svg>
            <div className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/20 blur-3xl" />
            <div className="relative h-full w-full overflow-hidden rounded-2xl">
              <Image
                src="/HAMZA.png"
                alt="Hamza — Digital marketing strategist"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
