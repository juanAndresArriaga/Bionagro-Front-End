import type { L } from "../i18n";

// Copy and numbers taken from the Claude-app reference (science.html). PHREEQC values are the page's embedded results.
export type Status = "done" | "prep" | "sched" | "open";

export const statusLabel: Record<Status, L> = {
  done: { en: "Completed", es: "Completados" },
  prep: { en: "In preparation", es: "En preparación" },
  sched: { en: "Scheduled", es: "Programados" },
  open: { en: "Open", es: "Abiertos" },
};

export const statusOne: Record<Status, L> = {
  done: { en: "Completed", es: "Completado" },
  prep: { en: "In preparation", es: "En preparación" },
  sched: { en: "Scheduled", es: "Programado" },
  open: { en: "Open", es: "Abierto" },
};

export const hero: { h: L; d: L } = {
  h: { en: "Real data. Clear status.", es: "Datos reales. Estado claro." },
  d: {
    en: "Field trials, lab analyses and technical articles. Every study says whether it is completed, in preparation or scheduled, and we publish the results, favorable or not.",
    es: "Ensayos de campo, análisis de laboratorio y artículos técnicos. Cada estudio dice si está completado, en preparación o programado, y publicamos los resultados sean favorables o no.",
  },
};

export const lemon = {
  k: { en: "Field trial · completed", es: "Ensayo de campo · completado" },
  h: { en: "Lemon: 72 % less damaged fruit", es: "Limón: 72 % menos fruta dañada" },
  d: {
    en: "A four-product Bionagro program, including Ca and Rhizo, versus the farm’s standard program.",
    es: "Un programa de cuatro productos Bionagro, entre ellos Ca y Rhizo, frente al manejo de la finca.",
  },
  scored: { en: "Peel damage scored on every tree", es: "Daño en cáscara evaluado en cada árbol" },
  farm: { en: "Farm program", es: "Manejo de la finca" },
  bio: { en: "Bionagro program", es: "Programa Bionagro" },
  stats: [
    { t: { en: "Damaged fruit", es: "Fruta dañada" }, delta: "−72 %", farm: 14.8, bio: 4.1 },
    { t: { en: "Foliar vigor", es: "Vigor foliar" }, delta: "+25 %", farm: 71.0, bio: 89.0 },
  ],
  design: [
    { en: "Randomized complete blocks", es: "Bloques completos al azar" },
    { en: "4 blocks", es: "4 bloques" },
    { en: "20 trees per treatment", es: "20 árboles por tratamiento" },
    { en: "ANOVA and Tukey (α = 0.05)", es: "ANOVA y Tukey (α = 0.05)" },
    { en: "p < 0.0001", es: "p < 0.0001" },
    { en: "Nueva Concepción, Escuintla", es: "Nueva Concepción, Escuintla" },
  ] as L[],
  note: {
    en: "Mean ± standard error: 14.8 ± 0.4 % versus 4.1 ± 0.4 % damaged fruit. One site, one season; the next trial will isolate the effect of Ca.",
    es: "Media ± error estándar: 14.8 ± 0.4 % frente a 4.1 ± 0.4 % de fruta dañada. Un sitio, una temporada; el siguiente ensayo aislará el efecto de Ca.",
  },
};

