import Link from "next/link";
import { Button } from "@/components/ui/button";

export function GiftFinderCTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-10 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-white/50">Gift Finder</p>
        <h2 className="mt-3 font-display text-3xl">Answer a few questions, find the perfect gift</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-white/70">
          Our romantic concierge curates tailored recommendations based on your partner’s style and
          the occasion.
        </p>
        <Link href="/gift-finder" className="mt-6 inline-flex">
          <Button size="lg">Start the quiz</Button>
        </Link>
      </div>
    </section>
  );
}
