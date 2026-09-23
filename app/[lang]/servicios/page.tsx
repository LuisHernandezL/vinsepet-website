import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { localePath, buildLanguageAlternates } from "@/lib/i18n/routes";
import { interpolate } from "@/lib/i18n/interpolate";
import { siteConfig } from "@/lib/site";
import { services } from "@/content/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { CtaBand } from "@/components/sections/CtaBand";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/servicios">): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const vars = { siteName: siteConfig.name };

  return {
    title: interpolate(dict.services.meta.title, vars),
    description: interpolate(dict.services.meta.description, vars),
    alternates: { languages: buildLanguageAlternates("services") },
  };
}

export default async function ServicesPage({
  params,
}: PageProps<"/[lang]/servicios">) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <PageHero
        eyebrow={dict.services.hero.eyebrow}
        title={dict.services.hero.title}
        subtitle={dict.services.hero.subtitle}
      />

      <section className="bg-white py-24">
        <Container className="flex flex-col gap-12">
          <SectionHeading title={dict.services.listTitle} align="center" />
          <ServicesGrid services={services} locale={locale} detailed />
        </Container>
      </section>

      <CtaBand
        title={dict.services.cta.title}
        subtitle={dict.services.cta.subtitle}
        buttonLabel={dict.services.cta.button}
        href={localePath(locale, "contact")}
      />
    </>
  );
}
