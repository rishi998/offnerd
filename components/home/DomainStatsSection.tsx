"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Building2,
  GraduationCap,
  HeartPulse,
  Landmark,
  Package,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SectionHeader } from "@/components/ui/SectionHeader";

type Domain = {
  label: string;
  percent: number;
  Icon: LucideIcon;
  accent: string;
};

const DOMAINS: Domain[] = [
  { label: "SaaS", percent: 28, Icon: Sparkles, accent: "from-[#2563EB]/15 to-[#60A5FA]/10" },
  { label: "E-Commerce", percent: 18, Icon: ShoppingBag, accent: "from-[#FACC15]/20 to-[#FDE68A]/10" },
  { label: "Healthcare", percent: 12, Icon: HeartPulse, accent: "from-[#10B981]/15 to-[#6EE7B7]/10" },
  { label: "Education", percent: 10, Icon: GraduationCap, accent: "from-[#8B5CF6]/15 to-[#C4B5FD]/10" },
  { label: "Finance", percent: 14, Icon: Landmark, accent: "from-[#0EA5E9]/15 to-[#7DD3FC]/10" },
  { label: "Logistics", percent: 8, Icon: Package, accent: "from-[#F97316]/15 to-[#FDBA74]/10" },
  { label: "AI Automation", percent: 16, Icon: Bot, accent: "from-[#6366F1]/15 to-[#A5B4FC]/10" },
  { label: "Real Estate", percent: 9, Icon: Building2, accent: "from-[#64748B]/15 to-[#CBD5E1]/10" },
];

export function DomainStatsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
      <SectionHeader
        eyebrow="Domain expertise"
        title="Industries we build for"
        subtitle="From product-led SaaS to regulated verticals — we adapt architecture, UX, and delivery to your domain."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {DOMAINS.map(({ label, percent, Icon, accent }, idx) => (
          <motion.article
            key={label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.45, delay: idx * 0.04 }}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-2xl border border-[#E5E7EB]/90 bg-white/85 p-5 shadow-[0_16px_48px_-28px_rgba(15,23,42,0.14)] backdrop-blur-sm"
          >
            <motion.div
              aria-hidden
              className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent} opacity-70`}
            />
            <div className="relative flex items-start justify-between gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/90 text-[#1e40af] shadow-sm">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <p className="font-heading text-2xl font-bold text-[#0F172A]">
                <AnimatedCounter value={percent} suffix="%" />
              </p>
            </div>
            <h3 className="relative mt-4 font-heading text-base font-bold text-[#0F172A]">{label}</h3>
            <div className="relative mt-4 h-1.5 overflow-hidden rounded-full bg-[#E2E8F0]">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[#2563EB] to-[#1d4ed8]"
                initial={{ width: 0 }}
                whileInView={{ width: `${percent}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
