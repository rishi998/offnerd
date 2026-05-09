"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { buyProduct } from "@/lib/store";
import type { Product as MarketplaceProduct } from "@/data/products";
import type { Product as LegacyProduct } from "@/lib/data";
import { getMarketplaceView } from "@/data/marketplace";
import { useProductModal } from "@/components/marketplace/ProductModalProvider";
import { LogoDock } from "@/components/marketplace/LogoDock";

const WHATSAPP_PHONE = "9968743811";

type ProductCardProps = {
  product: MarketplaceProduct | LegacyProduct;
  onPurchase?: (name: string) => void;
};

function isMarketplaceProduct(product: MarketplaceProduct | LegacyProduct): product is MarketplaceProduct {
  return "subcategory" in product;
}

function getWhatsAppLink(product: MarketplaceProduct | LegacyProduct) {
  const message =
    isMarketplaceProduct(product)
      ? `Hi OFF Nerd — I'm interested in ${getMarketplaceView(product).listing.displayTitle}. Let's proceed with checkout details.`
      : `I want ${product.name} - ${product.description} for 1 month`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export function ProductCard({ product, onPurchase }: ProductCardProps) {
  const modal = useProductModal();
  const view = isMarketplaceProduct(product) ? getMarketplaceView(product) : null;
  const canOpenDetail = Boolean(modal && isMarketplaceProduct(product));

  const handleInquiry = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isMarketplaceProduct(product)) {
      window.open(getWhatsAppLink(product), "_blank", "noopener,noreferrer");
      return;
    }

    buyProduct(product);
    onPurchase?.(product.name);
  };

  const openDetail = () => {
    if (modal && isMarketplaceProduct(product)) modal.openProduct(product);
  };

  const trending = view?.listing.badges.includes("TRENDING");
  const limited = view?.listing.badges.includes("LIMITED_STOCK") || view?.listing.stockLevel !== "in_stock";

  return (
    <motion.article
      role={canOpenDetail ? "button" : undefined}
      tabIndex={canOpenDetail ? 0 : undefined}
      onClick={canOpenDetail ? openDetail : undefined}
      onKeyDown={
        canOpenDetail
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openDetail();
              }
            }
          : undefined
      }
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] as const }}
      whileHover={{ y: -6 }}
      className={`group rounded-3xl border border-[#E5E7EB]/90 bg-white p-6 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.12),0_2px_8px_-4px_rgba(15,23,42,0.08)] transition-shadow duration-300 hover:border-[#E2E8F0] hover:shadow-[0_24px_48px_-16px_rgba(15,23,42,0.18),0_8px_16px_-8px_rgba(37,99,235,0.08)] ${canOpenDetail ? "cursor-pointer" : ""}`}
    >
      <div className="mb-5 flex items-start justify-between gap-3">
        {isMarketplaceProduct(product) ? (
          <LogoDock key={product.id} product={product} size="sm" variant="light" hoverLift className="shrink-0" />
        ) : (
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] text-sm font-bold text-[#1E40AF] ring-1 ring-[#BFDBFE]/80">
            {product.name.slice(0, 2).toUpperCase()}
          </span>
        )}
        <div className="flex flex-col items-end gap-1.5">
          {trending ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-violet-500/15 to-blue-500/12 px-2.5 py-0.5 text-[0.65rem] font-extrabold uppercase tracking-wide text-violet-900 ring-1 ring-violet-200/70">
              <Sparkles className="h-3 w-3" aria-hidden />
              Trending
            </span>
          ) : null}
          <span
            className={`rounded-full px-3 py-1 text-xs font-bold shadow-sm ${
              limited
                ? "animate-pulse bg-rose-100 text-rose-800 ring-1 ring-rose-200/80"
                : "bg-[#FACC15] text-[#854D0E]"
            }`}
          >
            {isMarketplaceProduct(product) ? (product.popular ? "Best seller" : limited ? "Limited" : "Verified") : "Limited Offer"}
          </span>
        </div>
      </div>

      <h3 className="text-lg font-bold tracking-tight text-[#0F172A]">{product.name}</h3>
      <p className="truncate-2 mt-2.5 min-h-12 text-sm font-medium leading-relaxed text-[#64748B]">{product.description}</p>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <p className="text-xs font-semibold text-[#94A3B8]">
          {product.category}
          {isMarketplaceProduct(product) ? ` · ${product.subcategory}` : ""}
        </p>
        {view ? (
          <span className="rounded-full border border-[#DBEAFE] bg-[#EFF6FF] px-2.5 py-0.5 text-[0.7rem] font-extrabold text-[#1d4ed8]">
            {view.listing.durationLabel}
          </span>
        ) : null}
      </div>

      <div className="mt-5 flex items-end justify-between gap-3 border-t border-[#F1F5F9] pt-5">
        <div>
          {view ? (
            <>
              <p className="text-[0.65rem] font-bold uppercase tracking-wide text-[#94A3B8]">From</p>
              <p className="text-xl font-black tracking-tight text-[#0F172A]">{view.listing.salePriceDisplay}</p>
              <p className="text-xs font-semibold text-[#94A3B8] line-through">{view.listing.officialPriceDisplay}</p>
            </>
          ) : (
            <span className="text-xs font-semibold text-[#94A3B8]">Tap for details</span>
          )}
        </div>
        <motion.button
          type="button"
          onClick={handleInquiry}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="group/btn shrink-0 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_-6px_rgba(37,99,235,0.45)] transition-[box-shadow] duration-300 hover:shadow-[0_12px_32px_-4px_rgba(37,99,235,0.55),0_0_24px_-4px_rgba(37,99,235,0.35)]"
        >
          Get deal
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
        </motion.button>
      </div>

      {canOpenDetail ? (
        <p className="mt-3 text-center text-[0.65rem] font-semibold uppercase tracking-wide text-[#94A3B8]">Tap card for full breakdown</p>
      ) : null}
    </motion.article>
  );
}
