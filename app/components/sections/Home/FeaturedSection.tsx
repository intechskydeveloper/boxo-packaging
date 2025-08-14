import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SectionIntro from "../../Common/SectionIntro";

const FPdata = [
  {
    label: "Save 35%",
    labelColor: "bg-green-500",
    img: "/products/p16.jpg",
    title: "All Natural Italian-Style Chicken",
    price: "$238.85",
    oldPrice: "$245.80",
    sold: "90/120",
  },
  {
    label: "Sale",
    labelColor: "bg-blue-500",
    img: "/products/p17.jpg",
    title: "Angie’s Boomchickapop Sweet & Salty",
    price: "$112.50",
    oldPrice: "$130.00",
    sold: "40/100",
  },
  {
    label: "Best sale",
    labelColor: "bg-orange-500",
    img: "/products/p18.jpg",
    title: "Foster Farms Takeout Crispy Classic",
    price: "$99.99",
    oldPrice: "$120.00",
    sold: "75/100",
  },
  {
    label: "Save 15%",
    labelColor: "bg-pink-500",
    img: "/products/p19.jpg",
    title: "Blue Diamond Almonds Lightly Salted",
    price: "$12.50",
    oldPrice: "$14.75",
    sold: "65/80",
  },
  {
    label: "Limited Offer",
    labelColor: "bg-red-500",
    img: "/products/p20.jpg",
    title: "Organic Avocado Oil Chips",
    price: "$5.99",
    oldPrice: "$7.50",
    sold: "55/70",
  },
  {
    label: "Hot Deal",
    labelColor: "bg-yellow-500",
    img: "/products/p21.jpg",
    title: "Gourmet Dark Chocolate Box",
    price: "$45.00",
    oldPrice: "$60.00",
    sold: "20/50",
  },
];

export default function FeaturedSection() {
  return (
    <div className="mx-auto max-w-[1370px] pt-20 pb-4">
      <SectionIntro
        align="center"
        tagline="Best Colletion"
        heading="Featured Section"
        subHeading="Explore our handpicked selection of best-selling and trending products, chosen just for you."
        className="pb-8"
      />
      <div className="flex flex-row bg-white">
        <Carousel
          className="w-full md:px-12 max-w-[1370px] mx-auto"
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: 1,
          }}
        >
          <CarouselContent>
            {FPdata.map((product) => (
              <CarouselItem
                key={product.title}
                className="group basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 h-full"
              >
                <div className="w-full rounded-xl shadow-sm flex flex-col h-full">
                  <span
                    className={`${product.labelColor} text-white px-2 py-1 z-50 rounded-tl-xl rounded-br-xl text-xs w-fit`}
                  >
                    {product.label}
                  </span>
                  <div className="w-auto h-52 relative mb-4 flex items-center justify-center bg-white">
                    <Image
                      src={product.img}
                      alt={product.title || "Product image"}
                      height={512}
                      width={512}
                      loading="lazy"
                      sizes="(max-width: 768px) 80vw, (max-width: 1200px) 30vw, 200px"
                      className="object-cover p-2 transition-all duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="px-4 pb-4 h-full z-50">
                    <p className="text-gray-500 text-xs mb-1">Hodo Foods</p>
                    <h3 className="text-sm font-semibold mb-2 h-10 max-h-10">
                      {product.title}
                    </h3>
                    <p className="text-green-600 font-bold">
                      {product.price}{" "}
                      <span className="text-gray-400 line-through">
                        {product.oldPrice}
                      </span>
                    </p>
                    <p className="text-xs text-gray-500 mb-3">
                      Sold: {product.sold}
                    </p>
                    <Button className="w-full">Shop Now</Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="hidden md:block">
            <CarouselPrevious className="translate-x-[60px] border-gray-400" />
            <CarouselNext className="-translate-x-[60px] border-gray-400" />
          </div>

          <div className="flex md:hidden justify-between mt-8 px-4">
            <CarouselPrevious className="static translate-x-0 border-gray-400" />
            <CarouselNext className="static translate-x-0 border-gray-400" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
