import type { Service } from "@/content/services";
import type { Locale } from "@/lib/i18n/config";
import { Reveal } from "@/components/ui/Reveal";
import { Chip } from "@/components/ui/Chip";
import { ServiceIcon } from "@/components/ui/service-icons";

export function ServicesGrid({
  services,
  locale,
  detailed = false,
}: {
  services: Service[];
  locale: Locale;
  /** Services page shows the full description; home shows the summary. */
  detailed?: boolean;
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <Reveal key={service.slug} index={index % 6} className="h-full">
          <article className="group flex h-full flex-col gap-4 rounded-2xl border border-navy/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-mint text-navy transition-colors group-hover:bg-teal group-hover:text-white">
                <ServiceIcon icon={service.icon} />
              </span>
              <Chip tone="mint">{service.tag[locale]}</Chip>
            </div>
            <h3 className="font-heading text-lg font-semibold text-navy">
              {service.title[locale]}
            </h3>
            <p className="text-sm leading-relaxed text-navy/70">
              {detailed ? service.description[locale] : service.summary[locale]}
            </p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
