import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { localePath, buildLanguageAlternates } from "@/lib/i18n/routes";
import { interpolate } from "@/lib/i18n/interpolate";
import { siteConfig } from "@/lib/site";
import { services } from "@/content/services";
import { projects } from "@/content/projects";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { Stats } from "@/components/sections/Stats";
import { CtaBand } from "@/components/sections/CtaBand";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/proyectos">): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const vars = { siteName: siteConfig.name };

  return {
    title: interpolate(dict.projects.meta.title, vars),
    description: interpolate(dict.projects.meta.description, vars),
    alternates: { languages: buildLanguageAlternates("projects") },
  };
}

export default async function ProjectsPage({
  params,
}: PageProps<"/[lang]/proyectos">) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <PageHero
        eyebrow={dict.projects.hero.eyebrow}
        title={dict.projects.hero.title}
        subtitle={dict.projects.hero.subtitle}
      />

      <section className="bg-white py-24">
        <Container>
          <ProjectsGrid
            locale={locale}
            projects={projects}
            services={services}
            dict={dict.projects.filters}
          />
        </Container>
      </section>

      <Stats
        eyebrow={dict.home.stats.eyebrow}
        title={dict.home.stats.title}
        items={dict.home.stats.items}
      />

      <CtaBand
        title={dict.projects.cta.title}
        subtitle={dict.projects.cta.subtitle}
        buttonLabel={dict.projects.cta.button}
        href={localePath(locale, "contact")}
      />
    </>
  );
}
