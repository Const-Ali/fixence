// src/components/Stats.tsx
import { useRef } from "react";
import { motion, useInView } from "motion/react";

import { useApp } from "../context/AppContext";
import { useCountUp } from "../hooks/useCountUp";
import { fadeUp, staggerContainer } from "../lib/motion";

function StatCard({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const count = useCountUp(value, inView);

  return (
    <motion.div ref={ref} variants={fadeUp} className="text-center">
      <div className="text-4xl font-black tabular-nums text-slate-900 md:text-5xl dark:text-white">
        {count.toLocaleString("en-US")}
        <span className="text-blue-600 dark:text-blue-400">{suffix}</span>
      </div>
      <div className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">
        {label}
      </div>
    </motion.div>
  );
}

export function Stats() {
  const { t } = useApp();

  return (
    <section id="stats" className="py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-3 gap-6 rounded-3xl border border-slate-200 bg-white/60 p-10 backdrop-blur dark:border-white/10 dark:bg-white/5"
        >
          {t.stats.items.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
