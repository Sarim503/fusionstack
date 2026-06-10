"use client";

import { motion } from "framer-motion";
import { Globe, LayoutDashboard, ShoppingBag, Wrench } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Business Websites",
    description:
      "Professional, responsive websites that establish your brand and convert visitors into customers.",
  },
  {
    icon: LayoutDashboard,
    title: "SaaS Dashboards",
    description:
      "Powerful admin panels and dashboards with real-time data, analytics, and user management.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Platforms",
    description:
      "Full-featured online stores with secure payments, inventory, and seamless checkout flows.",
  },
  {
    icon: Wrench,
    title: "Custom Web Apps",
    description:
      "Tailored web applications built to solve your unique business challenges and workflows.",
  },
];

export function WebDevelopmentServices() {
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
            What I Do
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Services That Drive{" "}
            <span className="text-gold">Real Results.</span>
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
              className="group flex h-full flex-col rounded-2xl border border-gold/20 bg-card p-6 transition-all duration-300 hover:border-gold/40"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/10">
                <service.icon className="h-5 w-5 text-gold" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-white">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
