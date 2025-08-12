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
} from "../../Common/HeroShadcnCarousel";
import Autoplay from "embla-carousel-autoplay";

const slides = [
  {
    image: "/hero.jpg",
    heading: "Welcome to one stop shop Customized packaging solutions.",
    text: "Here we make everthing passible too meet your packaging need. Endless options are available fo size, stock, finishing and Design.",
    button: "Get a Quota",
  },
  {
    image: "/Hero3.jpg",
    heading: "Chose the packaging  that your customer will love.",
    text: "Our unique and catchy packaging can help you increase your sales.",
    button: "Shop Now",
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
              <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl leading-16">
                {slide.heading}
              </h1>
              <p className="text-sm md:text-xl mb-8 max-w-4xl fontmonst font-extralight">
                {slide.text}
              </p>
              <Button className="px-6 py-3 text-lg bg-[#303E48]" size={"lg"}>
                {slide.button}
              </Button>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full p-2 bg-transparent border-none hover:bg-transparent" />
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-2  bg-transparent border-none hover:bg-transparent" />
    </Carousel>
  );
}
