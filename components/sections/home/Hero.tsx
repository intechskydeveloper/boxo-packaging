import Image from "next/image";
import React from "react";
import HeroCarousel from "./HeroCarousel";

const Hero = () => {
  return (
    // <section className="w-full h-[85vh] relative overflow-hidden -mt-6">
    //   <Image
    //     src="/hero.jpg"
    //     alt="Roast Turkey Hero"
    //     fill
    //     className="object-cover"
    //     priority
    //   />
    // </section>
    <section className="-mt-6">
      <HeroCarousel />
    </section>
  );
};

export default Hero;
