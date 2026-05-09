"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Bot, MessageCircle, Zap } from "lucide-react";
import { MarketingShell } from "@/components/MarketingShell";
import { primaryButtonClass, secondaryButtonClass } from "@/components/marketing/MarketingButtons";
import { WHATSAPP_GROUP_URL, whatsappDmHref } from "@/lib/site";

export default function DirectChatPage() {
  return (
    <MarketingShell>
      <main className="min-h-screen bg-[#F5F7FB] text-[#0F172A]">
        <section className="relative overflow-hidden py-16 md:py-20">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#E8EFFC] via-[#F5F7FB] to-[#F5F7FB]" />
          <div aria-hidden className="pointer-events-none absolute right-[12%] top-12 h-80 w-80 rounded-full bg-[#2563EB]/12 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="max-w-3xl">
              <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Direct chat — fast answers, zero friction.</h1>
              <p className="mt-4 text-base font-medium leading-relaxed text-[#64748B] md:text-lg">
                WhatsApp for instant outreach, a lightweight inquiry form for structured briefs, and quick-response cards for common asks.
              </p>
            </motion.div>

            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              <motion.a
                href={whatsappDmHref("Hi OFF Nerd — I’d like to chat about a project.")}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                whileHover={{ y: -6 }}
                className="rounded-[1.75rem] border border-[#86EFAC]/70 bg-[#F0FDF4]/90 p-8 shadow-[0_22px_56px_-26px_rgba(22,163,74,0.22)] backdrop-blur-md lg:col-span-1"
              >
                <MessageCircle className="h-10 w-10 text-[#128C7E]" aria-hidden />
                <h2 className="mt-6 text-2xl font-extrabold">WhatsApp connect</h2>
                <p className="mt-3 text-sm font-medium leading-relaxed text-[#64748B]">
                  Tap through with a prefilled message — ideal for mobile-first clients and fast clarifications.
                </p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-[#15803D]">
                  Open WhatsApp
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </span>
              </motion.a>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="rounded-[1.75rem] border border-[#E5E7EB]/90 bg-white/95 p-8 shadow-[0_22px_56px_-26px_rgba(15,23,42,0.16)] backdrop-blur-md lg:col-span-2"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-extrabold">Instant inquiry</h2>
                    <p className="mt-2 max-w-xl text-sm font-medium text-[#64748B]">
                      Mirror your `/contact-us` flow — this variant is tuned for chat-first visitors.
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#BFDBFE]/80 bg-[#EFF6FF] px-4 py-1.5 text-xs font-extrabold uppercase tracking-wide text-[#1d4ed8]">
                    <Bot className="h-4 w-4" aria-hidden />
                    Human replies
                  </span>
                </div>

                <form className="mt-8 grid gap-4 md:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
                  <label className="block text-sm font-bold text-[#334155] md:col-span-2">
                    What do you need?
                    <input className="mt-2 w-full rounded-2xl border border-[#E5E7EB]/90 bg-white px-4 py-3 text-sm font-semibold outline-none ring-1 ring-transparent focus:ring-[#2563EB]/35" placeholder="e.g., SaaS MVP in 8 weeks" />
                  </label>
                  <label className="block text-sm font-bold text-[#334155]">
                    Email
                    <input type="email" autoComplete="email" className="mt-2 w-full rounded-2xl border border-[#E5E7EB]/90 bg-white px-4 py-3 text-sm font-semibold outline-none ring-1 ring-transparent focus:ring-[#2563EB]/35" placeholder="you@company.com" />
                  </label>
                  <label className="block text-sm font-bold text-[#334155]">
                    Budget band
                    <input className="mt-2 w-full rounded-2xl border border-[#E5E7EB]/90 bg-white px-4 py-3 text-sm font-semibold outline-none ring-1 ring-transparent focus:ring-[#2563EB]/35" placeholder="Optional" />
                  </label>
                  <label className="block text-sm font-bold text-[#334155] md:col-span-2">
                    Notes
                    <textarea rows={4} className="mt-2 w-full rounded-2xl border border-[#E5E7EB]/90 bg-white px-4 py-3 text-sm font-semibold outline-none ring-1 ring-transparent focus:ring-[#2563EB]/35" placeholder="Links, deadlines, stakeholders..." />
                  </label>
                  <div className="md:col-span-2">
                    <motion.button type="submit" whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }} className={primaryButtonClass}>
                      Send via form (placeholder)
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Need SaaS deals?",
                  body: "Jump to the marketplace lane with search + filters intact.",
                  href: "/saas",
                  Icon: Zap,
                },
                {
                  title: "Prefer email?",
                  body: "Use the full contact page for map + formal details.",
                  href: "/contact-us",
                  Icon: ArrowRight,
                },
                {
                  title: "Community WhatsApp",
                  body: "Join the group for drops, announcements, and peer chatter.",
                  href: WHATSAPP_GROUP_URL,
                  Icon: MessageCircle,
                  external: true,
                },
              ].map((card, idx) => {
                const Icon = card.Icon;
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.12 + idx * 0.05 }}
                    whileHover={{ y: -6 }}
                    className="rounded-3xl border border-[#E5E7EB]/90 bg-white/95 p-7 shadow-[0_18px_48px_-22px_rgba(15,23,42,0.14)] backdrop-blur-md"
                  >
                    <Icon className="h-8 w-8 text-[#2563EB]" aria-hidden />
                    <h3 className="mt-5 text-lg font-extrabold">{card.title}</h3>
                    <p className="mt-2 text-sm font-medium text-[#64748B]">{card.body}</p>
                    <Link
                      href={card.href}
                      target={card.external ? "_blank" : undefined}
                      rel={card.external ? "noopener noreferrer" : undefined}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[#1d4ed8]"
                    >
                      Continue
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }} className="mt-12 rounded-[1.75rem] border border-[#E5E7EB]/90 bg-gradient-to-br from-white to-[#F8FAFC] p-8 shadow-inner md:p-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-wide text-[#64748B]">Floating chat UI</p>
                  <p className="mt-2 text-xl font-extrabold">You&apos;ll see the global CTA on every marketing page</p>
                  <p className="mt-2 max-w-2xl text-sm font-medium text-[#64748B]">
                    It mirrors this lane — swap destinations anytime (e.g., Crisp, Intercom, or Cal.com).
                  </p>
                </div>
                <Link href="/services" className={secondaryButtonClass}>
                  Explore services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </MarketingShell>
  );
}
