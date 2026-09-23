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
    slug: "draft-survey-urea-puerto-cabello",
    category: "draft-surveys",
    portSlug: "puerto-cabello",
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
    slug: "bunker-survey-vlcc-la-guaira",
    category: "bunker-quantity",
    portSlug: "la-guaira",
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
    slug: "on-hire-bulk-carrier-puerto-ordaz",
    category: "on-off-hire-condition",
    portSlug: "puerto-ordaz",
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
    slug: "cargo-damage-containers-puerto-cabello",
    category: "cargo-damage-loss",
    portSlug: "puerto-cabello",
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
    slug: "hold-cleanliness-guanta",
    category: "hold-cleanliness-uttt",
    portSlug: "puerto-la-cruz-guanta",
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
    slug: "loading-supervision-bauxite-puerto-ordaz",
    category: "loading-discharge-supervision",
    portSlug: "puerto-ordaz",
    year: 2024,
    cargo: { es: "Bauxita / alúmina", en: "Bauxite / alumina" },
    title: {
      es: "Superintendencia de carga — bauxita y alúmina",
      en: "Cargo superintendence — bauxite and alumina",
    },
    description: {
      es: "Supervisión continua de la operación de carga, estabilidad y cumplimiento del plan de estiba durante todo el atraque.",
      en: "Continuous supervision of loading operations, stability and stowage-plan compliance for the full berth call.",
    },
  },
  {
    slug: "reefer-survey-la-guaira",
    category: "container-reefer",
    portSlug: "la-guaira",
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
    slug: "lashing-survey-project-cargo-puerto-cabello",
    category: "lashing-securing",
    portSlug: "puerto-cabello",
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
    slug: "pre-purchase-general-cargo-maracaibo",
    category: "pre-purchase-inspection",
    portSlug: "maracaibo",
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
    slug: "tally-sampling-grain-guamache",
    category: "tally-sampling",
    portSlug: "guamache",
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
