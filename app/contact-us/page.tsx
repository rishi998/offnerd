"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { MarketingShell } from "@/components/MarketingShell";
import { primaryButtonClass, secondaryButtonClass } from "@/components/marketing/MarketingButtons";
import { WHATSAPP_GROUP_URL, whatsappDmHref } from "@/lib/site";

export default function ContactPage() {
  return (
    <MarketingShell>
      <main className="min-h-screen bg-[#F5F7FB] text-[#0F172A]">
        <section className="relative overflow-hidden py-16 md:py-20">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#E8EFFC] via-[#F5F7FB] to-[#F5F7FB]" />
          <div aria-hidden className="pointer-events-none absolute left-[10%] top-10 h-72 w-72 rounded-full bg-[#FACC15]/16 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="max-w-3xl">
              <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Let&apos;s build something excellent.</h1>
              <p className="mt-4 text-base font-medium leading-relaxed text-[#64748B] md:text-lg">
                Share goals, timelines, and links — we typically reply within one business day. WhatsApp is fastest for short questions.
              </p>
            </motion.div>

            <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }} className="rounded-[1.75rem] border border-[#E5E7EB]/90 bg-white/95 p-8 shadow-[0_22px_56px_-26px_rgba(15,23,42,0.18)] backdrop-blur-md md:p-10">
                <h2 className="text-xl font-extrabold">Send a message</h2>
                <p className="mt-2 text-sm font-medium text-[#64748B]">Placeholder form — wire to your backend or form provider.</p>

                <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid gap-5 md:grid-cols-2">
                    <label className="block text-sm font-bold text-[#334155]">
                      Name
                      <input className="mt-2 w-full rounded-2xl border border-[#E5E7EB]/90 bg-white px-4 py-3 text-sm font-semibold text-[#0F172A] outline-none ring-1 ring-transparent focus:ring-[#2563EB]/35" placeholder="Your name" />
                    </label>
                    <label className="block text-sm font-bold text-[#334155]">
                      Email
                      <input
                        type="email"
                        autoComplete="email"
                        className="mt-2 w-full rounded-2xl border border-[#E5E7EB]/90 bg-white px-4 py-3 text-sm font-semibold text-[#0F172A] outline-none ring-1 ring-transparent focus:ring-[#2563EB]/35"
                        placeholder="you@company.com"
                      />
                    </label>
                  </div>
                  <label className="block text-sm font-bold text-[#334155]">
                    Project summary
                    <textarea rows={5} className="mt-2 w-full rounded-2xl border border-[#E5E7EB]/90 bg-white px-4 py-3 text-sm font-semibold text-[#0F172A] outline-none ring-1 ring-transparent focus:ring-[#2563EB]/35" placeholder="Goals, scope, deadlines, budget band..." />
                  </label>
                  <motion.button type="submit" whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }} className={`${primaryButtonClass} w-full md:w-auto`}>
                    Submit inquiry
                  </motion.button>
                </form>
              </motion.div>

              <div className="space-y-6">
                <motion.a
                  href={whatsappDmHref("Hi OFF Nerd — I'd like to discuss a project.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.08 }}
                  whileHover={{ y: -4 }}
                  className="block rounded-[1.75rem] border border-[#86EFAC]/70 bg-[#F0FDF4]/90 p-7 shadow-[0_18px_48px_-22px_rgba(22,163,74,0.22)] backdrop-blur-md"
                >
                  <div className="flex items-start gap-4">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-[#128C7E] shadow-sm">
                      <MessageCircle className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <p className="text-sm font-extrabold uppercase tracking-wide text-[#15803D]">WhatsApp CTA</p>
                      <p className="mt-2 text-lg font-bold text-[#0F172A]">Message us instantly</p>
                      <p className="mt-2 text-sm font-medium text-[#64748B]">Opens WhatsApp with a prefilled note — swap phone routing centrally in `lib/site.ts`.</p>
                    </div>
                  </div>
                </motion.a>

                <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.12 }} className="rounded-[1.75rem] border border-[#E5E7EB]/90 bg-white/95 p-7 shadow-[0_18px_48px_-22px_rgba(15,23,42,0.14)] backdrop-blur-md">
                  <div className="flex items-start gap-3">
                    <Mail className="mt-1 h-5 w-5 text-[#2563EB]" aria-hidden />
                    <div>
                      <p className="text-sm font-bold">Email</p>
                      <p className="mt-1 text-sm font-semibold text-[#64748B]">hello@offnerd.placeholder</p>
                    </div>
                  </div>
                  <div className="mt-5 flex items-start gap-3">
                    <Phone className="mt-1 h-5 w-5 text-[#2563EB]" aria-hidden />
                    <div>
                      <p className="text-sm font-bold">Phone</p>
                      <p className="mt-1 text-sm font-semibold text-[#64748B]">+91‑00000‑00000 (placeholder)</p>
                    </div>
                  </div>
                  <div className="mt-5 flex items-start gap-3">
                    <MapPin className="mt-1 h-5 w-5 text-[#2563EB]" aria-hidden />
                    <div>
                      <p className="text-sm font-bold">Office</p>
                      <p className="mt-1 text-sm font-semibold text-[#64748B]">Bengaluru · Remote-first (placeholder)</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.16 }} className="rounded-[1.75rem] border border-[#E5E7EB]/90 bg-white/95 p-7 backdrop-blur-md">
                  <div className="flex items-start gap-3">
                    <Clock3 className="mt-1 h-5 w-5 text-[#CA8A04]" aria-hidden />
                    <div>
                      <p className="text-sm font-bold">Response times</p>
                      <p className="mt-1 text-sm font-medium text-[#64748B]">
                        Weekdays: same-day acknowledgement when possible. Complex scopes receive a structured follow‑up within 24–48 hours.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link href={WHATSAPP_GROUP_URL} target="_blank" rel="noopener noreferrer" className={secondaryButtonClass}>
                      Join WhatsApp group
                    </Link>
                    <Link href="/direct-chat" className={secondaryButtonClass}>
                      Direct chat page
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.12 }} className="mt-12 overflow-hidden rounded-[1.75rem] border border-[#E5E7EB]/90 bg-white/90 shadow-[0_22px_56px_-26px_rgba(15,23,42,0.16)]">
              <div className="relative aspect-[21/9] bg-gradient-to-br from-[#EFF6FF] via-white to-[#FEF9C3]">
                <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-wide text-[#64748B]">Map placeholder</p>
                    <p className="mt-2 text-lg font-extrabold text-[#0F172A]">Embed Google Maps or Mapbox here</p>
                    <p className="mt-2 text-sm font-medium text-[#64748B]">Keeps layout stable while you connect a real embed.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </MarketingShell>
  );
}
