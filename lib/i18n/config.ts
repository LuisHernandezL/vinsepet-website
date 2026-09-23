/**
 * Supported locales for the site. `es` is the default and canonical locale;
 * `/` redirects to `/es/`. Every route lives under `app/[lang]` and is
 * statically generated for each locale via `generateStaticParams`.
 */
export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

export const localeNames: Record<Locale, string> = {
  es: "Español",
  en: "English",
};

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);
