import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Temp() {
  return (
    <Carousel className="w-full max-w-[1170px] mx-auto">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/3 lg:basis-1/4">
            <div className="w-full rounded-xl shadow-sm flex flex-col">
              <span
                className={`bg-orange-500 text-white px-2 py-1 rounded-tl-xl rounded-br-xl text-xs w-fit`}
              >
                Save 15%
              </span>
              <div className="w-full h-40 relative mb-4 flex items-center justify-center bg-white">
                <Image
                  src={"/i9.jfif"}
                  alt={""}
                  fill
                  className="object-contain p-2"
                />
              </div>
              <div className="px-4 pb-4">
                <p className="text-gray-500 text-xs mb-1">Hodo Foods</p>
                <h3 className="text-sm font-semibold mb-2">
                  All Natural Italian-Style Chicken Meatballs
                </h3>
                <p className="text-green-600 font-bold">
                  $238.85
                  <span className="text-gray-400 line-through">$245.8</span>
                </p>
                <p className="text-xs text-gray-500 mb-3">Sold: 90/120</p>
                <Button className="w-full ">Shop Now</Button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="translate-x-8 border-gray-400 h-10 w-10" />
      <CarouselNext className="-translate-x-8  border-gray-400 h-10 w-10" />
    </Carousel>
  );
}
