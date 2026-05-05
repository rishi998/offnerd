"use client";

import { motion, AnimatePresence } from "framer-motion";
import { categoryStructure, type ProductCategory } from "@/data/products";

type MegaMenuProps = {
  isOpen: boolean;
  onCategorySelect: (category: ProductCategory) => void;
  onShowAll: () => void;
};

const collections = [
  "Top 10 Tools",
  "Renewal Discounts",
  "Featured Products",
  "New SaaS Products",
  "Lifetime Discounts",
  "AI Enabled SaaS",
  "No-Code SaaS",
  "Startup Tools",
].slice(0, 8);

export function MegaMenu({ isOpen, onCategorySelect, onShowAll }: MegaMenuProps) {
  const leftCategories = categoryStructure.slice(0, 4);
  const middleCategories = categoryStructure.slice(4, 8);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="absolute left-0 top-full z-50 mt-3 w-[800px] max-w-[92vw] rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-xl"
        >
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-[#1E1B4B] md:text-2xl">Categories</h3>
              <ul className="space-y-2">
                {leftCategories.map((entry) => (
                  <li key={entry.category}>
                    <button
                      onClick={() => onCategorySelect(entry.category)}
                      className="text-left text-sm font-medium text-[#1E3A8A] transition-colors duration-300 hover:text-[#1E40AF]"
                    >
                      {entry.category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-9">
              <ul className="space-y-2">
                {middleCategories.map((entry) => (
                  <li key={entry.category}>
                    <button
                      onClick={() => onCategorySelect(entry.category)}
                      className="text-left text-sm font-medium text-[#1E3A8A] transition-colors duration-300 hover:text-[#1E40AF]"
                    >
                      {entry.category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-bold text-[#1E1B4B] md:text-2xl">Collections</h3>
              <ul className="space-y-2">
                {collections.map((item) => (
                  <li key={item}>
                    <button onClick={onShowAll} className="text-left text-sm font-medium text-[#1E3A8A] transition-colors duration-300 hover:text-[#1E40AF]">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <button
            onClick={onShowAll}
            className="mt-6 rounded-full border border-[#CBD5E1] bg-white px-4 py-2 text-sm font-semibold text-[#1E40AF] shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
          >
            View entire SaaS &amp; AI Marketplace →
          </button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
