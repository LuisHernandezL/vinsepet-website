export interface Service {
  slug: string;
  /** Key into the icon map used by <ServicesGrid> / <ServiceIcon>. */
  icon:
    | "ruler"
    | "alert"
    | "fuel"
    | "clipboard"
    | "droplets"
    | "loading"
    | "list"
    | "shield"
    | "container"
    | "eye"
    | "search";
  tag: { es: string; en: string };
  title: { es: string; en: string };
  summary: { es: string; en: string };
  description: { es: string; en: string };
  /** Optional path to a real photo, dropped into public/images later. */
  image?: string;
}

export const services: Service[] = [
  {
    slug: "loading-discharge-supervision",
    icon: "loading",
    tag: { es: "Superintendencia", en: "Superintendence" },
    title: {
      es: "Supervisión de Carga y Descarga (Superintendencia)",
      en: "Loading & Discharge Supervision",
    },
    summary: {
      es: "Superintendencia de carga a tiempo completo durante toda la operación de carga o descarga.",
      en: "Full-time cargo superintendence throughout the entire loading or discharge operation.",
    },
    description: {
      es: "Supervisamos ritmo de carga, estabilidad, segregación, estiba y cumplimiento del plan de carga, actuando como representante técnico de armadores, operadores portuarios o dueños de la carga en muelle.",
      en: "We supervise loading rate, stability, segregation, stowage and adherence to the stowage plan, acting on the quay as the technical representative of owners, terminal operators or cargo interests.",
    },
  },
  {
    slug: "loss-control",
    icon: "eye",
    tag: { es: "Prevención de pérdidas", en: "Loss prevention" },
    title: { es: "Loss Control", en: "Loss Control" },
    summary: {
      es: "Control y seguimiento de la carga a lo largo de la cadena logística para prevenir mermas y pérdidas.",
      en: "Cargo monitoring along the supply chain to prevent shortages and losses.",
    },
    description: {
      es: "Supervisamos cada punto de transferencia (terminal, barcaza, buque y tanques), verificamos cantidades, sellos y condiciones de manipuleo, e identificamos a tiempo las diferencias para reducir mermas y respaldar eventuales reclamos.",
      en: "We monitor every transfer point (terminal, barge, vessel and tanks), verify quantities, seals and handling conditions, and flag discrepancies early to reduce shortages and support any claims.",
    },
  },
  {
    slug: "preloading-inspection",
    icon: "search",
    tag: { es: "Preloading", en: "Preloading" },
    title: { es: "Inspecciones de Preloading", en: "Preloading Inspections" },
    summary: {
      es: "Verificación de la condición de la carga y del buque antes del inicio de la carga.",
      en: "Verification of cargo and vessel condition before loading commences.",
    },
    description: {
      es: "Inspeccionamos la condición de la carga en muelle o almacén, registramos daños preexistentes con evidencia fotográfica y verificamos que el buque esté apto para recibirla, dejando una línea base clara ante futuros reclamos.",
      en: "We inspect cargo condition on the quay or in the warehouse, record pre-existing damage with photographic evidence and verify the vessel is fit to receive it, setting a clear baseline against future claims.",
    },
  },
  {
    slug: "hold-cleanliness-hose-test",
    icon: "droplets",
    tag: { es: "Pre-embarque", en: "Pre-loading" },
    title: {
      es: "Limpieza de Bodegas y Hose Test",
      en: "Hold Cleanliness & Hose Test",
    },
    summary: {
      es: "Certificación de limpieza de bodegas y hose test de escotillas antes de cargar.",
      en: "Hold cleanliness certification and hatch-cover hose testing prior to loading.",
    },
    description: {
      es: "Inspeccionamos bodegas según el estándar requerido por la carga (grano, azúcar, cemento) y ejecutamos el hose test de las juntas de escotilla, previniendo el ingreso de agua de mar o lluvia durante el tránsito.",
      en: "We inspect holds against the standard the cargo requires (grain, sugar, cement) and run hose tests on hatch cover joints, preventing seawater or rainwater ingress during the voyage.",
    },
  },
  {
    slug: "outturn-inspections",
    icon: "list",
    tag: { es: "Control de carga", en: "Cargo control" },
    title: { es: "Outturn Inspections", en: "Outturn Inspections" },
    summary: {
      es: "Verificación de cantidad y condición de la carga al momento de la descarga.",
      en: "Verification of cargo quantity and condition at discharge.",
    },
    description: {
      es: "Controlamos la carga durante la descarga, comparamos lo recibido contra los documentos de embarque y registramos faltantes, sobrantes o daños con reporte diario y evidencia fotográfica.",
      en: "We check cargo throughout discharge, compare what is received against the shipping documents and record shortages, overages or damage with daily reporting and photographic evidence.",
    },
  },
  {
    slug: "cargo-damage-loss",
    icon: "alert",
    tag: { es: "Reclamos", en: "Claims" },
    title: { es: "Inspecciones de Daño y Faltante de Carga", en: "Cargo Damage & Loss Surveys" },
    summary: {
      es: "Evaluación independiente del origen, alcance y causa de daños o faltantes de carga para fines de reclamo.",
      en: "Independent assessment of the origin, extent and cause of cargo damage or shortage for claim purposes.",
    },
    description: {
      es: "Documentamos condición, causa probable y cuantía del daño o faltante, con fotografía, muestreo cuando aplica y opinión técnica imparcial para aseguradoras, armadores, cargadores y receptores.",
      en: "We document condition, probable cause and quantum of the damage or shortage, with photographic evidence, sampling where applicable, and an impartial technical opinion for insurers, owners, shippers and receivers.",
    },
  },
  {
    slug: "bunker-quantity",
    icon: "fuel",
    tag: { es: "Combustible", en: "Fuel" },
    title: { es: "Inspecciones de Cantidad de Bunker (ROB)", en: "Bunker Quantity Surveys (ROB)" },
    summary: {
      es: "Verificación de remanentes de combustible a bordo (ROB) en cambios de fletamento o entrega/redelivery.",
      en: "On-board fuel remaining (ROB) verification at charter changes and delivery/redelivery.",
    },
    description: {
      es: "Medimos tanques de combustible y agua dulce, aplicamos tablas de calibración y correcciones de temperatura para determinar el remanente a bordo con precisión, protegiendo a fletadores y armadores de disputas por cantidad.",
      en: "We sound fuel and fresh-water tanks, apply calibration tables and temperature corrections to determine remaining on board with accuracy, protecting charterers and owners from quantity disputes.",
    },
  },
  {
    slug: "on-off-hire-condition",
    icon: "clipboard",
    tag: { es: "Fletamento", en: "Charter" },
    title: { es: "Inspecciones de Condición On/Off Hire", en: "On/Off Hire Condition Surveys" },
    summary: {
      es: "Registro fotográfico y descriptivo de la condición del buque al inicio y fin del período de fletamento.",
      en: "Photographic and descriptive record of the vessel's condition at the start and end of the charter period.",
    },
    description: {
      es: "Elaboramos un informe detallado de la condición de casco, bodegas, equipos de carga y espacios comunes, sirviendo de referencia objetiva para liquidar diferencias entre armador y fletador.",
      en: "We prepare a detailed report on hull, holds, cargo gear and common spaces condition, serving as an objective baseline to settle differences between owner and charterer.",
    },
  },
  {
    slug: "pi-hm-condition",
    icon: "shield",
    tag: { es: "P&I / Casco y Máquinas", en: "P&I / H&M" },
    title: { es: "Inspecciones de Condición P&I / H&M", en: "P&I / H&M Condition Surveys" },
    summary: {
      es: "Inspecciones de condición requeridas por clubes de P&I y aseguradoras de casco y máquinas.",
      en: "Condition surveys required by P&I clubs and hull & machinery underwriters.",
    },
    description: {
      es: "Realizamos inspecciones de entrada/renovación de cobertura, evaluando estructura, equipos de seguridad, contaminación y cumplimiento operacional, con reporte conforme al formato exigido por el club o asegurador.",
      en: "We carry out entry/renewal condition surveys, assessing structure, safety equipment, pollution prevention and operational compliance, reporting in the format required by the club or underwriter.",
    },
  },
  {
    slug: "container-reefer",
    icon: "container",
    tag: { es: "Contenedores", en: "Containers" },
    title: { es: "Inspecciones de Contenedores y Reefers", en: "Container & Reefer Surveys" },
    summary: {
      es: "Verificación estructural de contenedores y auditoría de temperatura/humedad en cargas refrigeradas.",
      en: "Structural verification of containers and temperature/humidity audit of refrigerated cargo.",
    },
    description: {
      es: "Inspeccionamos estanqueidad, estructura y limpieza de contenedores secos, y descargamos y analizamos el registro de temperatura de unidades reefer para detectar excursiones térmicas y su responsabilidad.",
      en: "We inspect the watertightness, structure and cleanliness of dry containers, and download and analyse the temperature record of reefer units to detect thermal excursions and attribute responsibility.",
    },
  },
  {
    slug: "draft-surveys",
    icon: "ruler",
    tag: { es: "Cuantificación de carga", en: "Cargo quantification" },
    title: { es: "Inspecciones de Calado (Draft Surveys)", en: "Draft Surveys" },
    summary: {
      es: "Determinación precisa del peso de carga a granel mediante lectura de calados y cálculos hidrostáticos.",
      en: "Precise bulk-cargo weight determination through draft readings and hydrostatic calculations.",
    },
    description: {
      es: "Realizamos lecturas de calado inicial y final, densidad del agua, correcciones de asiento y escora, y cálculo de desplazamiento conforme a las tablas hidrostáticas del buque, entregando un peso de carga trazable y defendible ante reclamos.",
      en: "We perform initial and final draft readings, water density checks, trim and list corrections, and displacement calculations against the vessel's hydrostatic tables, delivering a traceable cargo weight that holds up under claims.",
    },
  },
];
