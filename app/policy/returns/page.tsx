export const metadata = {
  title: "Returns Policy | Obelva"
};

export default function ReturnsPolicyPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="font-display text-4xl">Returns Policy</h1>
      <p className="mt-4 text-white/70">
        If a product isn’t the perfect fit, you can request a return within 30 days of delivery.
      </p>
      <div className="mt-6 space-y-4 text-sm text-white/70">
        <p>Items must be unused and in original packaging with all accessories intact.</p>
        <p>Contact support@obelva.com to receive a prepaid return label.</p>
        <p>Refunds are processed within 7 business days after inspection.</p>
      </div>
    </div>
  );
}
