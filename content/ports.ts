export interface Port {
  slug: string;
  name: string;
  country: { es: string; en: string };
}

// Main Argentine ports: River Plate, Paraná waterway and Atlantic coast.
export const ports: Port[] = [
  { slug: "buenos-aires", name: "Buenos Aires", country: { es: "Argentina", en: "Argentina" } },
  { slug: "dock-sud", name: "Dock Sud", country: { es: "Argentina", en: "Argentina" } },
  { slug: "bahia-blanca", name: "Bahía Blanca", country: { es: "Argentina", en: "Argentina" } },
  { slug: "rosario-san-lorenzo", name: "Rosario / San Lorenzo", country: { es: "Argentina", en: "Argentina" } },
  { slug: "zarate-campana", name: "Zárate / Campana", country: { es: "Argentina", en: "Argentina" } },
  { slug: "quequen", name: "Necochea / Quequén", country: { es: "Argentina", en: "Argentina" } },
];
