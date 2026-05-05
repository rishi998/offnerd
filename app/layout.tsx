import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NachoNacho Inspired SaaS Marketplace",
  description:
    "Pixel-close static SaaS marketplace landing page inspired by NachoNacho with mega-menu, product cards, and conversion-first layout.",
  openGraph: {
    title: "NachoNacho Inspired SaaS Marketplace",
    description:
      "Discover eCommerce SaaS products, compare offers, and connect instantly through WhatsApp-ready deal buttons.",
    url: "https://saas-marketplace.example",
    siteName: "NachoNacho Inspired Marketplace",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-[#F5F7FB] text-[#0F172A] antialiased`}>
        {children}
      </body>
    </html>
  );
}