"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const mockStatus = {
  status: "In transit",
  eta: "3–5 days",
  location: "Dubai Hub",
  updates: [
    "Order confirmed in Colombo",
    "Dispatched from partner atelier",
    "Arrived at international hub"
  ]
};

export function TrackOrderClient() {
  const [orderId, setOrderId] = useState("");
  const [result, setResult] = useState<typeof mockStatus | null>(null);

  const handleLookup = () => {
    if (!orderId) return;
    setResult(mockStatus);
  };

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-10">
        <p className="text-sm uppercase tracking-[0.3em] text-white/50">Track Order</p>
        <h1 className="mt-3 font-display text-4xl">Follow your delivery</h1>
        <p className="mt-3 text-white/70">
          Enter your Obelva order ID to see the latest status.
        </p>
        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
          <Input
            value={orderId}
            onChange={(event) => setOrderId(event.target.value)}
            placeholder="OBL-2024-0001"
            aria-label="Order ID"
          />
          <Button size="lg" onClick={handleLookup}>
            Track order
          </Button>
        </div>

        {result && (
          <div className="mt-8 rounded-3xl border border-white/10 bg-black/40 p-6">
            <div className="flex flex-wrap justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/50">Status</p>
                <p className="text-xl font-semibold text-ember">{result.status}</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/50">ETA</p>
                <p className="text-lg">{result.eta}</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/50">Current hub</p>
                <p className="text-lg">{result.location}</p>
              </div>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-white/70">
              {result.updates.map((update) => (
                <li key={update}>• {update}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
