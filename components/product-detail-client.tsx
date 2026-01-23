"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useCart, useCurrency } from "@/components/providers";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/data/products";
import { ProductCard } from "@/components/product-card";

export function ProductDetailClient({ product, recommendations }: { product: Product; recommendations: Product[] }) {
  const [activeImage, setActiveImage] = useState(product.images[0]);
  const { addItem } = useCart();
  const { currency } = useCurrency();

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-white/10">
            <Image src={activeImage} alt={product.name} fill className="object-cover" />
          </div>
          <div className="mt-4 flex gap-3">
            {product.images.map((image) => (
              <button
                key={image}
                onClick={() => setActiveImage(image)}
                className={`relative h-20 w-20 overflow-hidden rounded-2xl border transition ${
                  activeImage === image ? "border-ember" : "border-white/10"
                }`}
                aria-label={`View ${product.name} image`}
              >
                <Image src={image} alt={product.name} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">{product.category}</p>
          <h1 className="mt-3 font-display text-4xl">{product.name}</h1>
          <p className="mt-4 text-white/70">{product.description}</p>
          <p className="mt-6 text-2xl font-semibold text-ember">
            {formatPrice(product.priceUSD, currency)}
          </p>
          <Button className="mt-6" size="lg" onClick={() => addItem(product)}>
            Add to cart
          </Button>
          <div className="mt-8 space-y-3 text-sm text-white/70">
            <p>Gift-ready packaging, satin ribbon, and personalized note.</p>
            <p>Ships worldwide in 5–10 business days with tracking.</p>
            <p>Pair with matching accessories for a curated look.</p>
          </div>
        </motion.div>
      </div>

      <div className="mt-16">
        <h2 className="font-display text-3xl">Pairs well with</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {recommendations.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
