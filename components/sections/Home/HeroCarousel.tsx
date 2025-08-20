"use client";
import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../common/HeroShadcnCarousel";
import Autoplay from "embla-carousel-autoplay";

const slides = [
  {
    image: "/oxopackaging/hero/h2.webp",
    heading: "Welcome to one stop shop Customized packaging solutions.",
    text: "Using high-end apparel boxes can help your clothes and other items look more polished and put together.",
    button: "Get a Quota",
  },
  {
    image: "/oxopackaging/hero/h1.webp",
    heading: "Welcome to one stop shop.",
    text: "Here we make everthing passible too meet your packaging need. Endless options are available fo size",
    button: "Get a Quota",
  },
  {
    image: "/oxopackaging/hero/h3.webp",
    heading: "Custom Packaging your",
    text: "The sports industry is a global one. Everywhere you go, you will witness the shooting of children playing games. ",
    button: "Get a quote",
  },
];

export default function HeroCarousel() {
  return (
    <Carousel
      className="w-screen h-[85vh] relative"
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
    >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={slide.text} className="w-screen h-[85vh] relative">
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.heading}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>

            <div className="relative z-10 flex flex-col items-start justify-center h-full text-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
              <h1 className="md:text-4xl text-[#2F3D48] text-2xl lg:text-6xl font-bold sm:mb-6 mb-3 lg:max-w-2xl sm:max-w-xl max-w-sm lg:leading-16 md:leading-12 leading-8">
                {slide.heading}
              </h1>
              <p className="text-sm md:text-xl sm:mb-8 text-[#2F3D48] mb-4  fontmonst font-extralight lg:max-w-xl md:max-w-xl max-w-sm">
                {slide.text}
              </p>
              <Button
                className="px-6 py-3 md:text-lg text-sm bg-[#303E48]"
                size={"lg"}
              >
                {slide.button}
              </Button>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="absolute md:left-4 left-1 top-1/2 -translate-y-1/2 rounded-full md:p-2 bg-transparent border-none hover:bg-transparent" />
      <CarouselNext className="absolute md:right-4 right-1 top-1/2 -translate-y-1/2 rounded-full md:p-2  bg-transparent border-none hover:bg-transparent" />
    </Carousel>
  );
}
