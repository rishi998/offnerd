"use client";

import { motion } from "framer-motion";
import { categories } from "@/data/categories";

export function CategoryGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
      <div className="mb-7">
        <h2 className="text-2xl font-semibold text-white md:text-3xl">Top Marketplace Categories</h2>
        <p className="mt-2 text-sm text-slate-400 md:text-base">Handpicked tools and subscriptions across four major verticals.</p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.article
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="glass-card hover-glow rounded-2xl p-5"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-xl bg-gradient-to-r from-violet-600/25 to-blue-600/25 p-2">
                  <Icon className="h-5 w-5 text-violet-300" />
                </span>
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              </div>
              <p className="text-sm text-slate-400">{category.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {category.tools.map((tool) => (
                  <span key={tool} className="rounded-full border border-[#1F2937] bg-[#111827] px-2.5 py-1 text-xs text-slate-300">
                    {tool}
                  </span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
