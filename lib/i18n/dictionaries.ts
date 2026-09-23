import type { Locale } from "./config";
import { isLocale } from "./config";

// Dictionaries are dynamically imported per-locale so each page only ships
// the JSON it needs. This file is only ever imported from Server Components
// (layouts/pages), so the dictionaries never reach the client bundle.
const dictionaries = {
  es: () =>
    import("@/app/[lang]/dictionaries/es.json").then((m) => m.default),
  en: () =>
    import("@/app/[lang]/dictionaries/en.json").then((m) => m.default),
};

export const hasLocale = (locale: string): locale is Locale =>
  isLocale(locale);

export const getDictionary = async (locale: Locale) => dictionaries[locale]();

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
