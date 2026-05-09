"use client";

import { motion } from "framer-motion";

const BRANDS = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "MongoDB",
  "PostgreSQL",
  "AWS",
  "Stripe",
  "OpenAI",
  "Vercel",
  "Tailwind CSS",
  "Docker",
  "Kubernetes",
  "GraphQL",
  "Redis",
  "Cloudflare",
  "Framer Motion",
  "Figma",
];

function duplicate<T>(items: T[], times: number): T[] {
  return Array.from({ length: times }, () => items).flat();
}

export function LogoMarquee() {
  const track = duplicate(BRANDS, 3);

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
          <div className="trusted-marquee-track flex w-max gap-5 md:gap-6">
            {track.map((name, idx) => (
              <div
                key={`${name}-${idx}`}
                className="group flex min-w-[7.75rem] select-none flex-col items-center justify-center rounded-xl border border-[#EEF2FF] bg-gradient-to-br from-white to-[#F8FAFC] px-4 py-3 shadow-[0_6px_20px_-8px_rgba(15,23,42,0.12)] transition-transform duration-300 ease-out group-hover:scale-[1.06] md:min-w-[8.5rem] md:px-5 md:py-3.5"
              >
                <span className="text-center text-[0.7rem] font-semibold tracking-tight text-[#334155] md:text-sm">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
