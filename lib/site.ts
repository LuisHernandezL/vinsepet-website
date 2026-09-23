/**
 * Single source of truth for brand/contact/social configuration.
 * `name` (NEXT_PUBLIC_SITE_NAME) and `url` (NEXT_PUBLIC_SITE_URL) are inlined
 * at build time by Next.js — changing either env var requires a rebuild.
 */
const name = process.env.NEXT_PUBLIC_SITE_NAME || "Vinsepet";

export const siteConfig = {
  name,
  legalName: `${name} Cargo & Marine Surveyors, C.A.`,
  tagline: {
    es: "Inspectores independientes de carga y buques",
    en: "Independent cargo and marine surveyors",
  },
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com",
  contact: {
    phoneDisplay: "+58 000 000 0000",
    phoneHref: "+580000000000",
    email: "info@example.com",
    addressLines: {
      es: ["Av. Bolívar, Torre Marina, Piso 3", "Puerto Cabello, Carabobo, Venezuela"],
      en: ["Av. Bolívar, Torre Marina, 3rd Floor", "Puerto Cabello, Carabobo, Venezuela"],
    },
    hours: {
      es: "Disponibilidad 24/7 para inspecciones y atención de emergencias",
      en: "24/7 availability for surveys and emergency call-outs",
    },
  },
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/example" },
    { label: "Instagram", href: "https://www.instagram.com/example" },
    { label: "WhatsApp", href: "https://wa.me/580000000000" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
