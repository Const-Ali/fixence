// src/components/Testimonials.tsx
import { motion } from "motion/react";
import { Star } from "lucide-react";
import { useApp } from "../context/AppContext";
import { SectionTitle } from "./ui/SectionTitle";
import { fadeUp, staggerContainer } from "../lib/motion";

export function Testimonials() {
  const { t } = useApp();

  return (
    <section id="testimonials" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          eyebrow={t.testimonials.eyebrow}
          title={t.testimonials.title}
          subtitle={t.testimonials.subtitle}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 md:grid-cols-3"
        >
          {t.testimonials.items.map((item) => (
            <motion.figure
              key={item.name}
              variants={fadeUp}
              className="flex flex-col rounded-3xl border border-slate-200 bg-white p-8 dark:border-white/10 dark:bg-white/5"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <blockquote className="flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                «{item.text}»
              </blockquote>
              <figcaption className="mt-6 border-t border-slate-100 pt-4 dark:border-white/10">
                <div className="font-bold text-slate-900 dark:text-white">
                  {item.name}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {item.role}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
