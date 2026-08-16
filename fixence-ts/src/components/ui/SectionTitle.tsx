// src/components/ui/SectionTitle.tsx
import { motion } from "motion/react";

import { fadeUp } from "../../lib/motion";

interface SectionTitleProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export function SectionTitle({ eyebrow, title, subtitle }: SectionTitleProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="mx-auto mb-14 max-w-2xl text-center"
    >
      <span className="mb-4 inline-block rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-slate-500 dark:text-slate-400">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
