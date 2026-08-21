import { useCallback, useEffect, useState } from "react";
import Menu from "lucide-react/dist/esm/icons/menu.mjs";
import Moon from "lucide-react/dist/esm/icons/moon.mjs";
import Settings from "lucide-react/dist/esm/icons/settings.mjs";
import Sun from "lucide-react/dist/esm/icons/sun.mjs";
import X from "lucide-react/dist/esm/icons/x.mjs";
import { useApp } from "../context/AppContext";

const LOGO_URL = "/favicon.svg";
const MOBILE_MENU_ID = "mobile-navigation";

export function Navbar() {
  const { t, theme, toggleTheme, toggleLang, lang } = useApp();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    let frameId: number | null = null;

    const onScroll = () => {
      if (frameId !== null) return;

      frameId = window.requestAnimationFrame(() => {
        const nextScrolled = window.scrollY > 20;
        setScrolled((current) =>
          current === nextScrolled ? current : nextScrolled,
        );
        frameId = null;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frameId !== null) window.cancelAnimationFrame(frameId);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const goTo = useCallback((id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/60 bg-white/70 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/70"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label={lang === "fa" ? "ناوبری اصلی" : "Primary navigation"}
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
      >
        <button
          type="button"
          onClick={() => goTo("hero")}
          className="flex items-center gap-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          {logoError ? (
            <Settings
              aria-hidden="true"
              className="h-8 w-8 text-blue-600 dark:text-blue-400"
            />
          ) : (
            <img
              src={LOGO_URL}
              alt={t.logoAlt}
              width="32"
              height="32"
              fetchPriority="high"
              decoding="async"
              className="h-8 w-8 object-contain"
              onError={() => setLogoError(true)}
            />
          )}
          <span className="text-lg font-extrabold text-slate-900 dark:text-white">
            Fixence
          </span>
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {t.nav.links.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => goTo(link.id)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLang}
            className="flex h-9 items-center rounded-lg px-2 text-sm font-bold text-slate-600 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-slate-300 dark:hover:bg-white/10"
            aria-label={lang === "fa" ? "Switch to English" : "تغییر زبان به فارسی"}
          >
            {lang === "fa" ? "EN" : "FA"}
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-slate-300 dark:hover:bg-white/10"
            aria-label={lang === "fa" ? "تغییر پوسته" : "Toggle theme"}
          >
            {theme === "dark" ? (
              <Sun aria-hidden="true" className="h-5 w-5" />
            ) : (
              <Moon aria-hidden="true" className="h-5 w-5" />
            )}
          </button>

          <a
            href={`tel:${t.phone.tel}`}
            className="hidden rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 md:inline-block"
          >
            {t.nav.cta}
          </a>

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 md:hidden dark:text-slate-200"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls={MOBILE_MENU_ID}
          >
            {open ? (
              <X aria-hidden="true" className="h-6 w-6" />
            ) : (
              <Menu aria-hidden="true" className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      <div
        id={MOBILE_MENU_ID}
        aria-hidden={!open}
        className={`overflow-hidden border-b border-slate-200/60 bg-white/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 md:hidden dark:border-white/10 dark:bg-slate-950/95 ${
          open
            ? "max-h-96 opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <ul className="space-y-1 px-4 py-4">
          {t.nav.links.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                tabIndex={open ? 0 : -1}
                onClick={() => goTo(link.id)}
                className="w-full rounded-lg px-3 py-2.5 text-start text-sm font-medium text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-slate-200 dark:hover:bg-white/10"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <a
              tabIndex={open ? 0 : -1}
              href={`tel:${t.phone.tel}`}
              className="mt-2 block rounded-lg bg-blue-600 px-3 py-2.5 text-center text-sm font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              {t.nav.cta}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
