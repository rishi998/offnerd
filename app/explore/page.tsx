"use client";

import { useEffect, useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/data";

function LoadingCard() {
  return <div className="h-56 animate-pulse rounded-2xl border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900" />;
}

export default function Explore() {
  const [search, setSearch] = useState("");
  const [priceFilter, setPriceFilter] = useState<"all" | "under2000" | "above2000">("all");
  const [typeFilter, setTypeFilter] = useState<"all" | "tool" | "course" | "service">("all");
  const [isLoading, setIsLoading] = useState(true);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 700);
    return () => window.clearTimeout(timer);
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const searchMatch = product.name.toLowerCase().includes(search.toLowerCase());
      const typeMatch = typeFilter === "all" ? true : product.type === typeFilter;
      const priceMatch =
        priceFilter === "all"
          ? true
          : priceFilter === "under2000"
            ? product.price <= 2000
            : product.price > 2000;

      return searchMatch && typeMatch && priceMatch;
    });
  }, [search, typeFilter, priceFilter]);

  const showToast = (name: string) => {
    setToastMessage(`${name} purchased successfully`);
    window.setTimeout(() => setToastMessage(""), 2400);
  };

  return (
    <main className="min-h-screen bg-[#0B0F19] text-slate-100">
      <Navbar />
      <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white">Explore Products</h1>
            <p className="mt-1 text-sm text-slate-400">Find tools, courses, and services that match your workflow.</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8 grid gap-4 rounded-2xl border border-[#1F2937] bg-[#111827] p-4 shadow-xl md:grid-cols-3"
        >
          <label className="flex items-center gap-2 rounded-xl border border-[#1F2937] bg-[#0f172a] px-3 py-2">
            <Search className="h-4 w-4 text-slate-500" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full bg-transparent text-sm text-slate-200 outline-none placeholder:text-slate-500"
            />
          </label>

          <label className="flex items-center gap-2 rounded-xl border border-[#1F2937] bg-[#0f172a] px-3 py-2 text-sm">
            <SlidersHorizontal className="h-4 w-4 text-slate-500" />
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value as typeof typeFilter)}
              className="w-full bg-transparent text-slate-200 outline-none"
            >
              <option value="all">All Categories</option>
              <option value="tool">Tools</option>
              <option value="course">Courses</option>
              <option value="service">Services</option>
            </select>
          </label>

          <select
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value as typeof priceFilter)}
            className="rounded-xl border border-[#1F2937] bg-[#0f172a] px-3 py-2 text-sm text-slate-200 outline-none"
          >
            <option value="all">All Prices</option>
            <option value="under2000">Up to Rs. 2,000</option>
            <option value="above2000">Above Rs. 2,000</option>
          </select>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {isLoading
            ? Array.from({ length: 6 }).map((_, idx) => <LoadingCard key={idx} />)
            : filteredProducts.map((product) => <ProductCard key={product.id} product={product} onPurchase={showToast} />)}
        </div>

        {!isLoading && filteredProducts.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-dashed border-[#1F2937] bg-[#111827] p-8 text-center">
            <h3 className="text-lg font-semibold text-white">No products found</h3>
            <p className="mt-2 text-sm text-slate-400">Try another search keyword or filter combination.</p>
          </div>
        ) : null}
      </section>

      {toastMessage ? (
        <div className="fixed bottom-6 right-6 rounded-2xl bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-xl">
          Purchase Successful: {toastMessage}
        </div>
      ) : null}
    </main>
  );
}