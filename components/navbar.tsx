"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, MessageCircle, X } from "lucide-react";

const NAV_ITEMS = [
  { href: "/services", label: "Services" },
  { href: "/saas", label: "SaaS" },
  { href: "/affiliate-corner", label: "Affiliate Corner" },
  { href: "/about-us", label: "About Us" },
  { href: "/contact-us", label: "Contact Us" },
] as const;

function useScrolled(threshold = 14) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScrolled();
  const reduceMotion = useReducedMotion();

  const linkActive = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(href));

  useEffect(() => {
    if (mobileOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
    return undefined;
  }, [mobileOpen]);

  const spring = reduceMotion ? { duration: 0.2 } : { type: "spring" as const, stiffness: 420, damping: 34, mass: 0.85 };

  return (
    <>
      <AnimatePresence>
        {mobileOpen ? (
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0.15 : 0.28 }}
            className="fixed inset-0 z-40 cursor-default bg-[#0f172a]/[0.12] backdrop-blur-[3px] lg:hidden"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          />
        ) : null}
      </AnimatePresence>

      <header className="relative sticky top-0 z-50 px-3 pt-4 pb-3 md:px-5 md:pb-4">
        {/* Ambient layer: logo yellow infused across the bar */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[min(220px,42vh)] bg-[radial-gradient(ellipse_95%_85%_at_50%_-8%,rgba(250,204,21,0.38)_0%,rgba(255,226,122,0.22)_28%,rgba(255,243,191,0.14)_48%,rgba(247,227,139,0.06)_68%,transparent_82%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#FDE68A]/25 via-[#FFF9E8]/08 to-transparent"
        />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            className={[
              "relative overflow-hidden rounded-[32px] border transition-[background-color,backdrop-filter,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
              "border-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.08)]",
              scrolled
                ? "border-white/25 bg-[linear-gradient(135deg,rgba(255,255,255,0.42)_0%,rgba(255,251,235,0.52)_42%,rgba(254,249,195,0.38)_100%)] shadow-[0_22px_56px_-20px_rgba(15,23,42,0.14),0_10px_28px_-14px_rgba(234,179,8,0.12)] backdrop-blur-[28px] supports-[backdrop-filter]:backdrop-saturate-[1.35]"
                : "border-white/[0.22] bg-[linear-gradient(145deg,rgba(255,255,255,0.58)_0%,rgba(255,249,232,0.62)_38%,rgba(253,230,138,0.42)_72%,rgba(250,204,21,0.14)_100%)] backdrop-blur-2xl supports-[backdrop-filter]:backdrop-saturate-150",
            ].join(" ")}
          >
            {/* Reflective top highlight */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/75 to-transparent"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-[32px] shadow-[inset_0_1px_0_rgba(255,255,255,0.55),inset_0_-1px_0_rgba(255,255,255,0.06)]"
            />
            {/* Soft inner wash */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-[32px] bg-gradient-to-b from-white/35 via-transparent to-[#FACC15]/[0.07]"
            />
            {/* Bottom ambient glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-10 left-1/2 h-14 w-[88%] max-w-3xl -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(250,204,21,0.22)_0%,transparent_70%)] blur-2xl"
            />

            <div className="relative flex items-center justify-between gap-4 px-4 py-3 md:gap-6 md:px-7 md:py-3.5">
              {/* Logo — blended glass dock */}
              <motion.div whileHover={reduceMotion ? undefined : { scale: 1.02 }} whileTap={reduceMotion ? undefined : { scale: 0.98 }}>
                <Link
                  href="/"
                  className="group/logo relative inline-flex items-center rounded-2xl border border-white/35 bg-gradient-to-br from-white/55 via-[#FFFCF0]/45 to-[#FFF3BF]/35 p-1.5 shadow-[0_8px_28px_-12px_rgba(234,179,8,0.35),inset_0_1px_0_rgba(255,255,255,0.65)] backdrop-blur-md transition-[border-color,box-shadow] duration-300 hover:border-white/50 hover:shadow-[0_12px_36px_-12px_rgba(234,179,8,0.42),0_0_0_1px_rgba(255,255,255,0.35),inset_0_1px_0_rgba(255,255,255,0.75)] md:p-2"
                  onClick={() => setMobileOpen(false)}
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover/logo:opacity-100"
                    style={{
                      boxShadow: "inset 0 0 24px rgba(250, 204, 21, 0.18)",
                    }}
                  />
                  <Image
                    src="/logo-off-nerd.png"
                    alt="OFF Nerd logo"
                    width={198}
                    height={84}
                    priority
                    className="relative z-[1] h-[2.85rem] w-auto rounded-[10px] object-contain md:h-[3.35rem]"
                  />
                </Link>
              </motion.div>

              {/* Desktop nav */}
              <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
                {NAV_ITEMS.map(({ href, label }) => {
                  const active = linkActive(href);
                  return (
                    <Link
                      key={href}
                      href={href}
                      className="group/nav relative px-1 py-1 text-[0.9375rem] font-medium tracking-[-0.01em] text-[#0c1844] outline-none transition-colors duration-300 hover:text-[#071229] focus-visible:ring-2 focus-visible:ring-[#2563EB]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                    >
                      <span className="relative z-[1] block px-3.5 py-2">{label}</span>

                      {active ? (
                        <motion.span
                          layoutId="navbar-active-pill"
                          className="absolute inset-0 z-0 rounded-full bg-white/48 shadow-[0_6px_20px_-10px_rgba(15,23,42,0.18),inset_0_1px_0_rgba(255,255,255,0.75)] ring-1 ring-white/45"
                          transition={spring}
                          style={{
                            background:
                              "linear-gradient(180deg, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.38) 100%), linear-gradient(135deg, rgba(37,99,235,0.06), rgba(250,204,21,0.07))",
                          }}
                        />
                      ) : (
                        <span className="absolute inset-0 z-0 rounded-full bg-white/0 opacity-0 transition-[opacity,background-color] duration-300 group-hover/nav:opacity-100 group-hover/nav:bg-white/28 group-hover/nav:shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]" />
                      )}

                      {active ? (
                        <span
                          aria-hidden
                          className="pointer-events-none absolute bottom-1 left-1/2 z-[2] h-[3px] w-7 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#2563EB] via-[#1d4ed8] to-[#1e40af] shadow-[0_0_14px_rgba(37,99,235,0.38)]"
                        />
                      ) : (
                        <span
                          aria-hidden
                          className="pointer-events-none absolute bottom-1 left-1/2 z-[2] h-[3px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#2563EB]/90 to-[#1e40af]/90 opacity-0 transition-all duration-300 group-hover/nav:w-6 group-hover/nav:opacity-60"
                        />
                      )}
                    </Link>
                  );
                })}
              </nav>

              {/* Direct Chat — tactile glossy CTA */}
              <div className="hidden items-center lg:flex">
                <motion.div whileHover={reduceMotion ? undefined : { y: -2 }} whileTap={reduceMotion ? undefined : { scale: 0.97 }}>
                  <Link
                    href="/direct-chat"
                    className="group/chat relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/25 bg-gradient-to-b from-[#1e4bbf] via-[#1d4ed8] to-[#172554] px-6 py-2.5 text-sm font-semibold tracking-tight text-white shadow-[0_14px_34px_-12px_rgba(30,64,175,0.55),0_8px_22px_-14px_rgba(15,23,42,0.35),inset_0_1px_0_rgba(255,255,255,0.35)] transition-[box-shadow,border-color] duration-300 hover:border-white/35 hover:shadow-[0_20px_44px_-14px_rgba(29,78,216,0.55),0_10px_28px_-12px_rgba(250,204,21,0.14),inset_0_1px_0_rgba(255,255,255,0.45)]"
                  >
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.22] to-transparent opacity-90"
                    />
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/2 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-[transform,opacity] duration-700 ease-out group-hover/chat:translate-x-[220%] group-hover/chat:opacity-100"
                    />
                    <MessageCircle className="relative z-[1] h-[17px] w-[17px] opacity-95" strokeWidth={2} aria-hidden />
                    <span className="relative z-[1]">Direct Chat</span>
                  </Link>
                </motion.div>
              </div>

              {/* Mobile toggle */}
              <motion.button
                type="button"
                onClick={() => setMobileOpen((o) => !o)}
                whileTap={reduceMotion ? undefined : { scale: 0.96 }}
                className="relative grid h-11 w-11 place-items-center rounded-2xl border border-white/35 bg-white/35 text-[#0c1844] shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] backdrop-blur-md transition-colors hover:bg-white/48 lg:hidden"
                aria-expanded={mobileOpen}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.button>
            </div>

            {/* Mobile panel */}
            <AnimatePresence initial={false}>
              {mobileOpen ? (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: reduceMotion ? 0.18 : 0.32, ease: [0.22, 1, 0.36, 1] }}
                  className="relative overflow-hidden lg:hidden"
                >
                  <div className="mx-3 mb-3 rounded-[26px] border border-white/28 bg-[linear-gradient(180deg,rgba(255,255,255,0.52)_0%,rgba(255,251,235,0.42)_55%,rgba(253,230,138,0.18)_100%)] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] backdrop-blur-2xl">
                    <div aria-hidden className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
                    <ul className="relative space-y-1 pt-1">
                      {NAV_ITEMS.map(({ href, label }, idx) => {
                        const active = linkActive(href);
                        return (
                          <motion.li
                            key={href}
                            initial={{ opacity: 0, x: reduceMotion ? 0 : -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: reduceMotion ? 0 : idx * 0.04 }}
                          >
                            <Link
                              href={href}
                              onClick={() => setMobileOpen(false)}
                              className={[
                                "flex items-center rounded-2xl px-4 py-3.5 text-[0.95rem] font-semibold tracking-[-0.01em] transition-[background,box-shadow,color] duration-300",
                                active
                                  ? "border border-white/35 bg-white/55 text-[#0c1844] shadow-[0_10px_26px_-16px_rgba(15,23,42,0.18),inset_0_1px_0_rgba(255,255,255,0.75)]"
                                  : "border border-transparent text-[#0c1844]/90 hover:border-white/25 hover:bg-white/35",
                              ].join(" ")}
                            >
                              <span className="flex-1">{label}</span>
                              {active ? (
                                <span className="ml-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-[#2563EB] to-[#1e40af] shadow-[0_0_12px_rgba(37,99,235,0.45)]" />
                              ) : null}
                            </Link>
                          </motion.li>
                        );
                      })}
                    </ul>
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: reduceMotion ? 0 : 0.08 }}
                      className="relative mt-3"
                    >
                      <Link
                        href="/direct-chat"
                        onClick={() => setMobileOpen(false)}
                        className="relative flex items-center justify-center gap-2 overflow-hidden rounded-2xl border border-white/22 bg-gradient-to-b from-[#1e4bbf] via-[#1d4ed8] to-[#172554] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_-16px_rgba(29,78,216,0.55),inset_0_1px_0_rgba(255,255,255,0.35)]"
                      >
                        <span aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.18] to-transparent" />
                        <MessageCircle className="relative z-[1] h-[17px] w-[17px]" strokeWidth={2} aria-hidden />
                        <span className="relative z-[1]">Direct Chat</span>
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.div>
        </div>
      </header>
    </>
  );
}
