"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { LanguageSwitcher } from "./LanguageSwitcher";

export interface NavItem {
  href: string;
  label: string;
}

export function MobileMenu({
  locale,
  items,
  ctaHref,
  ctaLabel,
  languageLabel,
  openLabel,
  closeLabel,
}: {
  locale: Locale;
  items: NavItem[];
  ctaHref: string;
  ctaLabel: string;
  languageLabel: string;
  openLabel: string;
  closeLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? closeLabel : openLabel}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand"
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute inset-x-0 top-full overflow-hidden bg-navy/98 shadow-xl backdrop-blur"
          >
            <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile">
              {items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                      isActive ? "bg-white/10 text-sand" : "text-white hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href={ctaHref}
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-dark"
              >
                {ctaLabel}
              </Link>
              <div className="mt-3">
                <LanguageSwitcher locale={locale} label={languageLabel} tone="dark" />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
