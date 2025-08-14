import Products from "./components/sections/Home/Products";
import Hero from "./components/sections/Home/Hero";
import Logobar from "./components/sections/Home/Logobar";
import Categories from "./components/sections/Home/Categories";
import Benifits2 from "./components/sections/Home/Benifits2";
import ImagesSection from "./components/sections/Home/ImagesSection";
import FeaturedSection from "./components/sections/Home/FeaturedSection";
import Promotion from "./components/sections/Home/Promotion";
import Material from "./components/sections/Home/Types";

const page = () => {
  return (
    <>
      <Logobar />;
      <Hero />
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <Promotion />
        <Material />
        <FeaturedSection />
        <Products />
        <Categories />
        <Benifits2 />
        <ImagesSection />
      </div>
    </>
  );
};

export default page;
