"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "Obelva’s date-night kit felt like a private boutique experience delivered to us.",
    name: "Maya & Rohan",
    location: "Colombo"
  },
  {
    quote: "The Eclipse bracelets are refined and subtle. We wear them daily.",
    name: "Eli & Sami",
    location: "London"
  },
  {
    quote: "Packaging, scent, presentation—everything felt intentional and luxurious.",
    name: "Nadia & Luca",
    location: "Sydney"
  }
];

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[index];

  return (
    <section id="reviews" className="mx-auto max-w-6xl px-6 py-16">
      <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-10 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-white/50">Reviews</p>
        <h2 className="mt-3 font-display text-3xl">Loved by couples worldwide</h2>
        <div className="relative mt-8 min-h-[140px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              <p className="mx-auto max-w-2xl text-lg text-white/80">“{testimonial.quote}”</p>
              <p className="mt-6 text-sm uppercase tracking-[0.3em] text-ember">
                {testimonial.name} · {testimonial.location}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((item, idx) => (
            <button
              key={item.name}
              aria-label={`View testimonial from ${item.name}`}
              onClick={() => setIndex(idx)}
              className={`h-2 w-6 rounded-full transition ${
                idx === index ? "bg-ember" : "bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
