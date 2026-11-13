import type { L } from "../i18n";

export type ProductKind = "foliar" | "soil";

export type Product = {
  slug: string;
  name: string;
  kind: ProductKind;
  bionTech: boolean;
  /** Guaranteed analysis as [nutrient, percent]. */
  analysis: [string, string][];
  summary: L;
  bullets: L[];
};

const bion: L[] = [
  { en: "Mixes without precipitating.", es: "Se mezcla sin precipitar." },
  { en: "Stable in the tank, free on the leaf.", es: "Estable en el tanque, libre en la hoja." },
];

const p = (
  slug: string,
  name: string,
  kind: ProductKind,
  analysis: [string, string][],
  summary: L,
  extra: L[] = [],
  bionTech = true,
): Product => ({ slug, name, kind, bionTech, analysis, summary, bullets: [...(bionTech ? bion : []), ...extra] });

export const products: Product[] = [
  p("bi-on-ca", "Bi-on Ca", "foliar", [["Ca", "4.5%"], ["N", "3.7%"]],
    { en: "Soluble calcium for high-demand crops.", es: "Calcio soluble para cultivos de alta demanda." },
    [{ en: "Calcium for high-demand crops.", es: "Calcio para cultivos de alta demanda." }]),
  p("bi-on-ca-b", "Bi-on Ca+B", "foliar", [["Ca", "2.0%"], ["B", "0.12%"]],
    { en: "Calcium and boron in one foliar product.", es: "Calcio y boro en un solo producto foliar." },
    [{ en: "Calcium plus boron for flowering crops.", es: "Calcio más boro para cultivos en floración." }]),
  p("bi-on-b", "Bi-on B", "foliar", [["B", "0.61%"]],
    { en: "Boron for flowering.", es: "Boro para floración." },
    [{ en: "Boron to support flowering.", es: "Boro para apoyar la floración." }]),
  p("bi-on-zn", "Bi-on Zn", "foliar", [["Zn", "7.7%"], ["S", "3.8%"]],
    { en: "Zinc with sulfur, applied on the leaf.", es: "Zinc con azufre, aplicado a la hoja." }),
  p("bi-on-mg", "Bi-on Mg", "foliar", [["Mg", "2.1%"], ["S", "2.7%"]],
    { en: "Magnesium with sulfur, applied on the leaf.", es: "Magnesio con azufre, aplicado a la hoja." }),
  p("bi-on-mn", "Bi-on Mn", "foliar", [["Mn", "3.3%"], ["S", "1.9%"]],
    { en: "Manganese with sulfur, applied on the leaf.", es: "Manganeso con azufre, aplicado a la hoja." }),
  p("bi-on-mo", "Bi-on Mo", "foliar", [["Mo", "0.71%"]],
    { en: "Molybdenum to help crops use nitrogen.", es: "Molibdeno para ayudar a los cultivos a usar el nitrógeno." },
    [{ en: "Helps crops use nitrogen.", es: "Ayuda a los cultivos a usar el nitrógeno." }]),
  p("bi-on-n", "Bi-on N", "foliar", [["N", "18.0%"]],
    { en: "Foliar nitrogen.", es: "Nitrógeno foliar." }),
  p("k-finish", "K-Finish", "foliar", [["K₂O", "16.8%"]],
    { en: "Potassium for fruit fill, color and Brix.", es: "Potasio para llenado de fruta, color y Brix." },
    [{ en: "Supports fruit fill, color and Brix.", es: "Apoya el llenado de fruta, el color y los Brix." }], false),
  p("bi-on-multi", "Bi-on Multi", "foliar", [["Zn", "1.7%"], ["N", "1.1%"]],
    { en: "Multi-nutrient foliar with zinc and nitrogen.", es: "Foliar multinutriente con zinc y nitrógeno." }),
  p("bi-on-terra", "Bi-on Terra", "soil", [["C", "19.3%"]],
    { en: "Soil conditioner with organic carbon.", es: "Acondicionador de suelo con carbono orgánico." }),
  p("bi-on-rhizo", "Bi-on Rhizo", "soil", [["C", "10.1%"], ["Ca", "1.0%"]],
    { en: "Soil conditioner with carbon and calcium.", es: "Acondicionador de suelo con carbono y calcio." }),
];

export const getProduct = (slug: string | undefined) => products.find((x) => x.slug === slug);
