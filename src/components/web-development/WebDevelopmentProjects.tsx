"use client";

import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "SaaS Dashboard",
    description:
      "Full-featured SaaS platform with analytics, user management, and real-time data.",
    category: "Web Application",
  },
  {
    number: "02",
    title: "Business Website",
    description:
      "Modern responsive website with custom CMS and SEO optimization.",
    category: "Website Design",
  },
  {
    number: "03",
    title: "E-commerce Store",
    description:
      "Complete online store with payment integration and inventory management.",
    category: "E-Commerce",
  },
];

export function WebDevelopmentProjects() {
  return (
    <section id="projects" className="px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center text-xs font-semibold tracking-[0.25em] text-gold uppercase"
        >
          Our Projects
        </motion.h2>

        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group flex flex-col rounded-2xl border border-card-border bg-card p-6 transition-all duration-300 hover:border-gold/30 hover:bg-card/80"
            >
              <span className="mb-8 text-sm text-muted">{project.number}</span>
              <h3 className="mb-4 text-2xl font-bold text-white">
                {project.title}
              </h3>
              <p className="mb-8 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <div className="border-t border-card-border pt-4">
                <span className="text-xs font-semibold tracking-[0.15em] text-gold uppercase">
                  {project.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
