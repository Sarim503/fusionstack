"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BarChart3, Code2 } from "lucide-react";
import { Button } from "../Button";

export function WebDevelopmentHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
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
            We Build Modern{" "}
            <span className="text-gold">Web Experiences.</span>
          </h1>
          <p className="mb-8 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            We build fast, scalable, and user-focused web applications that help
            businesses launch products, streamline operations, and grow online.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button href="#services">Explore Services</Button>
            <Button variant="outline" href="#projects">
              See Projects
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
              className="absolute inset-0 h-full w-full opacity-40"
              viewBox="0 0 400 480"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M40 80 L120 80 L120 160 L40 160 Z"
                stroke="#ffd700"
                strokeWidth="1"
                opacity="0.3"
              />
              <path
                d="M280 60 L360 60 L360 140 L280 140 Z"
                stroke="#ffd700"
                strokeWidth="1"
                opacity="0.3"
              />
              <path
                d="M60 320 L200 320"
                stroke="#ffd700"
                strokeWidth="1"
                opacity="0.2"
              />
              <path
                d="M60 340 L160 340"
                stroke="#ffd700"
                strokeWidth="1"
                opacity="0.2"
              />
              <path
                d="M60 360 L180 360"
                stroke="#ffd700"
                strokeWidth="1"
                opacity="0.2"
              />
              <circle cx="320" cy="280" r="40" stroke="#ffd700" strokeWidth="1" opacity="0.25" />
              <circle cx="320" cy="280" r="20" stroke="#ffd700" strokeWidth="1" opacity="0.35" />
            </svg>

            <div className="absolute top-1/2 left-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/30" />
            <div className="absolute top-1/2 left-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-2xl" />

            <div className="absolute top-12 right-4 z-20 flex items-center gap-2 rounded-lg border border-gold/30 bg-card/80 px-3 py-2 backdrop-blur-sm">
              <BarChart3 className="h-4 w-4 text-gold" />
              <div className="flex items-end gap-0.5">
                <div className="h-3 w-1 bg-gold/60" />
                <div className="h-5 w-1 bg-gold/80" />
                <div className="h-4 w-1 bg-gold/60" />
                <div className="h-6 w-1 bg-gold" />
              </div>
            </div>

            <div className="absolute top-24 left-4 z-20 rounded-lg border border-gold/30 bg-card/80 px-3 py-2 font-mono text-xs text-gold backdrop-blur-sm">
              <Code2 className="mb-1 h-4 w-4" />
              &lt;/&gt;
            </div>

            <div className="relative z-10 mx-auto h-full w-[90%]">
              <Image
                src="/SARIM.png"
                alt="Sarim — fusionstack web developer"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
