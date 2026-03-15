"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How much does lil leaps cost?",
    answer:
      "lil leaps is $9.99 per year and comes with a one month free trial. No commitment — cancel anytime during the trial and you won't be charged a thing.",
  },
  {
    question: "What if I miss a week?",
    answer:
      "No stress! Life happens. Your timeline keeps going and you can record when you're ready. Some families miss a week here and there — the timelapse still looks amazing. It's about the big picture, not perfection.",
  },
  {
    question: "Where are my videos stored?",
    answer:
      "Right on your device and backed up to your iCloud. We don't store your videos on our servers. Your memories are yours — always.",
  },
  {
    question: "Can I start if my baby isn't a newborn?",
    answer:
      "Absolutely! You can start at any age. Many families start at 6 months, 1 year, or even 3 years old. The best time to start is now — future you will thank you.",
  },
  {
    question: "Can I track more than one child?",
    answer:
      "Yes! You can have up to 6 kids in a lil leaps account. Each child gets their own timeline and their own timelapse.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 bg-white">
      <p className="reveal font-quicksand text-sm font-bold text-coral text-center uppercase tracking-widest mb-2">
        Questions
      </p>
      <h2 className="reveal font-nunito text-3xl md:text-4xl font-black text-center text-navy mb-3">
        You might be wondering...
      </h2>
      <p className="reveal text-center text-text-light text-base max-w-[480px] mx-auto mb-16 leading-relaxed">
        We get it. Here are the answers.
      </p>
      <div className="max-w-[700px] mx-auto flex flex-col gap-3">
        {faqs.map((faq, i) => (
          <div
            key={faq.question}
            className="reveal bg-mint-pale rounded-2xl overflow-hidden border-2 border-transparent hover:border-mint transition-colors"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full px-6 py-5 font-extrabold text-base text-navy text-left flex justify-between items-center cursor-pointer"
            >
              {faq.question}
              <span
                className={`text-2xl font-semibold text-coral transition-transform duration-300 ${
                  openIndex === i ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            <div className={`faq-answer ${openIndex === i ? "open" : ""}`}>
              <div className="px-6 pb-5 text-sm text-text-light leading-relaxed">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
