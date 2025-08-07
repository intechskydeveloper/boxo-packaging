import Benifits from "./components/Benifits";
import Hero from "./components/Hero";
import Logobar from "./components/Logobar";

const page = () => {
  return (
    <>
      <Logobar />;
      <Hero />
      <Benifits />
    </>
  );
};

export default page;
