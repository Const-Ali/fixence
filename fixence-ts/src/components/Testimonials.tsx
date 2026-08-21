import { memo, type CSSProperties } from "react";
import Star from "lucide-react/dist/esm/icons/star.mjs";
import { useApp } from "../context/AppContext";
import { useReveal } from "../hooks/useReveal";
import type { TestimonialItem } from "../types";
import { SectionTitle } from "./ui/SectionTitle";

interface TestimonialCardProps {
  item: TestimonialItem;
  delay: number;
}

const TestimonialCard = memo(function TestimonialCard({
  item,
  delay,
}: TestimonialCardProps) {
  const { ref, isVisible } = useReveal<HTMLElement>({
    rootMargin: "-40px",
  });

  return (
    <figure
      ref={ref}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
      className={`reveal flex flex-col rounded-3xl border border-slate-200 bg-white p-8 dark:border-white/10 dark:bg-white/5 ${
        isVisible ? "reveal-visible" : ""
      }`}
    >
      <div className="mb-4 flex gap-1" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            aria-hidden="true"
            className="h-4 w-4 fill-amber-400 text-amber-400"
          />
        ))}
      </div>
      <blockquote className="flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        “{item.text}”
      </blockquote>
      <figcaption className="mt-6 border-t border-slate-100 pt-4 dark:border-white/10">
        <div className="font-bold text-slate-900 dark:text-white">
          {item.name}
        </div>
        <div className="text-xs text-slate-500 dark:text-slate-400">
          {item.role}
        </div>
      </figcaption>
    </figure>
  );
});

export function Testimonials() {
  const { t } = useApp();

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          eyebrow={t.testimonials.eyebrow}
          title={t.testimonials.title}
          subtitle={t.testimonials.subtitle}
          titleId="testimonials-title"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {t.testimonials.items.map((item, index) => (
            <TestimonialCard
              key={item.name}
              item={item}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
