// src/hooks/useLanguage.ts
import { useEffect, useState } from "react";
import type { Language } from "../types";

const LANG_KEY = "fixence-lang";

function getInitialLang(): Language {
  return localStorage.getItem(LANG_KEY) === "en" ? "en" : "fa";
}

export function useLanguage() {
  const [lang, setLang] = useState<Language>(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
    localStorage.setItem(LANG_KEY, lang);
  }, [lang]);

  const toggleLang = () => setLang((l) => (l === "fa" ? "en" : "fa"));

  return { lang, toggleLang };
}
