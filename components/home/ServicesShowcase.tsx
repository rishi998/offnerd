"use client";

import { motion } from "framer-motion";
import { Bot, Brush, Globe2, LayoutDashboard, LineChart, MonitorSmartphone, ShoppingBag, Workflow } from "lucide-react";

const SERVICES = [
  {
    title: "Website Development",
    description: "Marketing sites, landing pages, and content hubs engineered for speed and conversion.",
    Icon: Globe2,
  },
  {
    title: "SaaS Development",
    description: "Multi-tenant platforms, billing-aware flows, and dashboards built to scale securely.",
    Icon: LayoutDashboard,
  },
  {
    title: "AI Integrations",
    description: "LLM workflows, retrieval systems, and automation that ship with observability.",
    Icon: Bot,
  },
  {
    title: "UI/UX Design",
    description: "Product-ready systems with cohesive visuals, motion, and accessible interaction patterns.",
    Icon: Brush,
  },
  {
    title: "E‑Commerce Development",
    description: "Checkout flows, catalog UX, and integrations that keep revenue paths resilient.",
    Icon: ShoppingBag,
  },
  {
    title: "SEO & Marketing",
    description: "Structured content, performance budgets, and analytics instrumentation from day one.",
    Icon: LineChart,
  },
  {
    title: "CRM Development",
    description: "Pipelines, integrations, and internal tooling tailored to how your team sells.",
    Icon: MonitorSmartphone,
  },
  {
    title: "Automation Systems",
    description: "Reliable workflows across apps — notifications, ops, and growth experiments.",
    Icon: Workflow,
  },
] as const;

const sectionFade = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};

export function ServicesShowcase() {
  return (
    <section id="services-preview" className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
      <motion.div variants={sectionFade} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full border border-[#E5E7EB]/90 bg-white/90 px-4 py-1 text-xs font-bold uppercase tracking-wide text-[#1e40af] shadow-sm backdrop-blur-sm">
            Capabilities
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0F172A] md:text-4xl">Premium digital services</h2>
          <p className="mt-3 text-sm font-medium leading-relaxed text-[#64748B] md:text-base">
            Full-stack delivery with a product mindset — architecture, interface polish, and measurable outcomes.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {SERVICES.map(({ title, description, Icon }, idx) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.45, delay: idx * 0.04, ease: [0.22, 1, 0.36, 1] as const }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-[#E5E7EB]/90 bg-white/95 p-6 shadow-[0_14px_44px_-22px_rgba(15,23,42,0.18)] backdrop-blur-sm transition-shadow duration-300 hover:border-[#E2E8F0] hover:shadow-[0_26px_56px_-22px_rgba(15,23,42,0.22)]"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br from-[#2563EB]/15 to-[#FACC15]/10 blur-2xl" />
              </div>
              <div className="relative flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] text-[#1E40AF] shadow-inner ring-1 ring-[#BFDBFE]/80">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
              </div>
              <h3 className="relative mt-5 text-lg font-bold tracking-tight text-[#0F172A]">{title}</h3>
              <p className="relative mt-2 text-sm font-medium leading-relaxed text-[#64748B]">{description}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
