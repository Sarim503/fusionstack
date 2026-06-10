"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Box,
  Brain,
  Layers,
  LayoutGrid,
  Smile,
  Users,
  FolderKanban,
} from "lucide-react";
import { ViewMoreButton } from "../ViewMoreButton";

const stats = [
  { icon: Brain, value: "6+", label: "Years Experience" },
  { icon: FolderKanban, value: "50+", label: "Projects Completed" },
  { icon: Users, value: "30+", label: "Happy Clients" },
  { icon: Smile, value: "99%", label: "Client Satisfaction" },
];

const services = [
  {
    icon: Layers,
    title: "Product Design",
    description:
      "End-to-end product design from research and wireframes to polished, production-ready interfaces.",
    href: "#services",
  },
  {
    icon: LayoutGrid,
    title: "UI/UX Design",
    description:
      "User-centered interfaces that balance aesthetics with usability and drive meaningful engagement.",
    href: "#services",
  },
  {
    icon: Box,
    title: "3D & Motion Design",
    description:
      "Immersive 3D visuals and motion graphics that bring your brand and product to life.",
    href: "#services",
  },
  {
    icon: Brain,
    title: "Design Systems",
    description:
      "Scalable design systems and component libraries that keep teams aligned and products consistent.",
    href: "#services",
  },
];

export function AiProductDesignAbout() {
  return (
    <section id="about" className="px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-gold uppercase">
              About Me
            </p>
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Hi, I&apos;m{" "}
              <span className="text-gold">Sami</span>
            </h2>
            <p className="mb-8 max-w-lg text-base leading-relaxed text-muted">
              I&apos;m an AI-powered product designer passionate about creating
              digital experiences that feel intelligent, intuitive, and
              delightful. I combine design thinking with emerging AI tools to
              deliver products that stand out.
            </p>

            <div className="mb-8 grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="rounded-2xl border border-gold/20 bg-card p-4"
                >
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg border border-gold/30 bg-gold/10">
                    <stat.icon className="h-4 w-4 text-gold" />
                  </div>
                  <p className="text-xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-muted">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <Link
              href="/#about"
              className="inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-gold-light"
            >
              More About Me
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            id="services"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-gold uppercase">
              What I Do
            </p>
            <h2 className="mb-8 text-3xl font-bold text-white sm:text-4xl">
              Turning Ideas Into{" "}
              <span className="text-gold">Exceptional Products</span>
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="group flex h-full flex-col rounded-2xl border border-gold/20 bg-card p-5 transition-all duration-300 hover:border-gold/40"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-gold/30 bg-gold/10">
                    <service.icon className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mb-4 flex-1 text-xs leading-relaxed text-muted">
                    {service.description}
                  </p>
                  <ViewMoreButton href={service.href} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
