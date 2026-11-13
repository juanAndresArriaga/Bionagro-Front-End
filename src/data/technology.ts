// Generated from the Claude-app reference (technology.html). Illustrative educational model.
import type { L } from "../i18n";

export type Step = { l: L; t: L; e: L };
export type Nutrient = {
  id: string; sym: string; label: string; color: string;
  /** Relative tendency to precipitate in hard water (0-1.1), used only for the tank visual. */
  pf: number;
  infoName: L; info: L;
  salt: Step[]; bion: Step[];
};

export const nutrients: Nutrient[] = [
  {
    "id": "zn",
    "sym": "Zn",
    "label": "Zn²⁺",
    "color": "#3D63B8",
    "pf": 1,
    "info": {
      "es": "El nutriente. Libre y con carga es la forma que la planta absorbe y usa.",
      "en": "The nutrient. Free and charged, it is the form the plant absorbs and uses."
    },
    "infoName": {
      "es": "Zinc",
      "en": "Zinc"
    },
    "salt": [
      {
        "l": {
          "es": "Fosfato",
          "en": "Phosphate"
        },
        "t": {
          "es": "Un fosfato del agua se une al zinc.",
          "en": "A phosphate from the water bonds to zinc."
        },
        "e": {
          "es": "3 Zn²⁺ + 2 HPO₄²⁻ → Zn₃(PO₄)₂ ↓ + 2 H⁺",
          "en": "3 Zn²⁺ + 2 HPO₄²⁻ → Zn₃(PO₄)₂ ↓ + 2 H⁺"
        }
      },
      {
        "l": {
          "es": "Bicarbonato",
          "en": "Bicarbonate"
        },
        "t": {
          "es": "El bicarbonato del agua dura hace lo mismo.",
          "en": "Hard-water bicarbonate does the same."
        },
        "e": {
          "es": "Zn²⁺ + HCO₃⁻ → ZnCO₃ ↓ + H⁺",
          "en": "Zn²⁺ + HCO₃⁻ → ZnCO₃ ↓ + H⁺"
        }
      },
      {
        "l": {
          "es": "Cristal",
          "en": "Crystal"
        },
        "t": {
          "es": "Los pares se ordenan en un cristal que crece, pesa y se hunde.",
          "en": "The pairs stack into a crystal that grows, gets heavy and sinks."
        },
        "e": {
          "es": "↓ precipitado: ya no llega a la hoja",
          "en": "↓ precipitate: it never reaches the leaf"
        }
      }
    ],
    "bion": [
      {
        "l": {
          "es": "Desarma",
          "en": "Disarms"
        },
        "t": {
          "es": "El pH bajo convierte el bicarbonato en CO₂, que escapa, y deja el fosfato en su forma soluble.",
          "en": "Low pH turns bicarbonate into CO₂, which escapes, and keeps phosphate in its soluble form."
        },
        "e": {
          "es": "HCO₃⁻ + H⁺ → CO₂↑ + H₂O · HPO₄²⁻ + H⁺ → H₂PO₄⁻",
          "en": "HCO₃⁻ + H⁺ → CO₂↑ + H₂O · HPO₄²⁻ + H⁺ → H₂PO₄⁻"
        }
      },
      {
        "l": {
          "es": "Sostiene",
          "en": "Holds"
        },
        "t": {
          "es": "Una unión débil y reversible protege al zinc en la mezcla y lo suelta con facilidad.",
          "en": "A weak, reversible bond protects zinc in the mix and lets go easily."
        },
        "e": {
          "es": "Zn²⁺ + L ⇄ Zn·L (unión débil)",
          "en": "Zn²⁺ + L ⇄ Zn·L (weak bond)"
        }
      },
      {
        "l": {
          "es": "Frena",
          "en": "Stops"
        },
        "t": {
          "es": "Si un cristal empieza a formarse, el polímero lo cubre y frena su crecimiento.",
          "en": "If a crystal starts to form, the polymer covers it and stops its growth."
        },
        "e": {
          "es": "núcleo + polímero → no crece y se redisuelve",
          "en": "nucleus + polymer → stops growing and redissolves"
        }
      },
      {
        "l": {
          "es": "Suelta",
          "en": "Releases"
        },
        "t": {
          "es": "En la hoja la unión se suelta y el zinc entra libre.",
          "en": "On the leaf the bond lets go and zinc gets in free."
        },
        "e": {
          "es": "Zn·L ⇄ Zn²⁺ + L → Zn²⁺ libre en la hoja",
          "en": "Zn·L ⇄ Zn²⁺ + L → free Zn²⁺ in the leaf"
        }
      }
    ]
  },
  {
    "id": "ca",
    "sym": "Ca",
    "label": "Ca²⁺",
    "color": "#E8892B",
    "pf": 1.1,
    "info": {
      "es": "El nutriente. Forma la pared celular del fruto; libre y con carga es la forma que la planta absorbe.",
      "en": "The nutrient. It builds the fruit’s cell walls; free and charged, it is the form the plant absorbs."
    },
    "infoName": {
      "es": "Calcio",
      "en": "Calcium"
    },
    "salt": [
      {
        "l": {
          "es": "Fosfato",
          "en": "Phosphate"
        },
        "t": {
          "es": "Un fosfato del agua se une al calcio.",
          "en": "A phosphate from the water bonds to calcium."
        },
        "e": {
          "es": "Ca²⁺ + HPO₄²⁻ → CaHPO₄ ↓",
          "en": "Ca²⁺ + HPO₄²⁻ → CaHPO₄ ↓"
        }
      },
      {
        "l": {
          "es": "Bicarbonato",
          "en": "Bicarbonate"
        },
        "t": {
          "es": "El bicarbonato forma carbonato de calcio: el sarro.",
          "en": "Bicarbonate forms calcium carbonate: scale."
        },
        "e": {
          "es": "Ca²⁺ + HCO₃⁻ → CaCO₃ ↓ + H⁺",
          "en": "Ca²⁺ + HCO₃⁻ → CaCO₃ ↓ + H⁺"
        }
      },
      {
        "l": {
          "es": "Cristal",
          "en": "Crystal"
        },
        "t": {
          "es": "El cristal crece, se hunde y tapa filtros y boquillas.",
          "en": "The crystal grows, sinks and plugs filters and nozzles."
        },
        "e": {
          "es": "↓ precipitado: tapa filtros y boquillas",
          "en": "↓ precipitate: plugs filters and nozzles"
        }
      }
    ],
    "bion": [
      {
        "l": {
          "es": "Desarma",
          "en": "Disarms"
        },
        "t": {
          "es": "El pH bajo convierte el bicarbonato en CO₂, que escapa, y deja el fosfato en su forma soluble.",
          "en": "Low pH turns bicarbonate into CO₂, which escapes, and keeps phosphate in its soluble form."
        },
        "e": {
          "es": "HCO₃⁻ + H⁺ → CO₂↑ + H₂O · HPO₄²⁻ + H⁺ → H₂PO₄⁻",
          "en": "HCO₃⁻ + H⁺ → CO₂↑ + H₂O · HPO₄²⁻ + H⁺ → H₂PO₄⁻"
        }
      },
      {
        "l": {
          "es": "Sostiene",
          "en": "Holds"
        },
        "t": {
          "es": "Una unión débil y reversible protege al calcio en la mezcla y lo suelta con facilidad.",
          "en": "A weak, reversible bond protects calcium in the mix and lets go easily."
        },
        "e": {
          "es": "Ca²⁺ + L ⇄ Ca·L (unión débil)",
          "en": "Ca²⁺ + L ⇄ Ca·L (weak bond)"
        }
      },
      {
        "l": {
          "es": "Frena",
          "en": "Stops"
        },
        "t": {
          "es": "Si un cristal empieza a formarse, el polímero lo cubre y frena su crecimiento.",
          "en": "If a crystal starts to form, the polymer covers it and stops its growth."
        },
        "e": {
          "es": "núcleo + polímero → no crece y se redisuelve",
          "en": "nucleus + polymer → stops growing and redissolves"
        }
      },
      {
        "l": {
          "es": "Suelta",
          "en": "Releases"
        },
        "t": {
          "es": "En la hoja la unión se suelta y el calcio entra libre.",
          "en": "On the leaf the bond lets go and calcium gets in free."
        },
        "e": {
          "es": "Ca·L ⇄ Ca²⁺ + L → Ca²⁺ libre en la hoja",
          "en": "Ca·L ⇄ Ca²⁺ + L → free Ca²⁺ in the leaf"
        }
      }
    ]
  },
  {
    "id": "mn",
    "sym": "Mn",
    "label": "Mn²⁺",
    "color": "#7A4DB3",
    "pf": 1,
    "info": {
      "es": "El nutriente. Activa enzimas de la fotosíntesis; libre y con carga es la forma que la planta absorbe.",
      "en": "The nutrient. It activates photosynthesis enzymes; free and charged, it is the form the plant absorbs."
    },
    "infoName": {
      "es": "Manganeso",
      "en": "Manganese"
    },
    "salt": [
      {
        "l": {
          "es": "Fosfato",
          "en": "Phosphate"
        },
        "t": {
          "es": "Un fosfato del agua se une al manganeso.",
          "en": "A phosphate from the water bonds to manganese."
        },
        "e": {
          "es": "3 Mn²⁺ + 2 HPO₄²⁻ → Mn₃(PO₄)₂ ↓ + 2 H⁺",
          "en": "3 Mn²⁺ + 2 HPO₄²⁻ → Mn₃(PO₄)₂ ↓ + 2 H⁺"
        }
      },
      {
        "l": {
          "es": "Bicarbonato",
          "en": "Bicarbonate"
        },
        "t": {
          "es": "El bicarbonato forma carbonato de manganeso.",
          "en": "Bicarbonate forms manganese carbonate."
        },
        "e": {
          "es": "Mn²⁺ + HCO₃⁻ → MnCO₃ ↓ + H⁺",
          "en": "Mn²⁺ + HCO₃⁻ → MnCO₃ ↓ + H⁺"
        }
      },
      {
        "l": {
          "es": "Se oxida",
          "en": "Oxidizes"
        },
        "t": {
          "es": "A pH alto, además, se oxida y se vuelve un polvo café.",
          "en": "At high pH it also oxidizes into a brown powder."
        },
        "e": {
          "es": "2 Mn²⁺ + O₂ + 2 H₂O → 2 MnO₂ ↓ + 4 H⁺",
          "en": "2 Mn²⁺ + O₂ + 2 H₂O → 2 MnO₂ ↓ + 4 H⁺"
        }
      }
    ],
    "bion": [
      {
        "l": {
          "es": "Desarma",
          "en": "Disarms"
        },
        "t": {
          "es": "El pH bajo convierte el bicarbonato en CO₂, que escapa, y deja el fosfato en su forma soluble.",
          "en": "Low pH turns bicarbonate into CO₂, which escapes, and keeps phosphate in its soluble form."
        },
        "e": {
          "es": "HCO₃⁻ + H⁺ → CO₂↑ + H₂O · HPO₄²⁻ + H⁺ → H₂PO₄⁻",
          "en": "HCO₃⁻ + H⁺ → CO₂↑ + H₂O · HPO₄²⁻ + H⁺ → H₂PO₄⁻"
        }
      },
      {
        "l": {
          "es": "Sostiene",
          "en": "Holds"
        },
        "t": {
          "es": "Una unión débil y reversible protege al manganeso en la mezcla y lo suelta con facilidad.",
          "en": "A weak, reversible bond protects manganese in the mix and lets go easily."
        },
        "e": {
          "es": "Mn²⁺ + L ⇄ Mn·L (unión débil)",
          "en": "Mn²⁺ + L ⇄ Mn·L (weak bond)"
        }
      },
      {
        "l": {
          "es": "Frena",
          "en": "Stops"
        },
        "t": {
          "es": "Si un cristal empieza a formarse, el polímero lo cubre y frena su crecimiento.",
          "en": "If a crystal starts to form, the polymer covers it and stops its growth."
        },
        "e": {
          "es": "núcleo + polímero → no crece y se redisuelve",
          "en": "nucleus + polymer → stops growing and redissolves"
        }
      },
      {
        "l": {
          "es": "Suelta",
          "en": "Releases"
        },
        "t": {
          "es": "En la hoja la unión se suelta y el manganeso entra libre.",
          "en": "On the leaf the bond lets go and manganese gets in free."
        },
        "e": {
          "es": "Mn·L ⇄ Mn²⁺ + L → Mn²⁺ libre en la hoja",
          "en": "Mn·L ⇄ Mn²⁺ + L → free Mn²⁺ in the leaf"
        }
      }
    ]
  },
  {
    "id": "mg",
    "sym": "Mg",
    "label": "Mg²⁺",
    "color": "#2F9A57",
    "pf": 0.3,
    "info": {
      "es": "El nutriente. Es el átomo central de la clorofila.",
      "en": "The nutrient. It is the central atom of chlorophyll."
    },
    "infoName": {
      "es": "Magnesio",
      "en": "Magnesium"
    },
    "salt": [
      {
        "l": {
          "es": "Fosfato",
          "en": "Phosphate"
        },
        "t": {
          "es": "El fosfato apenas lo atrae: se une y se suelta.",
          "en": "Phosphate barely attracts it: they bind and let go."
        },
        "e": {
          "es": "Mg²⁺ + HPO₄²⁻ ⇄ MgHPO₄ (poco)",
          "en": "Mg²⁺ + HPO₄²⁻ ⇄ MgHPO₄ (little)"
        }
      },
      {
        "l": {
          "es": "Bicarbonato",
          "en": "Bicarbonate"
        },
        "t": {
          "es": "Con el bicarbonato forma un par que sigue disuelto.",
          "en": "With bicarbonate it forms a pair that stays dissolved."
        },
        "e": {
          "es": "Mg²⁺ + HCO₃⁻ ⇄ MgHCO₃⁺ (soluble)",
          "en": "Mg²⁺ + HCO₃⁻ ⇄ MgHCO₃⁺ (soluble)"
        }
      },
      {
        "l": {
          "es": "Poco sólido",
          "en": "Little solid"
        },
        "t": {
          "es": "Se precipita mucho menos que el calcio o el zinc; en agua muy dura, algo.",
          "en": "It precipitates far less than calcium or zinc; in very hard water, some."
        },
        "e": {
          "es": "↓ poco precipitado",
          "en": "↓ little precipitate"
        }
      }
    ],
    "bion": [
      {
        "l": {
          "es": "Desarma",
          "en": "Disarms"
        },
        "t": {
          "es": "El pH bajo convierte el bicarbonato en CO₂, que escapa, y deja el fosfato en su forma soluble.",
          "en": "Low pH turns bicarbonate into CO₂, which escapes, and keeps phosphate in its soluble form."
        },
        "e": {
          "es": "HCO₃⁻ + H⁺ → CO₂↑ + H₂O · HPO₄²⁻ + H⁺ → H₂PO₄⁻",
          "en": "HCO₃⁻ + H⁺ → CO₂↑ + H₂O · HPO₄²⁻ + H⁺ → H₂PO₄⁻"
        }
      },
      {
        "l": {
          "es": "Sostiene",
          "en": "Holds"
        },
        "t": {
          "es": "Una unión débil y reversible protege al magnesio en la mezcla y lo suelta con facilidad.",
          "en": "A weak, reversible bond protects magnesium in the mix and lets go easily."
        },
        "e": {
          "es": "Mg²⁺ + L ⇄ Mg·L (unión débil)",
          "en": "Mg²⁺ + L ⇄ Mg·L (weak bond)"
        }
      },
      {
        "l": {
          "es": "Frena",
          "en": "Stops"
        },
        "t": {
          "es": "Si un cristal empieza a formarse, el polímero lo cubre y frena su crecimiento.",
          "en": "If a crystal starts to form, the polymer covers it and stops its growth."
        },
        "e": {
          "es": "núcleo + polímero → no crece y se redisuelve",
          "en": "nucleus + polymer → stops growing and redissolves"
        }
      },
      {
        "l": {
          "es": "Suelta",
          "en": "Releases"
        },
        "t": {
          "es": "En la hoja la unión se suelta y el magnesio entra libre.",
          "en": "On the leaf the bond lets go and magnesium gets in free."
        },
        "e": {
          "es": "Mg·L ⇄ Mg²⁺ + L → Mg²⁺ libre en la hoja",
          "en": "Mg·L ⇄ Mg²⁺ + L → free Mg²⁺ in the leaf"
        }
      }
    ]
  },
  {
    "id": "mo",
    "sym": "Mo",
    "label": "MoO₄²⁻",
    "color": "#1F8FBF",
    "pf": 0.85,
    "info": {
      "es": "El nutriente. El molibdeno viaja como anión y activa la enzima que aprovecha el nitrógeno.",
      "en": "The nutrient. Molybdenum travels as an anion and activates the enzyme that puts nitrogen to work."
    },
    "infoName": {
      "es": "Molibdato",
      "en": "Molybdate"
    },
    "salt": [
      {
        "l": {
          "es": "Calcio",
          "en": "Calcium"
        },
        "t": {
          "es": "El calcio del agua dura se une al molibdato.",
          "en": "Hard-water calcium bonds to molybdate."
        },
        "e": {
          "es": "Ca²⁺ + MoO₄²⁻ → CaMoO₄",
          "en": "Ca²⁺ + MoO₄²⁻ → CaMoO₄"
        }
      },
      {
        "l": {
          "es": "Más calcio",
          "en": "More calcium"
        },
        "t": {
          "es": "Con más calcio se forman más pares.",
          "en": "More calcium makes more pairs."
        },
        "e": {
          "es": "Ca²⁺ + MoO₄²⁻ ⇄ CaMoO₄ (poco soluble)",
          "en": "Ca²⁺ + MoO₄²⁻ ⇄ CaMoO₄ (sparingly soluble)"
        }
      },
      {
        "l": {
          "es": "Cristal",
          "en": "Crystal"
        },
        "t": {
          "es": "Los pares forman un cristal que se va al fondo.",
          "en": "The pairs form a crystal that sinks."
        },
        "e": {
          "es": "↓ CaMoO₄: ya no llega a la hoja",
          "en": "↓ CaMoO₄: it never reaches the leaf"
        }
      }
    ],
    "bion": [
      {
        "l": {
          "es": "Desarma",
          "en": "Disarms"
        },
        "t": {
          "es": "El pH bajo saca el bicarbonato como CO₂ y deja el fosfato en su forma soluble.",
          "en": "Low pH removes bicarbonate as CO₂ and keeps phosphate in its soluble form."
        },
        "e": {
          "es": "HCO₃⁻ + H⁺ → CO₂↑ + H₂O",
          "en": "HCO₃⁻ + H⁺ → CO₂↑ + H₂O"
        }
      },
      {
        "l": {
          "es": "Frena",
          "en": "Stops"
        },
        "t": {
          "es": "Si empiezan a formarse cristales de molibdato de calcio, el polímero los cubre y frena su crecimiento.",
          "en": "If calcium molybdate crystals start to form, the polymer covers them and stops their growth."
        },
        "e": {
          "es": "Ca²⁺ + MoO₄²⁻ → núcleo + polímero → no crece",
          "en": "Ca²⁺ + MoO₄²⁻ → nucleus + polymer → stops growing"
        }
      },
      {
        "l": {
          "es": "Suelta",
          "en": "Releases"
        },
        "t": {
          "es": "En la hoja el molibdato entra libre por los poros.",
          "en": "On the leaf, molybdate gets in free through the pores."
        },
        "e": {
          "es": "MoO₄²⁻ libre en la hoja",
          "en": "free MoO₄²⁻ in the leaf"
        }
      }
    ]
  },
  {
    "id": "b",
    "sym": "B",
    "label": "B(OH)₃",
    "color": "#13A39A",
    "pf": 0.18,
    "info": {
      "es": "El nutriente. El boro viaja sin carga y apoya la floración y el cuajado.",
      "en": "The nutrient. Boron travels uncharged and supports flowering and fruit set."
    },
    "infoName": {
      "es": "Ácido bórico",
      "en": "Boric acid"
    },
    "salt": [
      {
        "l": {
          "es": "Sin carga",
          "en": "Uncharged"
        },
        "t": {
          "es": "El boro viaja como ácido bórico, sin carga: casi no reacciona.",
          "en": "Boron travels as uncharged boric acid: it barely reacts."
        },
        "e": {
          "es": "B(OH)₃ + H₂O ⇄ B(OH)₄⁻ + H⁺ · pKa 9.2",
          "en": "B(OH)₃ + H₂O ⇄ B(OH)₄⁻ + H⁺ · pKa 9.2"
        }
      },
      {
        "l": {
          "es": "Calcio",
          "en": "Calcium"
        },
        "t": {
          "es": "En agua dura y pH alto, el borato puede unirse al calcio.",
          "en": "In hard water at high pH, borate can pair with calcium."
        },
        "e": {
          "es": "Ca²⁺ + B(OH)₄⁻ ⇄ CaB(OH)₄⁺",
          "en": "Ca²⁺ + B(OH)₄⁻ ⇄ CaB(OH)₄⁺"
        }
      },
      {
        "l": {
          "es": "Poco sólido",
          "en": "Little solid"
        },
        "t": {
          "es": "Se precipita poco; el riesgo es quedar atrapado si el calcio del agua se precipita.",
          "en": "Little precipitates; the risk is getting trapped if the water’s calcium precipitates."
        },
        "e": {
          "es": "↓ poco precipitado",
          "en": "↓ little precipitate"
        }
      }
    ],
    "bion": [
      {
        "l": {
          "es": "Desarma",
          "en": "Disarms"
        },
        "t": {
          "es": "El pH bajo mantiene al boro como ácido bórico, sin carga, y saca el bicarbonato como CO₂.",
          "en": "Low pH keeps boron as uncharged boric acid and removes bicarbonate as CO₂."
        },
        "e": {
          "es": "B(OH)₄⁻ + H⁺ → B(OH)₃ + H₂O · HCO₃⁻ + H⁺ → CO₂↑ + H₂O",
          "en": "B(OH)₄⁻ + H⁺ → B(OH)₃ + H₂O · HCO₃⁻ + H⁺ → CO₂↑ + H₂O"
        }
      },
      {
        "l": {
          "es": "Suelta",
          "en": "Releases"
        },
        "t": {
          "es": "En la hoja el ácido bórico, sin carga, cruza la cutícula con facilidad.",
          "en": "On the leaf, uncharged boric acid crosses the cuticle easily."
        },
        "e": {
          "es": "B(OH)₃ libre en la hoja",
          "en": "free B(OH)₃ in the leaf"
        }
      }
    ]
  }
];

