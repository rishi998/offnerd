"use client";

import Image from "next/image";
import { useEffect, useId } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  BadgePercent,
  Check,
  Clock,
  Mail,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import type { Product } from "@/data/products";
import { BADGE_LABELS, getMarketplaceView, type GradientTheme } from "@/data/marketplace";
import { whatsappDmHref } from "@/lib/site";

const THEME_STYLES: Record<
  GradientTheme,
  { mesh: string; accentBar: string; glow: string; softPill: string }
> = {
  ai: {
    mesh: "from-violet-400/20 via-blue-500/12 to-cyan-400/12",
    accentBar: "from-violet-600 to-blue-600",
    glow: "bg-violet-400/25",
    softPill: "from-violet-500/15 to-blue-500/10 border-violet-200/60",
  },
  dev: {
    mesh: "from-sky-400/18 via-blue-600/12 to-cyan-400/14",
    accentBar: "from-sky-600 to-blue-700",
    glow: "bg-sky-400/22",
    softPill: "from-sky-500/14 to-blue-600/10 border-sky-200/55",
  },
  design: {
    mesh: "from-amber-400/22 via-orange-400/12 to-yellow-300/14",
    accentBar: "from-amber-500 to-orange-600",
    glow: "bg-amber-400/25",
    softPill: "from-amber-400/18 to-orange-400/12 border-amber-200/55",
  },
  productivity: {
    mesh: "from-emerald-400/16 via-teal-500/12 to-blue-500/10",
    accentBar: "from-emerald-600 to-teal-600",
    glow: "bg-emerald-400/20",
    softPill: "from-emerald-500/14 to-teal-500/10 border-emerald-200/50",
  },
  default: {
    mesh: "from-[#FACC15]/35 via-blue-500/10 to-[#2563EB]/12",
    accentBar: "from-[#2563EB] to-[#1e40af]",
    glow: "bg-[#FACC15]/30",
    softPill: "from-[#EFF6FF] to-[#FEF9C3]/80 border-blue-200/50",
  },
};

function wa(productName: string, detail: string) {
  return whatsappDmHref(`Hi OFF Nerd — ${detail}\n\nProduct: ${productName}`);
}

type ProductDetailModalProps = {
  product: Product | null;
  open: boolean;
  onClose: () => void;
};

