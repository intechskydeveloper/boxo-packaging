import CarouselSlider, { SlideData } from "../../Common/CarouselSlider";
import SectionIntro from "../../Common/SectionIntro";

const slides: SlideData[] = [
  { img: "/packaging/p1.webp", text: "Rigid Boxes" },
  { img: "/packaging/p2.webp", text: "Custom Mylar Bags" },
  { img: "/packaging/p3.webp", text: "Coffee Packaging" },
  { img: "/packaging/p4.webp", text: "Kraft Boxes" },
  { img: "/packaging/p5.webp", text: "Gable Boxes" },
  { img: "/packaging/p1.webp", text: "Rigid Boxes" },
  { img: "/packaging/p2.webp", text: "Custom Mylar Bags" },
  { img: "/packaging/p3.webp", text: "Coffee Packaging" },
  { img: "/packaging/p4.webp", text: "Kraft Boxes" },
  { img: "/packaging/p5.webp", text: "Gable Boxes" },
  { img: "/packaging/p1.webp", text: "Rigid Boxes" },
  { img: "/packaging/p2.webp", text: "Custom Mylar Bags" },
  { img: "/packaging/p3.webp", text: "Coffee Packaging" },
  { img: "/packaging/p4.webp", text: "Kraft Boxes" },
  { img: "/packaging/p5.webp", text: "Gable Boxes" },
];

export default function CategoriesSlider() {
  return (
    <div className="max-w-[1370px] mx-auto pt-24">
      <SectionIntro
        align="start"
        tagline="Best Colletion"
        heading="Featured Section"
        subHeading="Explore our handpicked selection of best-selling and trending products, chosen just for you."
        className="pb-8"
      />
      <CarouselSlider slides={slides} direction="left" />
    </div>
  );
}
