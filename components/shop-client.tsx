"use client";

import { useMemo, useState } from "react";
import { products, type ProductCategory } from "@/data/products";
import { ProductCard } from "@/components/product-card";
import { Slider } from "@/components/ui/slider";
import { clampNumber, formatPrice } from "@/lib/utils";
import { useCurrency } from "@/components/providers";

const categories: (ProductCategory | "All")[] = [
  "All",
  "Romantic Gifts",
  "Matching Accessories",
  "Couple Home",
  "Date Night Kits"
];

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" }
];

export function ShopClient() {
  const { currency } = useCurrency();
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [priceRange, setPriceRange] = useState<[number, number]>([20, 120]);
  const [sortBy, setSortBy] = useState("featured");

  const filtered = useMemo(() => {
    const [min, max] = priceRange;
    let result = products.filter((product) => {
      const matchesCategory = category === "All" || product.category === category;
      const matchesPrice = product.priceUSD >= min && product.priceUSD <= max;
      return matchesCategory && matchesPrice;
    });

    result = [...result].sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case "price-asc":
          return a.priceUSD - b.priceUSD;
        case "price-desc":
          return b.priceUSD - a.priceUSD;
        default:
          return Number(b.featured) - Number(a.featured);
      }
    });

    return result;
  }, [category, priceRange, sortBy]);

  const updateRange = (value: number[]) => {
    setPriceRange([
      clampNumber(value[0], 0, 200),
      clampNumber(value[1], 0, 200)
    ] as [number, number]);
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.3em] text-white/50">Shop</p>
        <h1 className="font-display text-4xl">Discover Obelva essentials</h1>
        <p className="mt-3 text-white/70">
          Luxury gifts and experiences crafted for modern couples. Prices shown in {currency}.
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
        <aside className="space-y-8 rounded-[2rem] border border-white/10 bg-white/5 p-6">
          <div>
            <label className="text-sm uppercase tracking-[0.3em] text-white/50">Category</label>
            <div className="mt-3 space-y-2">
              {categories.map((item) => (
                <label key={item} className="flex items-center gap-2 text-sm text-white/70">
                  <input
                    type="radio"
                    name="category"
                    value={item}
                    checked={category === item}
                    onChange={() => setCategory(item)}
                    className="h-4 w-4 accent-ember"
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="text-sm uppercase tracking-[0.3em] text-white/50">Price range</label>
            <div className="mt-4">
              <Slider
                min={0}
                max={200}
                step={5}
                value={priceRange}
                onValueChange={updateRange}
                aria-label="Price range"
              />
              <div className="mt-3 flex items-center justify-between text-sm text-white/70">
                <span>{formatPrice(priceRange[0], currency)}</span>
                <span>{formatPrice(priceRange[1], currency)}</span>
              </div>
            </div>
          </div>
          <div>
            <label className="text-sm uppercase tracking-[0.3em] text-white/50">Sort by</label>
            <select
              className="mt-3 w-full rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80"
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value} className="bg-noir">
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </aside>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
