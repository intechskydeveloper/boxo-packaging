import React from "react";
import SectionIntro from "../../Common/SectionIntro";
import ImageGallery from "./ImageGallery";

const CustomPackaging = () => {
  return (
    <section className="max-w-[1370px] mx-auto mt-24">
      <SectionIntro
        align="start"
        tagline="Your Choice"
        heading="Your Custom Packaging Partner"
        subHeading="Explore our handpicked selection of best-selling and trending products, chosen just for you."
        className="pb-8"
      />
      <ImageGallery />
    </section>
  );
};

export default CustomPackaging;
