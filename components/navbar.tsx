"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, MessageCircle, X } from "lucide-react";

const NAV_YELLOW = "#F9D02C";

const NAV_ITEMS = [
  { href: "/services", label: "Services" },
  { href: "/saas", label: "SaaS" },
  { href: "/affiliate-corner", label: "Affiliate Corner" },
  { href: "/about-us", label: "About Us" },
  { href: "/contact-us", label: "Contact Us" },
] as const;

const navLinkClass =
  "relative text-[0.95rem] font-medium text-[#0F172A] transition-colors duration-300 after:pointer-events-none after:absolute after:bottom-[-3px] after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-[#2563EB] after:transition-[width] after:duration-300 after:ease-out hover:text-black hover:after:w-full";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkActive = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <header style={{ backgroundColor: NAV_YELLOW }} className="sticky top-0 z-50 px-3 py-3 pt-4 md:px-5 md:pt-5">
      <div className="mx-auto max-w-7xl rounded-[1.75rem] border border-black/10 bg-white/45 px-4 py-3 shadow-[0_12px_40px_-12px_rgba(15,23,42,0.2),0_4px_16px_-4px_rgba(0,0,0,0.08)] backdrop-blur-xl md:px-7 md:py-4">
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="animate-logo-float inline-flex shrink-0 items-center" onClick={() => setMobileOpen(false)}>
            <Image
              src="/logo-off-nerd.png"
              alt="OFF Nerd logo"
              width={198}
              height={84}
              priority
              className="h-[3.25rem] w-auto rounded-[0.625rem] object-contain md:h-[4rem]"
            />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {NAV_ITEMS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`${navLinkClass} ${linkActive(href) ? "text-black after:w-full" : ""}`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/direct-chat"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#2563EB] via-[#1d4ed8] to-[#1e40af] px-6 py-2.5 text-sm font-semibold text-white shadow-[0_12px_36px_-10px_rgba(37,99,235,0.5)] transition-[box-shadow] duration-300 hover:shadow-[0_16px_44px_-8px_rgba(37,99,235,0.58),0_0_32px_-8px_rgba(250,204,21,0.35)]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                Direct Chat
              </Link>
            </motion.div>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="rounded-full border border-black/10 bg-white/60 p-2 text-[#0F172A] backdrop-blur-sm transition-colors hover:bg-white/85 lg:hidden"
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="mt-4 space-y-1 border-t border-black/10 pt-4 lg:hidden"
            >
              {NAV_ITEMS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`block rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors ${
                    linkActive(href) ? "bg-white/80 text-[#1d4ed8]" : "text-[#0F172A] hover:bg-white/70"
                  }`}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/direct-chat"
                onClick={() => setMobileOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_28px_-8px_rgba(37,99,235,0.45)]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                Direct Chat
              </Link>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
