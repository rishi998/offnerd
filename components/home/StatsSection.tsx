"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SectionHeader } from "@/components/ui/SectionHeader";

const STATS = [
  { label: "Clients", value: 120, suffix: "+" },
  { label: "Countries", value: 15, suffix: "+" },
  { label: "Users Served", value: 300, suffix: "K+" },
  { label: "Years Experience", value: 5, suffix: "" },
  { label: "Projects Delivered", value: 250, suffix: "+" },
] as const;

export function StatsSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#EEF2FF]/60 to-transparent"
      />

      <motion.div
        className="relative mx-auto max-w-7xl px-4 md:px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.15 }}
      >
        <SectionHeader
          eyebrow="Global reach"
          title="Trusted By Businesses Worldwide"
          subtitle="Building digital systems for startups, brands, and growing companies across multiple industries."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-5">
          {STATS.map(({ label, value, suffix }, idx) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-[#E5E7EB]/90 bg-white/80 p-5 shadow-[0_16px_48px_-28px_rgba(15,23,42,0.16)] backdrop-blur-md md:p-6"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#2563EB]/[0.04] via-transparent to-[#FACC15]/[0.06] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <p className="font-heading text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">
                <AnimatedCounter value={value} suffix={suffix} />
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-[#64748B] md:text-sm">{label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
