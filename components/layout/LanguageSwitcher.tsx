"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { locales, localeNames, type Locale } from "@/lib/i18n/config";
import { swapLocaleInPath } from "@/lib/i18n/routes";

export function LanguageSwitcher({
  locale,
  label,
  className = "",
  tone = "light",
}: {
  locale: Locale;
  label: string;
  className?: string;
  tone?: "light" | "dark";
}) {
  const pathname = usePathname() ?? `/${locale}/`;
  const toneClasses =
    tone === "dark"
      ? "border-white/25 text-white"
      : "border-navy/15 text-navy";

  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full border p-1 text-sm ${toneClasses} ${className}`}
      role="group"
      aria-label={label}
    >
      {locales.map((loc) => {
        const isActive = loc === locale;
        return (
          <Link
            key={loc}
            href={swapLocaleInPath(pathname, loc)}
            aria-current={isActive ? "true" : undefined}
            className={`rounded-full px-3 py-1 font-semibold uppercase tracking-wide transition-colors ${
              isActive
                ? "bg-teal text-white"
                : tone === "dark"
                  ? "hover:bg-white/10"
                  : "hover:bg-navy/5"
            }`}
          >
            {loc}
            <span className="sr-only"> — {localeNames[loc]}</span>
          </Link>
        );
      })}
    </div>
  );
}
