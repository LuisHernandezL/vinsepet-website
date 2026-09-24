import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/routes";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/Container";

interface FooterDict {
  description: string;
  linksTitle: string;
  contactTitle: string;
  socialsTitle: string;
  hours: string;
  rights: string;
}

interface NavDict {
  home: string;
  about: string;
  services: string;
  projects: string;
  contact: string;
}

export function Footer({
  locale,
  footer,
  nav,
  siteName,
}: {
  locale: Locale;
  footer: FooterDict;
  nav: NavDict;
  siteName: string;
}) {
  const year = new Date().getFullYear();
  const addressLines = siteConfig.contact.addressLines[locale];

  const links = [
    { href: localePath(locale, "home"), label: nav.home },
    { href: localePath(locale, "about"), label: nav.about },
    { href: localePath(locale, "services"), label: nav.services },
    { href: localePath(locale, "projects"), label: nav.projects },
    { href: localePath(locale, "contact"), label: nav.contact },
  ];

  return (
    <footer className="bg-navy-900 text-white/80">
      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4 lg:col-span-1">
          <span className="w-fit rounded-lg bg-white px-3 py-2">
            <Image
              src={siteConfig.logo}
              alt={siteName}
              width={1440}
              height={320}
              className="h-10 w-auto"
            />
          </span>
          <p className="text-sm leading-relaxed">{footer.description}</p>
        </div>

        <nav aria-label={footer.linksTitle} className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-sand">
            {footer.linksTitle}
          </h3>
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-sand">
            {footer.contactTitle}
          </h3>
          <a
            href={siteConfig.contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2 text-sm hover:text-white"
          >
            <Phone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            {siteConfig.contact.phoneDisplay}
          </a>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="flex items-start gap-2 text-sm hover:text-white"
          >
            <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            {siteConfig.contact.email}
          </a>
          <address className="flex items-start gap-2 text-sm not-italic">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <span>{addressLines.join(", ")}</span>
          </address>
          <p className="text-sm text-sand">{footer.hours}</p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-sand">
            {footer.socialsTitle}
          </h3>
          <ul className="flex flex-col gap-2">
            {siteConfig.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-white"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.legalName}. {footer.rights}
          </p>
        </Container>
      </div>
    </footer>
  );
}
