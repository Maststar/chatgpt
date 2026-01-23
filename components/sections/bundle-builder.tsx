"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { useCart, useCurrency } from "@/components/providers";
import { formatPrice } from "@/lib/utils";

const bundleItems = products.slice(0, 6);

export function BundleBuilder() {
  const [selected, setSelected] = useState<string[]>([]);
  const { addItem } = useCart();
  const { currency } = useCurrency();

  const discountRate = 0.12;

  const selectedProducts = useMemo(
    () => bundleItems.filter((product) => selected.includes(product.id)),
    [selected]
  );

  const subtotal = selectedProducts.reduce((acc, product) => acc + product.priceUSD, 0);
  const discount = subtotal * discountRate;
  const total = subtotal - discount;

  const toggleProduct = (productId: string) => {
    setSelected((prev) => {
      if (prev.includes(productId)) {
        return prev.filter((id) => id !== productId);
      }
      if (prev.length >= 3) return prev;
      return [...prev, productId];
    });
  };

  const addBundleToCart = () => {
    selectedProducts.forEach((product) => addItem(product));
    setSelected([]);
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">Couple bundles</p>
          <h2 className="font-display text-3xl">Build your bundle</h2>
          <p className="mt-3 text-white/70">
            Choose any three pieces and enjoy a curated bundle price with complimentary silk
            wrapping.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {bundleItems.map((product) => {
              const isSelected = selected.includes(product.id);
              return (
                <button
                  key={product.id}
                  onClick={() => toggleProduct(product.id)}
                  className={`flex items-center gap-4 rounded-2xl border p-3 text-left transition ${
                    isSelected
                      ? "border-ember bg-white/10"
                      : "border-white/10 bg-white/5 hover:border-ember/60"
                  }`}
                  aria-pressed={isSelected}
                >
                  <div className="relative h-16 w-16 overflow-hidden rounded-xl">
                    <Image src={product.images[0]} alt={product.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{product.name}</p>
                    <p className="text-xs text-white/60">{formatPrice(product.priceUSD, currency)}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
        <div className="glass-card rounded-[2.5rem] p-8">
          <h3 className="font-display text-2xl">Your bundle</h3>
          <p className="mt-2 text-sm text-white/70">
            Select three items to unlock 12% bundle savings.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-white/70">
            {selectedProducts.length === 0 && <li>No items selected yet.</li>}
            {selectedProducts.map((product) => (
              <li key={product.id} className="flex items-center justify-between">
                <span>{product.name}</span>
                <span>{formatPrice(product.priceUSD, currency)}</span>
              </li>
            ))}
          </ul>
          <div className="lux-divider my-6" />
          <div className="space-y-2 text-sm text-white/70">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal, currency)}</span>
            </div>
            <div className="flex justify-between text-ember">
              <span>Bundle savings</span>
              <span>-{formatPrice(discount, currency)}</span>
            </div>
            <div className="flex justify-between text-base font-semibold text-ivory">
              <span>Total</span>
              <span>{formatPrice(total, currency)}</span>
            </div>
          </div>
          <Button
            className="mt-6 w-full"
            size="lg"
            disabled={selectedProducts.length !== 3}
            onClick={addBundleToCart}
          >
            Add bundle to cart
          </Button>
          <p className="mt-3 text-xs text-white/50">
            Bundle discount applies at checkout. Mix and match as you like.
          </p>
        </div>
      </div>
    </section>
  );
}
