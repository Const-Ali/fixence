// src/context/AppContext.tsx
import { createContext, useContext } from "react";
import type { Language, SiteContent, Theme } from "../types";

export interface AppContextValue {
  lang: Language;
  theme: Theme;
  t: SiteContent;
  toggleLang: () => void;
  toggleTheme: () => void;
}

export const AppContext = createContext<AppContextValue | null>(null);

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);

  if (!ctx) {
    throw new Error("useApp must be used within an AppProvider");
  }

  return ctx;
}
