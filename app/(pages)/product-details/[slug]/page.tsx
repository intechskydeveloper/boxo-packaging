import { getProductDetail } from "@/app/actions/product";
import BottomDescription from "@/components/Common/BottomDescription";
import { PageBreadcrumb } from "@/components/Common/PageBreadcrumb";
import CTA from "@/components/sections/Details/CTA";
import ProductMaterial from "@/components/sections/Details/ProductMaterial";
import Progress from "@/components/sections/Details/Progress";
import SplitImage from "@/components/sections/Details/SplitImage";
import { TabMenu } from "@/components/sections/Details/TabMenu";
import FeaturedSection from "@/components/sections/Home/FeaturedSection";
import Working from "@/components/sections/Home/Working";
import { ProductDetails } from "@/utils/types";
import { notFound } from "next/navigation";

export default async function ProductPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;

  const res = await getProductDetail(slug);

  console.log("this is product data", res);

  if (!res) {
    notFound();
  }

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
      <PageBreadcrumb />
      <SplitImage product={res as ProductDetails} />
      <TabMenu specification={res.specifications} richText={res.richText} />
      <Progress />
      <CTA />
      <ProductMaterial />
      <FeaturedSection />
      <Working />
      <BottomDescription id={slug} />
    </div>
  );
}
