"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Home, Menu, X } from "lucide-react";

const ICON_BTN =
  "relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-black/[0.08] bg-white/30 text-[#0c1844] shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_2px_10px_-6px_rgba(15,23,42,0.08)] backdrop-blur-sm transition-[background-color,box-shadow,transform] duration-300 hover:bg-white/45 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_4px_14px_-6px_rgba(15,23,42,0.1)] active:scale-[0.97]";

type MobileNavControlsProps = {
  pathname: string;
  menuOpen: boolean;
  onToggleMenu: () => void;
  onNavigate: () => void;
};

export function MobileNavControls({
  pathname,
  menuOpen,
  onToggleMenu,
  onNavigate,
}: MobileNavControlsProps) {
  const reduceMotion = useReducedMotion();
  const homeActive = pathname === "/";

  return (
    <motion.div
      className="flex shrink-0 items-center gap-2 lg:hidden"
      initial={false}
    >
      <motion.div whileTap={reduceMotion ? undefined : { scale: 0.94 }}>
        <Link
          href="/"
          aria-label="Home"
          aria-current={homeActive ? "page" : undefined}
          onClick={onNavigate}
          className={[
            ICON_BTN,
            homeActive
              ? "ring-2 ring-[#2563EB]/35 bg-white/55"
              : "ring-0",
          ].join(" ")}
        >
          <Home className="h-[18px] w-[18px] shrink-0" strokeWidth={2.25} aria-hidden />
        </Link>
      </motion.div>

      <motion.button
        type="button"
        onClick={onToggleMenu}
        whileTap={reduceMotion ? undefined : { scale: 0.94 }}
        className={[
          ICON_BTN,
          menuOpen ? "ring-2 ring-[#2563EB]/30 bg-white/55" : "",
        ].join(" ")}
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {menuOpen ? (
          <X className="h-[18px] w-[18px] shrink-0" strokeWidth={2.25} aria-hidden />
        ) : (
          <Menu className="h-[18px] w-[18px] shrink-0" strokeWidth={2.25} aria-hidden />
        )}
      </motion.button>
    </motion.div>
  );
}
