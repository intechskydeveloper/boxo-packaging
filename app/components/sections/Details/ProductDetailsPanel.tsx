"use client";

import { useState } from "react";
import { Heart, ShoppingCart, Instagram, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
    <div className="px-10">
      <div className="flex flex-row justify-between">
        <h2 className="text-3xl font-semibold pb-3 mb-0 max-w-md">
          {product.title}
        </h2>

        <span className="text-emerald-600 text-3xl font-bold">
          ${product.price}
        </span>
      </div>
      <div className="flex items-center pb-4">
        {[0, 1, 2, 3, 4].map((rating) => (
          <Star
            key={rating}
            className={cn(
              product.reviewCount > rating
                ? "text-yellow-500"
                : "text-gray-300",
              "h-5 w-5"
            )}
          />
        ))}
        <p className="sr-only">{product.reviewCount} out of 5 stars</p>
      </div>
      <hr />

      <div className="text-sm space-y-1 mt-4">
        <p className="text-gray-500">
          <strong className="text-[#323339]">Brand</strong> : {product.brand}
        </p>
        <p className="text-gray-500">
          <strong className="text-[#323339]">Flavour</strong> :{" "}
          {product.flavour}
        </p>
        <p className="text-gray-500">
          <strong className="text-[#323339]">Diet Type</strong> :{" "}
          {product.dietType}
        </p>
        <p className="text-gray-500">
          <strong className="text-[#323339]">Weight</strong> : {product.weight}
        </p>
        <p className="text-gray-500">
          <strong className="text-[#323339]">Speciality</strong> :{" "}
          {product.speciality}
        </p>
        <p className="text-gray-500">
          <strong className="text-[#323339]">Info</strong> : {product.info}
        </p>
        <p className="text-gray-500">
          <strong className="text-[#323339]">Items</strong> : {product.items}
        </p>
      </div>

      <div className="flex flex-row gap-5 justify-between max-w-md py-6">
        <div>
          <p className="text-sm font-medium">Colors :</p>
          <div className="flex gap-2 mt-2">
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                style={{ backgroundColor: color }}
                className={`w-8 h-8 rounded-full border-2 ring-2 ${
                  selectedColor === color ? "ring-primary" : "ring-gray-200"
                }`}
              />
            ))}
          </div>
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
      </div>
      <div className="flex items-center gap-2 mt-4">
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
            !liked ? "text-primary " : "text-red-700"
          }`}
          size={"icon"}
          variant={"outline"}
        >
          <Heart size={18} fill={!liked ? "#ffffff" : "red"} />
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
