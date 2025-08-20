"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductImageGalleryProps {
  images: { src: string; alt?: string }[];
}

export default function ProductImageGallery({
  images,
}: ProductImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-row-reverse">
      <div className="relative w-full h-[550px] mb-4">
        <Image
          src={selectedImage.src}
          alt={selectedImage.alt || "Product image"}
          fill
          className="object-cover rounded-lg border"
        />
      </div>

      <div className="flex flex-col gap-2 pt-1 overflow-y-auto overflow-x-hidden items-center overflow max-h-[550px] scrollbar-hide w-22">
        {images.map((image, index) => (
          <button
            key={image.src}
            onClick={() => setSelectedImage(image)}
            className={`relative w-16 h-16 min-h-16 min-w-16 border rounded-md transition-all duration-300 overflow-hidden ${
              selectedImage.src === image.src
                ? "ring-2 ring-primary scale-105"
                : ""
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt || `Thumbnail ${index + 1}`}
              fill
              className="object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
