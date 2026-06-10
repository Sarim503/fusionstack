"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CircleDollarSign,
  Users,
} from "lucide-react";

const features = [
  { icon: Users, label: "Data Driven Approach" },
  { icon: CircleDollarSign, label: "ROI Focused" },
  { icon: BarChart3, label: "Transparent Reporting" },
];

const mapNodes = [
  { cx: 95, cy: 95, r: 6 },
  { cx: 210, cy: 80, r: 7 },
  { cx: 250, cy: 110, r: 5 },
  { cx: 330, cy: 100, r: 6 },
  { cx: 370, cy: 130, r: 5 },
  { cx: 180, cy: 150, r: 5 },
];

const continentDots = [
  [70, 60], [85, 55], [100, 58], [115, 65], [130, 72], [145, 80], [90, 75], [105, 82],
  [75, 90], [95, 88], [110, 95], [125, 100], [140, 92], [155, 85], [85, 105], [100, 110],
  [115, 115], [130, 108], [145, 100], [160, 95], [175, 88], [190, 82], [205, 78], [220, 75],
  [235, 72], [250, 70], [265, 75], [280, 80], [295, 85], [310, 90], [325, 95], [340, 100],
  [355, 105], [370, 110], [385, 115], [200, 95], [215, 100], [230, 105], [245, 110],
  [260, 115], [275, 120], [290, 125], [305, 130], [320, 125], [335, 120], [350, 115],
  [180, 130], [195, 135], [210, 140], [225, 145], [240, 150], [255, 145], [270, 140],
  [285, 135], [300, 130], [315, 135], [330, 140], [345, 145], [360, 150], [375, 155],
  [160, 155], [175, 160], [190, 165], [205, 170], [220, 165], [235, 160], [250, 155],
  [265, 150], [280, 155], [295, 160], [310, 165], [325, 170], [340, 165], [355, 160],
  [120, 55], [135, 50], [150, 48], [165, 52], [180, 58], [195, 62], [210, 68], [225, 72],
  [300, 55], [315, 52], [330, 55], [345, 60], [360, 65], [375, 70], [390, 75],
  [85, 120], [100, 125], [115, 130], [130, 135], [145, 140], [160, 145],
  [350, 85], [365, 90], [380, 95], [395, 100], [400, 105], [385, 110], [370, 105],
];

function WorldMapGraphic() {
  return (
    <svg
      className="h-full w-full"
      viewBox="0 0 440 200"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffd700" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#ffd700" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#ffd700" stopOpacity="0" />
        </radialGradient>
      </defs>

      {continentDots.map(([cx, cy], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r="2"
          fill="#ffd700"
          opacity={0.12 + (i % 5) * 0.04}
        />
      ))}

      {mapNodes.map((node, i) => (
        <g key={i}>
          <circle
            cx={node.cx}
            cy={node.cy}
            r={node.r * 3}
            fill="url(#nodeGlow)"
          />
          <circle
            cx={node.cx}
            cy={node.cy}
            r={node.r}
            fill="#ffd700"
            opacity={0.95}
          />
          <circle
            cx={node.cx}
            cy={node.cy}
            r={node.r * 1.8}
            fill="#ffd700"
            opacity={0.25}
          />
        </g>
      ))}
    </svg>
  );
}

export function DigitalMarketingAbout() {
  return (
    <section id="about" className="px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-gold uppercase">
              About Us
            </p>
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              We Help Businesses Grow Smarter.
            </h2>
            <p className="mb-8 max-w-lg text-base leading-relaxed text-muted">
              We combine creativity, data, and innovation to craft marketing
              strategies that attract, engage, and convert your ideal customers.
              Let&apos;s take your brand to the next level.
            </p>
            <Link
              href="/#about"
              className="inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-gold-light"
            >
              More About Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="relative h-48 w-full lg:h-56">
              <WorldMapGraphic />
            </div>

            <div className="flex flex-col divide-y divide-white/10 rounded-2xl border border-card-border bg-card sm:flex-row sm:divide-x sm:divide-y-0">
              {features.map((feature) => (
                <div
                  key={feature.label}
                  className="flex flex-1 items-center justify-center gap-3 px-4 py-5 sm:px-5"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
                    <feature.icon className="h-4 w-4 text-gold" />
                  </div>
                  <span className="text-sm font-medium text-white">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
