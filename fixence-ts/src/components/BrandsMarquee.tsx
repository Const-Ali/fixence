import { content } from "../data/content";
import { useApp } from "../context/AppContext";
import { motion } from "motion/react";

export function BrandsMarquee() {
  const { lang: language } = useApp();
  const lang = language?.toLowerCase().startsWith("en") ? "en" : "fa";
  const brands = content[lang].brands.items;

  return (
    <section className="relative w-full overflow-hidden bg-[#020617] py-10">
      {/* گرادینت‌های کناری برای محو شدن نرم */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#020617] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#020617] to-transparent" />

      {/* بخش حیاتی: کانتینر باید min-w-full داشته باشه */}
      <div className="flex w-max overflow-hidden">
        <motion.div
          className="flex flex-nowrap gap-8 pr-8" // pr-8 باید با gap یکی باشه
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            duration: 500, // اگه خیلی سریع بود، این عدد رو بیشتر کن
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {brands.map((brand, index) => (
            <div
              key={`b1-${index}`}
              className="flex shrink-0 items-center justify-center rounded-xl border border-white/5 bg-white/[0.03] px-10 py-5 text-xl font-bold tracking-widest text-white/30"
            >
              {brand}
            </div>
          ))}
        </motion.div>

        {/* بلوک دوم که دقیقاً پشت سر اولی می‌چسبه */}
        <motion.div
          className="flex flex-nowrap gap-8 pr-8"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {brands.map((brand, index) => (
            <div
              key={`b2-${index}`}
              className="flex shrink-0 items-center justify-center rounded-xl border border-white/5 bg-white/[0.03] px-10 py-5 text-xl font-bold tracking-widest text-white/30"
            >
              {brand}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
