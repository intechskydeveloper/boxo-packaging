"use client";

import { useState } from "react";
import { Heart, ShoppingCart, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductDetailsPanelProps {
  product: {
    title: string;
    description: string;
    brand: string;
    flavour: string;
    dietType: string;
    weight: string;
    speciality: string;
    info: string;
    items: number;
    price: number;
    oldPrice: number;
    reviewCount: number;
    weights: string[];
    colors: string[]; // hex colors
  };
}

export default function ProductDetailsPanel({
  product,
}: ProductDetailsPanelProps) {
  const [selectedWeight, setSelectedWeight] = useState(product.weights[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [liked, setLiked] = useState(false);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="max-w-md space-y-3">
      <h2 className="sectionHeadingLeft">{product.title}</h2>
      <p className="text-gray-500 text-lg">{product.description}</p>

      <div className="flex items-center gap-1 text-sm">
        <span className="text-orange-500">★★★★★</span>
        <span>({product.reviewCount} Review)</span>
      </div>
      <hr />

      <div className="text-sm space-y-1">
        <p>
          <strong className="text-[#323339]">Brand</strong> : {product.brand}
        </p>
        <p>
          <strong className="text-[#323339]">Flavour</strong> :{" "}
          {product.flavour}
        </p>
        <p>
          <strong className="text-[#323339]">Diet Type</strong> :{" "}
          {product.dietType}
        </p>
        <p>
          <strong className="text-[#323339]">Weight</strong> : {product.weight}
        </p>
        <p>
          <strong className="text-[#323339]">Speciality</strong> :{" "}
          {product.speciality}
        </p>
        <p>
          <strong className="text-[#323339]">Info</strong> : {product.info}
        </p>
        <p>
          <strong className="text-[#323339]">Items</strong> : {product.items}
        </p>
      </div>

      <div className="flex items-baseline gap-2">
        <span className="text-emerald-600 text-2xl font-bold">
          ${product.price}
        </span>
        <span className="text-gray-400 line-through">${product.oldPrice}</span>
      </div>

      <div>
        <p className="text-sm font-medium">Size/Weight :</p>
        <div className="flex gap-2 mt-2">
          {product.weights.map((w) => (
            <Button
              key={w}
              onClick={() => setSelectedWeight(w)}
              className={`px-3 py-1 rounded 
                border text-sm`}
              variant={selectedWeight == w ? "default" : "outline"}
            >
              {w}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm font-medium">Colors :</p>
        <div className="flex gap-2 mt-2">
          {product.colors.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              style={{ backgroundColor: color }}
              className={`w-8 h-8 rounded-full border-2 ring-2 ${
                selectedColor === color ? "ring-primary" : "ring-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-center border rounded">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="px-3 py-1 text-lg"
          >
            -
          </button>
          <span className="px-3">{quantity}</span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="px-3 py-1 text-lg"
          >
            +
          </button>
        </div>

        <Button className="flex-1 text-white px-4 py-2 rounded flex items-center justify-center gap-2">
          <ShoppingCart size={18} /> Add To Cart
        </Button>

        <Button
          onClick={() => setLiked((prev) => !prev)}
          className={`p-2 hover:text-red-700 rounded ${
            liked ? "text-primary " : "text-red-700"
          }`}
          size={"icon"}
          variant={"outline"}
        >
          <Heart size={18} fill={liked ? "#ffffff" : "red"} />
        </Button>

        <Button
          className="p-2 border rounded text-gray-500 hover:text-gray-600"
          size={"icon"}
          variant={"outline"}
        >
          <Instagram size={18} />
        </Button>
      </div>
    </div>
  );
}
