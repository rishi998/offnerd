"use client";

import { buyProduct } from "@/lib/store";
import type { Product } from "@/lib/data";

export function Card({ product }: { product: Product }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition">
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-sm text-gray-500">₹{product.price}</p>

      <button
        onClick={() => buyProduct(product)}
        className="mt-3 bg-black text-white px-4 py-2 rounded-xl"
      >
        Buy Now
      </button>
    </div>
  );
}