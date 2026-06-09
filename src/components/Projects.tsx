"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Cloud, LineChart, ShoppingCart } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const projects = [
  {
    icon: ShoppingCart,
    category: "E-Commerce",
    title: "ShopHub",
  },
  {
    icon: Cloud,
    category: "SaaS",
    title: "WorkFlow",
  },
  {
    icon: LineChart,
    category: "Marketing",
    title: "BrandBoost",
  },
];

export function Projects() {
  return (
    <section id="projects" className="px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Selected Work"
          title="Recent Projects"
          action={
            <a
              href="#"
              className="inline-flex items-center gap-1 text-sm font-medium text-gold transition-colors hover:text-gold-light"
            >
              View All Work
              <ArrowUpRight className="h-4 w-4" />
            </a>
          }
        />

        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href="#"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative flex min-h-[200px] flex-col justify-between rounded-2xl border border-card-border bg-card p-6 transition-all duration-300 hover:border-gold/30 hover:bg-card/80"
            >
              <div>
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10">
                  <project.icon className="h-5 w-5 text-gold" />
                </div>
                <p className="mb-2 text-xs font-semibold tracking-[0.15em] text-gold uppercase">
                  {project.category}
                </p>
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              </div>
              <div className="flex justify-end">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/30 transition-all group-hover:border-gold group-hover:bg-gold/10">
                  <ArrowUpRight className="h-4 w-4 text-gold" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
