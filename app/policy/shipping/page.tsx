export const metadata = {
  title: "Shipping Policy | Obelva"
};

export default function ShippingPolicyPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="font-display text-4xl">Shipping Policy</h1>
      <p className="mt-4 text-white/70">
        Obelva ships worldwide with carefully vetted partners and tracked delivery.
      </p>
      <div className="mt-6 space-y-4 text-sm text-white/70">
        <p>Standard delivery is 5–10 business days from dispatch.</p>
        <p>We provide tracking updates via email and SMS.</p>
        <p>Customs duties may apply for international orders depending on destination.</p>
      </div>
    </div>
  );
}
