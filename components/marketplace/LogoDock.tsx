"use client";

import Image from "next/image";
import { useCallback, useMemo, useState } from "react";
import { motion } from "framer-motion";
import type { Product } from "@/data/products";
import type { GradientTheme } from "@/data/marketplace";
import { bucketAmbientGlow, getLogoEntry, pickLogoSrc, resolveLogoKey } from "@/lib/logo-registry";

function themeAmbientGlow(theme: GradientTheme | undefined): string {
  switch (theme) {
    case "ai":
      return "rgba(139,92,246,0.16)";
    case "dev":
      return "rgba(56,189,248,0.14)";
    case "design":
      return "rgba(251,191,36,0.16)";
    case "productivity":
      return "rgba(52,211,153,0.12)";
    default:
      return "rgba(37,99,235,0.1)";
  }
}

const SIZE_PX = {
  sm: 40,
  md: 52,
  lg: 72,
  hero: 112,
} as const;

export type LogoDockSize = keyof typeof SIZE_PX;

type LogoDockProps = {
  product: Pick<Product, "id" | "logoKey" | "logo" | "name">;
  size?: LogoDockSize;
  /** Light = default UI cards; dark = deep / tinted chrome */
  variant?: "light" | "dark";
  priority?: boolean;
  listingTheme?: GradientTheme;
  hoverLift?: boolean;
  className?: string;
};

function initialsFor(product: Pick<Product, "logo" | "name">): string {
  const mark = product.logo?.trim();
  if (mark && mark.length <= 3) return mark;
  return product.name.replace(/\s+/g, " ").trim().slice(0, 2).toUpperCase();
}

export function LogoDock({
  product,
  size = "md",
  variant = "light",
  priority = false,
  listingTheme,
  hoverLift = false,
  className = "",
}: LogoDockProps) {
  const logoKey = resolveLogoKey(product);
  const entry = getLogoEntry(logoKey);
  const px = SIZE_PX[size];

  const primarySrc = useMemo(() => pickLogoSrc(entry, variant), [entry, variant]);
  const [phase, setPhase] = useState<"primary" | "mono" | "initials">("primary");

  const ambient = useMemo(() => {
    const brand = entry?.glow ?? "rgba(37,99,235,0.12)";
    const bucket = entry ? bucketAmbientGlow[entry.bucket] : "rgba(148,163,184,0.12)";
    const thematic = themeAmbientGlow(listingTheme);
    return { brand, bucket, thematic };
  }, [entry, listingTheme]);

  const onImgError = useCallback(() => {
    setPhase((p) => (p === "primary" ? "mono" : "initials"));
  }, []);

  const showImg = Boolean(primarySrc) && phase !== "initials";
  const monoClass = phase === "mono" ? "brightness-0 contrast-[1.05]" : "";

  const darkAdaptiveClass =
    variant === "dark" && entry && !entry.logoDark ? "brightness-0 invert-[0.92]" : "";

  const dockInner = (
    <div
      className={`relative grid place-items-center rounded-2xl border backdrop-blur-xl transition-[transform,box-shadow] duration-300 ${
        variant === "dark"
          ? "border-white/12 bg-white/[0.07] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_12px_40px_-18px_rgba(0,0,0,0.55)]"
          : "border-white/65 bg-gradient-to-br from-white/75 via-white/55 to-white/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_14px_38px_-22px_rgba(15,23,42,0.28)]"
      }`}
      style={{
        width: px + 20,
        height: px + 20,
        padding: 10,
      }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-[1px] rounded-[15px] bg-gradient-to-br from-white/50 to-transparent opacity-80"
      />
      {showImg ? (
        <Image
          src={primarySrc!}
          alt={`${product.name} logo`}
          width={px}
          height={px}
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          unoptimized
          onError={onImgError}
          className={`relative z-[1] max-h-full max-w-full object-contain ${monoClass} ${darkAdaptiveClass}`}
        />
      ) : (
        <span
          className={`relative z-[1] select-none text-center font-extrabold tracking-tight ${
            size === "hero"
              ? "text-3xl sm:text-4xl"
              : size === "lg"
                ? "text-2xl"
                : size === "md"
                  ? "text-lg"
                  : "text-sm"
          } ${variant === "dark" ? "text-white/90" : "text-[#1e3a8a]"}`}
        >
          {initialsFor(product)}
        </span>
      )}
    </div>
  );

  return (
    <motion.div
      className={`relative isolate inline-flex ${hoverLift ? "group/dock" : ""} ${className}`}
      whileHover={hoverLift ? { y: -3 } : undefined}
      transition={{ type: "spring", stiffness: 420, damping: 28 }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-[-28%] rounded-[2rem] blur-2xl opacity-90 transition-opacity duration-500 group-hover/dock:opacity-100"
        style={{
          background: `radial-gradient(circle at 50% 40%, ${ambient.brand}, transparent 62%), radial-gradient(circle at 50% 80%, ${ambient.bucket}, transparent 55%), radial-gradient(circle at 50% 50%, ${ambient.thematic}, transparent 70%)`,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-[-12%] rounded-3xl opacity-60 blur-xl"
        style={{ boxShadow: `0 0 48px 2px ${entry?.glow ?? ambient.thematic}` }}
      />
      {dockInner}
    </motion.div>
  );
}
