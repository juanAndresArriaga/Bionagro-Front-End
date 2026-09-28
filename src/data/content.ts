export interface ProductLine {
  name: string;
  tags: string[];
  description: string;
  icon: string;
}

export const productLines: ProductLine[] = [
  {
    name: "Fertilizers",
    tags: ["Soluble", "Granular"],
    description: "Soluble and granular formulas for balanced crop nutrition.",
    icon: "fas fa-flask",
  },
  {
    name: "Biostimulants",
    tags: ["Organic", "Foliar"],
    description: "Boost plant resilience and improve nutrient uptake naturally.",
    icon: "fas fa-seedling",
  },
  {
    name: "Soil Conditioners",
    tags: ["Soil Health"],
    description: "Restore soil structure and water retention for stronger roots.",
    icon: "fas fa-tint",
  },
  {
    name: "Bio-Control Products",
    tags: ["Bio-Control"],
    description: "Protect crops from pests and disease the sustainable way.",
    icon: "fas fa-shield-alt",
  },
  {
    name: "Root Developers",
    tags: ["Roots"],
    description: "Stronger root systems for better establishment and yield.",
    icon: "fas fa-network-wired",
  },
  {
    name: "Precision Agriculture Design",
    tags: ["Precision Ag"],
    description: "Custom nutrition programs designed around your fields.",
    icon: "fas fa-satellite-dish",
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Since switching to Bionagro Export's soluble fertilizer program, our yields per hectare have improved noticeably and our soil tests keep getting better every season.",
    name: "Carlos Mendoza",
    role: "Farm Operations Manager",
  },
  {
    quote:
      "Their biostimulants and precision agriculture design team helped us cut input waste while keeping our crops healthier through the dry season.",
    name: "Ana Reyes",
    role: "Agronomist",
  },
  {
    quote:
      "Reliable shipments, responsive support, and products that actually perform in the field. Bionagro Export has been a dependable partner for our distribution business.",
    name: "James Whitfield",
    role: "Import & Distribution Partner",
  },
];

export interface GalleryItem {
  image: string;
  category: string;
  title: string;
}

export const galleryItems: GalleryItem[] = [
  { image: "assets/img/hero-crop-field.jpg", category: "Fertilizers", title: "Row Crop Nutrition" },
  { image: "assets/img/about-vineyard-rows.jpg", category: "Soil Health", title: "Vineyard & Orchard Programs" },
  { image: "assets/img/hero-precision-ag.jpg", category: "Precision Ag", title: "Precision Agriculture Design" },
];
