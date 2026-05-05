 "use client";

import { ProductCard } from "@/components/ProductCard";
import type { Product, ProductCategory } from "@/data/products";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

type ProductGridProps = {
  products: Product[];
  visibleCount: number;
  canLoadMore: boolean;
  searchTerm: string;
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
    <section className="mx-auto max-w-7xl px-4 py-6 md:px-6 md:py-10">
      <section id="featured" className="mb-10">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-[#0F172A]">Featured Tools</h2>
          <span className="rounded-full bg-[#FACC15] px-3 py-1 text-xs font-semibold text-[#854D0E]">Top 10</span>
        </div>
        <div className="overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white p-3 shadow-md">
          <div className="moving-track flex w-max gap-3">
            {carouselItems.map((product, idx) => (
              <button
                key={`${product.id}-${idx}`}
                onClick={() => window.open(`https://wa.me/9968743811?text=${encodeURIComponent(`I want ${product.name} - ${product.description} for 1 month`)}`, "_blank")}
                className="min-w-56 rounded-xl border border-[#E5E7EB] bg-[#F8FAFC] px-4 py-3 text-left transition duration-300 hover:scale-[1.03] hover:shadow-md"
              >
                <p className="text-sm font-semibold text-[#0F172A]">{product.name}</p>
                <p className="truncate mt-1 text-xs font-medium text-[#64748B]">{product.subcategory}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="catalogue">
        <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <h2 className="text-2xl font-bold text-[#0F172A]">Marketplace Catalogue</h2>
          <button
            onClick={onPopularToggle}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition duration-300 ${
              popularOnly ? "border-[#FACC15] bg-[#FEF9C3] text-[#854D0E]" : "border-[#E5E7EB] bg-white text-[#0F172A]"
            }`}
          >
            Popular only
          </button>
        </div>

        <div className="mb-5 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition duration-300 ${
                selectedCategory === category ? "bg-[#2563EB] text-white" : "border border-[#E5E7EB] bg-white text-[#475569]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <label className="mb-5 flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-4 py-2.5 shadow-md">
          <Search className="h-4 w-4 text-[#94A3B8]" />
          <input
            value={searchTerm}
            onChange={(event) => onSearchChange(event.target.value)}
            type="search"
            placeholder="Search by name, category, or description..."
            className="w-full bg-transparent text-sm font-medium text-[#0F172A] outline-none placeholder:text-[#94A3B8]"
          />
        </label>

        <motion.div layout className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {products.slice(0, visibleCount).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>

        {products.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-dashed border-[#CBD5E1] bg-white p-8 text-center">
            <p className="text-sm font-medium text-[#64748B]">No tools found for the current filters.</p>
          </div>
        ) : null}

        {canLoadMore ? (
          <div className="mt-7 text-center">
            <button
              onClick={onLoadMore}
              className="transition-lift rounded-full bg-[#2563EB] px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-[#1E40AF]"
            >
              Load More
            </button>
          </div>
        ) : null}
      </section>
      <div id="pricing" className="pt-10" />
      <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-md">
        <h3 className="text-xl font-bold text-[#0F172A]">Simple Marketplace Pricing</h3>
        <p className="mt-2 text-sm font-medium text-[#64748B]">Browse free, connect instantly, and close deals faster with one-click WhatsApp outreach.</p>
      </div>

      <div id="about" className="pt-10" />
      <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-md">
        <h3 className="text-xl font-bold text-[#0F172A]">About This Marketplace</h3>
        <p className="mt-2 text-sm font-medium text-[#64748B]">Built as a scalable static SaaS discovery layer, ready to connect with a backend catalog later.</p>
      </div>
    </section>
  );
}
