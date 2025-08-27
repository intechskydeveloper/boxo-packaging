import React from "react";
import SectionIntro from "../../Common/SectionIntro";
import ImageGallery from "./ImageGallery";
import { getFeaturedSubCategories } from "@/app/actions/sub-category";

const CustomPackaging = async () => {
  const res = await getFeaturedSubCategories();
  return (
    <section className="max-w-[1370px] mx-auto mt-32">
      <SectionIntro
        align="start"
        tagline="Your Choice"
        heading="Your Custom Packaging Partner"
        subHeading="Explore our handpicked selection of best-selling and trending products, chosen just for you."
        className="pb-8"
      />
      <ImageGallery data={res} />
    </section>
  );
};

export default CustomPackaging;
