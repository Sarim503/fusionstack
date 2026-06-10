"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    category: "E-Commerce",
    title: "ShopHub",
    result: "Increased sales by 230% in 6 months",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
  },
  {
    category: "SaaS",
    title: "WorkFlow",
    result: "Boosted sign-ups by 180% with targeted campaigns",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  },
  {
    category: "Portfolio",
    title: "BrandBoost",
    result: "Enhanced brand visibility and engagement",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
];

export function DigitalMarketingProjects() {
  return (
    <section id="projects" className="px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-gold uppercase">
              Our Work
            </p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Recent Projects
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-1 text-sm font-medium text-gold transition-colors hover:text-gold-light"
          >
            View All Work
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href="#"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-card-border bg-card"
            >
              <div className="relative h-44 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>
              <div className="relative p-6">
                <p className="mb-1 text-xs font-semibold tracking-[0.15em] text-gold uppercase">
                  {project.category}
                </p>
                <h3 className="mb-2 text-xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-muted">{project.result}</p>
                <div className="absolute right-5 bottom-5 flex h-9 w-9 items-center justify-center rounded-full bg-gold transition-transform group-hover:scale-110">
                  <ArrowUpRight className="h-4 w-4 text-black" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
