import { Image_By_Public_Id } from "@/lib/utils";
import { generateUniqueKey } from "@/utils/generateUniqueKey";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export type FeaturedSubCategory = {
  id: string;
  name: string;
  image?: string;
  altText: string | null;
  imageExplanation: string | null;
  createdAt: Date;
  featured?: boolean;
  images?: any;
};

type ImageGalleryProps = {
  data: FeaturedSubCategory[];
  className?: string;
  type: "category" | "product";
};

const ImageGallery = ({
  data,
  className,
  type = "category",
}: ImageGalleryProps) => {
  return (
    <div
      className={clsx(
        className,
        "grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-4 gap-2 lg:gap-6 max-w-[1370px] mx-auto"
      )}
    >
      {data.map((slide: FeaturedSubCategory) => (
        <div
          className="relative w-full h-full bg-white rounded-2xl overflow-hidden group"
          key={generateUniqueKey(slide.name)}
        >
          <div className="relative w-full h-40 sm:h-50 md:h-60 overflow-hidden rounded-2xl">
            <Image
              src={Image_By_Public_Id(slide.image || slide.images[0].url || "")}
              alt={slide.altText || slide.name}
              fill
              className="object-cover"
              loading="lazy"
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 100vw"
            />
            {slide.imageExplanation && (
              <div className="absolute inset-0 flex items-end translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                <div className="w-full bg-gradient-to-t from-black/80 to-transparent h-full flex p-3">
                  <p className="text-white text-sm self-end">
                    {slide.imageExplanation}
                  </p>
                </div>
              </div>
            )}
          </div>
          {slide.name && (
            <p className="py-2 text-center uppercase text-sm sm:text-[16px] font-extrabold font-instruction">
              {slide.name}
            </p>
          )}

          <Link
            href={`/${
              type == "category" ? "products-by-category" : "product-details"
            }/${slide.id}`}
            className="absolute inset-0 z-10"
          >
            <span className="sr-only">{slide.name}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
