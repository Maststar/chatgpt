"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-luxury-gradient">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <Badge>Luxury couple essentials</Badge>
          <h1 className="font-display text-4xl md:text-6xl">Curate romance with Obelva.</h1>
          <p className="text-lg text-white/70">
            Premium gifts, matching accessories, and date-night experiences crafted for modern
            couples. Designed in Sri Lanka with global fulfillment.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/shop">
              <Button size="lg">Shop the collection</Button>
            </Link>
            <Link href="/gift-finder">
              <Button size="lg" variant="outline">
                Find their perfect gift
              </Button>
            </Link>
          </div>
          <div className="flex gap-6 text-sm text-white/60">
            <div>
              <p className="text-ember">Worldwide delivery</p>
              <p>5–10 day dispatch</p>
            </div>
            <div>
              <p className="text-ember">Secure payments</p>
              <p>PCI-compliant checkout</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <motion.div
            className="absolute -top-10 right-6 h-40 w-40 rounded-full bg-ember/20 blur-3xl"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="glass-card relative flex h-full flex-col justify-end rounded-[2.5rem] p-8 shadow-glow">
            <p className="text-sm uppercase tracking-[0.4em] text-white/50">Signature drop</p>
            <h2 className="mt-3 font-display text-3xl">Aurora Rosebox</h2>
            <p className="mt-3 text-sm text-white/70">
              A velvet rosebox with a concealed message drawer and preserved blooms.
            </p>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-lg font-semibold text-ember">From $96</p>
              <Link href="/product/aurora-rosebox">
                <Button size="sm" variant="outline">
                  Discover
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
