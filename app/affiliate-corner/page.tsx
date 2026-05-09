"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BadgePercent, Building2, CreditCard, Gift, Scale, ShieldCheck, Sparkles } from "lucide-react";
import { MarketingShell } from "@/components/MarketingShell";
import { primaryButtonClass, secondaryButtonClass } from "@/components/marketing/MarketingButtons";

type CardOffer = {
  issuer: string;
  tier: string;
  perks: string[];
  apr: string;
  badge: string;
  accent: string;
};

const FEATURED_CARDS: CardOffer[] = [
  {
    issuer: "HDFC Bank",
    tier: "Travel Metal (placeholder)",
    perks: ["Lounge access", "Accelerated miles", "Renewal fee waiver milestones"],
    apr: "APR varies · T&Cs apply",
    badge: "Featured",
    accent: "from-[#7C3AED]/18 to-[#2563EB]/12",
  },
  {
    issuer: "ICICI Bank",
    tier: "Cashback Plus (placeholder)",
    perks: ["Flat cashback buckets", "Brand milestones", "Smart statements"],
    apr: "APR varies · T&Cs apply",
    badge: "Popular",
    accent: "from-[#FACC15]/22 to-[#2563EB]/10",
  },
  {
    issuer: "Axis Bank",
    tier: "Rewards Edge (placeholder)",
    perks: ["Edge rewards multipliers", "Dining weekends", "Fuel surcharge insight"],
    apr: "APR varies · T&Cs apply",
    badge: "Trending",
    accent: "from-[#22C55E]/14 to-[#2563EB]/12",
  },
];

const BANKS = ["HDFC", "ICICI", "Axis", "SBI", "Amex", "IndusInd", "Kotak"] as const;

