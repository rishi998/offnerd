"use client";

import type { ComponentProps } from "react";
import { motion } from "framer-motion";

export const primaryButtonClass =
  "group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#2563EB] via-[#1d4ed8] to-[#1e40af] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_36px_-10px_rgba(37,99,235,0.5)] transition-[box-shadow,transform] duration-300 hover:shadow-[0_16px_44px_-8px_rgba(37,99,235,0.6),0_0_28px_-6px_rgba(37,99,235,0.35)]";

export const secondaryButtonClass =
  "group inline-flex items-center justify-center gap-2 rounded-full border border-[#CBD5E1] bg-white/95 px-6 py-3 text-sm font-semibold text-[#0F172A] shadow-[0_8px_28px_-12px_rgba(15,23,42,0.15)] transition-[border-color,box-shadow,transform] duration-300 hover:border-[#94A3B8] hover:shadow-[0_14px_40px_-12px_rgba(15,23,42,0.18)]";

export function PrimaryButton({ className = "", ...props }: ComponentProps<typeof motion.button>) {
  return (
    <motion.button whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }} className={`${primaryButtonClass} ${className}`} {...props} />
  );
}

export function SecondaryButton({ className = "", ...props }: ComponentProps<typeof motion.button>) {
  return (
    <motion.button whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }} className={`${secondaryButtonClass} ${className}`} {...props} />
  );
}
