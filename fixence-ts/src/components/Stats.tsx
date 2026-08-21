// src/components/Stats.tsx
import { memo, useMemo } from "react";

import { useApp } from "../context/AppContext";
import { useCountUp } from "../hooks/useCountUp";
import { useReveal } from "../hooks/useReveal";

interface StatCardProps {
  value: number;
  suffix: string;
  label: string;
}

const StatCard = memo(function StatCard({
  value,
  suffix,
  label,
}: StatCardProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>({
    rootMargin: "-60px",
  });
  const count = useCountUp(value, isVisible);
  const numberFormatter = useMemo(() => new Intl.NumberFormat("en-US"), []);

  return (
    <div
      ref={ref}
      className={`reveal text-center ${isVisible ? "reveal-visible" : ""}`}
    >
      <div className="text-4xl font-black tabular-nums text-slate-900 md:text-5xl dark:text-white">
        {numberFormatter.format(count)}
        <span className="text-blue-600 dark:text-blue-400">{suffix}</span>
      </div>
      <div className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">
        {label}
      </div>
    </div>
  );
});

export function Stats() {
  const { t } = useApp();

  return (
    <section id="stats" aria-label={t.nav.links[1]?.label} className="py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid grid-cols-3 gap-6 rounded-3xl border border-slate-200 bg-white/60 p-10 backdrop-blur dark:border-white/10 dark:bg-white/5">
          {t.stats.items.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
