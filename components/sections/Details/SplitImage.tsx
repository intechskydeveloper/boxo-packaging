import React from "react";
import ProductImageGallery from "./ProductImageGallery";
import ProductDetailsPanel from "./ProductDetailsPanel";
import { ProductDetails } from "@/utils/types";
import { title } from "process";

function SplitImage({ product }: { product: ProductDetails }) {
  console.log(product);
  return (
    <section className="w-full max-w-[1200px] mx-auto pb-10 pt-4 flex lg:flex-row flex-col">
      <div className="w-full lg:w-1/2">
        <ProductImageGallery images={product.images} />
      </div>
      <div className="w-full lg:w-1/2">
        <ProductDetailsPanel
          product={{ title: product.name, description: product?.paragraph }}
        />
      </div>
    </section>
  );
}

export default SplitImage;
