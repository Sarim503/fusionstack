"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { ContactIcons } from "../ContactIcons";

export function WebDevelopmentCta() {
  return (
    <section id="contact" className="px-6 py-20 lg:px-8 lg:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex max-w-7xl flex-col items-center gap-6 rounded-2xl border border-card-border bg-card px-6 py-8 sm:flex-row sm:gap-8 sm:px-10 sm:py-10"
      >
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
          <MessageCircle className="h-7 w-7 text-gold" />
        </div>

        <div className="flex-1 text-center sm:text-left">
          <h2 className="mb-2 text-xl font-bold text-white sm:text-2xl">
            Have a Project in Mind?
          </h2>
          <p className="text-sm text-muted sm:text-base">
            Let&apos;s discuss how we can build your next web product together.
          </p>
        </div>

        <ContactIcons className="shrink-0" iconClassName="h-5 w-5" />
      </motion.div>
    </section>
  );
}
