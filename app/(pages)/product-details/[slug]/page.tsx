import { PageBreadcrumb } from "@/components/common/PageBreadcrumb";
import CTA from "@/components/sections/details/CTA";
import Progress from "@/components/sections/details/Progress";
import RelatedProducts from "@/components/sections/details/RelatedProducts";
import SplitImage from "@/components/sections/details/SplitImage";
import { TabMenu } from "@/components/sections/details/TabMenu";
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
      <RelatedProducts />
    </div>
  );
}
