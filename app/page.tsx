import Benifits from "./components/Benifits";
import Products from "./components/Products";
import Hero from "./components/Hero";
import ImagesSection from "./components/ImagesSection";
import Logobar from "./components/Logobar";
import Categories from "./components/Categories";
import { FAQ } from "./components/FAQ";
import Benifits2 from "./components/Benifits2";

const page = () => {
  return (
    <>
      <Logobar />;
      <Hero />
      {/* <Benifits /> */}
      <Products />
      <Categories />
      <Benifits2 />
      <ImagesSection />
      <FAQ />
    </>
  );
};

export default page;
