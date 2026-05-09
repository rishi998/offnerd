"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const QUOTES = [
  {
    quote: "They shipped a polished SaaS shell in weeks — performance, UI, and instrumentation were production-grade.",
    name: "Placeholder Client",
    role: "Head of Product · Series B",
  },
  {
    quote: "Clear updates, crisp design decisions, and engineering that didn’t paint us into a corner.",
    name: "Placeholder Founder",
    role: "CEO · Fintech startup",
  },
  {
    quote: "Our marketing site finally matches the quality of the product — conversions reflect it.",
    name: "Placeholder Lead",
    role: "Growth Lead · B2B",
  },
] as const;

export function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="text-3xl font-extrabold tracking-tight text-[#0F172A] md:text-4xl">Trusted by builders</h2>
        <p className="mt-3 text-sm font-medium text-[#64748B] md:text-base">Placeholder testimonials — swap with real quotes anytime.</p>
      </motion.div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {QUOTES.map(({ quote, name, role }, idx) => (
          <motion.figure
            key={name}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: idx * 0.06 }}
            className="relative overflow-hidden rounded-3xl border border-[#E5E7EB]/90 bg-white/70 p-7 shadow-[0_20px_52px_-26px_rgba(15,23,42,0.18)] backdrop-blur-xl"
          >
            <Quote className="absolute right-5 top-5 h-8 w-8 text-[#BFDBFE]" aria-hidden />
            <blockquote className="relative text-sm font-medium leading-relaxed text-[#334155] md:text-[0.95rem]">&ldquo;{quote}&rdquo;</blockquote>
            <figcaption className="relative mt-6 border-t border-[#E5E7EB]/80 pt-5">
              <p className="text-sm font-bold text-[#0F172A]">{name}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#64748B]">{role}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
