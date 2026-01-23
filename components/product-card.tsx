"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart, useCurrency } from "@/components/providers";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const { currency } = useCurrency();

  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4">
          <Badge>{product.category}</Badge>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div>
          <Link href={`/product/${product.slug}`} className="text-lg font-semibold hover:text-ember">
            {product.name}
          </Link>
          <p className="mt-2 text-sm text-white/70">{product.description}</p>
        </div>
        <div className="mt-auto flex items-center justify-between">
          <p className="text-base font-semibold text-ember">
            {formatPrice(product.priceUSD, currency)}
          </p>
          <Button size="sm" variant="outline" onClick={() => addItem(product)}>
            Add to cart
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
