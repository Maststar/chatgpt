import { featuredProducts } from "@/data/products";
import { ProductCard } from "@/components/product-card";

export function BestSellers() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.3em] text-white/50">Best sellers</p>
        <h2 className="font-display text-3xl">Signature gifts loved by couples</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
