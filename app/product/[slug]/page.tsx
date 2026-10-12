import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { ProductDetailClient } from "@/components/product-detail-client";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = products.find((item) => item.slug === params.slug);
  if (!product) return {};
  return {
    title: `${product.name} | Obelva`,
    description: product.description,
    openGraph: {
      title: `${product.name} | Obelva`,
      description: product.description,
      images: [{ url: product.images[0], width: 1200, height: 1600, alt: product.name }]
    }
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((item) => item.slug === params.slug);
  if (!product) {
    notFound();
  }

  const recommendations = products.filter((item) => item.id !== product.id).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images,
    sku: product.id,
    brand: {
      "@type": "Brand",
      name: "Obelva"
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: product.priceUSD,
      availability: "https://schema.org/InStock"
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProductDetailClient product={product} recommendations={recommendations} />
    </>
  );
}
