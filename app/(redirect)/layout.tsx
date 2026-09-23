import type { Metadata } from "next";
import { defaultLocale } from "@/lib/i18n/config";
import { fontVariables } from "@/lib/fonts";
import { siteConfig } from "@/lib/site";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.name,
};

/**
 * Root layout for the non-localized `/` redirect stub. The localized site has
 * its own root layout in `app/[lang]/layout.tsx` so `<html lang>` is correct
 * in the statically exported HTML of every locale.
 */
export default function RedirectLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={defaultLocale} className={fontVariables}>
      <body className="flex min-h-dvh flex-col bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
