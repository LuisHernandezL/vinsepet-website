import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { siteConfig } from "@/lib/site";
import type { Locale } from "@/lib/i18n/config";
import { Reveal } from "@/components/ui/Reveal";

interface ContactInfoDict {
  title: string;
  phoneLabel: string;
  emailLabel: string;
  addressLabel: string;
  hoursLabel: string;
}

export function ContactInfo({ locale, dict }: { locale: Locale; dict: ContactInfoDict }) {
  const items = [
    {
      icon: Phone,
      label: dict.phoneLabel,
      value: siteConfig.contact.phoneDisplay,
      href: siteConfig.contact.whatsappHref,
    },
    {
      icon: Mail,
      label: dict.emailLabel,
      value: siteConfig.contact.email,
      href: `mailto:${siteConfig.contact.email}`,
    },
    {
      icon: MapPin,
      label: dict.addressLabel,
      value: siteConfig.contact.addressLines[locale].join(", "),
      href: undefined,
    },
    {
      icon: Clock,
      label: dict.hoursLabel,
      value: siteConfig.contact.hours[locale],
      href: undefined,
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-heading text-xl font-semibold text-navy">{dict.title}</h2>
      <dl className="grid gap-4 sm:grid-cols-2">
        {items.map((item, index) => (
          <Reveal key={item.label} index={index}>
            <div className="flex h-full flex-col gap-2 rounded-2xl border border-navy/10 bg-white p-5">
              <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-teal">
                <item.icon className="h-4 w-4" aria-hidden="true" />
                {item.label}
              </dt>
              <dd className="text-sm text-navy/80">
                {item.href ? (
                  <a
                    href={item.href}
                    className="hover:text-teal"
                    {...(item.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </div>
  );
}
