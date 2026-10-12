import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const collections = [
  {
    title: "For Her",
    description: "Rose gold accents, soft silk, and elegant keepsakes.",
    href: "/collections/for-her"
  },
  {
    title: "For Him",
    description: "Refined accessories and elevated at-home rituals.",
    href: "/collections/for-him"
  },
  {
    title: "Date Night",
    description: "Curated experiences for unforgettable evenings.",
    href: "/collections/date-night"
  }
];

export function FeaturedCollections() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">Collections</p>
          <h2 className="font-display text-3xl">Elevated gifts for every duo</h2>
        </div>
        <Link href="/collections/for-her">
          <Button variant="outline" size="sm">
            View all
          </Button>
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {collections.map((collection) => (
          <Card key={collection.title} className="bg-black/60">
            <CardHeader>
              <CardTitle className="font-display text-2xl">{collection.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white/70">{collection.description}</p>
              <Link href={collection.href} className="mt-6 inline-flex">
                <Button size="sm">Explore</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
