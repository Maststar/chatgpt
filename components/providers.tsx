"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { Product } from "@/data/products";

export type CartItem = {
  product: Product;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clear: () => void;
  itemCount: number;
  subtotalUSD: number;
};

type CurrencyContextValue = {
  currency: "USD" | "LKR";
  toggle: () => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);
const CurrencyContext = createContext<CurrencyContextValue | undefined>(undefined);

const CART_KEY = "obelva_cart_v1";
const CURRENCY_KEY = "obelva_currency";

export function Providers({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [currency, setCurrency] = useState<"USD" | "LKR">("USD");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem(CART_KEY) : null;
    if (stored) {
      setItems(JSON.parse(stored));
    }
    const storedCurrency = typeof window !== "undefined" ? localStorage.getItem(CURRENCY_KEY) : null;
    if (storedCurrency === "USD" || storedCurrency === "LKR") {
      setCurrency(storedCurrency);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(CART_KEY, JSON.stringify(items));
    }
  }, [items]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(CURRENCY_KEY, currency);
    }
  }, [currency]);

  const addItem = useCallback((product: Product) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback((productId: string) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.product.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const itemCount = useMemo(() => items.reduce((acc, item) => acc + item.quantity, 0), [items]);
  const subtotalUSD = useMemo(
    () => items.reduce((acc, item) => acc + item.product.priceUSD * item.quantity, 0),
    [items]
  );

  const cartValue = useMemo(
    () => ({ items, addItem, removeItem, updateQuantity, clear, itemCount, subtotalUSD }),
    [items, addItem, removeItem, updateQuantity, clear, itemCount, subtotalUSD]
  );

  const currencyValue = useMemo(
    () => ({
      currency,
      toggle: () => setCurrency((prev) => (prev === "USD" ? "LKR" : "USD"))
    }),
    [currency]
  );

  return (
    <CurrencyContext.Provider value={currencyValue}>
      <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>
    </CurrencyContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within Providers");
  }
  return context;
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within Providers");
  }
  return context;
}
