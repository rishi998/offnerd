"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import type { Product } from "@/data/products";
import { ProductDetailModal } from "@/components/marketplace/ProductDetailModal";

type ProductModalContextValue = {
  openProduct: (product: Product) => void;
  closeModal: () => void;
  activeProduct: Product | null;
};

const ProductModalContext = createContext<ProductModalContextValue | null>(null);

export function ProductModalProvider({ children }: { children: React.ReactNode }) {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  const openProduct = useCallback((product: Product) => {
    setActiveProduct(product);
  }, []);

  const closeModal = useCallback(() => {
    setActiveProduct(null);
  }, []);

  const value = useMemo(
    () => ({
      openProduct,
      closeModal,
      activeProduct,
    }),
    [activeProduct, closeModal, openProduct],
  );

  return (
    <ProductModalContext.Provider value={value}>
      {children}
      <ProductDetailModal product={activeProduct} open={Boolean(activeProduct)} onClose={closeModal} />
    </ProductModalContext.Provider>
  );
}

export function useProductModal(): ProductModalContextValue | null {
  return useContext(ProductModalContext);
}
