"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, Mail, MessageCircle, Rss, Send, Share2 } from "lucide-react";

const quickLinks = [
  { href: "/services", label: "Services" },
  { href: "/saas", label: "SaaS Marketplace" },
  { href: "/affiliate-corner", label: "Affiliate Corner" },
  { href: "/newsletter", label: "Newsletter" },
  { href: "/about-us", label: "About Us" },
  { href: "/contact-us", label: "Contact Us" },
  { href: "/direct-chat", label: "Direct Chat" },
];

const serviceLinks = [
  { href: "/services#web", label: "Web Development" },
  { href: "/services#saas", label: "SaaS Development" },
  { href: "/services#ai", label: "AI Solutions" },
  { href: "/services#commerce", label: "E‑commerce" },
];

const legalLinks = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Service" },
];

const social = [
  { Icon: Share2, label: "Share", href: "#" },
  { Icon: Rss, label: "RSS", href: "/newsletter" },
  { Icon: Globe, label: "Website", href: "/" },
  { Icon: Mail, label: "Email", href: "/contact-us" },
  { Icon: MessageCircle, label: "Chat", href: "/direct-chat" },
  { Icon: Send, label: "Send", href: "/newsletter" },
];

export function Footer() {
  return (
    <footer
      id="footer"
      className="relative mt-20 overflow-hidden bg-gradient-to-b from-[#1d4ed8] via-[#2563EB] to-[#1e40af] text-white shadow-[0_-24px_64px_-28px_rgba(37,99,235,0.45)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent shadow-[0_0_24px_2px_rgba(191,219,254,0.5)]"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-wider text-blue-100">OFF Nerd</h3>
            <p className="mt-4 text-sm font-medium leading-relaxed text-blue-100/90">
              A digital agency building modern web experiences, SaaS platforms, automation, and growth-ready products.
            </p>
            <Link
              href="/direct-chat"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              Start a conversation
            </Link>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-blue-100">Quick links</h3>
            <ul className="mt-5 space-y-2.5">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="relative text-left text-[0.95rem] font-medium text-blue-100 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-200 hover:text-white hover:after:w-full"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-blue-100">Services</h3>
            <ul className="mt-5 space-y-2.5">
              {serviceLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="relative text-left text-[0.95rem] font-medium text-blue-100 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-200 hover:text-white hover:after:w-full"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="mt-8 space-y-2">
              {legalLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link href={href} className="text-sm font-medium text-blue-100/85 hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-blue-100">Newsletter</h3>
            <p className="mt-4 text-sm font-medium leading-relaxed text-blue-100/90">
              Tech updates, SaaS deals, build notes, and curated affiliate offers — weekly.
            </p>
            <form
              className="mt-5 flex flex-col gap-3 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Email address"
                className="w-full rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-medium text-white shadow-inner outline-none ring-1 ring-white/10 transition-shadow placeholder:text-blue-100/70 focus:ring-2 focus:ring-white/40"
              />
              <motion.span whileHover={{ scale: 1.04, y: -1 }} whileTap={{ scale: 0.98 }} className="sm:shrink-0">
                <Link
                  href="/newsletter"
                  className="flex w-full items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#1d4ed8] shadow-[0_8px_28px_-6px_rgba(0,0,0,0.25)] transition-shadow hover:shadow-lg sm:w-auto"
                >
                  Subscribe
                </Link>
              </motion.span>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-white/20 pt-8 md:flex-row md:items-center">
          <p className="text-sm font-semibold text-blue-100/95">© {new Date().getFullYear()} OFF Nerd. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-2.5">
            {social.map(({ Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/25 bg-white/10 text-white shadow-inner ring-1 ring-white/10 transition-[box-shadow] duration-300 hover:border-white/45 hover:bg-white/20 hover:shadow-[0_0_28px_-4px_rgba(255,255,255,0.45)]"
              >
                <Icon className="h-[18px] w-[18px]" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
