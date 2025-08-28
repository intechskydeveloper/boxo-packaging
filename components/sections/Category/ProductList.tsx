import SectionIntro from "@/components/Common/SectionIntro";
import ImageGallery from "../Home/ImageGallery";
import { getSubCategoryWithProducts } from "@/app/actions/sub-category";

type ProductListProps = {
  id: string;
};

const ProductList = async ({ id }: ProductListProps) => {
  const res = await getSubCategoryWithProducts(id);
  return (
    <section className="max-w-[1370px] mx-auto mt-32">
      <SectionIntro align="start" heading={res?.name ?? ""} className="pb-8" />
      <ImageGallery data={res?.products ?? []} type={"product"} />
    </section>
  );
};

export default ProductList;
