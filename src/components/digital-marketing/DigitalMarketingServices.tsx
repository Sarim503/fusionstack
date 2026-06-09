"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  Infinity,
  Search,
  Zap,
} from "lucide-react";

type Service = {
  icon: LucideIcon | "google-ads";
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Rank higher on search engines and drive organic traffic that converts into loyal customers.",
  },
  {
    icon: "google-ads",
    title: "Google Ads",
    description:
      "Targeted paid campaigns that maximize ROI and put your brand in front of ready-to-buy audiences.",
  },
  {
    icon: Infinity,
    title: "Meta Ads",
    description:
      "Engaging social media advertising across Facebook and Instagram to grow your brand presence.",
  },
  {
    icon: Zap,
    title: "Marketing Strategy",
    description:
      "Comprehensive growth plans tailored to your business goals, market, and competitive landscape.",
  },
];

export function DigitalMarketingServices() {
  return (
    <section id="services" className="px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-gold uppercase">
            Our Services
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Services That Drive{" "}
            <span className="gold-text-gradient">Real Growth</span>
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative flex flex-col rounded-2xl border border-gold/20 bg-card p-6 transition-all duration-300 hover:border-gold/40 hover:bg-card/80"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-gold/10 transition-colors group-hover:bg-gold/20">
                {service.icon === "google-ads" ? (
                  <span className="text-sm font-bold text-gold">A</span>
                ) : (
                  <service.icon className="h-5 w-5 text-gold" />
                )}
              </div>
              <h3 className="mb-3 text-lg font-semibold text-white">
                {service.title}
              </h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
              <ArrowUpRight className="absolute right-5 bottom-5 h-4 w-4 text-gold opacity-60 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
