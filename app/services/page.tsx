"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { MarketingShell } from "@/components/MarketingShell";
import { primaryButtonClass, secondaryButtonClass } from "@/components/marketing/MarketingButtons";

type ServiceBlock = {
  id: string;
  title: string;
  summary: string;
  features: string[];
  process: string[];
  image: string;
  imageAlt: string;
};

const SERVICES: ServiceBlock[] = [
  {
    id: "web",
    title: "Web Development",
    summary: "Marketing sites, landing systems, and content platforms tuned for speed, accessibility, and SEO clarity.",
    features: ["Next.js app architecture", "Performance budgets & monitoring hooks", "Component systems & content modeling"],
    process: ["Audit & IA", "UI systems", "Build & integrate", "Launch hardening"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Developer workstation",
  },
  {
    id: "saas",
    title: "SaaS Development",
    summary: "Multi-tenant flows, billing-aware UX, admin dashboards, and integrations that scale securely.",
    features: ["Auth & roles", "Payments / Stripe patterns", "Observability-ready APIs"],
    process: ["Prototype slice", "Core modules", "Beta cohort", "Scale & iterate"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Analytics dashboards",
  },
  {
    id: "mobile",
    title: "Mobile Apps",
    summary: "Responsive-first web apps and hybrid-ready foundations — ship fast without sacrificing polish.",
    features: ["Adaptive layouts", "Offline-first patterns where needed", "Push & messaging integrations"],
    process: ["UX flows", "API contracts", "Implementation", "Store-ready checklist"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Mobile devices",
  },
  {
    id: "ai",
    title: "AI Solutions",
    summary: "LLM workflows, retrieval, guardrails, and automation that teams can operate — not demoware.",
    features: ["Prompt + tool orchestration", "Eval & logging patterns", "Human-in-the-loop UX"],
    process: ["Use-case framing", "Pilot path", "Safety review", "Production rollout"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Abstract AI visualization",
  },
  {
    id: "api",
    title: "API Integrations",
    summary: "Connect CRMs, payments, analytics, and internal tools with resilient sync and clear failure modes.",
    features: ["Webhook design", "Retries & idempotency", "Audit trails"],
    process: ["Map systems", "Sandbox integrations", "Production cutover", "Playbooks"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Server room lights",
  },
  {
    id: "commerce",
    title: "E‑commerce",
    summary: "Catalog UX, checkout resilience, and merchandising surfaces that protect conversion.",
    features: ["Cart & payments UX", "Inventory visibility patterns", "SEO-ready PDP structure"],
    process: ["Funnel diagnosis", "Design system", "Implementation", "Experimentation hooks"],
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29fb?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Shopping bags",
  },
  {
    id: "crm",
    title: "CRM Systems",
    summary: "Pipelines, automation, and bespoke internal tooling aligned to how your team actually sells.",
    features: ["Lead routing", "Reporting views", "Integration glue"],
    process: ["Workflow interviews", "Schema design", "Rollout", "Training"],
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Team planning session",
  },
  {
    id: "ux",
    title: "UI/UX Design",
    summary: "Product-ready visuals with motion, accessibility, and engineering handoff baked in.",
    features: ["Design tokens", "Interactive prototypes", "QA-ready specs"],
    process: ["Discovery workshops", "Concepts", "Hi-fi systems", "Ship support"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Designer desk",
  },
  {
    id: "maintenance",
    title: "Maintenance & Support",
    summary: "Monitoring, upgrades, and pragmatic iteration retainers — keep releases calm as you grow.",
    features: ["Incident runbooks", "Dependency hygiene", "Performance snapshots"],
    process: ["Baseline audit", "Roadmap", "Monthly rhythm", "Quarterly reviews"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Team reviewing charts",
  },
];

function ServiceSection({ service, index }: { service: ServiceBlock; index: number }) {
  const reverse = index % 2 === 1;

  const imageBlock = (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-[#E5E7EB]/90 bg-white/90 shadow-[0_24px_60px_-28px_rgba(15,23,42,0.2)] backdrop-blur-md">
      <div className="relative aspect-[5/4]">
        <Image src={service.image} alt={service.imageAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#2563EB]/10 via-transparent to-[#FACC15]/10" />
      </div>
    </div>
  );

  const copyBlock = (
    <div>
          <span className="inline-flex rounded-full border border-[#E5E7EB]/90 bg-white/90 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-[#1d4ed8] shadow-sm backdrop-blur-sm">
            Service detail
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0F172A] md:text-4xl">{service.title}</h2>
          <p className="mt-4 text-sm font-medium leading-relaxed text-[#64748B] md:text-base">{service.summary}</p>

          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-[#0F172A]">What you get</h3>
              <ul className="mt-4 space-y-3">
                {service.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm font-medium text-[#334155]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#2563EB]" aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-[#0F172A]">Process</h3>
              <ol className="mt-4 space-y-3">
                {service.process.map((step, idx) => (
                  <li key={step} className="flex gap-3 text-sm font-medium text-[#334155]">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FACC15] text-[0.7rem] font-bold text-[#854D0E]">
                      {idx + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link href="/contact-us" className={primaryButtonClass}>
                Request proposal
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link href="/saas" className={secondaryButtonClass}>
                Browse SaaS marketplace
              </Link>
            </motion.div>
          </div>
        </div>
  );

  return (
    <motion.section
      id={service.id}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55 }}
      className="scroll-mt-28 border-t border-[#E5E7EB]/80 py-16 md:py-20"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2 md:gap-14 md:px-6">
        {reverse ? (
          <>
            {copyBlock}
            {imageBlock}
          </>
        ) : (
          <>
            {imageBlock}
            {copyBlock}
          </>
        )}
      </div>
    </motion.section>
  );
}

export default function ServicesPage() {
  return (
    <MarketingShell>
      <main className="min-h-screen bg-[#F5F7FB] text-[#0F172A]">
        <section className="relative overflow-hidden py-14 md:py-20">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#E8EFFC] via-[#F5F7FB] to-[#F5F7FB]" />
          <div aria-hidden className="pointer-events-none absolute -top-24 right-[10%] h-72 w-72 rounded-full bg-[#FACC15]/16 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
              <h1 className="text-4xl font-extrabold tracking-tight text-[#0F172A] md:text-5xl">Services built for serious launches</h1>
              <p className="mt-4 text-base font-medium leading-relaxed text-[#64748B] md:text-lg">
                From discovery to ongoing support — modular squads, transparent milestones, and premium UI craft across every engagement.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Link href="/contact-us" className={primaryButtonClass}>
                    Start a project
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Link href="/direct-chat" className={secondaryButtonClass}>
                    Prefer chat?
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 pb-6 md:px-6">
          <p className="text-sm font-semibold text-[#64748B]">
            Nine delivery lanes — each section includes scope signals, a lightweight process, and a clear CTA.
          </p>
        </div>

        <div className="mx-auto max-w-7xl px-0">
          {SERVICES.map((service, idx) => (
            <ServiceSection key={service.id} service={service} index={idx} />
          ))}
        </div>

        <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            className="rounded-3xl border border-[#E5E7EB]/90 bg-white/95 p-10 text-center shadow-[0_24px_64px_-28px_rgba(15,23,42,0.18)] backdrop-blur-md md:p-14"
          >
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Want a tailored scope?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm font-medium text-[#64748B] md:text-base">
              Send timelines, links, and constraints — we&apos;ll respond with options, not jargon.
            </p>
            <motion.div className="mt-8 flex justify-center" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link href="/contact-us" className={primaryButtonClass}>
                Contact the team
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </main>
    </MarketingShell>
  );
}
