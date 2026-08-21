import { useState } from "react";
import ChevronDown from "lucide-react/dist/esm/icons/chevron-down.mjs";
import { useApp } from "../context/AppContext";
import { useReveal } from "../hooks/useReveal";
import { SectionTitle } from "./ui/SectionTitle";

export function FAQ() {
  const { t } = useApp();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, isVisible } = useReveal<HTMLDivElement>({
    rootMargin: "-60px",
  });

  return (
    <section id="faq" aria-labelledby="faq-title" className="py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionTitle
          eyebrow={t.faq.eyebrow}
          title={t.faq.title}
          subtitle={t.faq.subtitle}
          titleId="faq-title"
        />

        <div
          ref={ref}
          className={`reveal space-y-3 ${isVisible ? "reveal-visible" : ""}`}
        >
          {t.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            const buttonId = `faq-question-${index}`;
            const answerId = `faq-answer-${index}`;

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-white/10 dark:bg-white/5"
              >
                <button
                  id={buttonId}
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-start"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                >
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {item.question}
                  </span>
                  <ChevronDown
                    aria-hidden="true"
                    className={`h-5 w-5 shrink-0 text-slate-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
