"use client";

import { motion } from "framer-motion";
import { BarChart3, Brain, Gamepad2, Monitor } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { ViewMoreButton } from "./ViewMoreButton";

const services = [
  {
    icon: Monitor,
    title: "Web Development",
    description:
      "Modern, fast and scalable web applications built with the latest technologies.",
    href: "/web-development",
  },
  {
    icon: Brain,
    title: "AI Powered Product Design",
    description:
      "Designing intelligent products powered by AI to solve real-world problems.",
    href: "/ai-product-design",
  },
  {
    icon: BarChart3,
    title: "Digital Marketing",
    description:
      "Data-driven marketing strategies that help you reach the right audience.",
    href: "/digital-marketing",
  },
  {
    icon: Gamepad2,
    title: "Game Developer",
    description:
      "Building engaging and immersive games across multiple platforms.",
    href: "#contact",
  },
];

export function Services() {
  return (
    <section id="services" className="px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader label="What I Do" title="Services" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group flex h-full flex-col rounded-2xl border border-card-border bg-card p-6 transition-all duration-300 hover:border-gold/30"
            >
              <service.icon className="mb-6 h-8 w-8 text-gold transition-colors group-hover:text-gold-light" />
              <h3 className="mb-3 text-lg font-semibold text-white transition-colors group-hover:text-gold">
                {service.title}
              </h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
              <ViewMoreButton href={service.href} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
