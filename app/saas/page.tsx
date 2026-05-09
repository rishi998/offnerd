"use client";

import { useCallback, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { LogoMarquee } from "@/components/LogoMarquee";
import { MarketingShell } from "@/components/MarketingShell";
import { ProductModalProvider } from "@/components/marketplace/ProductModalProvider";
import { ProductGrid } from "@/components/ProductGrid";
import {
  matchesMarketplaceSearch,
  matchesQuickFilter,
  type QuickFilter,
} from "@/data/marketplace";
import { products, type ProductCategory } from "@/data/products";
import { primaryButtonClass } from "@/components/marketing/MarketingButtons";

const PAGE_SIZE = 9;

export default function SaasPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"All" | ProductCategory>("All");
  const [popularOnly, setPopularOnly] = useState(false);
  const [quickFilter, setQuickFilter] = useState<QuickFilter>(null);
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

  const handleShowAll = useCallback(() => {
    setSelectedCategory("All");
    setPopularOnly(false);
    setQuickFilter(null);
    resetListingWindow();
  }, [resetListingWindow]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch = selectedCategory === "All" || product.category === selectedCategory;
      const popularMatch = popularOnly ? product.popular : true;
      const quickOk = matchesQuickFilter(product, quickFilter);
      return (
        categoryMatch && popularMatch && quickOk && matchesMarketplaceSearch(product, searchTerm)
      );
    });
  }, [searchTerm, selectedCategory, popularOnly, quickFilter]);

  return (
    <MarketingShell>
      <ProductModalProvider>
      <main className="min-h-screen bg-[#F5F7FB] text-[#0F172A]">
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
          headline="SaaS & AI Marketplace"
          subheadline="Compare curated tools across AI, streaming, cloud, marketing, and finance — then connect instantly with WhatsApp-ready deal flows."
          showTags
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
        quickFilter={quickFilter}
        onQuickFilterChange={(value) => {
          setQuickFilter(value);
          resetListingWindow();
        }}
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
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0F172A] md:text-4xl">Never miss a renewal or drop</h2>
          <p className="mx-auto mt-3 max-w-2xl text-base font-medium leading-relaxed text-[#64748B]">
            Join the newsletter for curated SaaS deals, launch notes, and affiliate highlights.
          </p>
          <motion.div className="mt-8 flex flex-wrap items-center justify-center gap-3" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link href="/newsletter" className={primaryButtonClass}>
              Subscribe for deals
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      </main>
      </ProductModalProvider>
    </MarketingShell>
  );
}
