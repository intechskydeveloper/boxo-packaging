import Image from "next/image";
import Link from "next/link";
import React from "react";

const slides = [
  { img: "/oxopackaging/p1.webp", text: "Custom Files and Folders" },
  { img: "/oxopackaging/p2.webp", text: "Custom Eco-friendly Boxes" },
  { img: "/oxopackaging/p3.webp", text: "Custom Product Boxes" },
  { img: "/oxopackaging/p4.webp", text: "Custom Retail Display Boxes" },
  { img: "/oxopackaging/p5.webp", text: "Custom Folding Boxes" },
  { img: "/oxopackaging/p6.webp", text: "Custom Gift Boxes" },
  { img: "/oxopackaging/p7.webp", text: "Custom Rigid Boxes" },
  { img: "/oxopackaging/p8.webp", text: "Custom CBD Boxes" },
  { img: "/oxopackaging/p9.webp", text: "Custom Bakery Boxes" },
  { img: "/oxopackaging/p10.webp", text: "Custom Candle Boxes" },
  { img: "/oxopackaging/p11.webp", text: "Custom Apparel Boxes" },
  { img: "/oxopackaging/p12.webp", text: "Custom Toy Boxes" },
  { img: "/oxopackaging/p13.webp", text: "Custom Pharmaceutical Boxes" },
  { img: "/oxopackaging/p14.webp", text: "Custom Soap Boxes" },
  { img: "/oxopackaging/p15.webp", text: "Custom Corrugated Inserts & Trays" },
  { img: "/oxopackaging/p16.webp", text: "Custom Kraft Boxes" },
  { img: "/oxopackaging/p17.webp", text: "Custom Gable Boxes" },
  { img: "/oxopackaging/p18.webp", text: "Custom Window Boxes" },
  { img: "/oxopackaging/p19.webp", text: "Custom Jewelry Boxes" },
  { img: "/oxopackaging/p20.webp", text: "Custom Electronics Boxes" },
  { img: "/oxopackaging/p1.webp", text: "Custom Pillow Boxes" },
  { img: "/oxopackaging/p2.webp", text: "Custom Tuck Boxes" },
  { img: "/oxopackaging/p3.webp", text: "Custom Mylar Bags" },
  { img: "/oxopackaging/p4.webp", text: "Custom Chocolate Boxes" },
  //   { img: "/oxopackaging/p5.webp", text: "Custom Coffee/Tea Boxes" },
];

const ImageGallery = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-4 gap-2 lg:gap-6">
      {slides.map((slide) => (
        <div
          className="relative w-full h-full bg-white rounded-2xl overflow-hidden group"
          key={slide.text}
        >
          <div className="relative w-full h-40 sm:h-50 md:h-60 overflow-hidden rounded-2xl">
            <Image
              src={slide.img}
              alt={slide.text}
              fill
              className="object-cover"
              loading="lazy"
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 100vw"
            />
            <div className="absolute inset-0 flex items-end translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
              <div className="w-full bg-gradient-to-t from-black/80 to-transparent h-full flex p-3">
                <p className="text-white text-sm self-end">
                  Boxo Packaging offers a wide range of products that stand out
                  for their quality, versatility, and customization options.
                </p>
              </div>
            </div>
          </div>
          <p className="py-2 text-center uppercase text-sm sm:text-[16px] font-extrabold font-instruction">
            {slide.text}
          </p>

          <Link
            href={"/product-details/alsdfjls"}
            className="absolute inset-0 z-10"
          >
            <span className="sr-only">{slide.text}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
