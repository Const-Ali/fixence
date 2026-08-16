// src/components/Navbar.tsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, Moon, Sun, X, Settings } from "lucide-react";
import { useApp } from "../context/AppContext";

const LOGO_URL = "/photo_2026-08-16_13-11-56.jpg";

export function Navbar() {
  const { t, theme, toggleTheme, toggleLang, lang } = useApp();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/60 bg-white/70 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/70"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <button
          onClick={() => goTo("hero")}
          className="flex items-center gap-2"
        >
          {logoError ? (
            <Settings className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          ) : (
            <img
              src={LOGO_URL}
              alt={t.logoAlt}
              loading="eager"
              className="h-9 w-auto object-contain"
              onError={() => setLogoError(true)}
            />
          )}
          <span className="text-lg font-extrabold text-slate-900 dark:text-white">
            Fixence
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {t.nav.links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => goTo(link.id)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleLang}
            className="flex h-9 items-center rounded-lg px-2 text-sm font-bold text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10"
            aria-label="Switch language"
          >
            {lang === "fa" ? "EN" : "FA"}
          </button>

          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>

          <a
            href={`tel:${t.phone.tel}`}
            className="hidden rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 md:inline-block"
          >
            {t.nav.cta}
          </a>

          <button
            onClick={() => setOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-700 md:hidden dark:text-slate-200"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-b border-slate-200/60 bg-white/95 backdrop-blur-xl md:hidden dark:border-white/10 dark:bg-slate-950/95"
          >
            <ul className="space-y-1 px-4 py-4">
              {t.nav.links.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => goTo(link.id)}
                    className="w-full rounded-lg px-3 py-2.5 text-start text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href={`tel:${t.phone.tel}`}
                  className="mt-2 block rounded-lg bg-blue-600 px-3 py-2.5 text-center text-sm font-semibold text-white"
                >
                  {t.nav.cta}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
