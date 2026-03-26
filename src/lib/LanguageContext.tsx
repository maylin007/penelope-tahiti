"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import type { Lang } from "./translations";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "fr",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");

  useEffect(() => {
    const stored = localStorage.getItem("lang");
    if (stored === "en" || stored === "fr") {
      setLang(stored);
    }
  }, []);

  const handleSetLang = (newLang: Lang) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
