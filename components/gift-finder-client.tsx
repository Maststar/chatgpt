"use client";

import { useMemo, useState } from "react";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";

const questions = [
  {
    id: "occasion",
    question: "What is the occasion?",
    options: ["Anniversary", "Date night", "Just because", "New home"]
  },
  {
    id: "style",
    question: "Which mood fits them?",
    options: ["Modern minimal", "Classic romance", "Cozy homebody", "Adventurous"]
  },
  {
    id: "budget",
    question: "Ideal gift budget?",
    options: ["Under $50", "$50–$80", "$80+", "Surprise me"]
  },
  {
    id: "format",
    question: "Preferred format",
    options: ["Accessory", "Experience", "Home", "Keepsake"]
  }
];

export function GiftFinderClient() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const completed = Object.keys(answers).length === questions.length;

  const recommended = useMemo(() => {
    if (!completed) return [];
    const budget = answers.budget;
    return products
      .filter((product) => {
        if (budget === "Under $50") return product.priceUSD < 50;
        if (budget === "$50–$80") return product.priceUSD >= 50 && product.priceUSD <= 80;
        if (budget === "$80+") return product.priceUSD >= 80;
        return true;
      })
      .slice(0, 3);
  }, [answers, completed]);

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.3em] text-white/50">Gift Finder</p>
        <h1 className="font-display text-4xl">Let us curate the perfect gesture</h1>
        <p className="mt-3 text-white/70">
          Answer four questions and receive tailored recommendations for your partner.
        </p>
      </div>

      <div className="grid gap-6">
        {questions.map((question) => (
          <div key={question.id} className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
            <p className="text-lg font-semibold">{question.question}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {question.options.map((option) => {
                const isSelected = answers[question.id] === option;
                return (
                  <Button
                    key={option}
                    variant={isSelected ? "primary" : "outline"}
                    size="sm"
                    onClick={() => setAnswers((prev) => ({ ...prev, [question.id]: option }))}
                  >
                    {option}
                  </Button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Button size="lg" disabled={!completed} onClick={() => setShowResults(true)}>
          Reveal recommendations
        </Button>
        <Button
          size="lg"
          variant="outline"
          onClick={() => {
            setAnswers({});
            setShowResults(false);
          }}
        >
          Reset quiz
        </Button>
      </div>

      {showResults && (
        <div className="mt-12">
          <h2 className="font-display text-3xl">Your curated selections</h2>
          <p className="mt-3 text-white/70">
            Based on your answers, these gifts align with their style and the moment.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {recommended.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
