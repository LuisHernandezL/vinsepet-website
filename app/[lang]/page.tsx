import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { localePath, buildLanguageAlternates } from "@/lib/i18n/routes";
import { interpolate } from "@/lib/i18n/interpolate";
import { siteConfig } from "@/lib/site";
import { services } from "@/content/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Hero } from "@/components/sections/Hero";
import { PortsMarquee } from "@/components/sections/PortsMarquee";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Methodology } from "@/components/sections/Methodology";
import { Advantages } from "@/components/sections/Advantages";
import { Stats } from "@/components/sections/Stats";
import { CtaBand } from "@/components/sections/CtaBand";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const vars = { siteName: siteConfig.name };

  return {
    title: interpolate(dict.home.meta.title, vars),
    description: interpolate(dict.home.meta.description, vars),
    alternates: { languages: buildLanguageAlternates("home") },
  };
}

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = await getDictionary(locale);
  const vars = { siteName: siteConfig.name };

  return (
    <>
      <Hero
        eyebrow={dict.home.hero.eyebrow}
        title={dict.home.hero.title}
        subtitle={dict.home.hero.subtitle}
        primaryCta={dict.home.hero.primaryCta}
        primaryHref={siteConfig.contact.whatsappHref}
        secondaryCta={dict.home.hero.secondaryCta}
        secondaryHref={localePath(locale, "services")}
        scrollHint={dict.home.hero.scrollHint}
      />

      <PortsMarquee title={dict.home.marquee.title} />

      <section className="bg-white py-24">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            eyebrow={dict.home.services.eyebrow}
            title={dict.home.services.title}
            subtitle={dict.home.services.subtitle}
          />
          <ServicesGrid services={services.slice(0, 6)} locale={locale} />
          <Button href={localePath(locale, "services")} variant="outline" className="mx-auto">
            {dict.home.services.cta}
          </Button>
        </Container>
      </section>

      <Methodology
        eyebrow={dict.home.methodology.eyebrow}
        title={dict.home.methodology.title}
        quote={dict.home.methodology.quote}
        quoteAttribution={interpolate(dict.home.methodology.quoteAttribution, vars)}
        capabilitiesTitle={dict.home.methodology.capabilitiesTitle}
        capabilities={dict.home.methodology.capabilities}
      />

      <Advantages
        eyebrow={dict.home.advantages.eyebrow}
        title={dict.home.advantages.title}
        items={dict.home.advantages.items}
      />

      <Stats
        eyebrow={dict.home.stats.eyebrow}
        title={dict.home.stats.title}
        items={dict.home.stats.items}
      />

      <CtaBand
        title={dict.home.cta.title}
        subtitle={dict.home.cta.subtitle}
        buttonLabel={dict.home.cta.button}
        href={siteConfig.contact.whatsappHref}
      />
    </>
  );
}
