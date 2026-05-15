"use client";

import { motion } from "framer-motion";
import { Globe2 } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SectionHeader } from "@/components/ui/SectionHeader";

const COUNTRIES = [
  { name: "India", clients: 42, flag: "🇮🇳" },
  { name: "UAE", clients: 18, flag: "🇦🇪" },
  { name: "USA", clients: 35, flag: "🇺🇸" },
  { name: "UK", clients: 14, flag: "🇬🇧" },
  { name: "Canada", clients: 11, flag: "🇨🇦" },
  { name: "Australia", clients: 9, flag: "🇦🇺" },
] as const;

export function CountriesSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-8 md:px-6 md:pb-12">
      <SectionHeader
        align="left"
        eyebrow="Client footprint"
        title="Customers by country"
        subtitle="A growing global network of founders, operators, and product teams."
        className="mb-10"
      />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="relative overflow-hidden rounded-3xl border border-[#E5E7EB]/90 bg-gradient-to-br from-white via-white to-[#EFF6FF]/80 p-6 shadow-[0_24px_64px_-32px_rgba(37,99,235,0.2)] md:p-8"
      >
        <motion.div
          aria-hidden
          animate={{ opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#93C5FD]/25 blur-3xl"
        />
        <div className="relative mb-6 flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#2563EB]/10 text-[#1d4ed8]">
            <Globe2 className="h-5 w-5" aria-hidden />
          </span>
          <p className="text-sm font-semibold text-[#64748B]">
            Active partnerships across <AnimatedCounter value={15} suffix="+" className="font-heading text-[#0F172A]" /> markets
          </p>
        </div>

        <motion.div
          className="relative grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
        >
          {COUNTRIES.map(({ name, clients, flag }) => (
            <motion.div
              key={name}
              variants={{
                hidden: { opacity: 0, y: 14 },
                show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
              whileHover={{ y: -3 }}
              className="group flex items-center justify-between rounded-2xl border border-[#E5E7EB]/80 bg-white/90 px-4 py-4 shadow-sm transition-shadow duration-300 hover:shadow-[0_14px_36px_-20px_rgba(37,99,235,0.25)]"
            >
              <motion.div className="flex items-center gap-3">
                <span className="text-2xl" aria-hidden>
                  {flag}
                </span>
                <motion.div>
                  <p className="font-heading text-base font-bold text-[#0F172A]">{name}</p>
                  <p className="text-xs font-medium text-[#64748B]">Enterprise & growth teams</p>
                </motion.div>
              </motion.div>
              <div className="text-right">
                <p className="font-heading text-xl font-bold text-[#2563EB]">
                  <AnimatedCounter value={clients} suffix="+" />
                </p>
                <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-[#94A3B8]">Clients</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
