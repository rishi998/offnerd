"use client";

import { ProductCard } from "@/components/ProductCard";
import type { Product, ProductCategory } from "@/data/products";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const sectionFade = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};

type ProductGridProps = {
  products: Product[];
  visibleCount: number;
  canLoadMore: boolean;
  searchTerm: string;
  listingInHero: boolean;
  selectedCategory: "All" | ProductCategory;
  popularOnly: boolean;
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: "All" | ProductCategory) => void;
  onPopularToggle: () => void;
  onLoadMore: () => void;
};

export function ProductGrid({
  products,
  visibleCount,
  canLoadMore,
  searchTerm,
  listingInHero,
  selectedCategory,
  popularOnly,
  onSearchChange,
  onCategoryChange,
  onPopularToggle,
  onLoadMore,
}: ProductGridProps) {
  const categories: Array<"All" | ProductCategory> = [
    "All",
    "AI Tools",
    "OTT / Entertainment",
    "Development Tools",
    "Cloud / DevOps",
    "Marketing",
    "Design",
    "Communication",
    "Business / Finance",
  ];

  const featured = products.filter((product) => product.popular).slice(0, 12);
  const carouselItems = [...featured, ...featured];

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-14">
      <motion.section
        id="featured"
        variants={sectionFade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-14"
      >
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#0F172A] md:text-4xl">Featured Tools</h2>
            <p className="mt-1.5 max-w-lg text-sm font-medium text-[#64748B]">Hand-picked products teams reach for first.</p>
          </div>
          <span className="rounded-full bg-[#FACC15] px-4 py-1.5 text-xs font-bold text-[#854D0E] shadow-sm">Top 10</span>
        </div>
        <div className="overflow-hidden rounded-3xl border border-[#E5E7EB]/90 bg-white/90 p-4 shadow-[0_20px_50px_-24px_rgba(15,23,42,0.2)] backdrop-blur-sm md:p-5">
          <div className="moving-track flex w-max gap-4 md:gap-5">
            {carouselItems.map((product, idx) => (
              <button
                key={`${product.id}-${idx}`}
                onClick={() =>
                  window.open(
                    `https://wa.me/9968743811?text=${encodeURIComponent(`I want ${product.name} - ${product.description} for 1 month`)}`,
                    "_blank",
                  )
                }
                className="group min-w-60 rounded-2xl border border-[#EEF2FF] bg-gradient-to-br from-white to-[#F8FAFC] px-5 py-4 text-left shadow-[0_10px_28px_-14px_rgba(15,23,42,0.12)] transition duration-300 hover:-translate-y-1 hover:border-[#E0E7FF] hover:shadow-[0_18px_40px_-18px_rgba(15,23,42,0.2)] md:min-w-64"
              >
                <p className="text-sm font-bold tracking-tight text-[#0F172A]">{product.name}</p>
                <p className="mt-1 truncate text-xs font-semibold text-[#64748B]">{product.subcategory}</p>
              </button>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="catalogue"
        variants={sectionFade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
      >
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#0F172A] md:text-4xl">Marketplace Catalogue</h2>
            <p className="mt-1.5 max-w-xl text-sm font-medium text-[#64748B]">Filter by category and surface the right stack in seconds.</p>
          </div>
          <motion.button
            type="button"
            onClick={onPopularToggle}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`rounded-full border px-5 py-2.5 text-sm font-bold shadow-sm transition-shadow md:shrink-0 ${
              popularOnly
                ? "border-[#EAB308]/60 bg-[#FEF9C3] text-[#854D0E] shadow-[0_8px_24px_-12px_rgba(234,179,8,0.35)]"
                : "border-[#E5E7EB] bg-white text-[#0F172A] hover:shadow-md"
            }`}
          >
            Popular only
          </motion.button>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {categories.map((category) => (
            <motion.button
              key={category}
              type="button"
              onClick={() => onCategoryChange(category)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className={`rounded-full px-4 py-2 text-xs font-bold transition-shadow md:text-sm ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] text-white shadow-[0_10px_28px_-8px_rgba(37,99,235,0.45)]"
                  : "border border-[#E5E7EB] bg-white text-[#475569] shadow-sm hover:border-[#CBD5E1]"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {!listingInHero ? (
          <label className="mb-6 flex items-center gap-3 rounded-full border border-[#E5E7EB]/90 bg-white/95 px-5 py-3 shadow-[0_10px_36px_-14px_rgba(15,23,42,0.12)] backdrop-blur-md">
            <Search className="h-4 w-4 text-[#94A3B8]" />
            <input
              value={searchTerm}
              onChange={(event) => onSearchChange(event.target.value)}
              type="search"
              placeholder="Search by name, category, or description..."
              className="w-full bg-transparent text-sm font-semibold text-[#0F172A] outline-none placeholder:font-medium placeholder:text-[#94A3B8]"
            />
          </label>
        ) : (
          <p className="mb-6 text-sm font-semibold text-[#64748B]">
            Refine results with categories below — matches appear under the search bar at the top.
          </p>
        )}

        {!listingInHero ? (
          <>
            <motion.div layout className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {products.slice(0, visibleCount).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </motion.div>

            {products.length === 0 ? (
              <div className="mt-10 rounded-3xl border border-dashed border-[#CBD5E1] bg-white/90 p-10 text-center shadow-inner">
                <p className="text-sm font-semibold text-[#64748B]">No tools found for the current filters.</p>
              </div>
            ) : null}

            {canLoadMore ? (
              <div className="mt-10 text-center">
                <motion.button
                  type="button"
                  onClick={onLoadMore}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-full bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] px-8 py-3 text-sm font-semibold text-white shadow-[0_12px_36px_-10px_rgba(37,99,235,0.45)] hover:shadow-[0_16px_44px_-8px_rgba(37,99,235,0.55)]"
                >
                  Load More
                </motion.button>
              </div>
            ) : null}
          </>
        ) : null}
      </motion.section>

      <motion.div
        id="pricing"
        variants={sectionFade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="pt-14"
      >
        <div className="rounded-3xl border border-[#E5E7EB]/90 bg-white/95 p-8 shadow-[0_20px_50px_-24px_rgba(15,23,42,0.15)] backdrop-blur-sm md:p-10">
          <h3 className="text-2xl font-extrabold tracking-tight text-[#0F172A] md:text-3xl">Simple Marketplace Pricing</h3>
          <p className="mt-3 max-w-2xl text-sm font-medium leading-relaxed text-[#64748B] md:text-base">
            Browse free, connect instantly, and close deals faster with one-click WhatsApp outreach.
          </p>
        </div>
      </motion.div>

      <motion.div
        id="about"
        variants={sectionFade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="pt-10"
      >
        <div className="rounded-3xl border border-[#E5E7EB]/90 bg-white/95 p-8 shadow-[0_20px_50px_-24px_rgba(15,23,42,0.15)] backdrop-blur-sm md:p-10">
          <h3 className="text-2xl font-extrabold tracking-tight text-[#0F172A] md:text-3xl">About This Marketplace</h3>
          <p className="mt-3 max-w-2xl text-sm font-medium leading-relaxed text-[#64748B] md:text-base">
            Built as a scalable static SaaS discovery layer, ready to connect with a backend catalog later.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
