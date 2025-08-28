"use client";

import { useState } from "react";
import Image from "next/image";
import { ProductImage } from "@/utils/types";
import { Image_By_Public_Id } from "@/lib/utils";

export default function ProductImageGallery({
  images,
}: {
  images: ProductImage[];
}) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-row-reverse">
      <div className="relative w-full h-[550px] mb-4">
        <Image
          src={Image_By_Public_Id(selectedImage.url)}
          alt={selectedImage.alt || "Product image"}
          fill
          className="object-cover rounded-lg border"
          priority={true}
        />
      </div>

      <div className="flex flex-col gap-2 pt-1 overflow-y-auto overflow-x-hidden items-center overflow max-h-[550px] scrollbar-hide w-22">
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => setSelectedImage(image)}
            className={`relative w-16 h-16 min-h-16 min-w-16 border rounded-md transition-all duration-300 overflow-hidden ${
              selectedImage.url === image.url
                ? "ring-2 ring-primary scale-105"
                : ""
            }`}
          >
            <Image
              src={Image_By_Public_Id(image.url)}
              alt={image.alt || `Thumbnail ${index + 1}`}
              fill
              loading="lazy"
              className="object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
