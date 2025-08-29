import LogoCloud from "@/components/Common/LogoCloud";
import ProductList from "@/components/sections/Category/ProductList";
import Hero from "@/components/sections/Home/Hero";
import Table from "@/components/sections/Home/Table";
import Working from "@/components/sections/Home/Working";

const page = async (props: { params: Promise<{ slug: string }> }) => {
  const { slug } = await props.params;
  return (
    <>
      <Hero height="full" className="h-screen" />
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <ProductList id={slug} />
        <LogoCloud />
        <Table />
        <Working />
        {/* <Material /> */}
      </div>
    </>
  );
};

export default page;
