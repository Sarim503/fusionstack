"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Layers, Palette, Sparkles, Wand2 } from "lucide-react";
import { Button } from "../Button";

const toolBadges = [
  { label: "Figma", icon: Layers, color: "text-[#a259ff]" },
  { label: "Blender", icon: Wand2, color: "text-[#f5792a]" },
  { label: "Adobe", icon: Palette, color: "text-[#ff3366]" },
  { label: "Motion", icon: Sparkles, color: "text-[#00d4ff]" },
];

export function AiProductDesignHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-gold uppercase">
            AI Powered Product Designer
          </p>
          <h1 className="mb-6 text-4xl leading-tight font-extrabold text-white sm:text-5xl lg:text-6xl">
            Designing Intelligent,{" "}
            <span className="text-gold">Engaging</span> Experiences.
          </h1>
          <p className="mb-8 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            We blend AI-driven insights with human-centered design thinking to
            craft products that are intuitive, beautiful, and built to scale.
          </p>
          <Button href="#projects">View My Work</Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative h-[420px] w-full max-w-md sm:h-[480px]">
            <div className="absolute top-1/2 left-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/30" />
            <div className="absolute top-1/2 left-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl" />

            <div className="relative z-10 mx-auto h-full w-[90%]">
              <Image
                src="/sami.png"
                alt="Sami — fusionstack AI product designer"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>

            <div className="absolute top-16 -right-2 z-20 flex flex-col gap-2 sm:right-0">
              {toolBadges.map((badge, i) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-2 rounded-full border border-gold/20 bg-card/90 px-3 py-1.5 backdrop-blur-sm"
                >
                  <badge.icon className={`h-3.5 w-3.5 ${badge.color}`} />
                  <span className="text-xs font-medium text-white">
                    {badge.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
