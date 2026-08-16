// src/components/BrandsMarquee.tsx
import { useApp } from "../context/AppContext";

export function BrandsMarquee() {
  const { t } = useApp();

  return (
    <section className="py-14">
      <p className="mb-8 text-center text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
        {t.brands.title}
      </p>
      <div className="relative overflow-hidden" dir="ltr">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent dark:from-slate-950" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent dark:from-slate-950" />

        <div className="flex w-max animate-marquee items-center gap-14 px-7">
          {[...t.brands.items, ...t.brands.items].map((brand, i) => (
            <span
              key={`${brand}-${i}`}
              className="whitespace-nowrap text-2xl font-black tracking-wide text-slate-400 transition hover:text-slate-700 dark:text-slate-600 dark:hover:text-slate-300"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
