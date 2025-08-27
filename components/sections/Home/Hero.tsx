import Image from "next/image";
import React from "react";
import HeroCarousel from "./HeroCarousel";
import { getAllHeros } from "@/app/actions/ui-blocks/hero";

const Hero = async () => {
  const res = await getAllHeros();
  return (
    <section className="-mt-6">
      <HeroCarousel slides={res.data!} />
    </section>
  );
};

export default Hero;