export const hardness: { v: number; n: L }[] = [
  {
    "v": 50,
    "n": {
      "es": "Blanda",
      "en": "Soft"
    }
  },
  {
    "v": 150,
    "n": {
      "es": "Media",
      "en": "Medium"
    }
  },
  {
    "v": 300,
    "n": {
      "es": "Dura",
      "en": "Hard"
    }
  },
  {
    "v": 450,
    "n": {
      "es": "Muy dura",
      "en": "Very hard"
    }
  }
];

export const howCards: { n: string; k: L; h: L; p: L; eq: L }[] = [
  {
    "n": "1",
    "k": {
      "es": "Antes de proteger",
      "en": "Before protecting"
    },
    "h": {
      "es": "Desarma el agua dura",
      "en": "It disarms hard water"
    },
    "p": {
      "es": "Su pH bajo convierte el bicarbonato en CO₂, que escapa, y deja el fosfato en su forma soluble. Lo que hacía precipitar al nutriente ya no reacciona.",
      "en": "Its low pH turns bicarbonate into CO₂, which escapes, and keeps phosphate in its soluble form. What used to make the nutrient precipitate no longer reacts."
    },
    "eq": {
      "es": "HCO₃⁻ + H⁺ → CO₂↑ + H₂O · HPO₄²⁻ + H⁺ → H₂PO₄⁻",
      "en": "HCO₃⁻ + H⁺ → CO₂↑ + H₂O · HPO₄²⁻ + H⁺ → H₂PO₄⁻"
    }
  },
  {
    "n": "2",
    "k": {
      "es": "Primera protección",
      "en": "First protection"
    },
    "h": {
      "es": "Sostiene al nutriente sin encerrarlo",
      "en": "It holds the nutrient without locking it up"
    },
    "p": {
      "es": "Una unión débil y reversible rodea al ion: lo protege en la mezcla, pero lo suelta con facilidad. No es una jaula como la de un quelato fuerte.",
      "en": "A weak, reversible bond surrounds the ion: it protects it in the mix but lets go easily. It is not a cage like a strong chelate."
    },
    "eq": {
      "es": "Zn²⁺ + L ⇄ Zn·L (unión débil)",
      "en": "Zn²⁺ + L ⇄ Zn·L (weak bond)"
    }
  },
  {
    "n": "3",
    "k": {
      "es": "Segunda protección",
      "en": "Second protection"
    },
    "h": {
      "es": "Frena los cristales antes de que crezcan",
      "en": "It stops crystals before they grow"
    },
    "p": {
      "es": "Si un cristal empieza a formarse, un polímero lo cubre y frena su crecimiento; el nutriente vuelve a quedar libre en la mezcla.",
      "en": "If a crystal starts to form, a polymer covers it and stops its growth; the nutrient is free in the mix again."
    },
    "eq": {
      "es": "núcleo + polímero → no crece y se redisuelve",
      "en": "nucleus + polymer → stops growing and redissolves"
    }
  },
  {
    "n": "4",
    "k": {
      "es": "En la hoja",
      "en": "On the leaf"
    },
    "h": {
      "es": "Lo suelta, y entra libre",
      "en": "It lets go, and it gets in free"
    },
    "p": {
      "es": "En la superficie de la hoja la unión se suelta: el ion cruza la cutícula libre, listo para trabajar dentro de la planta.",
      "en": "At the leaf surface the bond lets go: the ion crosses the cuticle free, ready to work inside the plant."
    },
    "eq": {
      "es": "Zn·L ⇄ Zn²⁺ + L → Zn²⁺ libre en la hoja",
      "en": "Zn·L ⇄ Zn²⁺ + L → free Zn²⁺ in the leaf"
    }
  }
];

export const refs: { href: string; text: string }[] = [
  {
    "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6093386",
    "text": "Doolette, C. L. et al. (2018). Foliar application of zinc sulphate and zinc EDTA to wheat leaves: differences in mobility, distribution, and speciation. Journal of Experimental Botany."
  },
  {
    "href": "https://www.fertilizer.org/wp-content/uploads/2023/01/2013_foliar_fertilization_HR.pdf",
    "text": "Fernández, V., Sotiropoulos, T. & Brown, P. (2013). Foliar Fertilization: Scientific Principles and Field Practices. IFA."
  }
];
