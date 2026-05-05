"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";

const tags = ["Marketing", "Sales", "Analytics", "CRM", "Automation", "Payments"];

type HeroProps = {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onExploreTools: () => void;
  onViewMarketplace: () => void;
};

export function Hero({ searchTerm, onSearchChange, onExploreTools, onViewMarketplace }: HeroProps) {
  return (
    <section id="hero" className="py-8 md:py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h1 className="text-balance text-4xl font-bold leading-tight text-[#0F172A] md:text-6xl">
            eCommerce SaaS Products
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm font-medium text-[#64748B] md:text-base">
            Discover curated software deals and marketplace-ready SaaS products built for high-growth teams.
          </p>

          <label className="mx-auto mt-6 flex max-w-xl items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-5 py-3 shadow-md">
            <Search className="h-4 w-4 text-[#94A3B8]" />
            <input
              type="search"
              value={searchTerm}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Search products..."
              className="w-full bg-transparent text-sm font-medium text-[#0F172A] outline-none placeholder:text-[#94A3B8]"
            />
          </label>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full border border-[#E5E7EB] bg-white px-3 py-1.5 text-xs font-semibold text-[#475569]">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onExploreTools}
              className="transition-lift rounded-full bg-[#2563EB] px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-[#1E40AF]"
            >
              Explore Tools
            </button>
            <button
              onClick={onViewMarketplace}
              className="transition-lift rounded-full border border-[#CBD5E1] bg-white px-5 py-2.5 text-sm font-semibold text-[#0F172A] shadow-md hover:shadow-xl"
            >
              View Marketplace
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
