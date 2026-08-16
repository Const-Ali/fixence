// src/components/Hero.tsx
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, PhoneCall, Wrench } from "lucide-react";
import { useApp } from "../context/AppContext";
import { fadeUp, staggerContainer } from "../lib/motion";

export function Hero() {
  const { t } = useApp();

  return (
    <section id="hero" className="relative overflow-hidden pt-32 pb-20">
      {/* Aurora background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 start-1/4 h-96 w-96 rounded-full bg-blue-500/30 blur-3xl" />
        <div className="absolute top-20 end-0 h-80 w-80 rounded-full bg-cyan-400/25 blur-3xl" />
        <div className="absolute bottom-0 start-0 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-4xl px-4 text-center sm:px-6"
      >
        <motion.span
          variants={fadeUp}
          className="mb-24 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/60 px-4 py-1.5 text-4xl font-semibold text-blue-700 backdrop-blur dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-300"
        >
          <Wrench className="h-24 w-32" />
          {t.hero.badge}
        </motion.span>

        <motion.h1
          variants={fadeUp}
          className="text-4xl font-black leading-tight text-slate-900 md:text-6xl dark:text-white"
        >
          {t.hero.titleStart}{" "}
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            {t.hero.titleHighlight}
          </span>{" "}
          {t.hero.titleEnd}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300"
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-wrap justify-center gap-4"
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
        </motion.div>

        <motion.ul
          variants={fadeUp}
          className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-slate-600 dark:text-slate-300"
        >
          {t.hero.trustPoints.map((point) => (
            <li key={point} className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              {point}
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
