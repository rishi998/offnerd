"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Bell, BookOpen, Cpu, LineChart, Sparkles } from "lucide-react";
import { MarketingShell } from "@/components/MarketingShell";
import { primaryButtonClass, secondaryButtonClass } from "@/components/marketing/MarketingButtons";

const TOPICS = [
  { title: "Ship logs", description: "What we launched, learned, and optimized across client builds.", Icon: Cpu },
  { title: "SaaS deals", description: "Shortlists from the marketplace — renewals, bundles, and drops.", Icon: LineChart },
  { title: "Finance picks", description: "Affiliate-safe summaries aligned with the Affiliate Corner lane.", Icon: BookOpen },
];

const PREVIEWS = [
  {
    title: "Issue 014 · Automation kits",
    excerpt: "Composable workflows, webhook hygiene, and AI guardrails we actually ship.",
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
    alt: "Team collaborating",
  },
  {
    title: "Issue 013 · SaaS pricing UX",
    excerpt: "Trials, upgrades, and upgrade guilt — patterns that convert without noise.",
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop",
    alt: "Meeting notes",
  },
];

export default function NewsletterPage() {
  return (
    <MarketingShell>
      <main className="min-h-screen bg-[#F5F7FB] text-[#0F172A]">
        <section className="relative overflow-hidden py-16 md:py-20">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#E8EFFC] via-[#F5F7FB] to-[#F5F7FB]" />
          <div aria-hidden className="pointer-events-none absolute right-[8%] top-10 h-72 w-72 rounded-full bg-[#FACC15]/18 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-[1.05fr_0.95fr] md:gap-14 md:px-6">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB]/90 bg-white/85 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-[#1d4ed8] shadow-sm backdrop-blur-md">
                <Bell className="h-3.5 w-3.5 text-[#CA8A04]" aria-hidden />
                Newsletter
              </span>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-5xl">Ideas, launches, and curated deals — weekly.</h1>
              <p className="mt-4 max-w-xl text-base font-medium leading-relaxed text-[#64748B] md:text-lg">
                Tech updates, SaaS marketplace highlights, build notes, and finance-forward affiliate summaries — designed to scan in minutes.
              </p>

              <form
                className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <label htmlFor="news-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="news-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  className="w-full rounded-full border border-[#E5E7EB]/90 bg-white/95 px-5 py-3.5 text-sm font-semibold text-[#0F172A] shadow-[0_14px_44px_-18px_rgba(15,23,42,0.14)] outline-none ring-1 ring-transparent placeholder:text-[#94A3B8] focus:ring-[#2563EB]/35"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-full bg-gradient-to-r from-[#2563EB] via-[#1d4ed8] to-[#1e40af] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_14px_40px_-10px_rgba(37,99,235,0.55)]"
                >
                  Subscribe
                </motion.button>
              </form>
              <p className="mt-4 text-xs font-semibold text-[#64748B]">No spam — unsubscribe anytime. Placeholder form until backend wiring.</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Link href="/saas" className={secondaryButtonClass}>
                    Browse SaaS marketplace
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Link href="/affiliate-corner" className={secondaryButtonClass}>
                    Affiliate corner
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.06 }} className="relative">
              <div className="overflow-hidden rounded-[1.75rem] border border-[#E5E7EB]/90 bg-white/90 shadow-[0_26px_70px_-30px_rgba(15,23,42,0.22)] backdrop-blur-md">
                <div className="relative aspect-[5/4]">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                    alt="Newsletter creative workspace"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 45vw"
                    priority
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#2563EB]/12 via-transparent to-[#FACC15]/12" />
                </div>
              </div>
              <motion.div
                aria-hidden
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-7 -left-4 rounded-2xl border border-[#E5E7EB]/90 bg-white/95 px-4 py-3 text-xs font-bold text-[#0F172A] shadow-[0_18px_48px_-20px_rgba(15,23,42,0.22)] backdrop-blur-md"
              >
                <span className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[#CA8A04]" aria-hidden />
                  Floating graphics on
                </span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-16">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Why subscribe</h2>
            <p className="mt-3 text-sm font-medium text-[#64748B] md:text-base">
              One lane for builders and buyers — tight editing, generous whitespace, and actionable links.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TOPICS.map(({ title, description, Icon }, idx) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-[#E5E7EB]/90 bg-white/95 p-7 shadow-[0_18px_48px_-22px_rgba(15,23,42,0.16)] backdrop-blur-md"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] text-[#1E40AF] shadow-inner ring-1 ring-[#BFDBFE]/80">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm font-medium leading-relaxed text-[#64748B]">{description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="border-t border-[#E5E7EB]/80 bg-white/60 py-14 backdrop-blur-md md:py-16">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Previous previews</h2>
                <p className="mt-2 max-w-xl text-sm font-medium text-[#64748B] md:text-base">
                  Placeholder issues — swap titles, excerpts, and imagery when your CMS connects.
                </p>
              </div>
              <Link href="/contact-us" className={`${primaryButtonClass} self-start`}>
                Sponsor an issue
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              {PREVIEWS.map((issue, idx) => (
                <motion.article
                  key={issue.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06 }}
                  className="overflow-hidden rounded-[1.75rem] border border-[#E5E7EB]/90 bg-white/95 shadow-[0_22px_56px_-26px_rgba(15,23,42,0.18)] backdrop-blur-md"
                >
                  <div className="relative aspect-[16/9]">
                    <Image src={issue.src} alt={issue.alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f172a]/35 via-transparent to-transparent" />
                  </div>
                  <div className="p-7">
                    <h3 className="text-xl font-bold">{issue.title}</h3>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-[#64748B]">{issue.excerpt}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-[#E5E7EB]/90 bg-white/95 p-10 text-center shadow-[0_24px_64px_-28px_rgba(15,23,42,0.18)] backdrop-blur-md md:p-14"
          >
            <h2 className="text-3xl font-extrabold md:text-4xl">Topics we cover</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm font-medium text-[#64748B] md:text-base">
              Product craft, SaaS economics, automation patterns, performance checklists, and ethical affiliate notes.
            </p>
            <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2">
              {["Next.js", "Design systems", "Payments", "SEO", "CRM", "AI tooling", "Lifecycle email", "Analytics"].map((tag) => (
                <span key={tag} className="rounded-full border border-[#E5E7EB]/90 bg-white px-4 py-2 text-xs font-bold text-[#475569] shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </section>
      </main>
    </MarketingShell>
  );
}
