"use client";

import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import type { Product } from "@/data/products";

const tags = ["Marketing", "Sales", "Analytics", "CRM", "Automation", "Payments"];

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

type HeroProps = {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onExploreTools: () => void;
  onViewMarketplace: () => void;
  searchResults: Product[];
  resultsVisible: boolean;
  visibleCount: number;
  canLoadMore: boolean;
  onLoadMore: () => void;
};

export function Hero({
  searchTerm,
  onSearchChange,
  onExploreTools,
  onViewMarketplace,
  searchResults,
  resultsVisible,
  visibleCount,
  canLoadMore,
  onLoadMore,
}: HeroProps) {
  const visibleProducts = searchResults.slice(0, visibleCount);

  return (
    <section id="hero" className="relative overflow-hidden py-10 md:py-16">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#E8EFFC] via-[#F5F7FB] to-[#F5F7FB]" />
      <div aria-hidden className="pointer-events-none absolute -top-28 left-[8%] h-[380px] w-[380px] rounded-full bg-[#93C5FD]/25 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute top-40 right-[5%] h-[280px] w-[280px] rounded-full bg-[#FACC15]/12 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-[min(90%,560px)] -translate-x-1/2 rounded-full bg-[#2563EB]/12 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div variants={fadeUp} className="relative mx-auto inline-block">
            <div aria-hidden className="absolute inset-[-20%] rounded-[2rem] bg-gradient-to-br from-[#2563EB]/12 via-transparent to-[#FACC15]/10 blur-xl" />
            <h1 className="relative text-balance bg-gradient-to-br from-[#0c1e3d] from-15% via-[#0f172a] to-black bg-clip-text text-5xl font-extrabold leading-[1.08] tracking-tight text-transparent drop-shadow-[0_2px_24px_rgba(15,23,42,0.12)] md:text-7xl lg:text-[4.75rem]">
              eCommerce SaaS Products
            </h1>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-[700px] text-pretty text-base font-medium leading-relaxed text-[#64748B] md:text-lg"
          >
            Discover the world&apos;s best AI tools, OTT platforms, SaaS apps, marketing services, and growth software
            &mdash; all in one powerful marketplace.
          </motion.p>

          <motion.label
            variants={fadeUp}
            className="mx-auto mt-8 flex max-w-xl items-center gap-3 rounded-full border border-[#E5E7EB]/90 bg-white/90 px-5 py-3.5 shadow-[0_10px_40px_-12px_rgba(15,23,42,0.15)] backdrop-blur-md"
          >
            <Search className="h-4 w-4 shrink-0 text-[#94A3B8]" />
            <input
              type="search"
              value={searchTerm}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Search products..."
              className="w-full bg-transparent text-sm font-semibold text-[#0F172A] outline-none placeholder:font-medium placeholder:text-[#94A3B8]"
            />
          </motion.label>

          {resultsVisible ? (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="mx-auto mt-10 w-full max-w-6xl text-left"
            >
              <h2 className="mb-5 text-center text-xl font-bold tracking-tight text-[#0F172A] md:text-2xl">Matching tools</h2>
              {visibleProducts.length === 0 ? (
                <div className="rounded-3xl border border-dashed border-[#CBD5E1] bg-white/90 p-10 text-center shadow-[0_16px_48px_-20px_rgba(15,23,42,0.12)]">
                  <p className="text-sm font-medium text-[#64748B]">
                    No tools match your search. Try another keyword or clear filters below.
                  </p>
                </div>
              ) : (
                <>
                  <motion.div layout className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {visibleProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </motion.div>
                  {canLoadMore ? (
                    <div className="mt-8 text-center">
                      <motion.button
                        type="button"
                        onClick={onLoadMore}
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="rounded-full bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] px-7 py-3 text-sm font-semibold text-white shadow-[0_12px_32px_-8px_rgba(37,99,235,0.45)] transition-shadow hover:shadow-[0_16px_40px_-6px_rgba(37,99,235,0.55)]"
                      >
                        Load More
                      </motion.button>
                    </div>
                  ) : null}
                </>
              )}
            </motion.div>
          ) : null}

          <motion.div variants={fadeUp} className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#E5E7EB]/90 bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-[#475569] shadow-sm backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <motion.button
              type="button"
              onClick={onExploreTools}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#2563EB] via-[#1d4ed8] to-[#1e40af] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_36px_-10px_rgba(37,99,235,0.5)] transition-[box-shadow] duration-300 hover:shadow-[0_16px_44px_-8px_rgba(37,99,235,0.6)]"
            >
              Explore Tools
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>
            <motion.button
              type="button"
              onClick={onViewMarketplace}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2 rounded-full border border-[#CBD5E1] bg-white/95 px-6 py-3 text-sm font-semibold text-[#0F172A] shadow-[0_8px_28px_-12px_rgba(15,23,42,0.15)] transition-shadow duration-300 hover:border-[#94A3B8] hover:shadow-[0_14px_40px_-12px_rgba(15,23,42,0.18)]"
            >
              View Marketplace
              <ArrowRight className="h-4 w-4 text-[#64748B] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#0F172A]" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
