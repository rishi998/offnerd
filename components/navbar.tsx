"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { MegaMenu } from "@/components/MegaMenu";
import type { ProductCategory } from "@/data/products";

const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/IZZsz4vGeSu7kBrYnONllq";
/** Solid fill sampled from logo artwork (`logo-off-nerd.png` JPEG yellow field, ~#f9d02c). */
const NAV_YELLOW = "#F9D02C";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

const navLinkClass =
  "group relative inline-flex items-center gap-1 text-[0.95rem] font-medium text-[#0F172A] transition-colors duration-300 after:pointer-events-none after:absolute after:bottom-[-3px] after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-current after:transition-[width] after:duration-300 after:ease-out hover:text-black hover:after:w-full";

function NavUnderlineLink({
  children,
  onClick,
  className = "",
}: {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button type="button" onClick={onClick} className={`${navLinkClass} ${className}`}>
      {children}
    </button>
  );
}

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
    <header
      style={{ backgroundColor: NAV_YELLOW }}
      className="sticky top-0 z-50 px-3 py-3 pt-4 md:px-5 md:pt-5"
    >
      <div
        style={{ backgroundColor: NAV_YELLOW }}
        className="mx-auto max-w-7xl rounded-[1.75rem] border border-black/12 px-4 py-3 shadow-[0_12px_40px_-12px_rgba(15,23,42,0.2),0_4px_16px_-4px_rgba(0,0,0,0.08)] md:px-7 md:py-4"
      >
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="animate-logo-float inline-flex items-center"
            onClick={() => handleNavClick("hero")}
          >
            <Image
              src="/logo-off-nerd.png"
              alt="OFF Nerd logo"
              width={198}
              height={84}
              priority
              className="h-[3.75rem] w-auto rounded-[0.625rem] object-contain md:h-[4rem]"
            />
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            <div className="relative" onMouseEnter={openMegaMenu} onMouseLeave={closeMegaMenuWithDelay}>
              <button
                onClick={() => {
                  setIsMegaMenuOpen((prev) => !prev);
                  handleNavClick("catalogue");
                }}
                className={navLinkClass}
              >
                SaaS &amp; AI Marketplace
                <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-px" />
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
            <NavUnderlineLink onClick={() => handleNavClick("catalogue")}>
              Solutions
              <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-px" />
            </NavUnderlineLink>
            <NavUnderlineLink onClick={() => handleNavClick("pricing")}>Pricing</NavUnderlineLink>
            <NavUnderlineLink onClick={() => handleNavClick("about")}>
              About
              <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-px" />
            </NavUnderlineLink>
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={WHATSAPP_GROUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[#128C7E] transition-all duration-300 hover:scale-105 hover:bg-black/5 hover:text-[#0F766E]"
              aria-label="Join our WhatsApp group"
            >
              <WhatsAppIcon className="h-[22px] w-[22px]" />
            </a>
            <motion.button
              type="button"
              onClick={() => handleNavClick("about")}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 420, damping: 22 }}
              className="rounded-full bg-black px-6 py-2.5 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_8px_28px_-6px_rgba(0,0,0,0.45),0_0_40px_-12px_rgba(0,0,0,0.35)] transition-shadow duration-300 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_12px_40px_-4px_rgba(0,0,0,0.55),0_0_56px_-8px_rgba(250,204,21,0.45)]"
            >
              About Us
            </motion.button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={WHATSAPP_GROUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center rounded-full border border-black/10 bg-white/50 p-2 text-[#128C7E] transition-all hover:scale-105 hover:bg-white/80"
              aria-label="Join our WhatsApp group"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
            <button
              type="button"
              onClick={() => setIsMobileOpen((prev) => !prev)}
              className="rounded-full border border-black/10 bg-white/50 p-2 text-[#0F172A] transition-colors hover:bg-white/80"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileOpen ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="mt-4 space-y-3 border-t border-black/10 pt-4 lg:hidden"
            >
              <button
                onClick={() => setIsMobileMarketOpen((prev) => !prev)}
                className="inline-flex items-center gap-1 text-left text-sm font-semibold text-[#0F172A]"
              >
                SaaS &amp; AI Marketplace
                <ChevronDown className={`h-4 w-4 transition-transform ${isMobileMarketOpen ? "rotate-180" : ""}`} />
              </button>
              {isMobileMarketOpen ? (
                <div className="grid grid-cols-1 gap-2 rounded-xl border border-black/10 bg-white/60 p-3 sm:grid-cols-2">
                  {(
                    [
                      "AI Tools",
                      "OTT / Entertainment",
                      "Development Tools",
                      "Cloud / DevOps",
                      "Marketing",
                      "Design",
                      "Communication",
                      "Business / Finance",
                    ] as ProductCategory[]
                  ).map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategorySelect(category)}
                      className="rounded-lg px-2 py-1.5 text-left text-xs font-semibold text-[#1E40AF] transition-colors hover:bg-white"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              ) : null}
              <button onClick={() => handleNavClick("catalogue")} className="block text-left text-sm font-semibold text-[#0F172A]">
                Solutions
              </button>
              <button onClick={() => handleNavClick("pricing")} className="block text-left text-sm font-semibold text-[#0F172A]">
                Pricing
              </button>
              <button onClick={() => handleNavClick("about")} className="block text-left text-sm font-semibold text-[#0F172A]">
                About
              </button>
              <a
                href={WHATSAPP_GROUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileOpen(false)}
                className="inline-flex items-center gap-2 rounded-xl border border-[#86EFAC]/80 bg-[#F0FDF4]/90 px-3 py-2.5 text-sm font-semibold text-[#15803D] transition-colors hover:bg-[#DCFCE7]"
              >
                <WhatsAppIcon className="h-5 w-5 shrink-0 text-[#25D366]" />
                WhatsApp group
              </a>
              <div className="pt-2">
                <motion.button
                  type="button"
                  onClick={() => handleNavClick("about")}
                  whileTap={{ scale: 0.98 }}
                  whileHover={{ scale: 1.02 }}
                  className="w-full rounded-full bg-black px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_28px_-6px_rgba(0,0,0,0.45)] sm:w-auto"
                >
                  About Us
                </motion.button>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
