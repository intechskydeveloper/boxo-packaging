import React from "react";
import SectionIntro from "../../Common/SectionIntro";
import { Dollar, Easy, FreeDelivery, Price, Wide } from "@/utils/Svgs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const typedata = [
  {
    svg: <Dollar />, // Replace with your actual SVG component
    heading: "Rigid Box",
    text: "Premium, sturdy boxes designed to protect luxury items while offering an elegant unboxing experience that leaves a lasting impression.",
  },
  {
    svg: <Price />,
    heading: "Mylar Bags",
    text: "Durable, food-safe pouches ideal for storing snacks, coffee, and herbs while preserving freshness with airtight, customizable packaging designs.",
  },
  {
    svg: <FreeDelivery />,
    heading: "Files and Folders",
    text: "Organize important documents securely with professionally printed folders that enhance branding while keeping paperwork neat, clean, and accessible.",
  },
  {
    svg: <Wide />,
    heading: "Stickers",
    text: "High-quality, custom-printed stickers perfect for branding, promotions, and creative decoration with vibrant colors and long-lasting adhesive performance.",
  },
  {
    svg: <Easy />,
    heading: "Tuck Boxes",
    text: "Versatile, easy-to-assemble packaging ideal for small products, cards, and gifts, offering both protection and a sleek visual presentation.",
  },
  {
    svg: <FreeDelivery />,
    heading: "Eco-friendly Boxes",
    text: "Sustainable packaging solutions made from recyclable materials that reduce waste while maintaining strength, style, and environmental responsibility.",
  },
];

const Material = () => {
  return (
    <section className="max-w-[1370px] mx-auto pt-32">
      <SectionIntro
        align="start"
        tagline="Types"
        heading="Types of custom Printed Boxes"
        subHeading="Provides advanced features like time tracking, integrating with third party apps (calendar / Google drive), creating subtasks."
        className="mb-20 md:mb-14 lg:pb-0"
      />

      <Carousel opts={{ align: "start" }} className="w-full relative">
        <div className="absolute right-4 -top-12 flex gap-2 z-10 mr-10">
          <CarouselPrevious />
          <CarouselNext />
        </div>

        <CarouselContent>
          {typedata.map((I) => (
            <CarouselItem
              key={I.heading}
              className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <div className="p-4">
                {I.svg}
                <h3 className="text-lg font-bold pt-3 pb-2">{I.heading}</h3>
                <p>{I.text}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default Material;
