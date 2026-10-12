"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart, useCurrency } from "@/components/providers";
import { formatPrice } from "@/lib/utils";

export function CartClient() {
  const { items, removeItem, updateQuantity, subtotalUSD, clear } = useCart();
  const { currency } = useCurrency();

  const shippingUSD = subtotalUSD > 120 ? 0 : items.length ? 12 : 0;
  const totalUSD = subtotalUSD + shippingUSD;

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="font-display text-4xl">Your cart</h1>
      <p className="mt-3 text-white/70">Curated selections reserved for you.</p>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          {items.length === 0 && (
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <p>Your cart is currently empty.</p>
              <Link href="/shop" className="mt-4 inline-flex">
                <Button>Continue shopping</Button>
              </Link>
            </div>
          )}

          {items.map((item) => (
            <div
              key={item.product.id}
              className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 md:flex-row"
            >
              <div className="relative h-36 w-full overflow-hidden rounded-2xl md:w-36">
                <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold">{item.product.name}</h2>
                  <p className="text-sm text-white/70">{item.product.description}</p>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      aria-label={`Decrease quantity for ${item.product.name}`}
                    >
                      -
                    </Button>
                    <Input
                      value={item.quantity}
                      readOnly
                      className="w-16 text-center"
                      aria-label={`Quantity for ${item.product.name}`}
                    />
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      aria-label={`Increase quantity for ${item.product.name}`}
                    >
                      +
                    </Button>
                  </div>
                  <div className="text-right">
                    <p className="text-base font-semibold text-ember">
                      {formatPrice(item.product.priceUSD * item.quantity, currency)}
                    </p>
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="text-xs uppercase tracking-[0.3em] text-white/50 hover:text-ember"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className="h-fit rounded-[2.5rem] border border-white/10 bg-white/5 p-8">
          <h2 className="font-display text-2xl">Checkout</h2>
          <p className="mt-2 text-sm text-white/70">
            Secure checkout with express global delivery.
          </p>
          <div className="lux-divider my-6" />
          <div className="space-y-3 text-sm text-white/70">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{formatPrice(subtotalUSD, currency)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>{shippingUSD === 0 ? "Complimentary" : formatPrice(shippingUSD, currency)}</span>
            </div>
            <div className="flex justify-between text-base font-semibold text-ivory">
              <span>Total</span>
              <span>{formatPrice(totalUSD, currency)}</span>
            </div>
          </div>
          <Button className="mt-6 w-full" size="lg" disabled={!items.length}>
            Proceed to checkout
          </Button>
          <Button
            className="mt-3 w-full"
            size="lg"
            variant="outline"
            disabled={!items.length}
            onClick={clear}
          >
            Clear cart
          </Button>
          <p className="mt-4 text-xs text-white/50">
            Payments are securely processed. This checkout is a mock UI.
          </p>
        </aside>
      </div>
    </div>
  );
}
