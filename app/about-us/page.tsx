"use client";
// done
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, HeartHandshake, Rocket, Target } from "lucide-react";
import { MarketingShell } from "@/components/MarketingShell";
import { LogoMarquee } from "@/components/LogoMarquee";
import { primaryButtonClass, secondaryButtonClass } from "@/components/marketing/MarketingButtons";

const TIMELINE = [
  { year: "2022", title: "Studio foundations", detail: "Product-minded web delivery with ambitious UI polish." },
  { year: "2023", title: "SaaS lane opens", detail: "Marketplace experiments evolve into a curated catalog experience." },
  { year: "2024", title: "Automation scale", detail: "AI integrations and ops workflows become first-class offerings." },
  { year: "2026", title: "Multi-service platform", detail: "Agency-first positioning with SaaS, affiliate, and newsletter lanes." },
];

const TEAM = [
  { name: "Placeholder · Lead Engineer", role: "Architecture, Next.js, systems", src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop" },
  { name: "Placeholder · Product Design", role: "UI systems, motion, accessibility", src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" },
  { name: "Placeholder · Growth", role: "SEO, analytics, experimentation", src: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=600&auto=format&fit=crop" },
];

const STATS = [
  { label: "Projects shipped", value: "120+", hint: "Placeholder stat" },
  { label: "Median launch window", value: "6–10 wks", hint: "Depends on scope" },
  { label: "Tools curated", value: "Growing", hint: "SaaS marketplace lane" },
];

export default function AboutPage() {
  return (
    <MarketingShell>
      <main className="min-h-screen bg-[#F5F7FB] text-[#0F172A]">
        <section className="relative overflow-hidden py-16 md:py-20">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#E8EFFC] via-[#F5F7FB] to-[#F5F7FB]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-[1.05fr_0.95fr] md:gap-14 md:px-6">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
              <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Client-first digital agency — multi-lane by design.</h1>
              <p className="mt-4 max-w-xl text-base font-medium leading-relaxed text-[#64748B] md:text-lg">
                OFF Nerd builds modern web experiences and SaaS platforms, curates a secondary marketplace lane, and publishes finance-friendly affiliate drops — all under one cohesive yellow + blue visual system.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Link href="/contact-us" className={primaryButtonClass}>
                    Work with us
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Link href="/services" className={secondaryButtonClass}>
                    Services overview
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.06 }} className="relative">
              <div className="overflow-hidden rounded-[1.75rem] border border-[#E5E7EB]/90 bg-white/90 shadow-[0_26px_70px_-30px_rgba(15,23,42,0.22)] backdrop-blur-md">
                <div className="relative aspect-[5/4]">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                    alt="Team collaboration"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 45vw"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-16">
          <div className="grid gap-8 lg:grid-cols-3">
            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl border border-[#E5E7EB]/90 bg-white/95 p-8 shadow-[0_18px_48px_-22px_rgba(15,23,42,0.16)] backdrop-blur-md">
              <Target className="h-9 w-9 text-[#2563EB]" aria-hidden />
              <h2 className="mt-5 text-xl font-extrabold">Mission</h2>
              <p className="mt-3 text-sm font-medium leading-relaxed text-[#64748B]">
                Ship calm, scalable digital products with interfaces people remember — and instrumentation teams can trust.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl border border-[#E5E7EB]/90 bg-white/95 p-8 shadow-[0_18px_48px_-22px_rgba(15,23,42,0.16)] backdrop-blur-md">
              <Rocket className="h-9 w-9 text-[#CA8A04]" aria-hidden />
              <h2 className="mt-5 text-xl font-extrabold">Vision</h2>
              <p className="mt-3 text-sm font-medium leading-relaxed text-[#64748B]">
                Become the default partner for ambitious teams that want SaaS-grade UX without enterprise drag.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl border border-[#E5E7EB]/90 bg-white/95 p-8 shadow-[0_18px_48px_-22px_rgba(15,23,42,0.16)] backdrop-blur-md">
              <HeartHandshake className="h-9 w-9 text-[#1d4ed8]" aria-hidden />
              <h2 className="mt-5 text-xl font-extrabold">Philosophy</h2>
              <p className="mt-3 text-sm font-medium leading-relaxed text-[#64748B]">
                Clear proposals, crisp communication, and launches that don&apos;t ghost your analytics the week after ship.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="border-t border-[#E5E7EB]/80 bg-white/55 py-14 backdrop-blur-md md:py-16">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <h2 className="text-3xl font-extrabold md:text-4xl">Timeline</h2>
            <p className="mt-2 max-w-2xl text-sm font-medium text-[#64748B] md:text-base">Placeholder milestones — refine with your real story.</p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {TIMELINE.map((item, idx) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="rounded-3xl border border-[#E5E7EB]/90 bg-white/95 p-7 shadow-[0_16px_44px_-22px_rgba(15,23,42,0.14)]"
                >
                  <p className="text-xs font-extrabold uppercase tracking-wide text-[#2563EB]">{item.year}</p>
                  <h3 className="mt-2 text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-[#64748B]">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-16">
          <div className="grid gap-8 lg:grid-cols-3">
            {STATS.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="rounded-3xl border border-[#E5E7EB]/90 bg-gradient-to-br from-white to-[#F8FAFC] p-8 shadow-inner"
              >
                <p className="text-4xl font-extrabold tracking-tight text-[#0F172A]">{stat.value}</p>
                <p className="mt-2 text-sm font-bold text-[#334155]">{stat.label}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-[#64748B]">{stat.hint}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="border-t border-[#E5E7EB]/80 py-14 md:py-16">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-3xl font-extrabold md:text-4xl">Team placeholders</h2>
                <p className="mt-2 max-w-xl text-sm font-medium text-[#64748B] md:text-base">
                  Swap portraits and bios — layout stays responsive and premium out of the box.
                </p>
              </div>
            </div>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {TEAM.map((member, idx) => (
                <motion.article
                  key={member.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06 }}
                  className="overflow-hidden rounded-[1.75rem] border border-[#E5E7EB]/90 bg-white/95 shadow-[0_18px_48px_-22px_rgba(15,23,42,0.16)]"
                >
                  <div className="relative aspect-[4/5]">
                    <Image src={member.src} alt={member.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f172a]/35 via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold">{member.name}</h3>
                    <p className="mt-2 text-sm font-medium text-[#64748B]">{member.role}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <LogoMarquee />

        <section className="mx-auto max-w-7xl px-4 pb-16 md:px-6 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-[#E5E7EB]/90 bg-white/95 p-10 text-center shadow-[0_24px_64px_-28px_rgba(15,23,42,0.18)] backdrop-blur-md md:p-14"
          >
            <h2 className="text-3xl font-extrabold md:text-4xl">Technologies we lean on</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm font-medium text-[#64748B] md:text-base">
              React/Next foundations, Node ecosystems, cloud primitives, Stripe/OpenAI where appropriate — chosen for maintainability.
            </p>
            <div className="mt-8 flex justify-center">
              <Link href="/services" className={primaryButtonClass}>
                See how we apply them
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </section>
      </main>
    </MarketingShell>
  );
}
