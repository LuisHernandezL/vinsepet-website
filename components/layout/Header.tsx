"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/routes";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileMenu, type NavItem } from "./MobileMenu";

interface HeaderDict {
  home: string;
  about: string;
  services: string;
  projects: string;
  contact: string;
  cta: string;
  languageLabel: string;
  menuOpen: string;
  menuClose: string;
}

export function Header({
  locale,
  nav,
  siteName,
}: {
  locale: Locale;
  nav: HeaderDict;
  siteName: string;
}) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items: NavItem[] = [
    { href: localePath(locale, "home"), label: nav.home },
    { href: localePath(locale, "about"), label: nav.about },
    { href: localePath(locale, "services"), label: nav.services },
    { href: localePath(locale, "projects"), label: nav.projects },
    { href: localePath(locale, "contact"), label: nav.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-navy/95 shadow-md backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href={localePath(locale, "home")}
          className="font-heading text-lg font-bold tracking-tight text-white"
        >
          {siteName}
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {items.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive ? "text-sand" : "text-white/85 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher locale={locale} label={nav.languageLabel} tone="dark" />
          <Link
            href={localePath(locale, "contact")}
            className="inline-flex items-center justify-center rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-dark"
          >
            {nav.cta}
          </Link>
        </div>

        <MobileMenu
          locale={locale}
          items={items}
          ctaHref={localePath(locale, "contact")}
          ctaLabel={nav.cta}
          languageLabel={nav.languageLabel}
          openLabel={nav.menuOpen}
          closeLabel={nav.menuClose}
        />
      </div>
    </header>
  );
}
