"use client";

import { useCallback, useMemo, useState } from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";
import { Footer } from "@/components/Footer";
import { products, type ProductCategory } from "@/data/products";

const PAGE_SIZE = 9;

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"All" | ProductCategory>("All");
  const [popularOnly, setPopularOnly] = useState(false);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const scrollToSection = useCallback((sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const resetListingWindow = useCallback(() => {
    setVisibleCount(PAGE_SIZE);
  }, []);

  const handleSelectCategory = useCallback((category: ProductCategory) => {
    setSelectedCategory(category);
    resetListingWindow();
  }, [resetListingWindow]);

  const handleShowAll = useCallback(() => {
    setSelectedCategory("All");
    setPopularOnly(false);
    resetListingWindow();
  }, [resetListingWindow]);

  const filteredProducts = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    return products.filter((product) => {
      const categoryMatch = selectedCategory === "All" || product.category === selectedCategory;
      const popularMatch = popularOnly ? product.popular : true;
      const queryMatch =
        query.length === 0
          ? true
          : product.name.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query) ||
            product.subcategory.toLowerCase().includes(query);

      return categoryMatch && popularMatch && queryMatch;
    });
  }, [searchTerm, selectedCategory, popularOnly]);

  return (
    <main className="min-h-screen bg-[#F5F7FB] text-[#0F172A]">
      <Navbar onNavigate={scrollToSection} onSelectCategory={handleSelectCategory} onShowAll={handleShowAll} />
      <Hero
        searchTerm={searchTerm}
        onSearchChange={(value) => {
          setSearchTerm(value);
          resetListingWindow();
        }}
        onExploreTools={() => scrollToSection("catalogue")}
        onViewMarketplace={() => {
          handleShowAll();
          scrollToSection("catalogue");
        }}
      />
      <ProductGrid
        products={filteredProducts}
        visibleCount={visibleCount}
        canLoadMore={visibleCount < filteredProducts.length}
        searchTerm={searchTerm}
        selectedCategory={selectedCategory}
        popularOnly={popularOnly}
        onSearchChange={(value) => {
          setSearchTerm(value);
          resetListingWindow();
        }}
        onCategoryChange={(value) => {
          setSelectedCategory(value);
          resetListingWindow();
        }}
        onPopularToggle={() => {
          setPopularOnly((prev) => !prev);
          resetListingWindow();
        }}
        onLoadMore={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
      />

      <section id="cta" className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <div className="rounded-2xl border border-[#E5E7EB] bg-white p-8 text-center shadow-md">
          <h2 className="text-2xl font-bold text-[#0F172A] md:text-3xl">Sign up today to save on SaaS</h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm font-medium text-[#64748B] md:text-base">
            Join thousands of teams discovering exclusive software discounts every week.
          </p>
          <button onClick={() => scrollToSection("catalogue")} className="transition-lift mt-5 rounded-full bg-[#2563EB] px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-[#1E40AF]">
            Get Started
          </button>
        </div>
      </section>

      <Footer onNavigate={scrollToSection} />
    </main>
  );
}