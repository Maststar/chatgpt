import { ShieldCheck, RefreshCw, Truck } from "lucide-react";

const items = [
  {
    title: "Shipping time",
    description: "5–10 business days worldwide, tracked from dispatch.",
    icon: Truck
  },
  {
    title: "Returns",
    description: "30-day return window on unused items in original packaging.",
    icon: RefreshCw
  },
  {
    title: "Secure payments",
    description: "256-bit encryption with global payment partners.",
    icon: ShieldCheck
  }
];

export function TrustSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <item.icon className="h-6 w-6 text-ember" />
            <h3 className="mt-4 font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-white/70">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
