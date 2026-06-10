"use client";

import { motion } from "framer-motion";
import {
  Box,
  Film,
  Layers,
  Layout,
  Palette,
  PenTool,
  Sparkles,
  Wand2,
} from "lucide-react";

const tools = [
  { name: "Figma", icon: Layers, color: "text-[#a259ff]" },
  { name: "Adobe XD", icon: Layout, color: "text-[#ff61f6]" },
  { name: "Photoshop", icon: Palette, color: "text-[#31a8ff]" },
  { name: "Illustrator", icon: PenTool, color: "text-[#ff9a00]" },
  { name: "After Effects", icon: Film, color: "text-[#9999ff]" },
  { name: "Blender", icon: Wand2, color: "text-[#f5792a]" },
  { name: "Spline", icon: Box, color: "text-[#00d4ff]" },
  { name: "Principle", icon: Sparkles, color: "text-[#ff3366]" },
];

export function AiProductDesignTools() {
  return (
    <section id="tools" className="px-6 py-8 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-7xl rounded-2xl border border-gold/20 bg-card px-6 py-6 lg:px-10 lg:py-8"
      >
        <p className="mb-6 text-center text-sm font-semibold text-white">
          Design Tools I{" "}
          <span className="text-gold">Master</span>
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-12">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold/20 bg-gold/5">
                <tool.icon className={`h-5 w-5 ${tool.color}`} />
              </div>
              <span className="text-xs font-medium text-muted">{tool.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
