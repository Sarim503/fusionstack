"use client";

import { motion } from "framer-motion";
import { BarChart3, Target, TrendingUp, Users } from "lucide-react";

const stats = [
  { icon: Users, value: "4+", label: "Years Experience" },
  { icon: Target, value: "100+", label: "Campaigns Managed" },
  { icon: BarChart3, value: "Millions", label: "In Ad Spend" },
  { icon: TrendingUp, value: "Proven", label: "Growth Results" },
];

export function DigitalMarketingStats() {
  return (
    <section className="px-6 py-12 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex flex-col items-center rounded-2xl border border-gold/20 bg-card px-6 py-8 text-center"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
              <stat.icon className="h-5 w-5 text-gold" />
            </div>
            <p className="mb-1 text-2xl font-bold text-white">{stat.value}</p>
            <p className="text-sm text-gold">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
