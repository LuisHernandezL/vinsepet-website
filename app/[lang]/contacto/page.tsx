import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildLanguageAlternates } from "@/lib/i18n/routes";
import { interpolate } from "@/lib/i18n/interpolate";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { ContactInfo } from "@/components/sections/ContactInfo";
import { ContactForm } from "@/components/sections/ContactForm";
import { PortsList } from "@/components/sections/PortsList";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/contacto">): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const vars = { siteName: siteConfig.name };

  return {
    title: interpolate(dict.contact.meta.title, vars),
    description: interpolate(dict.contact.meta.description, vars),
    alternates: { languages: buildLanguageAlternates("contact") },
  };
}

export default async function ContactPage({
  params,
}: PageProps<"/[lang]/contacto">) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <PageHero
        eyebrow={dict.contact.hero.eyebrow}
        title={dict.contact.hero.title}
        subtitle={dict.contact.hero.subtitle}
      />

      <section className="bg-white py-24">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-10">
            <ContactInfo locale={locale} dict={dict.contact.info} />
            <div className="flex flex-col gap-4">
              <SectionHeading title={dict.contact.ports.title} subtitle={dict.contact.ports.subtitle} />
              <PortsList locale={locale} />
            </div>
          </div>
          <ContactForm locale={locale} dict={dict.contact.form} />
        </Container>
      </section>
    </>
  );
}
