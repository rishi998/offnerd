"use client";

import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";
import { getPurchases, type Purchase } from "@/lib/store";

function getStatus(expiryDate: string) {
  return new Date(expiryDate) > new Date() ? "Active" : "Expired";
}

export default function ToolsPage() {
  const [items, setItems] = useState<Purchase[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setItems(getPurchases());
      setLoading(false);
    }, 700);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section>
      <h1 className="text-3xl font-bold text-white">My Tools</h1>
      <p className="mt-1 text-sm text-slate-400">Access your purchased products and check current validity.</p>

      <div className="mt-6 grid gap-4">
        {loading ? (
          Array.from({ length: 4 }).map((_, idx) => <div key={idx} className="h-28 animate-pulse rounded-2xl border border-[#1F2937] bg-[#111827]" />)
        ) : items.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-[#1F2937] bg-[#111827] p-10 text-center">
            <h3 className="text-lg font-semibold text-white">No tools available</h3>
            <p className="mt-2 text-sm text-slate-400">Buy products to access them here.</p>
          </div>
        ) : (
          items.map((item) => {
            const status = getStatus(item.expiryDate);
            const isActive = status === "Active";

            return (
              <article
                key={`${item.id}-${item.purchaseDate}`}
                className="flex flex-col gap-3 rounded-2xl border border-[#1F2937] bg-[#111827] p-5 shadow-xl transition hover:border-violet-500/50 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="text-base font-semibold text-white">{item.name}</h3>
                  <p className="mt-1 text-sm text-slate-400">
                    Expires on {new Date(item.expiryDate).toLocaleDateString()}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <span
                    className={`rounded-2xl px-3 py-1 text-xs font-semibold ${
                      isActive
                        ? "bg-emerald-500/20 text-emerald-300"
                        : "bg-rose-500/20 text-rose-300"
                    }`}
                  >
                    {status}
                  </span>
                  <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:shadow-[0_0_18px_rgba(59,130,246,0.35)]">
                    Access
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </article>
            );
          })
        )}
      </div>
    </section>
  );
}
