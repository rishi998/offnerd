"use client";

import { useEffect, useState } from "react";
import { getPurchases } from "@/lib/store";
import type { Purchase } from "@/lib/store";

export default function History() {
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
      <h1 className="text-3xl font-bold text-white">Purchase History</h1>
      <p className="mt-1 text-sm text-slate-400">A complete list of your transactions and purchase dates.</p>

      <div className="mt-6 overflow-hidden rounded-2xl border border-[#1F2937] bg-[#111827] shadow-xl">
        {loading ? (
          <div className="space-y-3 p-5">
            {Array.from({ length: 5 }).map((_, idx) => (
              <div key={idx} className="h-10 animate-pulse rounded-2xl bg-[#0f172a]" />
            ))}
          </div>
        ) : items.length === 0 ? (
          <div className="p-10 text-center">
            <h3 className="text-lg font-semibold text-white">No purchase history yet</h3>
            <p className="mt-2 text-sm text-slate-400">Once you buy products, they will appear here.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-[520px] w-full text-left text-sm">
              <thead className="border-b border-[#1F2937] bg-[#0f172a]">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-300">Name</th>
                  <th className="px-4 py-3 font-semibold text-slate-300">Date</th>
                  <th className="px-4 py-3 font-semibold text-slate-300">Price</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr
                    key={`${item.id}-${item.purchaseDate}`}
                    className="border-b border-[#1F2937] transition hover:bg-[#0f172a]"
                  >
                    <td className="px-4 py-3 text-slate-100">{item.name}</td>
                    <td className="px-4 py-3 text-slate-400">{new Date(item.purchaseDate).toLocaleDateString()}</td>
                    <td className="px-4 py-3 font-medium text-slate-100">Rs. {item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}