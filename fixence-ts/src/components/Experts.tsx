import { memo, type CSSProperties } from "react";
import BadgeCheck from "lucide-react/dist/esm/icons/badge-check.mjs";
import CheckCircle2 from "lucide-react/dist/esm/icons/check-circle-2.mjs";
import Refrigerator from "lucide-react/dist/esm/icons/refrigerator.mjs";
import WashingMachine from "lucide-react/dist/esm/icons/washing-machine.mjs";
import Wrench from "lucide-react/dist/esm/icons/wrench.mjs";
import { useApp } from "../context/AppContext";
import { useReveal } from "../hooks/useReveal";
import type { ExpertIcon, ExpertItem } from "../types";
import { SectionTitle } from "./ui/SectionTitle";

const ICONS: Record<ExpertIcon, typeof Refrigerator> = {
  refrigerator: Refrigerator,
  washing: WashingMachine,
  wrench: Wrench,
};

interface ExpertCardProps {
  expert: ExpertItem;
  delay: number;
}

const ExpertCard = memo(function ExpertCard({
  expert,
  delay,
}: ExpertCardProps) {
  const { ref, isVisible } = useReveal<HTMLElement>({
    rootMargin: "-40px",
  });
  const Icon = ICONS[expert.icon];

  return (
    <article
      ref={ref}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
      className={`reveal group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5 dark:border-white/10 dark:bg-white/5 dark:hover:border-blue-500/40 ${
        isVisible ? "reveal-visible" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:scale-105 dark:bg-blue-500/10 dark:text-blue-400">
          <Icon aria-hidden="true" className="h-7 w-7" />
        </div>
        <BadgeCheck
          aria-label={expert.experience}
          className="h-6 w-6 shrink-0 text-emerald-500"
        />
      </div>

      <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">
        {expert.name}
      </h3>
      <p className="mt-1 text-sm font-semibold text-blue-600 dark:text-blue-400">
        {expert.role}
      </p>
      <p className="mt-4 rounded-xl bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 dark:bg-white/5 dark:text-slate-200">
        {expert.specialty}
      </p>

      <ul className="mt-5 flex-1 space-y-3">
        {expert.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300"
          >
            <CheckCircle2
              aria-hidden="true"
              className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500"
            />
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-6 border-t border-slate-100 pt-4 text-xs font-semibold text-slate-500 dark:border-white/10 dark:text-slate-400">
        {expert.experience}
      </div>
    </article>
  );
});

export function Experts() {
  const { t } = useApp();

  return (
    <section
      id="experts"
      aria-labelledby="experts-title"
      className="bg-slate-50/70 py-20 dark:bg-slate-900/30"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          eyebrow={t.experts.eyebrow}
          title={t.experts.title}
          subtitle={t.experts.subtitle}
          titleId="experts-title"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {t.experts.items.map((expert, index) => (
            <ExpertCard
              key={expert.name}
              expert={expert}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
