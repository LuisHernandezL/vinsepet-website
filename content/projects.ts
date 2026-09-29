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
    category: "hold-cleanliness-hose-test",
    portSlug: "rosario-san-lorenzo",
    year: 2023,
    cargo: { es: "Granos a granel", en: "Bulk grain" },
    title: {
      es: "Limpieza de bodegas y hose test previo a carga de granos",
      en: "Hold cleanliness and hose test ahead of grain loading",
    },
    description: {
      es: "Certificación de limpieza estándar grano y hose test de escotillas antes del inicio de carga.",
      en: "Grain-standard cleanliness certification and hatch-cover hose testing before loading commenced.",
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
    slug: "preloading-steel-bahia-blanca",
    category: "preloading-inspection",
    portSlug: "bahia-blanca",
    year: 2021,
    cargo: { es: "Productos siderúrgicos", en: "Steel products" },
    title: {
      es: "Inspección de preloading — productos siderúrgicos",
      en: "Preloading inspection — steel products",
    },
    description: {
      es: "Registro de la condición de la carga en muelle y de daños preexistentes antes del inicio de la carga.",
      en: "Recorded cargo condition on the quay and pre-existing damage before loading commenced.",
    },
  },
  {
    slug: "outturn-grain-quequen",
    category: "outturn-inspections",
    portSlug: "quequen",
    year: 2024,
    cargo: { es: "Granos a granel", en: "Bulk grain" },
    title: {
      es: "Outturn inspection — descarga de granos",
      en: "Outturn inspection — grain discharge",
    },
    description: {
      es: "Control de cantidad y condición de la carga durante la descarga, con conciliación contra los documentos de embarque.",
      en: "Checked cargo quantity and condition throughout discharge, reconciled against the shipping documents.",
    },
  },
];
