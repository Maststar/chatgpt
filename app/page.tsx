import { Hero } from "@/components/sections/hero";
import { FeaturedCollections } from "@/components/sections/featured-collections";
import { BestSellers } from "@/components/sections/best-sellers";
import { BundleBuilder } from "@/components/sections/bundle-builder";
import { GiftFinderCTA } from "@/components/sections/gift-finder-cta";
import { TrustSection } from "@/components/sections/trust";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <TrustSection />
      <FeaturedCollections />
      <BestSellers />
      <BundleBuilder />
      <GiftFinderCTA />
      <Testimonials />
      <FAQ />
    </div>
  );
}
