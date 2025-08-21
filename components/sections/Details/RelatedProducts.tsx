import { Button } from "@/components/ui/button";
import Image from "next/image";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SectionIntro from "../../Common/SectionIntro";
import { generateUniqueKey } from "@/utils/generateUniqueKey";

const dummyproducts = [
  {
    label: "Save 35%",
    labelColor: "bg-green-500",
    img: "/i8.jfif",
    title: "All Natural Italian-Style Chicken",
    price: "$238.85",
    oldPrice: "$245.8",
    sold: "90/120",
  },
  {
    label: "Sale",
    labelColor: "bg-blue-500",
    img: "/i9.jfif",
    title: "Angie’s Boomchickapop Sweet",
    price: "$238.85",
    oldPrice: "$245.8",
    sold: "90/120",
  },
  {
    label: "Best sale",
    labelColor: "bg-orange-500",
    img: "/i10.jfif",
    title: "Foster Farms Takeout Crispy Classic",
    price: "$238.85",
    oldPrice: "$245.8",
    sold: "90/120",
  },
  {
    label: "Save 15%",
    labelColor: "bg-pink-500",
    img: "/i12.jfif",
    title: "Blue Diamond Almonds Lightly",
    price: "$238.85",
    oldPrice: "$245.8",
    sold: "90/120",
  },
  {
    label: "Best sale",
    labelColor: "bg-orange-500",
    img: "/i10.jfif",
    title: "Foster Farms Takeout Crispy Classic",
    price: "$238.85",
    oldPrice: "$245.8",
    sold: "90/120",
  },
  {
    label: "Save 15%",
    labelColor: "bg-pink-500",
    img: "/i12.jfif",
    title: "Blue Diamond Almonds Lightly Salted",
    price: "$238.85",
    oldPrice: "$245.8",
    sold: "90/120",
  },
  {
    label: "Best sale",
    labelColor: "bg-orange-500",
    img: "/i10.jfif",
    title: "Foster Farms Takeout Crispy Classic",
    price: "$238.85",
    oldPrice: "$245.8",
    sold: "90/120",
  },
  {
    label: "Save 15%",
    labelColor: "bg-pink-500",
    img: "/i12.jfif",
    title: "Blue Diamond Almonds Lightly Salted",
    price: "$238.85",
    oldPrice: "$245.8",
    sold: "90/120",
  },
  {
    label: "Best sale",
    labelColor: "bg-orange-500",
    img: "/i10.jfif",
    title: "Foster Farms Takeout Crispy Classic",
    price: "$238.85",
    oldPrice: "$245.8",
    sold: "90/120",
  },
  {
    label: "Save 15%",
    labelColor: "bg-pink-500",
    img: "/i12.jfif",
    title: "Blue Diamond Almonds Lightly Salted",
    price: "$238.85",
    oldPrice: "$245.8",
    sold: "90/120",
  },
  {
    label: "Best sale",
    labelColor: "bg-orange-500",
    img: "/i10.jfif",
    title: "Foster Farms Takeout Crispy Classic",
    price: "$238.85",
    oldPrice: "$245.8",
    sold: "90/120",
  },
  {
    label: "Save 15%",
    labelColor: "bg-pink-500",
    img: "/i12.jfif",
    title: "Blue Diamond Almonds Lightly Salted",
    price: "$238.85",
    oldPrice: "$245.8",
    sold: "90/120",
  },
  {
    label: "Best sale",
    labelColor: "bg-orange-500",
    img: "/i10.jfif",
    title: "Foster Farms Takeout Crispy Classic",
    price: "$238.85",
    oldPrice: "$245.8",
    sold: "90/120",
  },
  {
    label: "Save 15%",
    labelColor: "bg-pink-500",
    img: "/i12.jfif",
    title: "Blue Diamond Almonds Lightly Salted",
    price: "$238.85",
    oldPrice: "$245.8",
    sold: "90/120",
  },
];

const RelatedProducts = () => {
  return (
    <section className="mt-20">
      <SectionIntro
        align="center"
        tagline="Perfect Packagings"
        heading="Related Products"
        subHeading="Discover premium boxes and packaging solutions that complement your style and needs — designed to impress and protect."
      />

      <Carousel
        className="w-full max-w-[1370px] mx-auto"
        opts={{
          align: "start",
          slidesToScroll: 5,
          loop: true,
        }}
      >
        <CarouselContent className="gap-1">
          {dummyproducts.map((product) => (
            <CarouselItem
              key={generateUniqueKey(product.title)}
              className="group basis-[calc(20%-0.2rem)] sm:basis-[calc(33.333%-0.2rem)] md:basis-[calc(25%-0.2rem)] lg:basis-[calc(20%-0.2rem)]"
            >
              <div className="border-[1px] border-gray-200  rounded-xl overflow-hidden bg-white">
                <div className="w-full h-52 relative mb-4 flex items-center justify-center bg-white overflow-hidden rounded-t-xl">
                  <Image
                    src={product.img}
                    alt={product.title}
                    fill
                    className="object-contain group-hover:scale-105 transition-all duration-300"
                  />
                </div>

                <div className="pb-4 px-3">
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

        <CarouselPrevious className="border-gray-400" />
        <CarouselNext className="border-gray-400" />
      </Carousel>
    </section>
  );
};

export default RelatedProducts;
