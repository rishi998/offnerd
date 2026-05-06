"use client";

import { useCallback, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/Hero";
import { LogoMarquee } from "@/components/LogoMarquee";
import { ProductGrid } from "@/components/ProductGrid";
import { Footer } from "@/components/Footer";
import { matchesMarketplaceSearch, products, type ProductCategory } from "@/data/products";

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
    return products.filter((product) => {
      const categoryMatch = selectedCategory === "All" || product.category === selectedCategory;
      const popularMatch = popularOnly ? product.popular : true;
      return categoryMatch && popularMatch && matchesMarketplaceSearch(product, searchTerm);
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
        searchResults={filteredProducts}
        resultsVisible={Boolean(searchTerm.trim())}
        visibleCount={visibleCount}
        canLoadMore={visibleCount < filteredProducts.length}
        onLoadMore={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
      />
      <LogoMarquee />
      <ProductGrid
        products={filteredProducts}
        visibleCount={visibleCount}
        canLoadMore={visibleCount < filteredProducts.length}
        searchTerm={searchTerm}
        listingInHero={Boolean(searchTerm.trim())}
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

      <section id="cta" className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
          className="rounded-3xl border border-[#E5E7EB]/90 bg-white/95 p-10 text-center shadow-[0_24px_64px_-28px_rgba(15,23,42,0.18)] backdrop-blur-sm md:p-14"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0F172A] md:text-4xl">
            Sign up today to save on SaaS
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base font-medium leading-relaxed text-[#64748B]">
            Join thousands of teams discovering exclusive software discounts every week.
          </p>
          <motion.button
            type="button"
            onClick={() => scrollToSection("catalogue")}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#2563EB] via-[#1d4ed8] to-[#1e40af] px-8 py-3 text-sm font-semibold text-white shadow-[0_14px_40px_-10px_rgba(37,99,235,0.55)] transition-shadow hover:shadow-[0_18px_48px_-8px_rgba(37,99,235,0.65)]"
          >
            Explore marketplace
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.button>
        </motion.div>
      </section>

      <Footer onNavigate={scrollToSection} />
    </main>
  );
}