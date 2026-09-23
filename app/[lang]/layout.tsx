import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n/config";
import { hasLocale, getDictionary } from "@/lib/i18n/dictionaries";
import { siteConfig } from "@/lib/site";
import { fontVariables } from "@/lib/fonts";
import { MotionProvider } from "@/components/ui/MotionProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "../globals.css";

// Statically generate exactly /es and /en — required for `output: "export"`.
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

// Any other `lang` segment 404s at build/request time instead of being
// rendered on demand (unsupported by static export anyway).
export const dynamicParams = false;

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  const tagline = hasLocale(lang) ? siteConfig.tagline[lang as Locale] : siteConfig.tagline.es;
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: `${siteConfig.name} — ${tagline}`,
      template: `%s | ${siteConfig.name}`,
    },
    description: tagline,
  };
}

/**
 * Root layout of the localized site (one of several root layouts, see
 * `app/(redirect)/layout.tsx`). Owning `<html>` here lets every exported page
 * ship the correct `lang` attribute without client-side patching.
 */
export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang as Locale);

  return (
    <html lang={lang} className={`${fontVariables} scroll-smooth`}>
      <body className="flex min-h-dvh flex-col bg-background text-foreground antialiased">
        <MotionProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-sand focus:px-4 focus:py-2 focus:text-navy"
          >
            {dict.common.skipToContent}
          </a>
          <Header locale={lang as Locale} nav={dict.nav} siteName={siteConfig.name} />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer locale={lang as Locale} footer={dict.footer} nav={dict.nav} siteName={siteConfig.name} />
        </MotionProvider>
      </body>
    </html>
  );
}
