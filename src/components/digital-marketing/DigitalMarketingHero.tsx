"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BarChart3 } from "lucide-react";
import { Button } from "../Button";

export function DigitalMarketingHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
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
            <span className="text-gold">Digital Marketing.</span>
          </h1>
          <p className="mb-8 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            Helping businesses generate more leads, increase revenue, and dominate
            their market through SEO, paid advertising, and data-driven growth
            strategies.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button href="#services">Explore Services</Button>
            <Button variant="outline" href="#projects">
              See Our Work
            </Button>
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
              className="absolute top-4 right-0 left-0 z-0 h-40 w-full opacity-70"
              viewBox="0 0 400 160"
              fill="none"
              aria-hidden="true"
            >
              <polyline
                points="0,130 50,110 100,90 150,100 200,50 250,70 300,30 350,45 400,20"
                stroke="#ffd700"
                strokeWidth="2"
                fill="none"
              />
              <circle cx="50" cy="110" r="4" fill="#ffd700" />
              <circle cx="100" cy="90" r="4" fill="#ffd700" />
              <circle cx="150" cy="100" r="4" fill="#ffd700" />
              <circle cx="200" cy="50" r="4" fill="#ffd700" />
              <circle cx="250" cy="70" r="4" fill="#ffd700" />
              <circle cx="300" cy="30" r="4" fill="#ffd700" />
              <circle cx="350" cy="45" r="4" fill="#ffd700" />
              <rect x="30" y="140" width="10" height="20" fill="#ffd700" opacity="0.35" />
              <rect x="70" y="125" width="10" height="35" fill="#ffd700" opacity="0.35" />
              <rect x="110" y="110" width="10" height="50" fill="#ffd700" opacity="0.35" />
              <rect x="150" y="120" width="10" height="40" fill="#ffd700" opacity="0.35" />
            </svg>

            <div className="absolute top-1/2 left-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/30" />
            <div className="absolute top-1/2 left-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-2xl" />

            <div className="relative z-10 mx-auto h-full w-[90%]">
              <Image
                src="/HAMZA.png"
                alt="Hamza — fusionstack digital marketing"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>

            <div className="absolute bottom-16 left-0 z-20 flex items-center gap-2 rounded-xl border border-gold/30 bg-card/90 px-4 py-2.5 backdrop-blur-sm">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold/10">
                <BarChart3 className="h-4 w-4 text-gold" />
              </div>
              <span className="text-xs font-semibold text-white">Growth Driven</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
