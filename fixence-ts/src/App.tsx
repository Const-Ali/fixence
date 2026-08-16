// src/App.tsx
import { AppContext } from "./context/AppContext";
import { content } from "./data/content";
import { useLanguage } from "./hooks/useLanguage";
import { useTheme } from "./hooks/useTheme";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Stats } from "./components/Stats";
import { BrandsMarquee } from "./components/BrandsMarquee";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { ContactCTA } from "./components/ContactCTA";
import { Footer } from "./components/Footer";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang } = useLanguage();

  return (
    <AppContext.Provider
      value={{ lang, theme, t: content[lang], toggleLang, toggleTheme }}
    >
      <div className="min-h-screen bg-white text-slate-900 antialiased transition-colors dark:bg-slate-950 dark:text-white">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Stats />
          <BrandsMarquee />
          <Testimonials />
          <FAQ />
          <ContactCTA />
        </main>
        <Footer />
      </div>
    </AppContext.Provider>
  );
}
