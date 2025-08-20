import React from "react";
import FeaturedSection from "../../../components/sections/home/FeaturedSection";
import Products from "../../../components/sections/home/Products";
import Categories from "../../../components/sections/home/Categories";
import Benifits2 from "../../../components/sections/home/Benifits2";
import ImagesSection from "../../../components/sections/home/ImagesSection";
import CategoriesSlider from "../../../components/sections/home/CategoriesSlider";

const page = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
      <CategoriesSlider />
      <FeaturedSection />
      <Products />
      <Categories />
      <Benifits2 />
      <ImagesSection />
    </div>
  );
};

export default page;
