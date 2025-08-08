import Benifits from "./components/Benifits";
import Categories from "./components/Categories";
import Hero from "./components/Hero";
import ImagesSection from "./components/ImagesSection";
import Logobar from "./components/Logobar";

const page = () => {
  return (
    <>
      <Logobar />;
      <Hero />
      <Benifits />
      <Categories />
      <ImagesSection />
    </>
  );
};

export default page;
