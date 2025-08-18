import React from "react";
import ProductImageGallery from "./ProductImageGallery";
import ProductDetailsPanel from "./ProductDetailsPanel";

const productImages = [
  { src: "/products/p4.webp", alt: "Inside view" },
  { src: "/products/p1.webp", alt: "Front view" },
  { src: "/products/p2.webp", alt: "Side view" },
  { src: "/products/p3.webp", alt: "Back view" },
];

const product = {
  title: "Seeds Of Change Organic Quinoa, Brown",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, iure minus error doloribus saepe natus?",
  brand: "Intechsky",
  flavour: "Super Saver Pack",
  dietType: "Vegetarian",
  weight: "200 Grams",
  speciality: "Gluten Free, Sugar Free",
  info: "Egg Free, Allergen-Free",
  items: 1,
  price: 120.25,
  oldPrice: 123.25,
  reviewCount: 4,
  weights: ["50kg", "80kg", "120kg", "200kg"],
  colors: ["#364153", "#6A7282", "#AC8157"],
};

function SplitImage() {
  return (
    <section className="sectionWrapper pb-10 pt-4 flex lg:flex-row flex-col">
      <div className="w-full lg:w-1/2">
        <ProductImageGallery images={productImages} />
      </div>
      <div className="w-full lg:w-1/2">
        <ProductDetailsPanel product={product} />
      </div>
    </section>
  );
}

export default SplitImage;
