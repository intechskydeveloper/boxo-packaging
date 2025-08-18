import { PageBreadcrumb } from "@/components/Common/PageBreadcrumb";
import RelatedProducts from "@/components/sections/Details/RelatedProducts";
import SplitImage from "@/components/sections/Details/SplitImage";
import { TabMenu } from "@/components/sections/Details/TabMenu";
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
    <>
      <PageBreadcrumb />
      <SplitImage />
      <TabMenu />
      <RelatedProducts />
    </>
  );
}
