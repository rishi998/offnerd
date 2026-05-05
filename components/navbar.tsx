"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { MegaMenu } from "@/components/MegaMenu";
import type { ProductCategory } from "@/data/products";

type NavbarProps = {
  onNavigate?: (sectionId: string) => void;
  onSelectCategory?: (category: ProductCategory) => void;
  onShowAll?: () => void;
};

export function Navbar({ onNavigate, onSelectCategory, onShowAll }: NavbarProps) {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileMarketOpen, setIsMobileMarketOpen] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMegaMenu = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setIsMegaMenuOpen(true);
  };

  const closeMegaMenuWithDelay = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 120);
  };

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const handleNavClick = (sectionId: string) => {
    onNavigate?.(sectionId);
    setIsMobileOpen(false);
  };

  const handleCategorySelect = (category: ProductCategory) => {
    onSelectCategory?.(category);
    onNavigate?.("catalogue");
    setIsMegaMenuOpen(false);
    setIsMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 px-3 py-3 md:px-5">
      <div className="mx-auto max-w-7xl rounded-[1.55rem] border border-[#E5E7EB] bg-white px-4 py-3 shadow-md md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="inline-flex items-center" onClick={() => handleNavClick("hero")}>
            <Image
              src="/logo-off-nerd.png"
              alt="OFF Nerd logo"
              width={132}
              height={56}
              priority
              className="h-12 w-auto rounded-md object-contain"
            />
          </Link>

          <div className="hidden items-center gap-6 lg:flex">
            <div className="relative" onMouseEnter={openMegaMenu} onMouseLeave={closeMegaMenuWithDelay}>
              <button
                onClick={() => {
                  setIsMegaMenuOpen((prev) => !prev);
                  handleNavClick("catalogue");
                }}
                className="inline-flex items-center gap-1 text-[0.95rem] font-medium text-[#0F172A] transition-colors duration-300 hover:text-[#1E40AF]"
              >
                SaaS &amp; AI Marketplace
                <ChevronDown className="h-4 w-4" />
              </button>
              <MegaMenu
                isOpen={isMegaMenuOpen}
                onCategorySelect={handleCategorySelect}
                onShowAll={() => {
                  onShowAll?.();
                  onNavigate?.("catalogue");
                }}
              />
            </div>
            <button onClick={() => handleNavClick("featured")} className="inline-flex items-center gap-1 text-[0.95rem] font-medium text-[#0F172A] transition-colors duration-300 hover:text-[#1E40AF]">
              Services Marketplace
              <ChevronDown className="h-4 w-4" />
            </button>
            <button onClick={() => handleNavClick("catalogue")} className="inline-flex items-center gap-1 text-[0.95rem] font-medium text-[#0F172A] transition-colors duration-300 hover:text-[#1E40AF]">
              Solutions
              <ChevronDown className="h-4 w-4" />
            </button>
            <button onClick={() => handleNavClick("pricing")} className="text-[0.95rem] font-medium text-[#0F172A] transition-colors duration-300 hover:text-[#1E40AF]">
              Pricing
            </button>
            <button onClick={() => handleNavClick("about")} className="inline-flex items-center gap-1 text-[0.95rem] font-medium text-[#0F172A] transition-colors duration-300 hover:text-[#1E40AF]">
              About
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <button onClick={() => handleNavClick("about")} className="rounded-full px-3 py-2 text-sm font-semibold text-[#0F172A] transition-colors duration-300 hover:text-[#1E40AF]">
              Log In
            </button>
            <button onClick={() => handleNavClick("cta")} className="rounded-full border border-[#CBD5E1] bg-white px-5 py-2.5 text-sm font-semibold text-[#0F172A] shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
              Get started
            </button>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileOpen((prev) => !prev)}
            className="rounded-full border border-[#E5E7EB] p-2 text-[#0F172A] lg:hidden"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileOpen ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="mt-4 space-y-3 border-t border-[#E5E7EB] pt-4 lg:hidden"
            >
              <button
                onClick={() => setIsMobileMarketOpen((prev) => !prev)}
                className="inline-flex items-center gap-1 text-left text-sm font-medium text-[#0F172A]"
              >
                SaaS &amp; AI Marketplace
                <ChevronDown className={`h-4 w-4 transition-transform ${isMobileMarketOpen ? "rotate-180" : ""}`} />
              </button>
              {isMobileMarketOpen ? (
                <div className="grid grid-cols-1 gap-2 rounded-xl border border-[#E5E7EB] bg-[#F8FAFC] p-3 sm:grid-cols-2">
                  {(["AI Tools", "OTT / Entertainment", "Development Tools", "Cloud / DevOps", "Marketing", "Design", "Communication", "Business / Finance"] as ProductCategory[]).map(
                    (category) => (
                      <button
                        key={category}
                        onClick={() => handleCategorySelect(category)}
                        className="rounded-lg px-2 py-1 text-left text-xs font-medium text-[#1E40AF] hover:bg-white"
                      >
                        {category}
                      </button>
                    ),
                  )}
                </div>
              ) : null}
              <button onClick={() => handleNavClick("featured")} className="block text-left text-sm font-medium text-[#0F172A]">
                Services Marketplace
              </button>
              <button onClick={() => handleNavClick("catalogue")} className="block text-left text-sm font-medium text-[#0F172A]">
                Solutions
              </button>
              <button onClick={() => handleNavClick("pricing")} className="block text-left text-sm font-medium text-[#0F172A]">
                Pricing
              </button>
              <button onClick={() => handleNavClick("about")} className="block text-left text-sm font-medium text-[#0F172A]">
                About
              </button>
              <div className="flex flex-col gap-2 pt-1 sm:flex-row sm:items-center">
                <button onClick={() => handleNavClick("about")} className="rounded-full px-3 py-2 text-sm font-semibold text-[#0F172A]">
                  Log In
                </button>
                <button onClick={() => handleNavClick("cta")} className="w-full rounded-full border border-[#CBD5E1] bg-white px-5 py-2.5 text-sm font-semibold text-[#0F172A] shadow-md sm:w-auto">
                  Get started
                </button>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}