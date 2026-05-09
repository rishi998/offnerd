"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Code2,
  Layers,
  LineChart,
  Megaphone,
  Palette,
  Plug,
  Search,
  Share2,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Wrench,
} from "lucide-react";
import type { Product } from "@/data/products";
import { MarketingShell } from "@/components/MarketingShell";
import { LogoDock } from "@/components/marketplace/LogoDock";
import { primaryButtonClass, secondaryButtonClass } from "@/components/marketing/MarketingButtons";

type ServiceLane = "build" | "growth" | "design" | "ops";

type ServiceAccent = "default" | "google" | "meta";

type ServiceCTA = { label: string; href: string; variant: "primary" | "secondary" };

type ServiceBlock = {
  id: string;
  title: string;
  summary: string;
  lane: ServiceLane;
  laneLabel: string;
  features: string[];
  benefits?: string[];
  process: string[];
  processLayout?: "list" | "timeline";
  image: string;
  imageAlt: string;
  accent: ServiceAccent;
  GridIcon: LucideIcon;
  showcaseIcons?: LucideIcon[];
  ctas?: readonly ServiceCTA[];
};

const CAMPAIGN_PROCESS = [
  "Strategy",
  "Audience Research",
  "Campaign Setup",
  "Creative Testing",
  "Optimization",
  "Scaling",
] as const;

