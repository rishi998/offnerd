"use client";

import { motion } from "framer-motion";
import {
  Award,
  Globe2,
  HeartHandshake,
  Layers,
  Rocket,
  Search,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

type Achievement = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

const ACHIEVEMENTS: Achievement[] = [
  {
    title: "250+ Projects Delivered",
    description: "End-to-end launches across web, SaaS, and automation.",
    Icon: Rocket,
  },
  {
    title: "99% Client Satisfaction",
    description: "Transparent delivery with measurable outcomes.",
    Icon: HeartHandshake,
  },
  {
    title: "Global Clients Across 15+ Countries",
    description: "Remote-first collaboration with timezone-aware rituals.",
    Icon: Globe2,
  },
  {
    title: "SaaS Products Built & Scaled",
    description: "From MVP to production-grade multi-tenant platforms.",
    Icon: Layers,
  },
  {
    title: "High Performance SEO Systems",
    description: "Core Web Vitals, semantic markup, and growth-ready IA.",
    Icon: Search,
  },
  {
    title: "Automation Platforms Launched",
    description: "Workflow engines, integrations, and AI-assisted ops.",
    Icon: Sparkles,
  },
  {
    title: "Long-Term Client Partnerships",
    description: "Retainerships focused on iteration and reliability.",
    Icon: TrendingUp,
  },
  {
    title: "Award-Grade Craft",
    description: "Design systems that feel premium without bloat.",
    Icon: Award,
  },
];

export function AchievementsSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(37,99,235,0.08),transparent)]"
      />

      <motion.div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Milestones"
          title="Achievements & Milestones"
          subtitle="A track record of shipping reliable digital systems — with clarity, craft, and long-term partnership."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {ACHIEVEMENTS.map(({ title, description, Icon }, idx) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.45, delay: idx * 0.04 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-[#E5E7EB]/80 bg-white/75 p-6 shadow-[0_20px_56px_-30px_rgba(15,23,42,0.18)] backdrop-blur-md"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(37,99,235,0.06), rgba(250,204,21,0.08))",
                  boxShadow: "inset 0 0 0 1px rgba(37,99,235,0.12)",
                }}
              />
              <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#2563EB]/10 to-[#FACC15]/15 text-[#1e40af] ring-1 ring-[#2563EB]/10">
                <Icon className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="relative mt-4 font-heading text-base font-bold text-[#0F172A]">{title}</h3>
              <p className="relative mt-2 text-sm font-medium leading-relaxed text-[#64748B]">{description}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
