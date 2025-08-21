import CarouselSlider, { SlideData } from "../../common/CarouselSlider";
import SectionIntro from "../../common/SectionIntro";

// const slides: SlideData[] = [
//   { img: "/oxopackaging/p1.webp", text: "Rigid Boxes" },
//   { img: "/oxopackaging/p2.webp", text: "Custom Mylar Bags" },
//   { img: "/oxopackaging/p3.webp", text: "Coffee Packaging" },
//   { img: "/oxopackaging/p4.webp", text: "Kraft Boxes" },
//   { img: "/oxopackaging/p5.webp", text: "Gable Boxes" },
//   { img: "/oxopackaging/p6.webp", text: "Rigid Boxes" },
//   { img: "/oxopackaging/p7.webp", text: "Custom Mylar Bags" },
//   { img: "/oxopackaging/p8.webp", text: "Coffee Packaging" },
//   { img: "/oxopackaging/p9.webp", text: "Kraft Boxes" },
//   { img: "/oxopackaging/p9.webp", text: "Gable Boxes" },
//   { img: "/oxopackaging/p10.webp", text: "Rigid Boxes" },
//   { img: "/oxopackaging/p11.webp", text: "Custom Mylar Bags" },
//   { img: "/oxopackaging/p12.webp", text: "Coffee Packaging" },
//   { img: "/oxopackaging/p13.webp", text: "Kraft Boxes" },
//   { img: "/oxopackaging/p14.webp", text: "Gable Boxes" },
// ];

export default function CategoriesSlider() {
  return (
    <div className="max-w-[1370px] mx-auto pt-24">
      <SectionIntro
        align="start"
        tagline="Perfect Fit"
        heading="Shop by Categories"
        subHeading="From tiny trinkets to giant goods—we’ve got it covered."
        className="pb-8"
      />
      <CarouselSlider slides={[]} direction="left" />
    </div>
  );
}