const SERVICES: ServiceBlock[] = [
  {
    id: "web",
    title: "Web Development",
    summary: "Marketing sites, landing systems, and content platforms tuned for speed, accessibility, and SEO clarity.",
    lane: "build",
    laneLabel: "Build",
    features: ["Next.js app architecture", "Performance budgets & monitoring hooks", "Component systems & content modeling"],
    process: ["Audit & IA", "UI systems", "Build & integrate", "Launch hardening"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Developer workstation",
    accent: "default",
    GridIcon: Code2,
  },
  {
    id: "saas",
    title: "SaaS Development",
    summary: "Multi-tenant flows, billing-aware UX, admin dashboards, and integrations that scale securely.",
    lane: "build",
    laneLabel: "Build",
    features: ["Auth & roles", "Payments / Stripe patterns", "Observability-ready APIs"],
    process: ["Prototype slice", "Core modules", "Beta cohort", "Scale & iterate"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Analytics dashboards",
    accent: "default",
    GridIcon: Layers,
  },
  {
    id: "mobile",
    title: "Mobile Apps",
    summary: "Responsive-first web apps and hybrid-ready foundations — ship fast without sacrificing polish.",
    lane: "build",
    laneLabel: "Build",
    features: ["Adaptive layouts", "Offline-first patterns where needed", "Push & messaging integrations"],
    process: ["UX flows", "API contracts", "Implementation", "Store-ready checklist"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Mobile devices",
    accent: "default",
    GridIcon: Smartphone,
  },
  {
    id: "ai",
    title: "AI Solutions",
    summary: "LLM workflows, retrieval, guardrails, and automation that teams can operate — not demoware.",
    lane: "build",
    laneLabel: "Build",
    features: ["Prompt + tool orchestration", "Eval & logging patterns", "Human-in-the-loop UX"],
    process: ["Use-case framing", "Pilot path", "Safety review", "Production rollout"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Abstract AI visualization",
    accent: "default",
    GridIcon: Sparkles,
  },
  {
    id: "google-ads",
    title: "Google Ads Management",
    summary:
      "High-converting Google Search, Display, Shopping, YouTube, and Performance Max campaigns optimized for scalable business growth.",
    lane: "growth",
    laneLabel: "Growth",
    features: [
      "Search Ads",
      "Display Campaigns",
      "YouTube Ads",
      "Shopping Ads",
      "Performance Max",
      "Keyword Research",
      "Conversion Tracking",
      "ROI Optimization",
      "Landing Page Optimization",
      "Audience Retargeting",
    ],
    benefits: ["Instant traffic", "Lead generation", "Scalable ROI", "Purchase-intent targeting"],
    process: [...CAMPAIGN_PROCESS],
    processLayout: "timeline",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Marketing analytics dashboards",
    accent: "google",
    GridIcon: BarChart3,
    showcaseIcons: [BarChart3, Search, Target, LineChart],
    ctas: [
      { label: "Start Campaign", href: "/contact-us", variant: "primary" },
      { label: "Get Free Consultation", href: "/contact-us", variant: "secondary" },
      { label: "Request Audit", href: "/contact-us", variant: "secondary" },
      { label: "Scale My Business", href: "/contact-us", variant: "primary" },
    ],
  },
  {
    id: "meta-ads",
    title: "Meta & Facebook Ads",
    summary: "Performance-focused Meta advertising campaigns designed to increase leads, sales, reach, and customer acquisition.",
    lane: "growth",
    laneLabel: "Growth",
    features: [
      "Facebook Ads",
      "Instagram Ads",
      "Retargeting Funnels",
      "Audience Targeting",
      "Pixel Integration",
      "Creative Optimization",
      "Lead Generation Campaigns",
      "Conversion Campaigns",
      "A/B Testing",
      "Performance Analytics",
    ],
    benefits: ["Audience growth", "Social conversion", "Retargeting", "Brand awareness"],
    process: [...CAMPAIGN_PROCESS],
    processLayout: "timeline",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Social media campaign workspace",
    accent: "meta",
    GridIcon: Megaphone,
    showcaseIcons: [Megaphone, Share2, Users, TrendingUp],
    ctas: [
      { label: "Start Campaign", href: "/contact-us", variant: "primary" },
      { label: "Get Free Consultation", href: "/contact-us", variant: "secondary" },
      { label: "Request Audit", href: "/contact-us", variant: "secondary" },
      { label: "Scale My Business", href: "/contact-us", variant: "primary" },
    ],
  },
  {
    id: "api",
    title: "API Integrations",
    summary: "Connect CRMs, payments, analytics, and internal tools with resilient sync and clear failure modes.",
    lane: "build",
    laneLabel: "Build",
    features: ["Webhook design", "Retries & idempotency", "Audit trails"],
    process: ["Map systems", "Sandbox integrations", "Production cutover", "Playbooks"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Server room lights",
    accent: "default",
    GridIcon: Plug,
  },
  {
    id: "commerce",
    title: "E‑commerce",
    summary: "Catalog UX, checkout resilience, and merchandising surfaces that protect conversion.",
    lane: "build",
    laneLabel: "Build",
    features: ["Cart & payments UX", "Inventory visibility patterns", "SEO-ready PDP structure"],
    process: ["Funnel diagnosis", "Design system", "Implementation", "Experimentation hooks"],
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29fb?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Shopping bags",
    accent: "default",
    GridIcon: ShoppingBag,
  },
  {
    id: "crm",
    title: "CRM Systems",
    summary: "Pipelines, automation, and bespoke internal tooling aligned to how your team actually sells.",
    lane: "build",
    laneLabel: "Build",
    features: ["Lead routing", "Reporting views", "Integration glue"],
    process: ["Workflow interviews", "Schema design", "Rollout", "Training"],
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Team planning session",
    accent: "default",
    GridIcon: Users,
  },
  {
    id: "ux",
    title: "UI/UX Design",
    summary: "Product-ready visuals with motion, accessibility, and engineering handoff baked in.",
    lane: "design",
    laneLabel: "Design",
    features: ["Design tokens", "Interactive prototypes", "QA-ready specs"],
    process: ["Discovery workshops", "Concepts", "Hi-fi systems", "Ship support"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Designer desk",
    accent: "default",
    GridIcon: Palette,
  },
  {
    id: "maintenance",
    title: "Maintenance & Support",
    summary: "Monitoring, upgrades, and pragmatic iteration retainers — keep releases calm as you grow.",
    lane: "ops",
    laneLabel: "Ops",
    features: ["Incident runbooks", "Dependency hygiene", "Performance snapshots"],
    process: ["Baseline audit", "Roadmap", "Monthly rhythm", "Quarterly reviews"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Team reviewing charts",
    accent: "default",
    GridIcon: Wrench,
  },
];

const PLATFORM_MARKS: readonly { logoKey: string; label: string }[] = [
  { logoKey: "googleads", label: "Google Ads" },
  { logoKey: "meta", label: "Meta" },
  { logoKey: "instagram", label: "Instagram" },
  { logoKey: "facebook", label: "Facebook" },
  { logoKey: "youtube", label: "YouTube" },
  { logoKey: "googleanalytics", label: "Analytics" },
  { logoKey: "googletagmanager", label: "Tag Manager" },
];

function accentImageOverlay(accent: ServiceAccent): string {
  if (accent === "google") {
    return "from-[#4285F4]/18 via-transparent to-[#EA4335]/12";
  }
  if (accent === "meta") {
    return "from-[#0668E1]/20 via-[#0084FF]/8 to-[#0668E1]/14";
  }
  return "from-[#2563EB]/10 via-transparent to-[#FACC15]/10";
}

function timelineConnectorClass(accent: ServiceAccent): string {
  if (accent === "google") {
    return "from-[#4285F4]/35 via-[#2563EB]/25 to-[#EA4335]/25";
  }
  if (accent === "meta") {
    return "from-[#0668E1]/40 via-[#38BDF8]/25 to-[#0668E1]/30";
  }
  return "from-[#2563EB]/30 via-[#93C5FD]/20 to-[#FACC15]/28";
}

function ProcessTimeline({ steps, accent }: { steps: readonly string[]; accent: ServiceAccent }) {
  const connector = timelineConnectorClass(accent);
  return (
    <div className="relative">
      <div
        aria-hidden
        className={`pointer-events-none absolute left-[6%] right-[6%] top-[1.35rem] z-0 hidden h-[3px] rounded-full bg-gradient-to-r opacity-90 blur-[0.5px] lg:block ${connector}`}
      />
      <ul className="relative z-[1] grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {steps.map((step, idx) => (
          <motion.li
            key={step}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
          >
            <div className="flex h-full flex-col rounded-2xl border border-[#E5E7EB]/90 bg-white/80 p-4 text-center shadow-[0_14px_40px_-22px_rgba(15,23,42,0.16)] backdrop-blur-md transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_44px_-20px_rgba(37,99,235,0.12)]">
              <span className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#FACC15]/95 text-[0.72rem] font-extrabold text-[#854D0E] shadow-[0_6px_16px_-8px_rgba(234,179,8,0.45)] ring-2 ring-white/70">
                {idx + 1}
              </span>
              <p className="text-xs font-semibold leading-snug text-[#334155] md:text-[0.82rem]">{step}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

function ShinePrimaryLink({ href, className, children }: { href: string; className?: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className={`${primaryButtonClass} relative overflow-hidden ${className ?? ""}`}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.22] to-transparent opacity-90"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/2 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-[transform,opacity] duration-700 ease-out group-hover:translate-x-[220%] group-hover:opacity-100"
      />
      <span className="relative z-[1] inline-flex items-center gap-2">{children}</span>
    </Link>
  );
}

function ServiceSection({ service, index }: { service: ServiceBlock; index: number }) {
  const reverse = index % 2 === 1;
  const overlay = accentImageOverlay(service.accent);
  const processIsTimeline = service.processLayout === "timeline";

  const imageBlock = (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-[#E5E7EB]/90 bg-white/90 shadow-[0_24px_60px_-28px_rgba(15,23,42,0.2)] backdrop-blur-md">
      <div className="relative aspect-[5/4]">
        <Image src={service.image} alt={service.imageAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        <div className={`pointer-events-none absolute inset-0 bg-gradient-to-tr ${overlay}`} />
      </div>
    </div>
  );

  const showcaseRow =
    service.showcaseIcons && service.showcaseIcons.length > 0 ? (
      <div className="mt-5 flex flex-wrap gap-2">
        {service.showcaseIcons.map((Icon, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 rounded-2xl border border-[#E5E7EB]/90 bg-white/85 px-3 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.75),0_8px_22px_-14px_rgba(15,23,42,0.1)] backdrop-blur-sm"
          >
            <Icon className="h-4 w-4 text-[#1d4ed8]" strokeWidth={2} aria-hidden />
          </span>
        ))}
      </div>
    ) : null;

  const processBlock = (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-wide text-[#0F172A]">
        {processIsTimeline ? "Campaign workflow" : "Process"}
      </h3>
      <div className="mt-4">
        {processIsTimeline ? (
          <ProcessTimeline steps={service.process} accent={service.accent} />
        ) : (
          <ol className="space-y-3">
            {service.process.map((step, idx) => (
              <li key={step} className="flex gap-3 text-sm font-medium text-[#334155]">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FACC15] text-[0.7rem] font-bold text-[#854D0E]">
                  {idx + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );

  const defaultCTAs = (
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
  );

  const adsCTAs =
    service.ctas && service.ctas.length > 0 ? (
      <div className="mt-10 flex flex-wrap gap-3">
        {service.ctas.map((cta) =>
          cta.variant === "primary" ? (
            <motion.div key={cta.label} whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }}>
              <ShinePrimaryLink href={cta.href}>
                {cta.label}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </ShinePrimaryLink>
            </motion.div>
          ) : (
            <motion.div key={cta.label} whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link href={cta.href} className={secondaryButtonClass}>
                {cta.label}
              </Link>
            </motion.div>
          ),
        )}
      </div>
    ) : (
      defaultCTAs
    );

  const featuresBenefitsGrid = (
    <div className={`mt-8 grid gap-8 ${service.benefits?.length ? "lg:grid-cols-2" : ""}`}>
      <div>
        <h3 className="text-sm font-bold uppercase tracking-wide text-[#0F172A]">Key features</h3>
        <ul className="mt-4 space-y-3">
          {service.features.map((f) => (
            <li key={f} className="flex gap-2 text-sm font-medium text-[#334155]">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#2563EB]" aria-hidden />
              {f}
            </li>
          ))}
        </ul>
      </div>
      {service.benefits?.length ? (
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-[#0F172A]">Benefits</h3>
          <ul className="mt-4 space-y-3">
            {service.benefits.map((b) => (
              <li key={b} className="flex gap-2 text-sm font-medium text-[#334155]">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#CA8A04]" aria-hidden />
                {b}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );

  const copyBlock = (
    <div>
      <span className="inline-flex rounded-full border border-[#E5E7EB]/90 bg-white/90 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-[#1d4ed8] shadow-sm backdrop-blur-sm">
        {service.laneLabel} · Service detail
      </span>
      <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0F172A] md:text-4xl">{service.title}</h2>
      <p className="mt-4 text-sm font-medium leading-relaxed text-[#64748B] md:text-base">{service.summary}</p>
      {showcaseRow}
      {featuresBenefitsGrid}
      <div className="mt-10">{processBlock}</div>
      {adsCTAs}
    </div>
  );

  return (
    <motion.section
      id={service.id}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55 }}
      className="scroll-mt-28 border-t border-[#E5E7EB]/80 py-16 md:py-20"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 md:grid-cols-2 md:gap-14 md:px-6">
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

function ServicesGridCard({ service }: { service: ServiceBlock }) {
  const Icon = service.GridIcon;
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45 }}>
      <Link
        href={`#${service.id}`}
        className="group/card flex h-full flex-col rounded-2xl border border-[#E5E7EB]/90 bg-white/90 p-5 shadow-[0_14px_44px_-22px_rgba(15,23,42,0.14)] backdrop-blur-md transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-[#BFDBFE]/90 hover:shadow-[0_22px_56px_-24px_rgba(37,99,235,0.14)]"
      >
        <div className="flex items-start gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-[#E5E7EB]/80 bg-gradient-to-br from-white to-[#EFF6FF]/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] transition-transform duration-300 group-hover/card:scale-[1.04]">
            <Icon className="h-5 w-5 text-[#1d4ed8]" strokeWidth={2} aria-hidden />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[0.65rem] font-extrabold uppercase tracking-wide text-[#64748B]">{service.laneLabel}</p>
            <h3 className="mt-1 text-base font-bold tracking-tight text-[#0F172A]">{service.title}</h3>
            <p className="mt-2 line-clamp-2 text-xs font-medium leading-relaxed text-[#64748B]">{service.summary}</p>
          </div>
        </div>
        <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-[#2563EB] transition-transform duration-300 group-hover/card:translate-x-0.5">
          View detail
          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
        </span>
      </Link>
    </motion.div>
  );
}

function PlatformsWeWorkWith() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl border border-[#E5E7EB]/90 bg-white/90 p-8 shadow-[0_24px_64px_-28px_rgba(15,23,42,0.16)] backdrop-blur-md md:p-12"
      >
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full border border-[#E5E7EB]/90 bg-[#F8FAFC]/90 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-[#1d4ed8]">
            Paid media stack
          </span>
          <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-[#0F172A] md:text-3xl">Platforms we work with</h2>
          <p className="mt-3 text-sm font-medium text-[#64748B] md:text-base">
            Authentic brand marks in glass docks — tracking, tagging, and paid surfaces wired for performance.
          </p>
        </div>
        <div className="mx-auto mt-10 flex max-w-5xl flex-wrap items-start justify-center gap-x-10 gap-y-10 md:gap-x-12">
          {PLATFORM_MARKS.map((p, idx) => {
            const product: Pick<Product, "id" | "name" | "logo" | "logoKey"> = {
              id: `_plat-${p.logoKey}`,
              name: p.label,
              logo: "·",
              logoKey: p.logoKey,
            };
            return (
              <div key={p.logoKey} className="flex w-[7.5rem] flex-col items-center gap-3 sm:w-[8rem]">
                <LogoDock product={product} size="md" variant="light" priority={idx < 4} hoverLift />
                <span className="text-center text-[0.7rem] font-semibold text-[#64748B]">{p.label}</span>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
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
                Engineering, AI, automation, and performance marketing — modular squads, transparent milestones, and premium UI craft across every
                engagement.
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

        <section className="mx-auto max-w-7xl px-4 pb-4 md:px-6 md:pb-6">
          <p className="max-w-3xl text-sm font-semibold leading-relaxed text-[#64748B]">
            <span className="font-extrabold text-[#0F172A]">{SERVICES.length} delivery lanes</span> — build products, automate operations, and scale
            paid acquisition. Jump to any lane below; each deep-dive includes scope signals, workflow, and CTAs.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {SERVICES.map((service) => (
              <ServicesGridCard key={service.id} service={service} />
            ))}
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-0">
          {SERVICES.map((service, idx) => (
            <ServiceSection key={service.id} service={service} index={idx} />
          ))}
        </div>

        <PlatformsWeWorkWith />

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
