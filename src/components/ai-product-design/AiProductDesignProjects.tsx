"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "../Button";

const projects = [
  {
    category: "UI/UX Design",
    title: "Fintech Dashboard",
    description:
      "A sleek financial dashboard with real-time analytics and intuitive data visualization.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    href: "#projects",
  },
  {
    category: "Product Design",
    title: "E-commerce Platform",
    description:
      "Modern shopping experience with AI-powered recommendations and seamless checkout.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    href: "#projects",
  },
  {
    category: "3D & Motion",
    title: "Brand Identity System",
    description:
      "Complete visual identity with 3D assets, motion graphics, and brand guidelines.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
    href: "#projects",
  },
  {
    category: "Design System",
    title: "SaaS Component Library",
    description:
      "Scalable design system with 100+ components for a growing product team.",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&q=80",
    href: "#projects",
  },
];

export function AiProductDesignProjects() {
  return (
    <section id="projects" className="px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-gold uppercase">
              Portfolio
            </p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Featured{" "}
              <span className="text-gold">Projects</span>
            </h2>
          </div>
          <Button variant="outline" href="#projects">
            View All Projects
          </Button>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-card-border bg-card"
            >
              <div className="relative h-52 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
              <div className="relative p-6">
                <p className="mb-1 text-xs font-semibold tracking-[0.15em] text-gold uppercase">
                  {project.category}
                </p>
                <h3 className="mb-2 text-xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="pr-12 text-sm text-muted">{project.description}</p>
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
