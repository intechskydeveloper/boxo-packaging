"use client";

import * as React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll"; // continuous scroll plugin
import Link from "next/link";

export type SlideData = {
  img: string;
  text: string;
  description?: string;
};

interface CarouselSliderProps {
  slides: SlideData[];
  direction?: "left" | "right";
  scrollSpeed?: number;
}

export default function CarouselSlider({
  slides,
  direction = "left",
  scrollSpeed = 1,
}: CarouselSliderProps) {
  const plugins = React.useMemo(
    () => [
      AutoScroll({
        speed: scrollSpeed,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    ],
    [scrollSpeed]
  );

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
      direction: direction === "right" ? "rtl" : "ltr",
    },
    plugins
  );

  return (
    <div className="relative">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-6 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-6 bg-gradient-to-l from-white to-transparent" />
      <div
        className="embla overflow-hidden select-none"
        ref={emblaRef}
        dir={direction === "right" ? "rtl" : "ltr"}
      >
        <div className="embla__container flex">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="embla__slide flex-[0_0_100%] sm:flex-[0_0_calc(100%/3)] md:flex-[0_0_calc(100%/3)] lg:flex-[0_0_calc(100%/4)] p-2 cursor-grab active:cursor-grabbing"
            >
              <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden group">
                <div className="relative w-full h-60 overflow-hidden rounded-2xl">
                  <Image
                    src={slide.img}
                    alt={slide.text}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 100vw"
                  />
                  {slide.description && (
                    <div className="absolute bottom-0 left-0 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                      <div className="bg-gradient-to-t from-black/80 to-transparent p-3">
                        <p className="text-white text-sm">
                          Boxo Packaging offers a wide range of products that
                          stand out for their quality, versatility, and
                          customization options.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                <p className="py-2 text-center uppercase text-[16px] font-extrabold font-instruction">
                  {slide.text}
                </p>
                <Link
                  href={"/product-details/alsdfjls"}
                  className="absolute inset-0 z-10 pointer-events-auto"
                >
                  <span className="sr-only">{slide.text}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
