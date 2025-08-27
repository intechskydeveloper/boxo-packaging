import { getProductsPreview } from "@/app/actions/product";
import CarouselSlider, { SlideData } from "../../Common/CarouselSlider";
import SectionIntro from "../../Common/SectionIntro";

export default async function ProductSliders() {
  const res = await getProductsPreview();
  return (
    <div className="max-w-[1370px] mx-auto pt-32">
      <SectionIntro
        align="start"
        tagline="Box Best"
        heading="Bestsellers in Boxes"
        subHeading="Packaging solutions that look as good as they perform. Quality packaging that delivers style and safety."
        className="pb-8"
      />
      <CarouselSlider slides={res} direction="left" />
      <CarouselSlider slides={res} direction="left" />
    </div>
  );
}
