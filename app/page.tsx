import Products from "./components/sections/Home/Products";
import Hero from "./components/sections/Home/Hero";
import Logobar from "./components/sections/Home/Logobar";
import Categories from "./components/sections/Home/Categories";
import Benifits2 from "./components/sections/Home/Benifits2";
import ImagesSection from "./components/sections/Home/ImagesSection";
import FeaturedSection from "./components/sections/Home/FeaturedSection";

const page = () => {
  return (
    <>
      <Logobar />;
      <Hero />
      <FeaturedSection />
      <Products />
      <Categories />
      <Benifits2 />
      <ImagesSection />
    </>
  );
};

export default page;
