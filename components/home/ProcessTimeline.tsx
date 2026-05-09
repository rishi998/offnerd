"use client";

import { motion } from "framer-motion";
import { Hammer, Lightbulb, LineChart, Palette, Rocket, Wrench } from "lucide-react";

const STEPS = [
  { title: "Discovery", description: "Goals, constraints, analytics context, and success signals.", Icon: Lightbulb },
  { title: "Planning", description: "Architecture notes, milestones, and transparent estimates.", Icon: LineChart },
  { title: "Design", description: "Systems, prototypes, and motion-ready component specs.", Icon: Palette },
  { title: "Development", description: "Incremental builds with reviews and measurable quality gates.", Icon: Hammer },
  { title: "Launch", description: "Hardening, SEO checks, analytics, and graceful rollout.", Icon: Rocket },
  { title: "Support", description: "Monitoring, improvements, and pragmatic iteration cadence.", Icon: Wrench },
] as const;

export function ProcessTimeline() {
  return (
    <section className="relative overflow-hidden py-14 md:py-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.08),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(250,204,21,0.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0F172A] md:text-4xl">How we work</h2>
          <p className="mt-3 text-sm font-medium text-[#64748B] md:text-base">
            A predictable process that stays flexible — outcomes first, ceremony never for its own sake.
          </p>
        </motion.div>

        <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {STEPS.map(({ title, description, Icon }, idx) => (
            <motion.li
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="relative overflow-hidden rounded-3xl border border-[#E5E7EB]/90 bg-white/90 p-6 shadow-[0_18px_48px_-22px_rgba(15,23,42,0.16)] backdrop-blur-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-[#94A3B8]">Step {idx + 1}</p>
                  <h3 className="mt-1 text-lg font-bold text-[#0F172A]">{title}</h3>
                </div>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1e40af] text-white shadow-[0_12px_28px_-10px_rgba(37,99,235,0.55)]">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
              </div>
              <p className="mt-3 text-sm font-medium leading-relaxed text-[#64748B]">{description}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
