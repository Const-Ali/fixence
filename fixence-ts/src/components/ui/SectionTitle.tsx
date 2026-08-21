// src/components/ui/SectionTitle.tsx
import { memo } from "react";
import { useReveal } from "../../hooks/useReveal";

interface SectionTitleProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  titleId?: string;
}

export const SectionTitle = memo(function SectionTitle({
  eyebrow,
  title,
  subtitle,
  titleId,
}: SectionTitleProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>({
    rootMargin: "-80px",
  });

  return (
    <div
      ref={ref}
      className={`reveal mx-auto mb-14 max-w-2xl text-center ${
        isVisible ? "reveal-visible" : ""
      }`}
    >
      <span className="mb-4 inline-block rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400">
        {eyebrow}
      </span>
      <h2
        id={titleId}
        className="text-3xl font-extrabold text-slate-900 md:text-4xl dark:text-white"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-slate-500 dark:text-slate-400">
          {subtitle}
        </p>
      )}
    </div>
  );
});
