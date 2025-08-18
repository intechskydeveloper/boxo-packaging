import {
  Care,
  Food,
  Gifts,
  Health,
  Promotion,
  Retail,
  Sustain,
  Tech,
  Toys,
} from "@/utils/Svgs";
import Image from "next/image";
import { title } from "process";
import SectionIntro from "./SectionIntro";

const Industries = [
  {
    icon: <Retail />,
    title: "Retail & E-Commerce",
  },
  {
    icon: <Food />,
    title: "Food & Beverage",
  },
  {
    icon: <Care />,
    title: "Cosmetics & Personal Care",
  },
  {
    icon: <Health />,
    title: "Health & Wellness",
  },
  {
    icon: <Gifts />,
    title: "Luxury & Gifting",
  },
  {
    icon: <Tech />,
    title: "Electronics & Tech",
  },
  {
    icon: <Promotion />,
    title: "Marketing & Promotional",
  },
  {
    icon: <Sustain />,
    title: "Eco-Friendly & Sustainable",
  },
  {
    icon: <Toys />,
    title: "Toys & Children Products",
  },
];

export default function LogoCloud() {
  return (
    <section className="bg-white pt-32">
      <div className="mx-auto max-w-[1370px]">
        <SectionIntro
          align="start"
          tagline="Scope"
          heading="Industries We Serve"
          subHeading="Explore our handpicked selection of best-selling and trending products, chosen just for you."
          className="pb-8"
        />
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 rounded-2xl md:grid-cols-3">
          {Industries.map((item) => (
            <div className="bg-gray-300/60 p-8 sm:p-10 flex flex-row items-center gap-4">
              {item.icon}
              <p className="font-extrabold text-xl font-instruction">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
