import Image from "next/image";
import React from "react";
import HeroCarousel from "./HeroCarousel";
import { getAllHeros } from "@/app/actions/ui-blocks/hero";

const Hero = async ({
  height,
  className,
}: {
  height?: string;
  className?: string;
}) => {
  const res = await getAllHeros();
  return (
    <section className="-mt-6">
      <HeroCarousel slides={res.data!} className={className} />
    </section>
  );
};

export default Hero;
