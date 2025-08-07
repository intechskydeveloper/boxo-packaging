import Benifits from "./components/Benifits";
import Categories from "./components/Categories";
import Hero from "./components/Hero";
import Logobar from "./components/Logobar";

const page = () => {
  return (
    <>
      <Logobar />;
      <Hero />
      <Benifits />
      <Categories />    
    </>
  );
};

export default page;
