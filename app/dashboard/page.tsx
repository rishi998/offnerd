"use client";

import { useEffect, useState } from "react";
import { ChartSpline, CircleDollarSign, ShieldCheck } from "lucide-react";
import { getPurchases, getPurchaseStats, type Purchase } from "@/lib/store";

export default function Dashboard() {
  const [items, setItems] = useState<Purchase[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setItems(getPurchases());
      setLoading(false);
    }, 700);

    return () => window.clearTimeout(timer);
  }, []);

  const stats = getPurchaseStats(items);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Dashboard Overview</h1>
        <p className="mt-1 text-sm text-slate-400">Your subscription health and purchase activity at a glance.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {loading ? (
          Array.from({ length: 3 }).map((_, idx) => <div key={idx} className="h-32 animate-pulse rounded-2xl border border-[#1F2937] bg-[#111827]" />)
        ) : (
          <>
            <div className="rounded-2xl border border-[#1F2937] bg-[#111827] p-6 shadow-xl">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-400">Active Subscriptions</p>
                <ShieldCheck className="h-4 w-4 text-emerald-500" />
              </div>
              <p className="mt-3 text-3xl font-bold text-white">{stats.active}</p>
            </div>

            <div className="rounded-2xl border border-[#1F2937] bg-[#111827] p-6 shadow-xl">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-400">Expired Items</p>
                <ChartSpline className="h-4 w-4 text-amber-500" />
              </div>
              <p className="mt-3 text-3xl font-bold text-white">{stats.expired}</p>
            </div>

            <div className="rounded-2xl border border-[#1F2937] bg-[#111827] p-6 shadow-xl">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-400">Total Purchases</p>
                <CircleDollarSign className="h-4 w-4 text-indigo-500" />
              </div>
              <p className="mt-3 text-3xl font-bold text-white">{stats.total}</p>
            </div>
          </>
        )}
      </div>

      {!loading && items.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-[#1F2937] bg-[#111827] p-10 text-center">
          <h3 className="text-lg font-semibold text-white">No purchases yet</h3>
          <p className="mt-2 text-sm text-slate-400">Buy a product from Explore to populate your dashboard.</p>
        </div>
      ) : null}
    </div>
  );
}