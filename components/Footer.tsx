"use client";

import { motion } from "framer-motion";
import { Globe, Mail, MessageCircle, Send, Share2, Rss } from "lucide-react";

type FooterProps = {
  onNavigate: (sectionId: string) => void;
};

const footerColumns = {
  Company: ["about", "careers", "contact", "partners"],
  Features: ["catalogue", "featured", "pricing", "cta"],
  Info: ["hero", "pricing", "about", "footer"],
  "Popular Deals": ["catalogue", "catalogue", "featured", "catalogue"],
};

const socialIcons = [
  { Icon: Share2, label: "Share" },
  { Icon: Rss, label: "RSS" },
  { Icon: Globe, label: "Website" },
  { Icon: Mail, label: "Email" },
  { Icon: MessageCircle, label: "Chat" },
  { Icon: Send, label: "Send" },
];

export function Footer({ onNavigate }: FooterProps) {
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
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {Object.entries(footerColumns).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-bold uppercase tracking-wider text-blue-100">{title}</h3>
              <ul className="mt-5 space-y-2.5">
                {links.map((link, index) => (
                  <li key={`${link}-${index}`}>
                    <button
                      type="button"
                      onClick={() =>
                        onNavigate(link === "careers" || link === "contact" || link === "partners" ? "about" : link)
                      }
                      className="relative text-left text-[0.95rem] font-medium text-blue-100 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-200 hover:text-white hover:after:w-full"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-wider text-blue-100">Newsletter</h3>
            <p className="mt-4 text-sm font-medium leading-relaxed text-blue-100/90">
              Get the latest deals and marketplace updates weekly.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-medium text-white shadow-inner outline-none ring-1 ring-white/10 transition-shadow placeholder:text-blue-100/70 focus:ring-2 focus:ring-white/40"
              />
              <motion.button
                type="button"
                onClick={() => onNavigate("cta")}
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="w-full rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#1d4ed8] shadow-[0_8px_28px_-6px_rgba(0,0,0,0.25)] transition-shadow hover:shadow-lg sm:w-auto"
              >
                Join
              </motion.button>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-white/20 pt-8 md:flex-row md:items-center">
          <p className="text-sm font-semibold text-blue-100/95">© 2026 OFF Nerd. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-2.5">
            {socialIcons.map(({ Icon, label }) => (
              <motion.button
                key={label}
                type="button"
                aria-label={label}
                onClick={() => onNavigate("about")}
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/25 bg-white/10 text-white shadow-inner ring-1 ring-white/10 transition-[box-shadow] duration-300 hover:border-white/45 hover:bg-white/20 hover:shadow-[0_0_28px_-4px_rgba(255,255,255,0.45)]"
              >
                <Icon className="h-[18px] w-[18px]" />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
