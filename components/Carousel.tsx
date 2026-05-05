import { highlightTools } from "@/data/products";

export function Carousel() {
  const items = [...highlightTools, ...highlightTools];

  return (
    <section className="border-y border-[#1F2937] py-10">
      <div className="mx-auto mb-5 max-w-7xl px-4 md:px-6">
        <h2 className="text-2xl font-semibold text-white md:text-3xl">Featured Highlights</h2>
        <p className="mt-2 text-sm text-slate-400">Trending picks from fast-growing SaaS teams.</p>
      </div>

      <div className="overflow-hidden">
        <div className="moving-track flex w-max gap-4 px-4 md:px-6">
          {items.map((tool, index) => (
            <article
              key={`${tool}-${index}`}
              className="min-w-64 rounded-2xl border border-[#1F2937] bg-[#111827] p-4 transition duration-300 hover:border-violet-500 hover:shadow-[0_0_22px_rgba(99,102,241,0.3)]"
            >
              <p className="text-sm font-semibold text-white">{tool}</p>
              <p className="mt-1 text-xs text-slate-400">High demand • Partner offer available</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
