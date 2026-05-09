"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    title: "Analytics SaaS Platform",
    tag: "Product · Next.js",
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
    alt: "Team collaborating on laptops",
  },
  {
    title: "Commerce Experience",
    tag: "E‑commerce · UI Systems",
    src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
    alt: "Retail checkout experience",
  },
  {
    title: "Automation Console",
    tag: "Integrations · APIs",
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    alt: "Circuit board technology",
  },
] as const;

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};

export function FeaturedProjects() {
  return (
    <section className="relative overflow-hidden py-14 md:py-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#F5F7FB] via-white to-[#F5F7FB]" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#0F172A] md:text-4xl">Featured work</h2>
            <p className="mt-2 max-w-xl text-sm font-medium text-[#64748B] md:text-base">
              A snapshot of the kinds of products we ship — crisp UX, resilient architecture, and launch-ready polish.
            </p>
          </div>
          <Link
            href="/contact-us"
            className="group inline-flex items-center gap-2 self-start rounded-full border border-[#CBD5E1] bg-white/95 px-5 py-2.5 text-sm font-semibold text-[#0F172A] shadow-[0_8px_28px_-12px_rgba(15,23,42,0.15)] transition hover:border-[#94A3B8]"
          >
            Start a project
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {PROJECTS.map((project, idx) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-[1.75rem] border border-[#E5E7EB]/90 bg-white/95 shadow-[0_22px_56px_-28px_rgba(15,23,42,0.22)] backdrop-blur-sm"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f172a]/45 via-transparent to-transparent opacity-80" />
                <span className="absolute left-4 top-4 rounded-full bg-[#FACC15] px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-[#854D0E] shadow-sm">
                  Case study
                </span>
              </div>
              <div className="space-y-2 p-6">
                <p className="text-xs font-bold uppercase tracking-wide text-[#64748B]">{project.tag}</p>
                <h3 className="text-xl font-bold tracking-tight text-[#0F172A]">{project.title}</h3>
                <p className="text-sm font-medium text-[#64748B]">Placeholder preview — imagery and copy swap per engagement.</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
