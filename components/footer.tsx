import Link from "next/link";

const policies = [
  { label: "Privacy Policy", href: "/policy/privacy" },
  { label: "Returns Policy", href: "/policy/returns" },
  { label: "Shipping Policy", href: "/policy/shipping" }
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40 py-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-[2fr_1fr_1fr]">
        <div className="space-y-4">
          <p className="text-lg font-semibold tracking-[0.3em] text-champagne">OBELVA</p>
          <p className="text-sm text-white/70">
            Luxury dropship experiences for modern couples. Crafted to feel intimate, refined, and
            effortless.
          </p>
        </div>
        <div className="space-y-3 text-sm text-white/70">
          <p className="uppercase tracking-[0.3em] text-white/40">Customer Care</p>
          <p>support@obelva.com</p>
          <p>Colombo + global delivery</p>
          <p>Mon–Sat 9am–8pm (LKT)</p>
        </div>
        <div className="space-y-3 text-sm text-white/70">
          <p className="uppercase tracking-[0.3em] text-white/40">Policies</p>
          <div className="flex flex-col gap-2">
            {policies.map((policy) => (
              <Link key={policy.href} href={policy.href} className="hover:text-ember">
                {policy.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl px-6 text-xs text-white/50">
        © 2024 Obelva. Designed in Sri Lanka. Global fulfillment.
      </div>
    </footer>
  );
}
