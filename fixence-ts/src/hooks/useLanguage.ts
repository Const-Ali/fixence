// src/hooks/useLanguage.ts
import { useCallback, useEffect, useState } from "react";
import type { Language } from "../types";

const LANG_KEY = "fixence-lang";

function getInitialLang(): Language {
  try {
    return window.localStorage.getItem(LANG_KEY) === "en" ? "en" : "fa";
  } catch {
    return "fa";
  }
}

export function useLanguage() {
  const [lang, setLang] = useState<Language>(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";

    try {
      window.localStorage.setItem(LANG_KEY, lang);
    } catch {
      // Storage can be unavailable in privacy-restricted browsing contexts.
    }
  }, [lang]);

  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key !== LANG_KEY) return;
      setLang(event.newValue === "en" ? "en" : "fa");
    };

    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const toggleLang = useCallback(
    () => setLang((current) => (current === "fa" ? "en" : "fa")),
    [],
  );

  return { lang, toggleLang };
}
