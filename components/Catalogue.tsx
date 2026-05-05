"use client";

import { useMemo, useState } from "react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

type CategoryFilter =
  | "All"
  | "AI Tools"
  | "OTT / Entertainment"
  | "Development Tools"
  | "Cloud / DevOps"
  | "Marketing"
  | "Design"
  | "Communication"
  | "Business / Finance";
type PopularityFilter = "All" | "High to Low" | "Low to High";

export function Catalogue() {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>("All");
  const [popularityFilter, setPopularityFilter] = useState<PopularityFilter>("All");

  const filteredProducts = useMemo(() => {
    const searched = products.filter((product) => {
      const isSearchMatch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase());
      const isCategoryMatch = categoryFilter === "All" ? true : product.category === categoryFilter;
      return isSearchMatch && isCategoryMatch;
    });

    if (popularityFilter === "High to Low") {
      return [...searched].sort((a, b) => Number(b.popular) - Number(a.popular));
    }
    if (popularityFilter === "Low to High") {
      return [...searched].sort((a, b) => Number(a.popular) - Number(b.popular));
    }
    return searched;
  }, [search, categoryFilter, popularityFilter]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
      <div className="mb-7">
        <h2 className="text-2xl font-semibold text-white md:text-3xl">SaaS Catalogue</h2>
        <p className="mt-2 text-sm text-slate-400">Browse and filter products by category, popularity, and search intent.</p>
      </div>

      <div className="mb-6 grid gap-3 rounded-2xl border border-[#1F2937] bg-[#111827] p-4 md:grid-cols-3">
        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search product name or feature..."
          className="rounded-xl border border-[#1F2937] bg-[#0f172a] px-3 py-2 text-sm text-slate-200 outline-none transition focus:border-violet-500"
        />
        <select
          value={categoryFilter}
          onChange={(event) => setCategoryFilter(event.target.value as CategoryFilter)}
          className="rounded-xl border border-[#1F2937] bg-[#0f172a] px-3 py-2 text-sm text-slate-200 outline-none transition focus:border-violet-500"
        >
          <option value="All">All Categories</option>
          <option value="AI Tools">AI Tools</option>
          <option value="OTT / Entertainment">OTT / Entertainment</option>
          <option value="Development Tools">Development Tools</option>
          <option value="Cloud / DevOps">Cloud / DevOps</option>
          <option value="Marketing">Marketing</option>
          <option value="Design">Design</option>
          <option value="Communication">Communication</option>
          <option value="Business / Finance">Business / Finance</option>
        </select>
        <select
          value={popularityFilter}
          onChange={(event) => setPopularityFilter(event.target.value as PopularityFilter)}
          className="rounded-xl border border-[#1F2937] bg-[#0f172a] px-3 py-2 text-sm text-slate-200 outline-none transition focus:border-violet-500"
        >
          <option value="All">Popularity: All</option>
          <option value="High to Low">Popularity: High to Low</option>
          <option value="Low to High">Popularity: Low to High</option>
        </select>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
