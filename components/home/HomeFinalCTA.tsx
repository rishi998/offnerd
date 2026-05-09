"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { primaryButtonClass, secondaryButtonClass } from "@/components/marketing/MarketingButtons";

export function HomeFinalCTA() {
  return (
    <section id="cta" className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
        className="relative overflow-hidden rounded-3xl border border-[#E5E7EB]/90 bg-white/95 p-10 text-center shadow-[0_24px_64px_-28px_rgba(15,23,42,0.18)] backdrop-blur-sm md:p-14"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 animate-gradient-shift bg-gradient-to-br from-[#2563EB]/10 via-[#FACC15]/10 to-transparent opacity-70"
        />
        <div className="relative">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0F172A] md:text-4xl">Ready to build your next digital product?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-base font-medium leading-relaxed text-[#64748B]">
            Tell us about your roadmap — we&apos;ll reply with a concise plan, timeline, and the right team shape.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link href="/contact-us" className={primaryButtonClass}>
                Book a consultation
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link href="/saas" className={secondaryButtonClass}>
                Browse SaaS deals
                <ArrowRight className="h-4 w-4 text-[#64748B] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#0F172A]" />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
