import type { Product } from "@/lib/data";

const PURCHASE_KEY = "saas-platform-purchases";

export type Purchase = Product & {
  purchaseDate: string;
  expiryDate: string;
};

function hasLocalStorage() {
  return typeof window !== "undefined" && typeof localStorage !== "undefined";
}

export function buyProduct(product: Product): Purchase {
  const purchases = getPurchases();
  const purchaseDate = new Date();
  const expiryDate = new Date(purchaseDate.getTime() + product.validity * 24 * 60 * 60 * 1000);

  const newPurchase: Purchase = {
    ...product,
    purchaseDate: purchaseDate.toISOString(),
    expiryDate: expiryDate.toISOString(),
  };

  const updated = [newPurchase, ...purchases];
  if (hasLocalStorage()) {
    localStorage.setItem(PURCHASE_KEY, JSON.stringify(updated));
  }
  return newPurchase;
}

export function getPurchases(): Purchase[] {
  if (!hasLocalStorage()) {
    return [];
  }

  const raw = localStorage.getItem(PURCHASE_KEY);
  if (!raw) {
    return [];
  }

  try {
    return JSON.parse(raw) as Purchase[];
  } catch {
    return [];
  }
}

export function getPurchaseStats(purchases: Purchase[]) {
  const now = new Date();
  const active = purchases.filter((purchase) => new Date(purchase.expiryDate) > now).length;
  const expired = purchases.length - active;

  return {
    active,
    expired,
    total: purchases.length,
  };
}