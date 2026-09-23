export interface Port {
  slug: string;
  name: string;
  country: { es: string; en: string };
}

// Ports of call across Venezuela and the wider Caribbean basin.
export const ports: Port[] = [
  { slug: "puerto-cabello", name: "Puerto Cabello", country: { es: "Venezuela", en: "Venezuela" } },
  { slug: "la-guaira", name: "La Guaira", country: { es: "Venezuela", en: "Venezuela" } },
  { slug: "maracaibo", name: "Maracaibo", country: { es: "Venezuela", en: "Venezuela" } },
  { slug: "puerto-la-cruz-guanta", name: "Puerto La Cruz / Guanta", country: { es: "Venezuela", en: "Venezuela" } },
  { slug: "puerto-ordaz", name: "Puerto Ordaz", country: { es: "Venezuela", en: "Venezuela" } },
  { slug: "guamache", name: "Guamache", country: { es: "Venezuela", en: "Venezuela" } },
];
