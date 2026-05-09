"use client";

import { motion } from "framer-motion";
import { Gauge, Layers, LifeBuoy, Search, Smartphone, Sparkles } from "lucide-react";

const ITEMS = [
  { title: "Fast Delivery", description: "Lean rituals, async-friendly updates, and milestone clarity.", Icon: Gauge },
  { title: "Scalable Architecture", description: "Patterns that age well — boundaries, observability, and safety.", Icon: Layers },
  { title: "Modern UI/UX", description: "Glass, gradients, and motion — without sacrificing performance.", Icon: Sparkles },
  { title: "SEO Optimized", description: "Semantic structure, metadata discipline, and Core Web Vitals focus.", Icon: Search },
  { title: "Mobile Responsive", description: "Adaptive layouts that feel native from phone to desktop.", Icon: Smartphone },
  { title: "Ongoing Support", description: "Iteration retainers, monitoring hooks, and pragmatic handoffs.", Icon: LifeBuoy },
] as const;

export function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="text-3xl font-extrabold tracking-tight text-[#0F172A] md:text-4xl">Why teams choose us</h2>
        <p className="mt-3 text-sm font-medium text-[#64748B] md:text-base">
          Agency execution with product discipline — clarity in discovery, precision in delivery.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map(({ title, description, Icon }, idx) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: idx * 0.05 }}
            className="rounded-3xl border border-[#E5E7EB]/90 bg-gradient-to-br from-white to-[#F8FAFC]/90 p-6 shadow-[0_16px_48px_-24px_rgba(15,23,42,0.15)] backdrop-blur-sm"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#FACC15]/90 text-[#854D0E] shadow-sm">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-lg font-bold text-[#0F172A]">{title}</h3>
            </div>
            <p className="mt-3 text-sm font-medium leading-relaxed text-[#64748B]">{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
