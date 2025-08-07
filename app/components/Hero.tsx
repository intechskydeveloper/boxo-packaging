import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full h-[80vh] relative overflow-hidden -mt-6">
      <Image
        src="/hero.webp"
        alt="Roast Turkey Hero"
        fill
        className="object-cover"
        priority
      />
    </section>
  );
};

export default Hero;
