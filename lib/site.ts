/**
 * Single source of truth for brand/contact/social configuration.
 * `name` (NEXT_PUBLIC_SITE_NAME) and `url` (NEXT_PUBLIC_SITE_URL) are inlined
 * at build time by Next.js — changing either env var requires a rebuild.
 */
const name = process.env.NEXT_PUBLIC_SITE_NAME || "ARS Inspecciones";

export const siteConfig = {
  name,
  legalName: name,
  logo: "/brand/ars-inspecciones-logo.png",
  tagline: {
    es: "Inspectores independientes de carga y buques",
    en: "Independent cargo and marine surveyors",
  },
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com",
  contact: {
    phoneDisplay: "+54 9 11 2403-3440",
    phoneHref: "+5491124033440",
    /** wa.me deep link; every "contact us" action routes here. */
    whatsappHref: "https://wa.me/5491124033440",
    email: "bqsurveyors@gmail.com",
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
    { label: "WhatsApp", href: "https://wa.me/5491124033440" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
