import { PageBreadcrumb } from "@/components/Common/PageBreadcrumb";
import CTA from "@/components/sections/Details/CTA";
import ProductMaterial from "@/components/sections/Details/ProductMaterial";
import Progress from "@/components/sections/Details/Progress";
import RelatedProducts from "@/components/sections/Details/RelatedProducts";
import SplitImage from "@/components/sections/Details/SplitImage";
import { TabMenu } from "@/components/sections/Details/TabMenu";
import FeaturedSection from "@/components/sections/Home/FeaturedSection";
import Working from "@/components/sections/Home/Working";
import { use } from "react";

export default function ProductPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(props.params);
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${slug}`, {
  //   cache: "no-store",
  // });

  // if (!res.ok) {
  //   return notFound();
  // }

  // const product = await res.json();

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
      <PageBreadcrumb />
      <SplitImage />
      <TabMenu />
      <Progress />
      <CTA />
      <ProductMaterial />
      {/* <RelatedProducts /> */}
      <FeaturedSection /> {/* as related products*/}
      <Working />
    </div>
  );
}
