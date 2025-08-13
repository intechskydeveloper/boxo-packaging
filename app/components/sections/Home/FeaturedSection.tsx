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
        {/* <div className="w-[310px] rounded-lg overflow-hidden 2xl:block hidden relative group">
          <Link href="/" className="absolute inset-0 z-10"></Link>

          <Image
            src="/i7.jpeg"
            alt="Bring nature into your home"
            width={250}
            height={512}
            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
          />

          <div className="absolute inset-0 bg-black/40 flex flex-col justify-between p-6 text-white">
            <h2 className="text-2xl font-bold leading-snug">
              Bring nature into your home
            </h2>
            <div className="flex flex-row gap-2 font-semibold text-[16px] items-center">
              Shop Now
              <ArrowRight
                className="group-hover:translate-x-2 transition-all duration-300 mt-0.5"
                size={18}
              />
            </div>
          </div>
        </div> */}

        <Carousel
          className="w-full px-12 max-w-[1370px] mx-auto"
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: 1,
          }}
        >
          <CarouselContent className="">
            {[
              {
                label: "Save 35%",
                labelColor: "bg-green-500",
                img: "/i8.jfif",
                title: "All Natural Italian-Style Chicken",
                price: "$238.85",
                oldPrice: "$245.80",
                sold: "90/120",
              },
              {
                label: "Sale",
                labelColor: "bg-blue-500",
                img: "/i9.jfif",
                title: "Angie’s Boomchickapop Sweet & Salty",
                price: "$112.50",
                oldPrice: "$130.00",
                sold: "40/100",
              },
              {
                label: "Best sale",
                labelColor: "bg-orange-500",
                img: "/i10.jfif",
                title: "Foster Farms Takeout Crispy Classic",
                price: "$99.99",
                oldPrice: "$120.00",
                sold: "75/100",
              },
              {
                label: "Save 15%",
                labelColor: "bg-pink-500",
                img: "/i12.jfif",
                title: "Blue Diamond Almonds Lightly Salted",
                price: "$12.50",
                oldPrice: "$14.75",
                sold: "65/80",
              },
              {
                label: "Limited Offer",
                labelColor: "bg-red-500",
                img: "/i8.jfif",
                title: "Organic Avocado Oil Chips",
                price: "$5.99",
                oldPrice: "$7.50",
                sold: "55/70",
              },
              {
                label: "Hot Deal",
                labelColor: "bg-yellow-500",
                img: "/i9.jfif",
                title: "Gourmet Dark Chocolate Box",
                price: "$45.00",
                oldPrice: "$60.00",
                sold: "20/50",
              },
              {
                label: "Save 20%",
                labelColor: "bg-purple-500",
                img: "/i10.jfif",
                title: "Cold Brew Coffee Concentrate",
                price: "$15.20",
                oldPrice: "$19.00",
                sold: "90/120",
              },
              {
                label: "Best Choice",
                labelColor: "bg-teal-500",
                img: "/i10.jfif",
                title: "Vegan Protein Snack Bar Pack",
                price: "$28.75",
                oldPrice: "$35.00",
                sold: "33/60",
              },
            ].map((product, idx) => (
              <CarouselItem
                key={product.title}
                className="group basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 h-full"
              >
                <div className="w-full rounded-xl shadow-sm flex flex-col h-full">
                  <span
                    className={`${product.labelColor} text-white px-2 py-1 rounded-tl-xl rounded-br-xl text-xs w-fit`}
                  >
                    {product.label}
                  </span>
                  <div className="w-full h-40 relative mb-4 flex items-center justify-center bg-white">
                    <Image
                      src={product.img}
                      alt={product.title || "Product image"}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
                      className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                      priority={false}
                    />
                  </div>
                  <div className="px-4 pb-4 h-full">
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
                    <Button className="w-full ">Shop Now</Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="translate-x-[60px] border-gray-400 " />
          <CarouselNext className="-translate-x-[60px] border-gray-400" />
        </Carousel>
      </div>
    </div>
  );
}
