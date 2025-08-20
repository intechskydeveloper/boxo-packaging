import Products from "../components/sections/home/Products";
import Hero from "../components/sections/home/Hero";
import Logobar from "../components/sections/home/Logobar";
import Categories from "../components/sections/home/Categories";
import Benifits2 from "../components/sections/home/Benifits2";
import ImagesSection from "../components/sections/home/ImagesSection";
import FeaturedSection from "../components/sections/home/FeaturedSection";
import Promotion from "../components/sections/home/Promotion";
import Material from "../components/sections/home/Types";
import WhyUs from "../components/sections/home/WhyUs";
import CategoriesSlider from "../components/sections/home/CategoriesSlider";
import ProductSliders from "../components/sections/home/ProductSliders";
import CustomPackaging from "../components/sections/home/CustomPackaging";
import LogoCloud from "../components/common/LogoCloud";
import Table from "../components/sections/home/Table";
import Working from "../components/sections/home/Working";

const page = () => {
  return (
    <>
      <Logobar />;
      <Hero />
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <CustomPackaging />
        <ProductSliders />
        <WhyUs />
        <LogoCloud />
        <Table />
        <Working />
        {/* <Material /> */}
        <Promotion />
      </div>
    </>
  );
};

export default page;