export function ProductDetailModal({ product, open, onClose }: ProductDetailModalProps) {
  const reduceMotion = useReducedMotion();
  const titleId = useId();
  const descId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && product ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0.15 : 0.28 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-[#0f172a]/45 backdrop-blur-[6px]"
            aria-label="Close product details"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descId}
            initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: 18, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 380, damping: 32 }}
            className="relative flex max-h-[min(92vh,900px)] w-full max-w-3xl flex-col overflow-hidden rounded-t-[28px] border border-[#E5E7EB]/90 bg-[#F8FAFC] shadow-[0_40px_100px_-28px_rgba(15,23,42,0.35)] sm:rounded-[28px]"
          >
            <ModalBody product={product} titleId={titleId} descId={descId} onClose={onClose} />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function ModalBody({
  product,
  titleId,
  descId,
  onClose,
}: {
  product: Product;
  titleId: string;
  descId: string;
  onClose: () => void;
}) {
  const view = getMarketplaceView(product);
  const { listing, savingsPercent } = view;
  const theme = THEME_STYLES[listing.theme];
  const limitedPulse =
    listing.badges.includes("LIMITED_STOCK") || listing.stockLevel === "low_stock" || listing.stockLevel === "limited";

  return (
    <>
      {/* Hero */}
      <div className={`relative overflow-hidden bg-gradient-to-br ${theme.mesh}`}>
        <div aria-hidden className={`pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full blur-3xl ${theme.glow}`} />
        <div aria-hidden className="pointer-events-none absolute -bottom-16 left-10 h-48 w-48 rounded-full bg-[#2563EB]/10 blur-3xl" />

        {product.popular ? (
          <div className="absolute right-4 top-4 z-[2] rotate-3 rounded-lg bg-gradient-to-r from-[#FACC15] to-[#FDE047] px-3 py-1 text-[0.65rem] font-extrabold uppercase tracking-wide text-[#713F12] shadow-[0_10px_28px_-8px_rgba(234,179,8,0.55)]">
            Most popular
          </div>
        ) : null}

        <button
          type="button"
          onClick={onClose}
          className="absolute left-4 top-4 z-[2] grid h-10 w-10 place-items-center rounded-2xl border border-white/40 bg-white/70 text-[#0F172A] shadow-sm backdrop-blur-md transition hover:bg-white"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative px-6 pb-6 pt-14 sm:px-8 sm:pb-8 sm:pt-16">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <div className="relative shrink-0">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-[-10px] rounded-3xl bg-gradient-to-br from-white/50 to-transparent blur-xl"
              />
              <div className="relative grid h-[4.5rem] w-[4.5rem] place-items-center rounded-3xl border border-white/50 bg-white/85 text-xl font-extrabold text-[#1e40af] shadow-[0_18px_44px_-18px_rgba(37,99,235,0.35)] backdrop-blur-md sm:h-[5.25rem] sm:w-[5.25rem] sm:text-2xl">
                {product.logo}
              </div>
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-xs font-bold uppercase tracking-wide text-[#475569]">{product.category}</p>
              <h2 id={titleId} className="mt-2 text-balance text-2xl font-extrabold tracking-tight text-[#0F172A] sm:text-3xl">
                {listing.displayTitle}
              </h2>
              <p id={descId} className="mt-2 text-sm font-medium leading-relaxed text-[#64748B] sm:text-[0.95rem]">
                {listing.tagline}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span
                  className={`inline-flex items-center rounded-full border border-white/45 bg-white/55 px-3 py-1 text-xs font-bold text-[#334155] shadow-sm backdrop-blur-md`}
                >
                  <Clock className="mr-1.5 h-3.5 w-3.5 text-[#64748B]" aria-hidden />
                  {listing.durationLabel}
                </span>
                <span className="inline-flex items-center rounded-full border border-white/45 bg-white/55 px-3 py-1 text-xs font-bold text-[#334155] shadow-sm backdrop-blur-md">
                  {listing.planType.split("·")[0]?.trim() ?? listing.planType}
                </span>
                <span
                  className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold shadow-sm backdrop-blur-md ${
                    limitedPulse
                      ? "animate-pulse border-rose-200/80 bg-rose-50/90 text-rose-800"
                      : "border-emerald-200/70 bg-emerald-50/85 text-emerald-900"
                  }`}
                >
                  {listing.stockLabel}
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {listing.badges.map((b) => (
                  <span
                    key={b}
                    className={`rounded-full border bg-gradient-to-r px-3 py-1 text-[0.65rem] font-extrabold uppercase tracking-wide text-[#0F172A]/85 shadow-[0_6px_18px_-10px_rgba(15,23,42,0.25)] backdrop-blur-sm ${theme.softPill}`}
                  >
                    {BADGE_LABELS[b]}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {listing.heroImage ? (
            <div className="relative mt-6 overflow-hidden rounded-2xl border border-white/40 shadow-[0_18px_48px_-22px_rgba(15,23,42,0.22)]">
              <div className="relative aspect-[21/9] max-h-48 sm:max-h-52">
                <Image
                  src={listing.heroImage}
                  alt={`${product.name} product preview`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f172a]/35 via-transparent to-transparent" />
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <div className="flex flex-1 flex-col overflow-y-auto overscroll-contain px-6 py-6 sm:px-8">
        {/* Pricing */}
        <section className="relative overflow-hidden rounded-3xl border border-[#E5E7EB]/90 bg-white/90 p-6 shadow-[0_20px_56px_-28px_rgba(15,23,42,0.18)] backdrop-blur-md">
          <div aria-hidden className={`pointer-events-none absolute inset-0 opacity-[0.55] bg-gradient-to-br ${theme.mesh}`} />
          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-[#64748B]">Official price</p>
              <p className="mt-1 text-lg font-semibold text-[#94A3B8] line-through decoration-[#CBD5E1]">{listing.officialPriceDisplay}</p>
              <p className="mt-4 text-xs font-bold uppercase tracking-wide text-[#64748B]">OFF Nerd price</p>
              <div className="mt-1 flex flex-wrap items-end gap-3">
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl font-black tracking-tight text-[#0F172A] sm:text-[2.75rem]"
                >
                  {listing.salePriceDisplay}
                </motion.p>
                <motion.span
                  initial={{ scale: 0.92 }}
                  animate={{ scale: 1 }}
                  className="inline-flex items-center gap-1 rounded-full border border-[#86EFAC]/70 bg-[#DCFCE7]/90 px-3 py-1 text-sm font-extrabold text-[#166534] shadow-[0_0_24px_-6px_rgba(34,197,94,0.45)]"
                >
                  <BadgePercent className="h-4 w-4" aria-hidden />
                  Save ~{savingsPercent}%
                </motion.span>
              </div>
            </div>
            <div className="rounded-2xl border border-[#DBEAFE]/80 bg-[#EFF6FF]/90 px-5 py-4 text-sm font-semibold text-[#1e3a8a] shadow-inner">
              <p className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[#CA8A04]" aria-hidden />
                Limited-time partner pricing — verify checkout on WhatsApp.
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mt-6">
          <h3 className="text-lg font-extrabold text-[#0F172A]">What&apos;s included</h3>
          <ul className="mt-4 space-y-2">
            {listing.features.map((feat, i) => (
              <motion.li
                key={feat}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                className={`flex items-start gap-3 rounded-2xl border border-[#E5E7EB]/80 px-4 py-3.5 text-sm font-semibold text-[#334155] shadow-sm transition hover:border-[#CBD5E1] hover:shadow-md ${
                  i % 2 === 0 ? "bg-white/95" : "bg-[#F8FAFC]/95"
                }`}
              >
                <span className={`mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${theme.accentBar} text-white shadow-md`}>
                  <Check className="h-4 w-4" strokeWidth={2.5} aria-hidden />
                </span>
                {feat}
              </motion.li>
            ))}
          </ul>
          {listing.credits ? (
            <p className="mt-3 text-xs font-bold uppercase tracking-wide text-[#64748B]">Credits · {listing.credits}</p>
          ) : null}
          {listing.cloudStorage ? (
            <p className="mt-1 text-xs font-bold uppercase tracking-wide text-[#64748B]">Storage · {listing.cloudStorage}</p>
          ) : null}
        </section>

        {/* Benefits */}
        <section className="mt-8">
          <h3 className="text-lg font-extrabold text-[#0F172A]">Perfect for</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {listing.benefits.map((b) => (
              <span
                key={b}
                className="rounded-full border border-[#E5E7EB]/90 bg-gradient-to-r from-white to-[#FFFBEB]/90 px-4 py-2 text-xs font-bold text-[#422006] shadow-sm"
              >
                {b}
              </span>
            ))}
          </div>
        </section>

        {/* Activation */}
        <section className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-[#BFDBFE]/70 bg-[#EFF6FF]/80 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
            <ShieldCheck className="h-8 w-8 text-[#2563EB]" aria-hidden />
            <h4 className="mt-3 text-sm font-extrabold text-[#0F172A]">Activation</h4>
            <p className="mt-2 text-sm font-medium leading-relaxed text-[#475569]">{listing.activationType}</p>
            <p className="mt-3 text-xs font-bold text-[#64748B]">Warranty · {listing.warranty}</p>
          </div>
          <div className="rounded-2xl border border-[#FDE047]/80 bg-[#FEFCE8]/85 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]">
            <Mail className="h-8 w-8 text-[#CA8A04]" aria-hidden />
            <h4 className="mt-3 text-sm font-extrabold text-[#0F172A]">Delivery</h4>
            <ul className="mt-2 space-y-2 text-sm font-medium text-[#57534E]">
              {listing.deliveryBullets.map((line) => (
                <li key={line} className="flex gap-2">
                  <Zap className="mt-0.5 h-4 w-4 shrink-0 text-[#CA8A04]" aria-hidden />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTAs */}
        <section className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <motion.a
            href={wa(product.name, "I'd like the Get Deal flow for this listing.")}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-b from-[#1e4bbf] via-[#1d4ed8] to-[#172554] px-6 py-3.5 text-center text-sm font-bold text-white shadow-[0_18px_44px_-14px_rgba(29,78,216,0.55),inset_0_1px_0_rgba(255,255,255,0.35)] sm:flex-none sm:min-w-[160px]"
          >
            <span aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.18] to-transparent" />
            <span aria-hidden className="pointer-events-none absolute -left-1/3 top-0 h-full w-1/3 skew-x-[-16deg] bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-all duration-700 group-hover:translate-x-[280%] group-hover:opacity-100" />
            Get deal
          </motion.a>
          <motion.a
            href={wa(product.name, "Please activate / provision this subscription for my workspace.")}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex flex-1 items-center justify-center rounded-full border border-[#CBD5E1] bg-white px-6 py-3.5 text-sm font-bold text-[#0F172A] shadow-[0_10px_28px_-12px_rgba(15,23,42,0.12)] sm:flex-none sm:min-w-[160px]"
          >
            Activate now
          </motion.a>
          <motion.a
            href={wa(product.name, "I have questions before purchasing — can you advise?")}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex flex-1 items-center justify-center rounded-full border border-[#86EFAC]/70 bg-[#F0FDF4] px-6 py-3.5 text-sm font-bold text-[#166534] shadow-sm sm:flex-none sm:min-w-[180px]"
          >
            WhatsApp us
          </motion.a>
          <motion.a
            href={wa(product.name, "I'd like to request access / a custom quote for this tool.")}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex flex-1 items-center justify-center rounded-full bg-[#0F172A] px-6 py-3.5 text-sm font-bold text-white shadow-lg sm:flex-none sm:min-w-[170px]"
          >
            Request access
          </motion.a>
        </section>

        <p className="mt-6 text-center text-[0.7rem] font-semibold uppercase tracking-wide text-[#94A3B8]">
          Verified partner workflow · Final entitlement subject to issuer policies
        </p>
      </div>
    </>
  );
}