export default function AffiliateCornerPage() {
  return (
    <MarketingShell>
      <main className="min-h-screen bg-[#060b16] text-white">
        <section className="relative overflow-hidden py-16 md:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(250,204,21,0.14),transparent_42%),radial-gradient(circle_at_85%_10%,rgba(37,99,235,0.35),transparent_45%),linear-gradient(to_bottom,#060b16,#0b1224)]"
          />
          <div aria-hidden className="pointer-events-none absolute inset-0 animate-gradient-shift opacity-40 bg-gradient-to-br from-[#2563EB]/25 via-transparent to-[#FACC15]/10" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-[1.05fr_0.95fr] md:gap-14 md:px-6">
            <div>
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-blue-100 backdrop-blur-md">
                  <Sparkles className="h-3.5 w-3.5 text-[#FACC15]" aria-hidden />
                  Affiliate corner
                </span>
                <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-5xl">Premium cards, banking partners, and rewards — curated.</h1>
                <p className="mt-4 max-w-xl text-sm font-medium leading-relaxed text-blue-100/85 md:text-base">
                  A modern fintech-forward lane for referrals and finance drops. Imagery and issuer marks are placeholders — swap with compliant assets when ready.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                    <Link href="/newsletter" className={`${primaryButtonClass} shadow-[0_16px_44px_-10px_rgba(37,99,235,0.65)]`}>
                      Join finance drops
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                    <Link href="/contact-us" className={`${secondaryButtonClass} border-white/25 bg-white/10 text-white hover:border-white/40`}>
                      Partner with us
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.08 }} className="relative">
              <div className="overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/10 shadow-[0_28px_80px_-34px_rgba(37,99,235,0.65)] backdrop-blur-xl">
                <div className="relative aspect-[5/4]">
                  <Image
                    src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop"
                    alt="Premium cards flatlay placeholder"
                    fill
                    className="object-cover opacity-90"
                    sizes="(max-width: 768px) 100vw, 45vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#0b1224]/55 via-transparent to-[#2563EB]/25" />
                </div>
              </div>
              <motion.div
                aria-hidden
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-7 -left-5 rounded-2xl border border-[#FACC15]/40 bg-[#FACC15]/90 px-4 py-3 text-xs font-extrabold text-[#422006] shadow-[0_18px_48px_-18px_rgba(250,204,21,0.55)]"
              >
                Animated offers · placeholders
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="relative border-t border-white/10 bg-gradient-to-b from-[#0b1224] to-[#060b16] py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Featured credit cards</h2>
                <p className="mt-2 max-w-xl text-sm font-medium text-blue-100/80 md:text-base">
                  Highlight reels for acquisition — pair with your compliance review before publishing live links.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-emerald-100">
                <BadgePercent className="h-4 w-4" aria-hidden />
                Cashback ready
              </span>
            </div>

            <div className="mt-12 grid gap-7 lg:grid-cols-3">
              {FEATURED_CARDS.map((card, idx) => (
                <motion.article
                  key={card.issuer}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: idx * 0.06 }}
                  whileHover={{ y: -8 }}
                  className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-[0_22px_60px_-30px_rgba(0,0,0,0.65)] backdrop-blur-xl"
                >
                  <div aria-hidden className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${card.accent} opacity-70`} />
                  <div className="relative flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-blue-100/80">{card.issuer}</p>
                      <h3 className="mt-2 text-xl font-bold">{card.tier}</h3>
                    </div>
                    <span className="rounded-full bg-[#FACC15] px-3 py-1 text-[0.65rem] font-extrabold uppercase tracking-wide text-[#422006] shadow-sm">
                      {card.badge}
                    </span>
                  </div>
                  <ul className="relative mt-5 space-y-2 text-sm font-medium text-blue-50/90">
                    {card.perks.map((perk) => (
                      <li key={perk} className="flex gap-2">
                        <Gift className="mt-0.5 h-4 w-4 shrink-0 text-[#FACC15]" aria-hidden />
                        {perk}
                      </li>
                    ))}
                  </ul>
                  <p className="relative mt-5 text-xs font-semibold text-blue-100/70">{card.apr}</p>
                  <div className="relative mt-6 flex flex-wrap gap-2">
                    <button
                      type="button"
                      className="rounded-full bg-gradient-to-r from-[#2563EB] to-[#1e40af] px-4 py-2 text-xs font-bold text-white shadow-[0_12px_32px_-12px_rgba(37,99,235,0.65)]"
                    >
                      Apply now
                    </button>
                    <button type="button" className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
                      Compare
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h2 className="text-2xl font-extrabold md:text-3xl">Banking partners</h2>
              <p className="max-w-xl text-sm font-medium text-blue-100/75">
                Logo tiles are typographic placeholders — replace with issuer-compliant artwork.
              </p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-7">
              {BANKS.map((name, idx) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: idx * 0.03 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-6 text-center text-sm font-extrabold tracking-wide shadow-inner backdrop-blur-md"
                >
                  {name}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-[#070d1b] py-16 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 md:gap-14 md:px-6">
            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-8 backdrop-blur-xl">
              <CreditCard className="h-9 w-9 text-[#FACC15]" aria-hidden />
              <h3 className="mt-5 text-2xl font-extrabold">Rewards &amp; cashback</h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-blue-100/80">
                Rotating category bonuses, statement credits, and milestone narratives — formatted for fast scanning on mobile.
              </p>
              <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-5">
                <p className="text-xs font-bold uppercase tracking-wide text-blue-100/70">Example banner</p>
                <p className="mt-2 text-lg font-extrabold text-white">Up to 5% back on essentials · limited window</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl">
              <Scale className="h-9 w-9 text-[#93C5FD]" aria-hidden />
              <h3 className="mt-5 text-2xl font-extrabold">Compare cards</h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-blue-100/80">
                Side-by-side rows for fees, rewards velocity, forex, and lounge access — swap with dynamic data later.
              </p>
              <div className="mt-6 space-y-3">
                {["Annual fee", "Rewards yield", "Travel perks", "Mobile UX"].map((row) => (
                  <div key={row} className="flex items-center justify-between rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm font-semibold">
                    <span className="text-blue-100/80">{row}</span>
                    <span className="text-white">Placeholder</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-t border-white/10 py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <h2 className="text-3xl font-extrabold md:text-4xl">Affiliate benefits</h2>
                <p className="mt-3 max-w-xl text-sm font-medium text-blue-100/80 md:text-base">
                  Structured drops, disclosure-ready modules, and crisp CTAs — aligned with the same yellow + blue brand language.
                </p>
                <ul className="mt-8 space-y-4 text-sm font-semibold text-blue-50/90">
                  <li className="flex gap-3">
                    <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#FACC15]" aria-hidden />
                    Compliance-first framing hooks (placeholder copy blocks included).
                  </li>
                  <li className="flex gap-3">
                    <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-[#93C5FD]" aria-hidden />
                    Partner-ready landing sections with modular comparisons.
                  </li>
                </ul>
              </div>
              <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#2563EB]/25 via-[#0b1224] to-[#FACC15]/10 p-8 shadow-[0_28px_80px_-34px_rgba(37,99,235,0.55)] backdrop-blur-xl">
                <p className="text-xs font-bold uppercase tracking-wide text-blue-100/80">Finance newsletter CTA</p>
                <p className="mt-3 text-xl font-extrabold">Weekly picks · affiliate-safe summaries</p>
                <form className="mt-6 flex flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
                  <label htmlFor="aff-email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="aff-email"
                    type="email"
                    placeholder="you@company.com"
                    className="w-full rounded-full border border-white/15 bg-black/30 px-5 py-3 text-sm font-semibold text-white outline-none ring-1 ring-white/10 placeholder:text-blue-100/60 focus:ring-2 focus:ring-[#FACC15]/40"
                  />
                  <button
                    type="submit"
                    className="rounded-full bg-[#FACC15] px-6 py-3 text-sm font-extrabold text-[#422006] shadow-[0_14px_40px_-12px_rgba(250,204,21,0.55)]"
                  >
                    Notify me
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-gradient-to-b from-[#060b16] to-[#03060f] py-14 md:py-16">
          <div className="mx-auto max-w-7xl px-4 text-center md:px-6">
            <h2 className="text-2xl font-extrabold md:text-3xl">Want curated drops in your inbox?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm font-medium text-blue-100/80 md:text-base">
              Pair this lane with the dedicated newsletter page for long-form previews and topic tags.
            </p>
            <motion.div className="mt-8 flex justify-center" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link href="/newsletter" className={`${primaryButtonClass}`}>
                Open newsletter page
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </MarketingShell>
  );
}
