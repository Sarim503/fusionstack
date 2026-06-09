"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function WebDevelopmentHero() {
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
            Web Developer &amp; Digital Product Builder
          </p>
          <h1 className="mb-6 text-4xl leading-tight font-extrabold text-white sm:text-5xl lg:text-6xl">
            I&apos;m Sarim Khan
          </h1>
          <p className="max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            I build fast, scalable, and user-focused web experiences that deliver
            real results.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative h-[420px] w-full max-w-md sm:h-[480px]">
            <div className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/20 blur-3xl" />
            <div className="absolute top-1/2 left-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/20" />
            <div className="relative h-full w-full overflow-hidden rounded-2xl">
              <Image
                src="/SARIM.png"
                alt="Sarim Khan — Web Developer"
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
