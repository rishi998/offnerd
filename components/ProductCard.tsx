"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { buyProduct } from "@/lib/store";
import type { Product } from "@/data/products";
import type { Product as LegacyProduct } from "@/lib/data";

const WHATSAPP_PHONE = "9968743811";

type ProductCardProps = {
  product: Product | LegacyProduct;
  onPurchase?: (name: string) => void;
};

function isMarketplaceProduct(product: Product | LegacyProduct): product is Product {
  return "subcategory" in product;
}

function getWhatsAppLink(product: Product | LegacyProduct) {
  const message = `I want ${product.name} - ${product.description} for 1 month`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export function ProductCard({ product, onPurchase }: ProductCardProps) {
  const handleInquiry = () => {
    if (isMarketplaceProduct(product)) {
      window.open(getWhatsAppLink(product), "_blank", "noopener,noreferrer");
      return;
    }

    buyProduct(product);
    onPurchase?.(product.name);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] as const }}
      whileHover={{ y: -6 }}
      className="group rounded-3xl border border-[#E5E7EB]/90 bg-white p-6 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.12),0_2px_8px_-4px_rgba(15,23,42,0.08)] transition-shadow duration-300 hover:border-[#E2E8F0] hover:shadow-[0_24px_48px_-16px_rgba(15,23,42,0.18),0_8px_16px_-8px_rgba(37,99,235,0.08)]"
    >
      <div className="mb-5 flex items-center justify-between gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] text-sm font-bold text-[#1E40AF] ring-1 ring-[#BFDBFE]/80">
          {isMarketplaceProduct(product) ? product.logo : product.name.slice(0, 2).toUpperCase()}
        </span>
        <span className="rounded-full bg-[#FACC15] px-3 py-1 text-xs font-bold text-[#854D0E] shadow-sm">
          {isMarketplaceProduct(product) ? (product.popular ? "Popular" : "Top 10") : "Limited Offer"}
        </span>
      </div>

      <h3 className="text-lg font-bold tracking-tight text-[#0F172A]">{product.name}</h3>
      <p className="truncate-2 mt-2.5 min-h-12 text-sm font-medium leading-relaxed text-[#64748B]">{product.description}</p>
      <p className="mt-1.5 text-xs font-semibold text-[#94A3B8]">
        {product.category}
        {isMarketplaceProduct(product) ? ` · ${product.subcategory}` : ""}
      </p>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-xs font-semibold text-[#94A3B8]">1 month</span>
        <motion.button
          type="button"
          onClick={handleInquiry}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="group/btn inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_-6px_rgba(37,99,235,0.45)] transition-[box-shadow] duration-300 hover:shadow-[0_12px_32px_-4px_rgba(37,99,235,0.55),0_0_24px_-4px_rgba(37,99,235,0.35)]"
        >
          Get Deal
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
        </motion.button>
      </div>
    </motion.article>
  );
}
