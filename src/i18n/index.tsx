import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { en } from "./en";
import { es } from "./es";

export type Lang = "en" | "es";
export type Key = keyof typeof en;
export type L = { en: string; es: string };

const dicts: Record<Lang, Record<Key, string>> = { en, es };
const STORE = "bionagro-lang";

function initial(): Lang {
  try {
    const saved = localStorage.getItem(STORE);
    if (saved === "en" || saved === "es") return saved;
  } catch {
    /* storage unavailable */
  }
  return navigator.language?.toLowerCase().startsWith("es") ? "es" : "en";
}

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: Key) => string; tr: (v: L) => string };
const I18n = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initial);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORE, l);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo<Ctx>(
    () => ({ lang, setLang, t: (k) => dicts[lang][k], tr: (v) => v[lang] }),
    [lang, setLang],
  );
  return <I18n.Provider value={value}>{children}</I18n.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18n);
  if (!ctx) throw new Error("useI18n must be used inside LanguageProvider");
  return ctx;
}
