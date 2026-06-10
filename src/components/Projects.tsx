"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Calendar,
  ShoppingCart,
  Truck,
  Users,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { ViewMoreButton } from "./ViewMoreButton";

const projects = [
  {
    icon: Users,
    category: "Platform",
    title: "Workforce Ops",
    description:
      "A professional platform to manage workforce services, bookings, providers, and customer operations.",
    href: "https://workforce-ops.silversparrowstudios.com/",
  },
  {
    icon: Truck,
    category: "B2B Logistics",
    title: "Dispatch Ops",
    description:
      "Merchant portal and public landing for Dispatch Ops delivery operations.",
    href: "https://dispatch-ops.silversparrowstudios.com/orders",
  },
  {
    icon: ShoppingCart,
    category: "Marketplace",
    title: "Pharma Marketplace",
    description:
      "Multi-vendor pharmacy marketplace — customer storefront.",
    href: "https://pharma-market.silversparrowstudios.com/",
  },
  {
    icon: Calendar,
    category: "SaaS",
    title: "Event Ops",
    description: "Event Ops Application.",
    href: "https://event-ops.silversparrowstudios.com/",
  },
];

export function Projects() {
  return (
    <section id="projects" className="px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Projects Work"
          title="Recent Projects"
          action={
            <a
              href="#projects"
              className="inline-flex items-center gap-1 text-sm font-medium text-gold transition-colors hover:text-gold-light"
            >
              View All Work
              <ArrowUpRight className="h-4 w-4" />
            </a>
          }
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group flex min-h-[180px] items-center justify-between gap-4 rounded-2xl border border-card-border bg-card p-6 transition-all duration-300 hover:border-gold/30"
            >
              <div className="min-w-0 flex-1">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-gold/30 bg-gold/10">
                  <project.icon className="h-5 w-5 text-gold" />
                </div>
                <p className="mb-1 text-xs font-semibold tracking-[0.15em] text-gold uppercase">
                  {project.category}
                </p>
                <h3 className="mb-2 text-xl font-bold text-white sm:text-2xl">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
              </div>
              <ViewMoreButton href={project.href} className="shrink-0 self-center" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
