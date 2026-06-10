"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "SEO Optimization",
    description:
      "Rank higher on search engines and drive organic traffic that converts into loyal customers.",
  },
  {
    title: "Google Ads",
    description:
      "Targeted paid campaigns that maximize ROI and put your brand in front of ready-to-buy audiences.",
  },
  {
    title: "Meta Ads",
    description:
      "Engaging social media advertising across Facebook and Instagram to grow your brand presence.",
  },
  {
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
            What We Do
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Services That Drive{" "}
            <span className="text-gold">Real Growth.</span>
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
              className="flex h-full flex-col rounded-2xl border border-gold/20 bg-card p-6 transition-all duration-300 hover:border-gold/40"
            >
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
