// src/components/ui/SectionTitle.tsx
import { memo } from "react";
import { useReveal } from "../../hooks/useReveal";

interface SectionTitleProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  titleId?: string;
  tone?: "light" | "dark";
}

export const SectionTitle = memo(function SectionTitle({
  eyebrow,
  title,
  subtitle,
  titleId,
  tone = "light",
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
      <span
        className={`mb-4 inline-block rounded-full px-4 py-1.5 text-sm font-semibold ${
          tone === "dark"
            ? "bg-blue-400/10 text-blue-300"
            : "bg-blue-500/10 text-blue-600 dark:text-blue-400"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        id={titleId}
        className={`text-3xl font-extrabold md:text-4xl ${
          tone === "dark"
            ? "text-white"
            : "text-slate-900 dark:text-white"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base ${
            tone === "dark"
              ? "text-slate-400"
              : "text-slate-500 dark:text-slate-400"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
});
