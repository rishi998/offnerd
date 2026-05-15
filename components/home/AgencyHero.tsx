"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { primaryButtonClass, secondaryButtonClass } from "@/components/marketing/MarketingButtons";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

const CAPABILITIES = ["Web Apps", "SaaS Platforms", "AI Automation", "UI/UX", "Marketing Sites", "CRM"];

export function AgencyHero() {
  return (
    <section id="hero" className="relative overflow-hidden pb-8 pt-10 md:pb-16 md:pt-16 lg:pt-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(37,99,235,0.12),transparent_55%),linear-gradient(180deg,#E8EFFC_0%,#F5F7FB_42%,#F5F7FB_100%)]"
      />
      <motion.div
        aria-hidden
        animate={{ opacity: [0.4, 0.65, 0.4], scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-24 left-[5%] h-[420px] w-[420px] rounded-full bg-[#93C5FD]/20 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-32 right-[8%] h-[300px] w-[300px] rounded-full bg-[#FACC15]/16 blur-3xl"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-4 md:grid-cols-2 md:gap-16 md:px-6 lg:gap-20">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-xl md:max-w-none">
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB]/90 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#1e40af] shadow-[0_8px_32px_-14px_rgba(37,99,235,0.2)] backdrop-blur-md"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#CA8A04]" aria-hidden />
            Digital Engineering Studio
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-heading mt-6 text-balance text-4xl font-bold leading-[1.06] tracking-tight text-[#0F172A] md:text-5xl lg:text-[3.4rem]"
          >
            Build{" "}
            <span className="bg-gradient-to-r from-[#2563EB] via-[#1d4ed8] to-[#1e40af] bg-clip-text text-transparent">
              premium digital systems
            </span>{" "}
            that scale with your business
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-pretty text-base font-medium leading-relaxed text-[#64748B] md:text-lg md:leading-8"
          >
            OFF Nerd designs and ships modern websites, SaaS platforms, and automation — with product-grade UX, performance,
            and engineering clarity from day one.
          </motion.p>

          <motion.ul variants={fadeUp} className="mt-7 flex flex-wrap gap-2">
            {CAPABILITIES.map((item) => (
              <li
                key={item}
                className="rounded-full border border-[#E5E7EB]/90 bg-white/85 px-3.5 py-1.5 text-xs font-semibold text-[#475569] shadow-sm backdrop-blur-sm"
              >
                {item}
              </li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-3">
            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link href="/contact-us" className={primaryButtonClass}>
                Start a project
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link href="/services" className={secondaryButtonClass}>
                Explore services
                <ArrowRight className="h-4 w-4 text-[#64748B] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#0F172A]" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-6 border-t border-[#E2E8F0]/80 pt-8"
          >
            <motion.div>
              <p className="font-heading text-2xl font-bold text-[#0F172A]">250+</p>
              <p className="text-xs font-semibold uppercase tracking-wide text-[#64748B]">Projects shipped</p>
            </motion.div>
            <motion.div className="h-10 w-px bg-[#E2E8F0]" aria-hidden />
            <motion.div>
              <p className="font-heading text-2xl font-bold text-[#0F172A]">15+</p>
              <p className="text-xs font-semibold uppercase tracking-wide text-[#64748B]">Countries served</p>
            </motion.div>
            <motion.div className="h-10 w-px bg-[#E2E8F0]" aria-hidden />
            <motion.div className="flex items-center gap-2 text-sm font-semibold text-[#2563EB]">
              <Zap className="h-4 w-4" aria-hidden />
              Startup-grade velocity
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as const, delay: 0.12 }}
          className="relative mx-auto w-full max-w-lg md:max-w-none"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-8 rounded-[2.25rem] bg-gradient-to-tr from-[#2563EB]/18 via-[#FACC15]/12 to-transparent blur-2xl"
          />

          <div className="relative">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-2 top-8 z-20 hidden rounded-2xl border border-white/70 bg-white/90 px-4 py-3 shadow-[0_20px_50px_-24px_rgba(15,23,42,0.25)] backdrop-blur-md md:block lg:-left-6"
            >
              <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-[#64748B]">Performance</p>
              <p className="font-heading text-sm font-bold text-[#0F172A]">98 Lighthouse score</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-1 bottom-16 z-20 hidden rounded-2xl border border-[#FDE047]/70 bg-[#FEFCE8]/95 px-4 py-3 shadow-[0_20px_50px_-24px_rgba(234,179,8,0.35)] backdrop-blur-md md:block lg:-right-4"
            >
              <p className="font-heading text-sm font-bold text-[#854D0E]">Design systems</p>
              <p className="text-[0.65rem] font-medium text-[#A16207]">Consistent & scalable</p>
            </motion.div>

            <div className="relative overflow-hidden rounded-[1.85rem] border border-[#E5E7EB]/90 bg-white/90 shadow-[0_28px_72px_-32px_rgba(15,23,42,0.24)] backdrop-blur-md">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
                alt="Modern analytics dashboard mockup"
                width={1200}
                height={900}
                className="h-auto w-full object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f172a]/30 via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
