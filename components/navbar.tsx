"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Home, Menu, MessageCircle, X } from "lucide-react";

/** Solid navbar fill — matches logo field in `/logo-off-nerd.png`. */
const NAVBAR_YELLOW = "#F9D02C";

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

/** Desktop (lg+) only — hover scale on the logo must not run on mobile or it overflows narrow viewports. */
function useLgBreakpoint() {
  const [lg, setLg] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const apply = () => setLg(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return lg;
}

function NavbarHomeIcon({
  pathname,
  compact,
  reduceMotion,
  onNavigate,
}: {
  pathname: string;
  compact?: boolean;
  reduceMotion: boolean | null;
  onNavigate: () => void;
}) {
  const active = pathname === "/";

  const glassRadius = compact ? "rounded-lg" : "rounded-2xl";

  const activePillClass = compact
    ? active
      ? "opacity-100 ring-1 ring-white/35 shadow-[0_2px_8px_-4px_rgba(15,23,42,0.06),inset_0_1px_0_rgba(255,255,255,0.42)]"
      : "opacity-0 ring-white/0 shadow-[0_3px_10px_-6px_rgba(15,23,42,0.05)] group-hover/home:opacity-100 group-hover/home:ring-white/28 group-hover/home:shadow-[0_3px_10px_-5px_rgba(15,23,42,0.06),inset_0_1px_0_rgba(255,255,255,0.38)]"
    : active
      ? "opacity-100 shadow-[0_10px_28px_-14px_rgba(37,99,235,0.35),0_6px_18px_-12px_rgba(250,204,21,0.22),inset_0_1px_0_rgba(255,255,255,0.72)] ring-white/55"
      : "opacity-0 ring-white/0 shadow-[0_12px_28px_-16px_rgba(15,23,42,0.12)] group-hover/home:opacity-100 group-hover/home:ring-white/42 group-hover/home:shadow-[0_14px_34px_-18px_rgba(37,99,235,0.12),inset_0_1px_0_rgba(255,255,255,0.55)]";

  const activePillBackground =
    compact && active
      ? "linear-gradient(180deg, rgba(255,255,255,0.36) 0%, rgba(255,255,255,0.22) 100%), linear-gradient(135deg, rgba(37,99,235,0.03), rgba(250,204,21,0.04))"
      : !compact && active
        ? "linear-gradient(180deg, rgba(255,255,255,0.78) 0%, rgba(255,255,255,0.42) 100%), linear-gradient(135deg, rgba(37,99,235,0.12), rgba(250,204,21,0.14))"
        : "linear-gradient(180deg, rgba(255,255,255,0.52) 0%, rgba(255,255,255,0.22) 100%)";

  return (
    <motion.div
      whileHover={reduceMotion ? undefined : compact ? undefined : { y: -2, scale: 1.035 }}
      whileTap={reduceMotion ? undefined : { scale: 0.97 }}
      className="relative shrink-0"
    >
      <Link
        href="/"
        aria-label="Home"
        onClick={onNavigate}
        className={[
          "group/home relative z-[1] inline-flex outline-none transition-[color,filter] duration-300",
          compact
            ? "grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-lg border border-black/[0.08] bg-gradient-to-b from-white/26 to-white/[0.1] text-[#020617] shadow-[inset_0_1px_0_rgba(255,255,255,0.38),0_1px_6px_-3px_rgba(15,23,42,0.04)] transition-[background-color,box-shadow,filter] duration-300 hover:from-white/32 hover:to-white/[0.14] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.44),0_2px_8px_-4px_rgba(15,23,42,0.05)]"
            : "items-center justify-center rounded-2xl px-3 py-2",
          !compact && "text-[#0c1844]",
          "focus-visible:ring-2 focus-visible:ring-[#2563EB]/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F9D02C]",
        ].join(" ")}
      >
        <span
          aria-hidden
          className={[
            "pointer-events-none absolute inset-0 ring-1 transition-[opacity,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
            glassRadius,
            activePillClass,
          ].join(" ")}
          style={{ background: activePillBackground }}
        />
        <Home
          className={
            compact
              ? "relative z-[2] h-4 w-4 shrink-0 text-[#020617] drop-shadow-[0_0.5px_0_rgba(255,255,255,0.55)]"
              : "relative z-[2] h-[18px] w-[18px] shrink-0"
          }
          strokeWidth={compact ? 2.6 : 2}
          aria-hidden
        />
      </Link>
    </motion.div>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScrolled();
  const reduceMotion = useReducedMotion();
  const isLg = useLgBreakpoint();

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
            className="fixed inset-0 z-40 cursor-default bg-[#0f172a]/[0.08] backdrop-blur-[2px] lg:hidden"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          />
        ) : null}
      </AnimatePresence>

      <header className="relative sticky top-0 z-50 box-border w-full min-w-0 max-w-[100vw] pt-2 pb-1.5 pl-[max(10px,env(safe-area-inset-left,0px))] pr-[max(10px,env(safe-area-inset-right,0px))] max-[340px]:pt-1.5 max-[340px]:pb-1.5 max-[340px]:pl-[max(8px,env(safe-area-inset-left,0px))] max-[340px]:pr-[max(8px,env(safe-area-inset-right,0px))] min-[375px]:max-lg:pt-2 min-[375px]:max-lg:pb-1.5 min-[375px]:max-lg:pl-[max(12px,env(safe-area-inset-left,0px))] min-[375px]:max-lg:pr-[max(12px,env(safe-area-inset-right,0px))] lg:max-w-none lg:px-5 lg:pt-4 lg:pb-4">
        <div className="relative mx-auto w-full min-w-0 max-w-7xl">
          <motion.div
            className={[
              "relative box-border w-full min-w-0 max-w-full overflow-hidden border border-black/[0.09] transition-[box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] max-lg:rounded-[22px] lg:rounded-[32px]",
              scrolled
                ? "max-lg:shadow-[0_8px_24px_-12px_rgba(15,23,42,0.08),inset_0_1px_0_rgba(255,255,255,0.18)] lg:shadow-[0_22px_56px_-18px_rgba(15,23,42,0.16),inset_0_1px_0_rgba(255,255,255,0.32)]"
                : "max-lg:shadow-[0_4px_16px_-8px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.2)] lg:shadow-[0_10px_40px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.35)]",
            ].join(" ")}
            style={{ backgroundColor: NAVBAR_YELLOW }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 max-lg:rounded-[22px] max-lg:shadow-[inset_0_1px_0_rgba(255,255,255,0.17),inset_0_-1px_0_rgba(0,0,0,0.025)] lg:rounded-[32px] lg:shadow-[inset_0_1px_0_rgba(255,255,255,0.28),inset_0_-1px_0_rgba(0,0,0,0.04)]"
            />

            <div className="relative flex w-full min-w-0 max-w-full items-center justify-between gap-2 px-2 py-2 max-[340px]:gap-1.5 max-[340px]:px-1.5 max-[340px]:py-1.5 min-[375px]:max-lg:gap-2 min-[375px]:max-lg:px-2.5 min-[375px]:max-lg:py-2 lg:gap-6 lg:px-7 lg:py-3.5">
              <div className="flex min-w-0 flex-1 items-center lg:w-auto lg:flex-none lg:shrink-0">
                {/* Logo — no frame; sits directly on navbar yellow */}
                <motion.div
                  className="min-w-0 max-w-full"
                  whileHover={reduceMotion || !isLg ? undefined : { scale: 1.02 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                >
                  <Link
                    href="/"
                    className="relative flex max-w-full items-center rounded-md outline-none focus-visible:ring-2 focus-visible:ring-[#1e40af]/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F9D02C] lg:inline-flex"
                    onClick={() => setMobileOpen(false)}
                  >
                    <Image
                      src="/logo-off-nerd.png"
                      alt="OFF Nerd logo"
                      width={277}
                      height={118}
                      priority
                      sizes="(max-width: 1023px) 150px, 220px"
                      className="h-[2.4rem] w-auto max-w-[min(100%,9.25rem)] object-contain object-left max-[340px]:h-[2.05rem] max-[340px]:max-w-[min(100%,8.25rem)] min-[375px]:max-lg:h-[2.65rem] min-[375px]:max-lg:max-w-[min(100%,10.5rem)] lg:h-[4.69rem] lg:max-w-none"
                    />
                  </Link>
                </motion.div>
              </div>

              {/* Desktop: Home icon + links — centered between logo and Direct Chat */}
              <nav
                className="hidden min-w-0 flex-1 items-center justify-center gap-1 lg:flex"
                aria-label="Primary"
              >
                <NavbarHomeIcon pathname={pathname} reduceMotion={reduceMotion} onNavigate={() => setMobileOpen(false)} />
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

              {/* Mobile: Home + menu · Desktop: Direct Chat */}
              <div className="flex shrink-0 items-center gap-1 max-[340px]:gap-1 lg:gap-2.5">
                <span className="shrink-0 lg:hidden">
                  <NavbarHomeIcon
                    pathname={pathname}
                    compact
                    reduceMotion={reduceMotion}
                    onNavigate={() => setMobileOpen(false)}
                  />
                </span>

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

                {/* Mobile toggle — glass treatment aligned with compact home */}
                <motion.button
                  type="button"
                  onClick={() => setMobileOpen((o) => !o)}
                  whileTap={reduceMotion ? undefined : { scale: 0.96 }}
                  className="relative grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-black/[0.08] bg-gradient-to-b from-white/26 to-white/[0.1] text-[#020617] shadow-[inset_0_1px_0_rgba(255,255,255,0.38),0_1px_6px_-3px_rgba(15,23,42,0.04)] transition-[background-color,box-shadow,color] duration-300 hover:from-white/32 hover:to-white/[0.14] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.44),0_2px_8px_-4px_rgba(15,23,42,0.05)] lg:hidden"
                  aria-expanded={mobileOpen}
                  aria-label="Toggle menu"
                >
                  {mobileOpen ? (
                    <X className="relative z-[1] h-4 w-4 drop-shadow-[0_0.5px_0_rgba(255,255,255,0.5)]" strokeWidth={2.6} aria-hidden />
                  ) : (
                    <Menu className="relative z-[1] h-4 w-4 drop-shadow-[0_0.5px_0_rgba(255,255,255,0.5)]" strokeWidth={2.6} aria-hidden />
                  )}
                </motion.button>
              </div>
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
                  <div
                    className="mx-3 mb-3 rounded-[26px] border border-black/10 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]"
                    style={{ backgroundColor: NAVBAR_YELLOW }}
                  >
                    <ul className="relative space-y-1 pt-1">
                      <motion.li
                        initial={{ opacity: 0, x: reduceMotion ? 0 : -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0 }}
                      >
                        <Link
                          href="/"
                          onClick={() => setMobileOpen(false)}
                          className={[
                            "flex items-center gap-3 rounded-2xl px-4 py-3.5 text-[0.95rem] font-semibold tracking-[-0.01em] transition-[background,box-shadow,color] duration-300",
                            pathname === "/"
                              ? "border border-white/35 bg-white/55 text-[#0c1844] shadow-[0_10px_26px_-16px_rgba(15,23,42,0.18),inset_0_1px_0_rgba(255,255,255,0.75)]"
                              : "border border-transparent text-[#0c1844]/90 hover:border-white/25 hover:bg-white/35",
                          ].join(" ")}
                        >
                          <Home className="h-5 w-5 shrink-0 text-[#0c1844]" strokeWidth={2} aria-hidden />
                          <span className="flex-1">Home</span>
                          {pathname === "/" ? (
                            <span className="ml-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-[#2563EB] to-[#1e40af] shadow-[0_0_12px_rgba(37,99,235,0.45)]" />
                          ) : null}
                        </Link>
                      </motion.li>
                      {NAV_ITEMS.map(({ href, label }, idx) => {
                        const active = linkActive(href);
                        return (
                          <motion.li
                            key={href}
                            initial={{ opacity: 0, x: reduceMotion ? 0 : -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: reduceMotion ? 0 : (idx + 1) * 0.04 }}
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
