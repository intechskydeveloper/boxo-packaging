import { PageBreadcrumb } from "@/app/components/Common/PageBreadcrumb";
import SplitImage from "@/app/components/sections/Details/SplitImage";
import { TabMenu } from "@/app/components/sections/Details/TabMenu";
interface ProductPageProps {
  params: { slug: string };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;

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
    </>
  );
}
