import React from "react";
import FeaturedSection from "../../components/sections/Home/FeaturedSection";
import Products from "../../components/sections/Home/Products";
import Categories from "../../components/sections/Home/Categories";
import Benifits2 from "../../components/sections/Home/Benifits2";
import ImagesSection from "../../components/sections/Home/ImagesSection";
import CategoriesSlider from "../../components/sections/Home/CategoriesSlider";

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
