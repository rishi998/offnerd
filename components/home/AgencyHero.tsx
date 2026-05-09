"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
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
    <section id="hero" className="relative overflow-hidden py-12 md:py-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#E8EFFC] via-[#F5F7FB] to-[#F5F7FB]" />
      <div aria-hidden className="pointer-events-none absolute -top-28 left-[8%] h-[380px] w-[380px] rounded-full bg-[#93C5FD]/25 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute top-40 right-[5%] h-[280px] w-[280px] rounded-full bg-[#FACC15]/18 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-[min(90%,560px)] -translate-x-1/2 rounded-full bg-[#2563EB]/12 blur-[100px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:gap-14 md:px-6">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-xl md:max-w-none">
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB]/90 bg-white/85 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-[#1e40af] shadow-[0_8px_28px_-12px_rgba(15,23,42,0.12)] backdrop-blur-md"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#CA8A04]" aria-hidden />
            Web · Product · Automation
          </motion.div>

          <motion.div variants={fadeUp} className="relative mt-5">
            <div aria-hidden className="absolute inset-[-18%] rounded-[2rem] bg-gradient-to-br from-[#2563EB]/14 via-transparent to-[#FACC15]/12 blur-xl" />
            <h1 className="relative text-balance bg-gradient-to-br from-[#0c1e3d] from-15% via-[#0f172a] to-black bg-clip-text text-4xl font-extrabold leading-[1.08] tracking-tight text-transparent drop-shadow-[0_2px_24px_rgba(15,23,42,0.12)] md:text-5xl lg:text-[3.35rem]">
              Build Powerful Digital Experiences for Your Business
            </h1>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-pretty text-base font-medium leading-relaxed text-[#64748B] md:text-lg"
          >
            We design and develop modern websites, SaaS platforms, automation systems, and scalable digital solutions — from
            branding to launch.
          </motion.p>

          <motion.ul variants={fadeUp} className="mt-6 flex flex-wrap gap-2">
            {CAPABILITIES.map((item) => (
              <li
                key={item}
                className="rounded-full border border-[#E5E7EB]/90 bg-white/85 px-3.5 py-1.5 text-xs font-semibold text-[#475569] shadow-sm backdrop-blur-sm"
              >
                {item}
              </li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link href="/contact-us" className={primaryButtonClass}>
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link href="/services" className={secondaryButtonClass}>
                View Services
                <ArrowRight className="h-4 w-4 text-[#64748B] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#0F172A]" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as const, delay: 0.12 }}
          className="relative mx-auto w-full max-w-lg md:max-w-none"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-[#2563EB]/20 via-[#FACC15]/15 to-transparent blur-2xl"
          />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-[#E5E7EB]/90 bg-white/90 shadow-[0_24px_64px_-28px_rgba(15,23,42,0.22)] backdrop-blur-md">
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
              alt="Modern analytics dashboard mockup"
              width={1200}
              height={900}
              className="h-auto w-full object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f172a]/25 via-transparent to-transparent" />
          </div>
          <motion.div
            aria-hidden
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-[#E5E7EB]/90 bg-white/95 px-4 py-3 text-xs font-bold text-[#0F172A] shadow-[0_18px_48px_-20px_rgba(15,23,42,0.25)] backdrop-blur-md md:block"
          >
            <span className="block text-[0.65rem] font-semibold uppercase tracking-wide text-[#64748B]">Delivery</span>
            Ship faster with clarity
          </motion.div>
          <motion.div
            aria-hidden
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-3 top-10 hidden rounded-2xl border border-[#FDE047]/80 bg-[#FEFCE8]/95 px-4 py-3 text-xs font-bold text-[#854D0E] shadow-[0_18px_48px_-20px_rgba(234,179,8,0.35)] backdrop-blur-md md:block"
          >
            Premium UI craft
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
