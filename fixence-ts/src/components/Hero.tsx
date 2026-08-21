// src/components/Hero.tsx
import type { CSSProperties } from "react";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right.mjs";
import CheckCircle2 from "lucide-react/dist/esm/icons/check-circle-2.mjs";
import PhoneCall from "lucide-react/dist/esm/icons/phone-call.mjs";
import Wrench from "lucide-react/dist/esm/icons/wrench.mjs";
import { useApp } from "../context/AppContext";

export function Hero() {
  const { t } = useApp();
  const revealStyle = (delay: number): CSSProperties =>
    ({ "--reveal-delay": `${delay}ms` }) as CSSProperties;

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative overflow-hidden pt-24 pb-20 sm:pt-32"
    >
      {/* Aurora background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 start-1/4 h-96 w-96 rounded-full bg-blue-500/30 blur-3xl" />
        <div className="absolute top-20 end-0 h-80 w-80 rounded-full bg-cyan-400/25 blur-3xl" />
        <div className="absolute bottom-0 start-0 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <span
          style={revealStyle(0)}
          className="hero-reveal mb-8 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/60 px-4 py-1.5 text-sm font-semibold text-blue-700 backdrop-blur dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-300"
        >
          <Wrench aria-hidden="true" className="h-4 w-4" />
          {t.hero.badge}
        </span>

        <h1
          id="hero-title"
          style={revealStyle(100)}
          className="hero-reveal text-4xl font-black leading-tight text-slate-900 md:text-6xl dark:text-white"
        >
          {t.hero.titleStart}{" "}
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            {t.hero.titleHighlight}
          </span>{" "}
          {t.hero.titleEnd}
        </h1>

        <p
          style={revealStyle(200)}
          className="hero-reveal mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300"
        >
          {t.hero.description}
        </p>

        <div
          style={revealStyle(300)}
          className="hero-reveal mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href={`tel:${t.phone.tel}`}
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-700"
          >
            <PhoneCall className="h-5 w-5" />
            {t.hero.primaryCta}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/60 px-7 py-3.5 text-base font-bold text-slate-800 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          >
            {t.hero.secondaryCta}
            <ArrowRight className="h-5 w-5 rtl:rotate-180" />
          </a>
        </div>

        <ul
          style={revealStyle(400)}
          className="hero-reveal mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-slate-600 dark:text-slate-300"
        >
          {t.hero.trustPoints.map((point) => (
            <li key={point} className="flex items-center gap-1.5">
              <CheckCircle2
                aria-hidden="true"
                className="h-4 w-4 text-emerald-500"
              />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
