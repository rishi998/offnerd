"use client";

import { motion } from "framer-motion";
import type { Product } from "@/data/products";
import { LogoDock } from "@/components/marketplace/LogoDock";

/** Synthetic rows — `logoKey` resolves via `logoRegistry` (no catalog `id` needed). */
const MARQUEE_BRANDS: Pick<Product, "id" | "name" | "logo" | "logoKey">[] = [
  { id: "_mq-chatgpt", name: "ChatGPT", logo: "C", logoKey: "chatgpt" },
  { id: "_mq-gemini", name: "Gemini", logo: "Gm", logoKey: "gemini" },
  { id: "_mq-linear", name: "Linear", logo: "Ln", logoKey: "linear" },
  { id: "_mq-supabase", name: "Supabase", logo: "Sb", logoKey: "supabase" },
  { id: "_mq-vercel", name: "Vercel", logo: "V", logoKey: "vercel" },
  { id: "_mq-stripe", name: "Stripe", logo: "St", logoKey: "stripe" },
  { id: "_mq-notion", name: "Notion", logo: "N", logoKey: "notion" },
  { id: "_mq-figma", name: "Figma", logo: "F", logoKey: "figma" },
  { id: "_mq-framer", name: "Framer", logo: "Fr", logoKey: "framer" },
  { id: "_mq-mongodb", name: "MongoDB", logo: "Mg", logoKey: "mongodb" },
  { id: "_mq-github", name: "GitHub", logo: "GH", logoKey: "github" },
  { id: "_mq-slack", name: "Slack", logo: "S", logoKey: "slack" },
];

function duplicate<T>(items: T[], times: number): T[] {
  return Array.from({ length: times }, () => items).flat();
}

export function LogoMarquee() {
  const track = duplicate(MARQUEE_BRANDS, 3);

  return (
    <section aria-label="Trusted technologies and platforms" className="relative w-full overflow-hidden py-10 md:py-12">
      <div className="mx-auto mb-8 max-w-7xl px-4 text-center md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] as const }}
          className="text-xl font-bold tracking-tight text-[#0F172A] md:text-2xl"
        >
          Trusted Technologies &amp; Platforms
        </motion.h2>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#F5F7FB] to-transparent md:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#F5F7FB] to-transparent md:w-24" />
        <div className="overflow-hidden rounded-2xl border border-[#E5E7EB]/90 bg-white/80 px-4 py-4 shadow-[0_18px_50px_-20px_rgba(15,23,42,0.18)] backdrop-blur-md md:px-5 md:py-5">
          <div className="trusted-marquee-track flex w-max items-center gap-4 md:gap-5">
            {track.map((product, idx) => (
              <div
                key={`${product.id}-${idx}`}
                className="group flex min-w-[8.5rem] select-none flex-col items-center justify-center gap-2 px-2 py-2 transition-transform duration-300 ease-out group-hover:scale-[1.04] md:min-w-[9rem]"
              >
                <LogoDock key={`${product.id}-${idx}`} product={product} size="sm" variant="light" priority={idx < 6} hoverLift />
                <span className="text-center text-[0.65rem] font-semibold tracking-tight text-[#475569] md:text-xs">{product.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
