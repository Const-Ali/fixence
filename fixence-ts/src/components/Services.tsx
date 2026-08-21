// src/components/Services.tsx
import { memo, type CSSProperties } from "react";
import CheckCircle2 from "lucide-react/dist/esm/icons/check-circle-2.mjs";
import Refrigerator from "lucide-react/dist/esm/icons/refrigerator.mjs";
import WashingMachine from "lucide-react/dist/esm/icons/washing-machine.mjs";
import Wrench from "lucide-react/dist/esm/icons/wrench.mjs";
import type { ServiceIcon, ServiceItem } from "../types";
import { useApp } from "../context/AppContext";
import { useReveal } from "../hooks/useReveal";
import { SectionTitle } from "./ui/SectionTitle";

const ICONS: Record<ServiceIcon, typeof Refrigerator> = {
  refrigerator: Refrigerator,
  washing: WashingMachine,
  wrench: Wrench,
};

interface ServiceCardProps {
  service: ServiceItem;
  delay: number;
}

const ServiceCard = memo(function ServiceCard({
  service,
  delay,
}: ServiceCardProps) {
  const { ref, isVisible } = useReveal<HTMLElement>({
    rootMargin: "-40px",
  });
  const Icon = ICONS[service.icon];

  return (
    <article
      ref={ref}
      style={
        { "--reveal-delay": `${delay}ms` } as CSSProperties
      }
      className={`reveal group rounded-3xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5 dark:border-white/10 dark:bg-white/5 dark:hover:border-blue-500/40 ${
        isVisible ? "reveal-visible" : ""
      }`}
    >
      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:scale-110 dark:bg-blue-500/10 dark:text-blue-400">
        <Icon aria-hidden="true" className="h-7 w-7" />
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
            <CheckCircle2
              aria-hidden="true"
              className="h-4 w-4 shrink-0 text-emerald-500"
            />
            {feature}
          </li>
        ))}
      </ul>
    </article>
  );
});

export function Services() {
  const { t } = useApp();

  return (
    <section id="services" aria-labelledby="services-title" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          subtitle={t.services.subtitle}
          titleId="services-title"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {t.services.items.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
