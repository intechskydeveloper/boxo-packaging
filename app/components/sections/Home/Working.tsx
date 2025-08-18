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
    svg: <Easy />,
    heading: "1. Explore",
    text: "Versatile, easy-to-assemble packaging ideal for small products, cards, and gifts.",
  },
  {
    svg: <Wide />,
    heading: "2. Choose",
    text: "High-quality, custom-printed stickers perfect for branding and promotions.",
  },
  {
    svg: <Price />,
    heading: "3. Design",
    text: "Durable, food-safe pouches ideal for storing snacks, coffee, and herbs.",
  },
  {
    svg: <FreeDelivery />,
    heading: "4. Order",
    text: "Organize important documents securely with professionally printed folders.",
  },
  //   {
  //     svg: <Dollar />, // Replace with your actual SVG component
  //     heading: "Rigid Box",
  //     text: "Premium, sturdy boxes designed to protect luxury items while offering an elegant unboxing experience that leaves a lasting impression.",
  //   },
  //   {
  //     svg: <FreeDelivery />,
  //     heading: "Eco-friendly Boxes",
  //     text: "Sustainable packaging solutions made from recyclable materials that reduce waste while maintaining strength, style, and environmental responsibility.",
  //   },
];

const Working = () => {
  return (
    <section className="max-w-[1370px] mx-auto pt-32">
      <SectionIntro
        align="start"
        tagline="Types"
        heading="Types of custom Printed Boxes"
        subHeading="Provides advanced features like time tracking, integrating with third party apps (calendar / Google drive), creating subtasks."
        className="mb-20 md:mb-14 lg:pb-0"
      />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-full">
        {typedata.map((I) => (
          <div className="p-4" key={I.text}>
            {I.svg}
            <h3 className="text-lg font-bold pt-3 pb-2">{I.heading}</h3>
            <p>{I.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Working;
