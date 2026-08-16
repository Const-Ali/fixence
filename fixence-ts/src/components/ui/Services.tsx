// src/components/Services.tsx
import { motion } from "motion/react";
import {
  CheckCircle2,
  ShieldCheck,
  Snowflake,
  WashingMachine,
} from "lucide-react";
import type { ServiceIcon } from "../types";
import { useApp } from "../context/AppContext";
import { SectionTitle } from "./ui/SectionTitle";
import { fadeUp, staggerContainer } from "../lib/motion";

const ICONS: Record<ServiceIcon, typeof Snowflake> = {
  snowflake: Snowflake,
  washing: WashingMachine,
  shield: ShieldCheck,
};

export function Services() {
  const { t } = useApp();

  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          subtitle={t.services.subtitle}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 md:grid-cols-3"
        >
          {t.services.items.map((service) => {
            const Icon = ICONS[service.icon];
            return (
              <motion.article
                key={service.title}
                variants={fadeUp}
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5 dark:border-white/10 dark:bg-white/5 dark:hover:border-blue-500/40"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:scale-110 dark:bg-blue-500/10 dark:text-blue-400">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {service.description}
                </p>
                <ul className="space-y-2.5">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