export const jar = {
  k: { en: "Laboratory · in preparation", es: "Laboratorio · en preparación" },
  h: { en: "Jar test: Ca versus generic calcium", es: "Prueba de frasco: Ca frente a calcio genérico" },
  d: {
    en: "The same calcium, in the same hard water, watched for 24 hours: what the chemical model predicts and how we will measure it.",
    es: "El mismo calcio, en la misma agua dura, observado durante 24 horas: lo que predice el modelo químico y cómo lo vamos a medir.",
  },
  sim: { en: "Simulation with a chemical model (PHREEQC)", es: "Simulación con modelo químico (PHREEQC)" },
  water: [
    { id: "m", t: { en: "Medium-hard water", es: "Agua media" } },
    { id: "d", t: { en: "Very hard water", es: "Agua muy dura" } },
  ] as { id: "m" | "d"; t: L }[],
  mix: [
    { id: "0", t: { en: "Calcium alone", es: "Solo calcio" } },
    { id: "1", t: { en: "With phosphate", es: "Con fosfato" } },
  ] as { id: "0" | "1"; t: L }[],
  play: { en: "Play the 24 hours", es: "Ver las 24 horas" },
  generic: { en: "Generic calcium", es: "Calcio genérico" },
  precip: { en: "of the calcium precipitates", es: "del calcio precipita" },
  ph: { en: "pH at mixing", es: "pH al mezclar" },
  /** [% of calcium that precipitates after 24 h, pH at mixing]; g = generic calcium, b = Bi-on Ca */
  data: {
    m0: { g: [15.5, 7.87], b: [0.7, 5.65] },
    d0: { g: [32.6, 7.85], b: [20.1, 6.5] },
    m1: { g: [32.5, 5.94], b: [6.4, 5.25] },
    d1: { g: [65.2, 6.22], b: [42.7, 5.95] },
  } as Record<string, { g: [number, number]; b: [number, number] }>,
  note: {
    en: "Rate: 1 L in 200 L of water; the generic calcium carries the same calcium rate. Medium-hard water: hardness and alkalinity of 150 mg/L as CaCO₃; very hard: 342 mg/L. Phosphate: monopotassium phosphate, 2 g/L. Open mix, 24 h at 25 °C; MINTEQA2 database. The model computes the water chemistry; the effect of the dispersant will show in the real test.",
    es: "Dosis: 1 L en 200 L de agua; el calcio genérico lleva la misma dosis de calcio. Agua media: dureza y alcalinidad de 150 mg/L como CaCO₃; muy dura: 342 mg/L. Fosfato: fosfato monopotásico, 2 g/L. Mezcla abierta 24 h a 25 °C; base de datos MINTEQA2. El modelo calcula la química del agua; el efecto del dispersante se verá en la prueba real.",
  },
  protocol: [
    { t: { en: "Hard water with bicarbonates", es: "Agua dura con bicarbonatos" }, d: { en: "Hardness and alkalinity of 150 and 342 mg/L as CaCO₃, like well water.", es: "Dureza y alcalinidad de 150 y 342 mg/L como CaCO₃, como el agua de pozo." } },
    { t: { en: "The same calcium rate", es: "La misma dosis de calcio" }, d: { en: "Generic calcium in one jar and Ca in the other, alone and with phosphate.", es: "Calcio genérico en un frasco y Ca en el otro, solos y con fosfato." } },
    { t: { en: "Turbidity and residue", es: "Turbidez y residuo" }, d: { en: "Measured from the start to 24 hours.", es: "Medidos desde el inicio hasta las 24 horas." } },
    { t: { en: "Three replicates", es: "Tres repeticiones" }, d: { en: "Each jar is prepared in triplicate.", es: "Cada frasco se prepara por triplicado." } },
    { t: { en: "Result pending", es: "Resultado pendiente" }, d: { en: "We will publish it here, favorable or not.", es: "Lo publicaremos aquí, sea favorable o no." } },
  ] as { t: L; d: L }[],
};

export type Study = { status: Status; kind: L; t: L; d: L; cta?: { label: L; to: string; request?: boolean } };

