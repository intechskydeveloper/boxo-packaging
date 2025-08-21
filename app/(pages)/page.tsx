import LogoCloud from "@/components/common/LogoCloud";
import CustomPackaging from "@/components/sections/home/CustomPackaging";
import Hero from "@/components/sections/home/Hero";
import Logobar from "@/components/sections/home/Logobar";
import ProductSliders from "@/components/sections/home/ProductSliders";
import Promotion from "@/components/sections/home/Promotion";
import Table from "@/components/sections/home/Table";
import WhyUs from "@/components/sections/home/WhyUs";
import Working from "@/components/sections/home/Working";

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
