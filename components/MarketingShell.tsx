"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/Footer";

export function MarketingShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
