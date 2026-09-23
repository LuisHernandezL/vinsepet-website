import type { Locale } from "./config";
import { locales } from "./config";

/** Slugs are intentionally identical across locales (simpler routing/SEO). */
export const routeSlugs = {
  home: "",
  about: "sobre-nosotros",
  services: "servicios",
  projects: "proyectos",
  contact: "contacto",
} as const;

export type RouteKey = keyof typeof routeSlugs;

export function localePath(locale: Locale, key: RouteKey = "home"): string {
  const slug = routeSlugs[key];
  return slug ? `/${locale}/${slug}/` : `/${locale}/`;
}

/**
 * Swaps the leading `/es` or `/en` segment of a pathname for `targetLocale`,
 * preserving the rest of the path. Used by the language switcher so it
 * lands the visitor on the equivalent page rather than always the home page.
 */
export function swapLocaleInPath(pathname: string, targetLocale: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  const [maybeLocale, ...rest] = segments;
  const isKnownLocale = (locales as readonly string[]).includes(maybeLocale ?? "");
  const restSegments = isKnownLocale ? rest : segments;
  const path = [targetLocale, ...restSegments].join("/");
  return `/${path}/`;
}

/** Builds the `alternates.languages` map for `generateMetadata`. */
export function buildLanguageAlternates(key: RouteKey) {
  return Object.fromEntries(locales.map((locale) => [locale, localePath(locale, key)]));
}
