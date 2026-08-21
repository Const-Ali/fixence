import { useApp } from "../context/AppContext";

function BrandRow({ brands, hidden = false }: { brands: string[]; hidden?: boolean }) {
  return (
    <div
      aria-hidden={hidden}
      className="flex shrink-0 flex-nowrap gap-8 pr-8"
    >
      {brands.map((brand, index) => (
        <div
          key={`${brand}-${index}`}
          className="flex shrink-0 items-center justify-center rounded-xl border border-white/5 bg-white/[0.03] px-10 py-5 text-xl font-bold tracking-widest text-white/30"
        >
          {brand}
        </div>
      ))}
    </div>
  );
}

export function BrandsMarquee() {
  const { t } = useApp();
  const brands = t.brands.items;

  return (
    <section
      aria-labelledby="brands-title"
      className="relative w-full overflow-hidden bg-[#020617] py-10"
    >
      <h2 id="brands-title" className="sr-only">
        {t.brands.title}
      </h2>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#020617] to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#020617] to-transparent"
      />

      <div className="flex w-max" dir="ltr">
        <div className="brands-marquee-track flex w-max">
          <BrandRow brands={brands} />
          <BrandRow brands={brands} hidden />
        </div>
      </div>
    </section>
  );
}
