import { memo } from "react";
import BadgeCheck from "lucide-react/dist/esm/icons/badge-check.mjs";
import { useApp } from "../context/AppContext";
import { SectionTitle } from "./ui/SectionTitle";

interface BrandCardProps {
  brand: string;
}

const BrandCard = memo(function BrandCard({ brand }: BrandCardProps) {
  return (
    <li>
      <div className="flex min-h-20 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-white transition hover:border-cyan-400/50 hover:bg-white/[0.08]">
        <span
          aria-hidden="true"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/30 to-cyan-400/20 text-sm font-black text-cyan-200"
        >
          {brand.charAt(0)}
        </span>
        <span className="min-w-0 flex-1 truncate text-sm font-bold tracking-wide text-white/80">
          {brand}
        </span>
        <BadgeCheck
          aria-hidden="true"
          className="h-4 w-4 shrink-0 text-cyan-300/70"
        />
      </div>
    </li>
  );
});

export function BrandsMarquee() {
  const { t, lang } = useApp();

  return (
    <section
      aria-labelledby="brands-title"
      className="bg-slate-950 py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          eyebrow={
            lang === "fa" ? "برندهای تحت پوشش" : "Supported brands"
          }
          title={t.brands.title}
          subtitle={
            lang === "fa"
              ? "پوشش تعمیرات تخصصی برای برندهای محبوب لوازم خانگی"
              : "Specialized repair coverage for popular home-appliance brands"
          }
          titleId="brands-title"
          tone="dark"
        />

        <ul
          aria-label={t.brands.title}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
        >
          {t.brands.items.map((brand) => (
            <BrandCard key={brand} brand={brand} />
          ))}
        </ul>
      </div>
    </section>
  );
}
