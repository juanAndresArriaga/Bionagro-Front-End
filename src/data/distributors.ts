import type { L } from "../i18n";
import type { IconName } from "../components/ui/Icon";

// Copy taken from the Claude-app reference site (distributors.html).
export const hero: { h: L; d: L } = {
  h: { en: "Distribute Bionagro in the United States.", es: "Distribuya Bionagro en Estados Unidos." },
  d: {
    en: "We are looking for importers, distributors and retailers in any state. Deal directly with the manufacturer.",
    es: "Buscamos importadores, distribuidores y revendedores en cualquier estado. Trate directamente con el fabricante.",
  },
};

export const perks: { icon: IconName; t: L; d: L }[] = [
  { icon: "coins", t: { en: "Manufacturer pricing", es: "Precio de fabricante" }, d: { en: "Buy directly from the plant, with no middleman.", es: "Compra directa a la planta, sin intermediarios." } },
  { icon: "doc", t: { en: "Full documentation", es: "Documentación completa" }, d: { en: "Data sheets, safety data sheets and trial results, no sign-up.", es: "Fichas, hojas de seguridad y resultados de ensayos, sin registro." } },
  { icon: "headset", t: { en: "Samples and technical support", es: "Muestras y respaldo técnico" }, d: { en: "Samples to evaluate and agronomic support.", es: "Muestras para evaluar y acompañamiento agronómico." } },
];

export const steps: { t: L; d: L }[] = [
  { t: { en: "Send your request", es: "Envíe su solicitud" }, d: { en: "One form: products, market and what you need.", es: "Un solo formulario: productos, mercado y lo que necesita." } },
  { t: { en: "Get the information", es: "Reciba la información" }, d: { en: "We reply by email with pricing and terms.", es: "Le respondemos por correo con precios y condiciones." } },
  { t: { en: "Evaluate samples", es: "Evalúe las muestras" }, d: { en: "We ship samples of the products you choose.", es: "Le enviamos muestras de los productos que elija." } },
  { t: { en: "First order", es: "Primer pedido" }, d: { en: "We agree on pack sizes, volume and logistics.", es: "Definimos presentaciones, volumen y logística." } },
];

export const plant: { d: L; points: L[]; sizes: { n: string; v: string }[] } = {
  d: {
    en: "We formulate, pack and ship from our own plant. Every batch is checked before filling (pH, density and appearance) and every container carries its batch number.",
    es: "Formulamos, envasamos y despachamos desde nuestra propia planta. Cada lote se revisa antes de envasar (pH, densidad y apariencia) y cada envase lleva su número de lote.",
  },
  points: [
    { en: "MAGA registered formulation plant", es: "Planta formuladora registrada en MAGA" },
    { en: "Barcode traceability by batch", es: "Trazabilidad por lote con código de barras" },
    { en: "1 gal – IBC racked stock, ready to ship", es: "1 gal – IBC en inventario de racks, listo para despachar" },
    { en: "2026 expansion: larger tanks and a new filling line", es: "Ampliación 2026: tanques más grandes y nueva línea de llenado" },
  ],
  sizes: [
    { n: "1 gal", v: "3.78 L" },
    { n: "20 L", v: "5.3 gal" },
    { n: "200 L", v: "53 gal" },
    { n: "IBC", v: "1,000 L · 264 gal" },
  ],
};

export const privateLabel: { t1: L; d1: L; t2: L; d2: L; foot: L } = {
  t1: { en: "Our formulas, under your brand", es: "Nuestras fórmulas, con su marca" },
  d1: { en: "Any of our products under your label: 1 gallon, 20 L, 200 L or IBC.", es: "Cualquiera de nuestros productos con su etiqueta: 1 galón, 20 L, 200 L o IBC." },
  t2: { en: "A formula for your crops", es: "Una fórmula para sus cultivos" },
  d2: {
    en: "We define it with you by crop, region and analysis. It passes a stability test and a lab analysis before production.",
    es: "La definimos con usted según cultivo, zona y análisis. Pasa una prueba de estabilidad y un análisis de laboratorio antes de producirse.",
  },
  foot: {
    en: "We support you with the label and state registration. Minimum volumes and lead times on request.",
    es: "Le apoyamos con la etiqueta y el registro estatal. Volúmenes mínimos y tiempos de entrega, a solicitud.",
  },
};

export const businessTypes: L[] = [
  { en: "Importer", es: "Importador" },
  { en: "Distributor", es: "Distribuidor" },
  { en: "Retailer / farm store", es: "Revendedor / tienda agrícola" },
  { en: "Grower", es: "Agricultor" },
  { en: "Researcher / advisor", es: "Investigador / asesor" },
  { en: "Other", es: "Otro" },
];

export const needs: L[] = [
  { en: "Price list", es: "Lista de precios" },
  { en: "Samples", es: "Muestras" },
  { en: "Technical documents", es: "Documentos técnicos" },
  { en: "Become a distributor", es: "Ser distribuidor" },
  { en: "Private label or custom formula", es: "Marca privada o fórmula a medida" },
  { en: "Trial protocol", es: "Protocolo de ensayo" },
];

export const volumes: L[] = [
  { en: "Under 1,000 L", es: "Menos de 1,000 L" },
  { en: "1,000–10,000 L", es: "1,000–10,000 L" },
  { en: "Over 10,000 L", es: "Más de 10,000 L" },
  { en: "Not sure yet", es: "Aún no lo sé" },
];