export const studies: Study[] = [
  {
    status: "done",
    kind: { en: "Field trial", es: "Ensayo de campo" },
    t: { en: "Lemon: the Bionagro program cut damaged fruit by 72 %", es: "Limón: el programa Bionagro redujo 72 % la fruta dañada" },
    d: { en: "Randomized complete blocks, p < 0.0001. Nueva Concepción, Escuintla.", es: "Bloques completos al azar, p < 0.0001. Nueva Concepción, Escuintla." },
    cta: { label: { en: "See the trial", es: "Ver el ensayo" }, to: "lemon" },
  },
  {
    status: "done",
    kind: { en: "Chemical model", es: "Modelo químico" },
    t: { en: "Calcium speciation of Ca", es: "Especiación del calcio de Ca" },
    d: { en: "Over 85 % of the calcium stays as free Ca²⁺ at 1:200 dilution.", es: "Más del 85 % del calcio queda como Ca²⁺ libre a dilución 1:200." },
    cta: { label: { en: "Request the full study", es: "Solicitar el estudio completo" }, to: "", request: true },
  },
  {
    status: "done",
    kind: { en: "Article", es: "Artículo" },
    t: { en: "Why little calcium reaches the fruit", es: "Por qué el calcio llega poco al fruto" },
    d: { en: "A review of peer-reviewed literature on calcium transport.", es: "Revisión de literatura revisada por pares sobre transporte de calcio." },
    cta: { label: { en: "Request the full study", es: "Solicitar el estudio completo" }, to: "", request: true },
  },
  {
    status: "prep",
    kind: { en: "Laboratory", es: "Laboratorio" },
    t: { en: "Jar test: Ca versus generic calcium", es: "Prueba de frasco: Ca frente a calcio genérico" },
    d: { en: "Hard water with bicarbonates, alone and with phosphate; turbidity and residue from 0 to 24 h, in triplicate.", es: "Agua dura con bicarbonatos, sola y con fosfato; turbidez y residuo de 0 a 24 h, en triplicado." },
    cta: { label: { en: "See the protocol", es: "Ver el protocolo" }, to: "jar" },
  },
  {
    status: "sched",
    kind: { en: "Laboratory", es: "Laboratorio" },
    t: { en: "Nutrient analysis of all 12 products", es: "Análisis de nutrientes de los 12 productos" },
    d: { en: "Guaranteed content per product, at an independent laboratory. Results will be published here, favorable or not.", es: "Contenido garantizado por producto, en un laboratorio independiente. Los resultados se publicarán aquí, sean favorables o no." },
  },
  {
    status: "sched",
    kind: { en: "Field trial", es: "Ensayo de campo" },
    t: { en: "Ca versus generic calcium at the same Ca rate", es: "Ca frente a calcio genérico a la misma dosis de Ca" },
    d: { en: "Peel calcium measured in the lab and blind damage scoring. Results will be published here, favorable or not.", es: "Calcio en cáscara medido en laboratorio y evaluación del daño a ciegas. Los resultados se publicarán aquí, sean favorables o no." },
  },
  {
    status: "open",
    kind: { en: "Researchers", es: "Investigadores" },
    t: { en: "Open protocols for independent trials", es: "Protocolos abiertos para ensayos independientes" },
    d: { en: "Free product and a base protocol to evaluate any product.", es: "Producto sin costo y un protocolo base para evaluar cualquier producto." },
    cta: { label: { en: "Propose a trial", es: "Proponer un ensayo" }, to: "propose" },
  },
];

export const refs = {
  k: { en: "Peer-reviewed literature", es: "Literatura revisada por pares" },
  h: { en: "References", es: "Referencias" },
  d: {
    en: "Calcium travels only in the xylem, with the water the plant transpires, and is not redistributed through the phloem; that is why foliar calcium has to land on the fruit at the stage when it needs it.",
    es: "El calcio viaja solo por el xilema con el agua que transpira la planta y no se redistribuye por el floema; por eso el calcio foliar tiene que caer en el fruto en la etapa en que lo necesita.",
  },
  list: [
    "White, P. J. & Broadley, M. R. (2003). Calcium in plants. Annals of Botany, 92(4), 487–511.",
    "Hocking, B., Tyerman, S. D., Burton, R. A. & Gilliham, M. (2016). Fruit calcium: transport and physiology. Frontiers in Plant Science, 7, 569.",
    "Treeby, M. T. & Storey, R. (2002). Calcium-spray treatments for ameliorating albedo breakdown in navel oranges. Australian Journal of Experimental Agriculture, 42(4), 495–502.",
    "Fernández, V., Pimentel, C. & Bahamonde, H. A. (2020). Salt hydration and drop drying of two model calcium salts. Journal of Plant Nutrition and Soil Science, 183(5), 592–601.",
  ],
};

export const close = {
  k: { en: "Researchers and advisors", es: "Investigadores y asesores" },
  h: { en: "Propose a trial", es: "Proponer un ensayo" },
  d: {
    en: "We send you free product and a base protocol so you can evaluate it independently. We publish the results, favorable or not.",
    es: "Le enviamos producto sin costo y un protocolo base para que lo evalúe de forma independiente. Publicamos los resultados, sean favorables o no.",
  },
  cta: { en: "Request product and protocol", es: "Pedir producto y protocolo" },
};

export const sections: { id: string; t: L }[] = [
  { id: "lemon", t: { en: "Lemon trial", es: "Ensayo en limón" } },
  { id: "jar", t: { en: "Jar test", es: "Prueba de frasco" } },
  { id: "studies", t: { en: "All studies", es: "Todos los estudios" } },
  { id: "refs", t: { en: "References", es: "Referencias" } },
  { id: "propose", t: { en: "Propose a trial", es: "Proponer un ensayo" } },
];
