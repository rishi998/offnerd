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
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-md transition-all duration-300 hover:shadow-xl"
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#EFF6FF] text-sm font-bold text-[#1E40AF]">
          {isMarketplaceProduct(product) ? product.logo : product.name.slice(0, 2).toUpperCase()}
        </span>
        <span className="rounded-full bg-[#FACC15] px-3 py-1 text-xs font-semibold text-[#854D0E]">
          {isMarketplaceProduct(product) ? (product.popular ? "Popular" : "Top 10") : "Limited Offer"}
        </span>
      </div>

      <h3 className="text-lg font-bold text-[#0F172A]">{product.name}</h3>
      <p className="truncate-2 mt-2 min-h-12 text-sm font-medium leading-6 text-[#64748B]">{product.description}</p>
      <p className="mt-1 text-xs font-medium text-[#94A3B8]">{product.category}{isMarketplaceProduct(product) ? ` · ${product.subcategory}` : ""}</p>

      <div className="mt-5 flex items-center justify-between">
        <span className="text-xs font-medium text-[#94A3B8]">1 month</span>
        <button
          onClick={handleInquiry}
          className="transition-lift inline-flex items-center gap-1 rounded-full bg-[#2563EB] px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-[#1E40AF]"
        >
          Get Deal
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </motion.article>
  );
}
