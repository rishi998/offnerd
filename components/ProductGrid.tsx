"use client";

import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { useProductModal } from "@/components/marketplace/ProductModalProvider";
import type { Product, ProductCategory } from "@/data/products";
import type { QuickFilter } from "@/data/marketplace";
import { motion } from "framer-motion";
import { ArrowRight, Check, Search } from "lucide-react";
import { LogoDock } from "@/components/marketplace/LogoDock";

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
  quickFilter: QuickFilter;
  onQuickFilterChange: (value: QuickFilter) => void;
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: "All" | ProductCategory) => void;
  onPopularToggle: () => void;
  onLoadMore: () => void;
};

const QUICK_FILTER_CHIPS: { id: QuickFilter; label: string }[] = [
  { id: "trending", label: "Trending" },
  { id: "best_sellers", label: "Best sellers" },
  { id: "ai", label: "AI tools" },
  { id: "dev", label: "Developer" },
  { id: "design", label: "Design" },
  { id: "lifetime", label: "Lifetime" },
  { id: "limited_stock", label: "Limited stock" },
];

export function ProductGrid({
  products,
  visibleCount,
  canLoadMore,
  searchTerm,
  listingInHero,
  selectedCategory,
  popularOnly,
  quickFilter,
  onQuickFilterChange,
  onSearchChange,
  onCategoryChange,
  onPopularToggle,
  onLoadMore,
}: ProductGridProps) {
  const modal = useProductModal();

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
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#0F172A] md:text-[2.25rem]">Featured tools</h2>
            <p className="mt-2 max-w-lg text-sm font-medium leading-relaxed text-[#64748B] md:text-base">
              Hand-picked listings with sharper typography, balanced spacing, and consistent glass cards.
            </p>
          </div>
          <span className="rounded-full bg-gradient-to-r from-[#FACC15] to-[#FDE047] px-4 py-1.5 text-xs font-bold text-[#854D0E] shadow-[0_10px_28px_-12px_rgba(234,179,8,0.45)]">
            Curated
          </span>
        </div>
        <div className="overflow-hidden rounded-3xl border border-[#E5E7EB]/90 bg-white/90 p-4 shadow-[0_24px_60px_-26px_rgba(15,23,42,0.22)] ring-1 ring-white/60 backdrop-blur-md md:p-6">
          <div className="moving-track flex w-max gap-4 md:gap-5">
            {carouselItems.map((product, idx) => (
              <button
                key={`${product.id}-${idx}`}
                type="button"
                onClick={() => {
                  if (modal) modal.openProduct(product);
                  else {
                    window.open(
                      `https://wa.me/9968743811?text=${encodeURIComponent(`I want ${product.name} - ${product.description}`)}`,
                      "_blank",
                    );
                  }
                }}
                className="group relative flex min-w-60 items-center gap-3 rounded-2xl border border-[#EEF2FF] bg-gradient-to-br from-white to-[#F8FAFC] px-5 py-4 text-left shadow-[0_12px_32px_-16px_rgba(15,23,42,0.14)] transition duration-300 hover:-translate-y-1.5 hover:border-[#C7D2FE] hover:shadow-[0_22px_48px_-20px_rgba(37,99,235,0.18)] md:min-w-64"
              >
                {product.popular ? (
                  <span className="absolute right-3 top-3 rounded-md bg-[#FACC15] px-1.5 py-0.5 text-[0.55rem] font-extrabold uppercase tracking-wide text-[#713F12] shadow-sm">
                    Hot
                  </span>
                ) : null}
                <LogoDock
                  key={`${product.id}-${idx}`}
                  product={product}
                  size="sm"
                  variant="light"
                  priority={idx < 4}
                  hoverLift
                  className="shrink-0"
                />
                <div className="min-w-0">
                  <p className="text-sm font-bold tracking-tight text-[#0F172A]">{product.name}</p>
                  <p className="mt-1 truncate text-xs font-semibold text-[#64748B]">{product.subcategory}</p>
                </div>
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
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#0F172A] md:text-[2.25rem]">Marketplace catalogue</h2>
            <p className="mt-2 max-w-xl text-sm font-medium leading-relaxed text-[#64748B] md:text-base">
              Search, filter, and load more — the same scalable marketplace logic, refined for secondary discovery.
            </p>
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

        <div className="mb-6 flex flex-wrap gap-2">
          <span className="w-full text-[0.65rem] font-extrabold uppercase tracking-wide text-[#94A3B8] sm:w-auto sm:self-center">
            Quick filters
          </span>
          {QUICK_FILTER_CHIPS.map(({ id, label }) => {
            const active = quickFilter === id;
            return (
              <motion.button
                key={id}
                type="button"
                onClick={() => onQuickFilterChange(active ? null : id)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`rounded-full px-3.5 py-2 text-xs font-bold transition-shadow md:text-sm ${
                  active
                    ? "bg-gradient-to-r from-[#FACC15] to-[#FDE047] text-[#713F12] shadow-[0_10px_26px_-10px_rgba(234,179,8,0.45)] ring-2 ring-[#FACC15]/50"
                    : "border border-[#E5E7EB] bg-white/95 text-[#475569] shadow-sm hover:border-[#CBD5E1]"
                }`}
              >
                {label}
              </motion.button>
            );
          })}
        </div>

        {!listingInHero ? (
          <label className="mb-8 flex items-center gap-3 rounded-full border border-[#E5E7EB]/90 bg-white/95 px-5 py-3.5 shadow-[0_14px_44px_-18px_rgba(15,23,42,0.14)] backdrop-blur-md">
            <Search className="h-4 w-4 text-[#94A3B8]" />
            <input
              value={searchTerm}
              onChange={(event) => onSearchChange(event.target.value)}
              type="search"
              placeholder="Search tools, features, badges, categories…"
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
            <motion.div layout className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
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
        className="pt-16"
      >
        <div className="rounded-3xl border border-[#E5E7EB]/90 bg-white/95 p-8 shadow-[0_24px_56px_-26px_rgba(15,23,42,0.18)] backdrop-blur-md md:p-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h3 className="text-2xl font-extrabold tracking-tight text-[#0F172A] md:text-3xl">Marketplace plans</h3>
              <p className="mt-3 max-w-2xl text-sm font-medium leading-relaxed text-[#64748B] md:text-base">
                Browse publicly, compare categories, and message instantly — pricing adapts per SKU when you connect.
              </p>
            </div>
            <span className="inline-flex w-fit items-center rounded-full border border-[#BFDBFE]/80 bg-[#EFF6FF] px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-[#1d4ed8]">
              WhatsApp-ready checkout
            </span>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                name: "Starter",
                price: "Free to browse",
                blurb: "Search, filter, and shortlist tools before you buy.",
                perks: ["Category filters", "Popular toggle", "Instant WhatsApp"],
              },
              {
                name: "Teams",
                price: "Custom bundles",
                blurb: "Perfect when you need renewals across multiple seats.",
                perks: ["Priority routing", "Renewal reminders", "Stack recommendations"],
              },
              {
                name: "Partners",
                price: "Affiliate-ready",
                blurb: "Want listings featured? We publish partner drops in the newsletter.",
                perks: ["Placement slots", "Offer orchestration", "Co-branded CTAs"],
              },
            ].map((tier) => (
              <div
                key={tier.name}
                className="relative overflow-hidden rounded-2xl border border-[#E5E7EB]/90 bg-gradient-to-br from-white to-[#F8FAFC] p-6 shadow-[0_18px_44px_-22px_rgba(15,23,42,0.15)]"
              >
                <div aria-hidden className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#2563EB]/10 blur-2xl" />
                <h4 className="text-lg font-bold text-[#0F172A]">{tier.name}</h4>
                <p className="mt-2 text-sm font-semibold text-[#1d4ed8]">{tier.price}</p>
                <p className="mt-3 text-sm font-medium leading-relaxed text-[#64748B]">{tier.blurb}</p>
                <ul className="mt-5 space-y-2.5">
                  {tier.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2 text-sm font-medium text-[#334155]">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#2563EB]" aria-hidden />
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        id="about"
        variants={sectionFade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="pt-12"
      >
        <div className="rounded-3xl border border-[#E5E7EB]/90 bg-white/95 p-8 shadow-[0_24px_56px_-26px_rgba(15,23,42,0.18)] backdrop-blur-md md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <h3 className="text-2xl font-extrabold tracking-tight text-[#0F172A] md:text-3xl">Built for discovery</h3>
              <p className="mt-3 max-w-2xl text-sm font-medium leading-relaxed text-[#64748B] md:text-base">
                OFF Nerd is primarily a digital agency — this marketplace remains a curated secondary lane for SaaS, streaming,
                and growth tools. Same reusable cards and filters; tuned visuals for clarity.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_32px_-10px_rgba(37,99,235,0.45)] transition hover:shadow-[0_16px_40px_-8px_rgba(37,99,235,0.55)]"
                >
                  Explore agency services
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  href="/newsletter"
                  className="inline-flex items-center gap-2 rounded-full border border-[#CBD5E1] bg-white px-5 py-2.5 text-sm font-semibold text-[#0F172A] shadow-sm transition hover:border-[#94A3B8]"
                >
                  Newsletter
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-[#E5E7EB]/90 bg-gradient-to-br from-[#F8FAFC] to-white p-6 shadow-inner">
              <p className="text-xs font-bold uppercase tracking-wide text-[#64748B]">FYI</p>
              <p className="mt-3 text-sm font-medium leading-relaxed text-[#334155]">
                Need a custom SaaS build instead of off-the-shelf tools? We design and ship platforms end-to-end.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
