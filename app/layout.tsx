import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { FloatingChatCTA } from "@/components/FloatingChatCTA";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  title: {
    default: "OFF Nerd — Digital Agency & SaaS Partner Platform",
    template: "%s · OFF Nerd",
  },
  description:
    "OFF Nerd designs and ships modern websites, SaaS platforms, and automation — plus a curated SaaS marketplace, affiliate corner, and newsletter.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "OFF Nerd — Digital Agency & SaaS Partner Platform",
    description:
      "Web development, SaaS builds, AI integrations, UI/UX, and a curated SaaS marketplace — built with a cohesive premium UI system.",
    url: "/",
    siteName: "OFF Nerd",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-[#F5F7FB] text-[#0F172A] antialiased`}>
        {children}
        <FloatingChatCTA />
      </body>
    </html>
  );
}