"use client";

import * as React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll"; // continuous scroll plugin

export type SlideData = {
  img: string;
  text: string;
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
      {/* <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-8 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-8 bg-gradient-to-l from-white to-transparent" /> */}

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
              <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                <div className="relative w-full h-60">
                  <Image
                    src={slide.img}
                    alt={slide.text}
                    fill
                    className="object-cover rounded-2xl"
                    loading="lazy"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 100vw"
                  />
                </div>
                <div className="py-2 text-center text-lg font-extrabold font-instruction">
                  {slide.text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
