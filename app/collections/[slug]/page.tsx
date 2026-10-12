import { notFound } from "next/navigation";
import { collectionMap } from "@/data/products";
import { ProductCard } from "@/components/product-card";

export function generateStaticParams() {
  return Object.keys(collectionMap).map((slug) => ({ slug }));
}

export default function CollectionPage({ params }: { params: { slug: string } }) {
  const collection = collectionMap[params.slug as keyof typeof collectionMap];

  if (!collection) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <p className="text-sm uppercase tracking-[0.3em] text-white/50">Collection</p>
      <h1 className="font-display text-4xl">{collection.name}</h1>
      <p className="mt-3 max-w-2xl text-white/70">{collection.description}</p>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {collection.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
