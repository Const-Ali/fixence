// src/App.tsx
import { AppContext } from "./context/AppContext";
import { content } from "./data/content";
import { useLanguage } from "./hooks/useLanguage";
import { useTheme } from "./hooks/useTheme";
import { lazy, Suspense, useMemo } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";

const Services = lazy(() =>
  import("./components/Services").then(({ Services: Component }) => ({
    default: Component,
  })),
);
const Stats = lazy(() =>
  import("./components/Stats").then(({ Stats: Component }) => ({
    default: Component,
  })),
);
const Experts = lazy(() =>
  import("./components/Experts").then(({ Experts: Component }) => ({
    default: Component,
  })),
);
const BrandsMarquee = lazy(() =>
  import("./components/BrandsMarquee").then(({ BrandsMarquee: Component }) => ({
    default: Component,
  })),
);
const Testimonials = lazy(() =>
  import("./components/Testimonials").then(({ Testimonials: Component }) => ({
    default: Component,
  })),
);
const FAQ = lazy(() =>
  import("./components/FAQ").then(({ FAQ: Component }) => ({
    default: Component,
  })),
);
const ContactCTA = lazy(() =>
  import("./components/ContactCTA").then(({ ContactCTA: Component }) => ({
    default: Component,
  })),
);
const Footer = lazy(() =>
  import("./components/Footer").then(({ Footer: Component }) => ({
    default: Component,
  })),
);

function SectionFallback({ className }: { className: string }) {
  return <div aria-hidden="true" className={className} />;
}

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang } = useLanguage();
  const t = content[lang];
  const contextValue = useMemo(
    () => ({ lang, theme, t, toggleLang, toggleTheme }),
    [lang, theme, t, toggleLang, toggleTheme],
  );

  return (
    <AppContext.Provider value={contextValue}>
      <div className="min-h-screen bg-white text-slate-900 antialiased transition-colors dark:bg-slate-950 dark:text-white">
        <Navbar />
        <main>
          <Hero />
          <Suspense
            fallback={
              <SectionFallback className="min-h-[38rem] bg-transparent" />
            }
          >
            <Services />
          </Suspense>
          <Suspense
            fallback={<SectionFallback className="min-h-[13rem] bg-transparent" />}
          >
            <Stats />
          </Suspense>
          <Suspense
            fallback={
              <SectionFallback className="min-h-[34rem] bg-slate-50/70 dark:bg-slate-900/30" />
            }
          >
            <Experts />
          </Suspense>
          <Suspense
            fallback={<SectionFallback className="min-h-[9rem] bg-[#020617]" />}
          >
            <BrandsMarquee />
          </Suspense>
          <Suspense
            fallback={
              <SectionFallback className="min-h-[32rem] bg-transparent" />
            }
          >
            <Testimonials />
          </Suspense>
          <Suspense
            fallback={<SectionFallback className="min-h-[30rem] bg-transparent" />}
          >
            <FAQ />
          </Suspense>
          <Suspense
            fallback={
              <SectionFallback className="min-h-[44rem] bg-transparent" />
            }
          >
            <ContactCTA />
          </Suspense>
        </main>
        <Suspense
          fallback={<SectionFallback className="min-h-[20rem] bg-transparent" />}
        >
          <Footer />
        </Suspense>
      </div>
    </AppContext.Provider>
  );
}
