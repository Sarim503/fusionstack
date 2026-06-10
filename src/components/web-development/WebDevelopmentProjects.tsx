"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "../Button";

const projects = [
  {
    category: "Platform",
    title: "Workforce Ops",
    result:
      "A professional platform to manage workforce services, bookings, and operations.",
    href: "https://workforce-ops.silversparrowstudios.com/",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  },
  {
    category: "B2B Logistics",
    title: "Dispatch Ops",
    result:
      "Merchant portal and public landing for delivery operations.",
    href: "https://dispatch-ops.silversparrowstudios.com/orders",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
  },
  {
    category: "Marketplace",
    title: "Pharma Marketplace",
    result: "Multi-vendor pharmacy marketplace — customer storefront.",
    href: "https://pharma-market.silversparrowstudios.com/",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
  },
  {
    category: "SaaS",
    title: "Event Ops",
    result: "Event management application for seamless event operations.",
    href: "https://event-ops.silversparrowstudios.com/",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80",
  },
];

export function WebDevelopmentProjects() {
  return (
    <section id="projects" className="px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-gold uppercase">
              Recent Projects
            </p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Our Work
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
              target="_blank"
              rel="noopener noreferrer"
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
                <p className="pr-12 text-sm text-muted">{project.result}</p>
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
