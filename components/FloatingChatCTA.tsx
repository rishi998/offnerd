"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function FloatingChatCTA() {
  return (
    <motion.div
      className="pointer-events-none fixed bottom-5 right-5 z-[60] md:bottom-8 md:right-8"
      initial={{ opacity: 0, scale: 0.85, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 380, damping: 26, delay: 0.15 }}
    >
      <Link
        href="/direct-chat"
        className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#2563EB] via-[#1d4ed8] to-[#1e40af] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_40px_-10px_rgba(37,99,235,0.55),0_0_0_1px_rgba(255,255,255,0.12)] transition-[transform,box-shadow] duration-300 hover:shadow-[0_18px_48px_-8px_rgba(37,99,235,0.65),0_0_0_1px_rgba(255,255,255,0.18)]"
      >
        <MessageCircle className="h-[18px] w-[18px]" aria-hidden />
        <span className="max-sm:sr-only">Direct Chat</span>
      </Link>
    </motion.div>
  );
}
