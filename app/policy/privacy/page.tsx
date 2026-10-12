export const metadata = {
  title: "Privacy Policy | Obelva"
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="font-display text-4xl">Privacy Policy</h1>
      <p className="mt-4 text-white/70">
        Obelva values your privacy. This placeholder policy outlines how we collect, use, and
        protect personal data for order fulfillment, support, and personalized recommendations.
      </p>
      <div className="mt-6 space-y-4 text-sm text-white/70">
        <p>We only collect the information needed to process your order and improve your experience.</p>
        <p>Payment details are handled by secure, PCI-compliant providers.</p>
        <p>You may request access or deletion of your data at any time via support.</p>
      </div>
    </div>
  );
}
