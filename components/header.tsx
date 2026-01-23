"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart, useCurrency } from "@/components/providers";

const navItems = [
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/collections/for-her" },
  { label: "Gift Finder", href: "/gift-finder" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Track Order", href: "/track-order" }
];

export function Header() {
  const { itemCount } = useCart();
  const { currency, toggle } = useCurrency();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-noir/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-[0.3em] text-champagne">
          OBELVA
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="transition hover:text-ember">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggle}
            aria-label="Toggle currency"
            className="border border-white/10"
          >
            {currency}
          </Button>
          <Link href="/cart" className="relative">
            <Button variant="dark" size="sm" aria-label="View cart">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Cart
            </Button>
            {itemCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-ember text-xs text-noir">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
