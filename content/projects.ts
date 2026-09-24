export interface Project {
  slug: string;
  /** Matches a Service["slug"] and is used as the filter category. */
  category: string;
  portSlug: string;
  year: number;
  cargo: { es: string; en: string };
  title: { es: string; en: string };
  description: { es: string; en: string };
  image?: string;
}

export const projects: Project[] = [
  {
    slug: "draft-survey-urea-buenos-aires",
    category: "draft-surveys",
    portSlug: "buenos-aires",
    year: 2024,
    cargo: { es: "45,000 MT de urea a granel", en: "45,000 MT of bulk urea" },
    title: {
      es: "Draft survey de carga — 45,000 TM de urea",
      en: "Loading draft survey — 45,000 MT of urea",
    },
    description: {
      es: "Determinación del peso embarcado mediante lecturas de calado antes y después de la carga, con conciliación contra el manifiesto de la terminal.",
      en: "Determined the loaded weight through pre- and post-loading draft readings, reconciled against the terminal's manifest.",
    },
  },
  {
    slug: "bunker-survey-vlcc-dock-sud",
    category: "bunker-quantity",
    portSlug: "dock-sud",
    year: 2023,
    cargo: { es: "Combustible IFO/MGO", en: "IFO/MGO bunker fuel" },
    title: {
      es: "Inspección de remanente de combustible (ROB) — VLCC",
      en: "Bunker remaining on board (ROB) survey — VLCC",
    },
    description: {
      es: "Reconciliación de ROB en cambio de fletamento, con sondeo de tanques y corrección por temperatura y densidad.",
      en: "ROB reconciliation at a charter change, with tank sounding and temperature/density correction.",
    },
  },
  {
    slug: "on-hire-bulk-carrier-zarate-campana",
    category: "on-off-hire-condition",
    portSlug: "zarate-campana",
    year: 2024,
    cargo: { es: "N/A — inspección de condición", en: "N/A — condition survey" },
    title: {
      es: "Inspección de condición On-Hire — granelero",
      en: "On-hire condition survey — bulk carrier",
    },
    description: {
      es: "Registro fotográfico completo de casco, bodegas y equipos de carga al inicio del fletamento por tiempo.",
      en: "Full photographic record of hull, holds and cargo gear at the start of the time charter.",
    },
  },
  {
    slug: "cargo-damage-containers-buenos-aires",
    category: "cargo-damage-loss",
    portSlug: "buenos-aires",
    year: 2022,
    cargo: { es: "Carga general en contenedores", en: "Containerized general cargo" },
    title: {
      es: "Inspección de daño por humedad — carga contenedorizada",
      en: "Wet-damage survey — containerized cargo",
    },
    description: {
      es: "Determinación de causa y cuantía de daño por humedad en un lote de carga general para reclamo ante aseguradora.",
      en: "Determined cause and extent of wet damage to a general cargo lot for an insurance claim.",
    },
  },
  {
    slug: "hold-cleanliness-rosario",
    category: "hold-cleanliness-uttt",
    portSlug: "rosario-san-lorenzo",
    year: 2023,
    cargo: { es: "Granos a granel", en: "Bulk grain" },
    title: {
      es: "Limpieza de bodegas y UTTT previo a carga de granos",
      en: "Hold cleanliness and UTTT ahead of grain loading",
    },
    description: {
      es: "Certificación de limpieza estándar grano y prueba ultrasónica de hermeticidad de escotillas antes del inicio de carga.",
      en: "Grain-standard cleanliness certification and ultrasonic hatch-tightness testing before loading commenced.",
    },
  },
  {
    slug: "loading-supervision-steel-zarate-campana",
    category: "loading-discharge-supervision",
    portSlug: "zarate-campana",
    year: 2024,
    cargo: { es: "Productos siderúrgicos", en: "Steel products" },
    title: {
      es: "Superintendencia de carga — productos siderúrgicos",
      en: "Cargo superintendence — steel products",
    },
    description: {
      es: "Supervisión continua de la operación de carga, estabilidad y cumplimiento del plan de estiba durante todo el atraque.",
      en: "Continuous supervision of loading operations, stability and stowage-plan compliance for the full berth call.",
    },
  },
  {
    slug: "reefer-survey-dock-sud",
    category: "container-reefer",
    portSlug: "dock-sud",
    year: 2023,
    cargo: { es: "Carga perecedera refrigerada", en: "Refrigerated perishable cargo" },
    title: {
      es: "Inspección de contenedor reefer — excursión térmica",
      en: "Reefer container survey — temperature excursion",
    },
    description: {
      es: "Descarga y análisis del registro de temperatura de una unidad reefer para determinar el origen de una excursión térmica reclamada.",
      en: "Downloaded and analysed a reefer unit's temperature log to determine the origin of a claimed thermal excursion.",
    },
  },
  {
    slug: "lashing-survey-project-cargo-buenos-aires",
    category: "lashing-securing",
    portSlug: "buenos-aires",
    year: 2022,
    cargo: { es: "Carga de proyecto / breakbulk", en: "Project / breakbulk cargo" },
    title: {
      es: "Inspección de trincaje — carga de proyecto sobre cubierta",
      en: "Lashing survey — on-deck project cargo",
    },
    description: {
      es: "Verificación del plan de trincaje contra el CSM del buque y la resistencia de los elementos de sujeción antes de zarpar.",
      en: "Verified the lashing plan against the vessel's CSM and the strength of the securing gear before departure.",
    },
  },
  {
    slug: "pre-purchase-general-cargo-bahia-blanca",
    category: "pre-purchase-inspection",
    portSlug: "bahia-blanca",
    year: 2021,
    cargo: { es: "N/A — inspección de compraventa", en: "N/A — sale & purchase inspection" },
    title: {
      es: "Inspección previa a la compra — buque de carga general",
      en: "Pre-purchase inspection — general cargo vessel",
    },
    description: {
      es: "Evaluación técnica integral de casco, maquinaria y certificados para soportar la negociación de compraventa.",
      en: "Comprehensive technical assessment of hull, machinery and certificates to support the sale & purchase negotiation.",
    },
  },
  {
    slug: "tally-sampling-grain-quequen",
    category: "tally-sampling",
    portSlug: "quequen",
    year: 2024,
    cargo: { es: "Granos a granel", en: "Bulk grain" },
    title: {
      es: "Conteo y muestreo de carga — descarga de granos",
      en: "Tally & sampling — grain discharge",
    },
    description: {
      es: "Conteo turno a turno y muestreo representativo para control de calidad durante la descarga.",
      en: "Shift-by-shift tallying and representative sampling for quality control throughout discharge.",
    },
  },
];
