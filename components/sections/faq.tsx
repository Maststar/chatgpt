import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Where do you ship from?",
    answer: "We curate from trusted global partners and dispatch from Sri Lanka or regional hubs for faster delivery."
  },
  {
    question: "Can I include a personalized note?",
    answer: "Yes. Add a message at checkout and we’ll include a printed note with luxe packaging."
  },
  {
    question: "How do returns work?",
    answer: "Unused items in original packaging can be returned within 30 days. Contact support for a prepaid label."
  },
  {
    question: "Are the products discreet?",
    answer: "We focus on tasteful, premium romance. Packaging is elegant and neutral for privacy."
  }
];

export function FAQ() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-white/50">FAQ</p>
        <h2 className="mt-3 font-display text-3xl">Answers with care</h2>
      </div>
      <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/5 p-6">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
