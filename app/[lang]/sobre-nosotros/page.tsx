import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildLanguageAlternates } from "@/lib/i18n/routes";
import { interpolate } from "@/lib/i18n/interpolate";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { Stats } from "@/components/sections/Stats";
import { CtaBand } from "@/components/sections/CtaBand";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/sobre-nosotros">): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const vars = { siteName: siteConfig.name };

  return {
    title: interpolate(dict.about.meta.title, vars),
    description: interpolate(dict.about.meta.description, vars),
    alternates: { languages: buildLanguageAlternates("about") },
  };
}

export default async function AboutPage({
  params,
}: PageProps<"/[lang]/sobre-nosotros">) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = await getDictionary(locale);
  const vars = { siteName: siteConfig.name };

  return (
    <>
      <PageHero
        eyebrow={dict.about.hero.eyebrow}
        title={dict.about.hero.title}
        subtitle={dict.about.hero.subtitle}
      />

      <section className="bg-white py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow={dict.about.story.eyebrow}
            title={dict.about.story.title}
          />
          <div className="flex flex-col gap-4">
            {dict.about.story.paragraphs.map((paragraph, index) => (
              <Reveal key={index} index={index}>
                <p className="text-base leading-relaxed text-navy/75">
                  {interpolate(paragraph, vars)}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-mint-50 py-24">
        <Container className="grid gap-6 sm:grid-cols-2">
          <Reveal className="flex flex-col gap-3 rounded-2xl bg-white p-8 shadow-sm">
            <h3 className="font-heading text-xl font-semibold text-navy">
              {dict.about.missionVision.missionTitle}
            </h3>
            <p className="text-navy/75">{dict.about.missionVision.mission}</p>
          </Reveal>
          <Reveal index={1} className="flex flex-col gap-3 rounded-2xl bg-white p-8 shadow-sm">
            <h3 className="font-heading text-xl font-semibold text-navy">
              {dict.about.missionVision.visionTitle}
            </h3>
            <p className="text-navy/75">{dict.about.missionVision.vision}</p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container className="flex flex-col gap-12">
          <SectionHeading title={dict.about.values.title} align="center" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {dict.about.values.items.map((value, index) => (
              <Reveal key={value.title} index={index} className="rounded-2xl border border-navy/10 p-6 text-center">
                <h4 className="font-heading text-lg font-semibold text-navy">{value.title}</h4>
                <p className="mt-2 text-sm text-navy/70">{value.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Stats
        eyebrow={dict.home.stats.eyebrow}
        title={dict.home.stats.title}
        items={dict.home.stats.items}
      />

      <section className="bg-navy py-24 text-white">
        <Container className="flex flex-col gap-8">
          <SectionHeading title={dict.about.certifications.title} tone="dark" align="center" />
          <ul className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
            {dict.about.certifications.items.map((item, index) => (
              <Reveal as="li" key={item} index={index} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green" aria-hidden="true" />
                <span className="text-white/85">{item}</span>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand
        title={dict.about.cta.title}
        subtitle={dict.about.cta.subtitle}
        buttonLabel={dict.about.cta.button}
        href={siteConfig.contact.whatsappHref}
      />
    </>
  );
}
