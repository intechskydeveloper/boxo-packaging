import CarouselSlider, { SlideData } from "../../Common/CarouselSlider";
import SectionIntro from "../../Common/SectionIntro";

const slides1: SlideData[] = [
  {
    img: "/oxopackaging/p15.webp",
    text: "Rigid Boxes",
    description:
      "Boxo Packaging offers a wide range of products that stand out for their quality, versatility, and customization options. ",
  },
  {
    img: "/oxopackaging/p16.webp",
    text: "Custom Mylar Bags",
    description:
      "Boxo Packaging offers a wide range of products that stand out for their quality, versatility, and customization options. ",
  },
  {
    img: "/oxopackaging/p17.webp",
    text: "Coffee Packaging",
    description:
      "Boxo Packaging offers a wide range of products that stand out for their quality, versatility, and customization options. ",
  },
  {
    img: "/oxopackaging/p18.webp",
    text: "Kraft Boxes",
    description:
      "Boxo Packaging offers a wide range of products that stand out for their quality, versatility, and customization options. ",
  },
  {
    img: "/oxopackaging/p19.webp",
    text: "Gable Boxes",
    description:
      "Boxo Packaging offers a wide range of products that stand out for their quality, versatility, and customization options. ",
  },
  {
    img: "/oxopackaging/p1.webp",
    text: "Rigid Boxes",
    description:
      "Boxo Packaging offers a wide range of products that stand out for their quality, versatility, and customization options. ",
  },
  {
    img: "/oxopackaging/p2.webp",
    text: "Custom Mylar Bags",
    description:
      "Boxo Packaging offers a wide range of products that stand out for their quality, versatility, and customization options. ",
  },
  {
    img: "/oxopackaging/p3.webp",
    text: "Coffee Packaging",
    description:
      "Boxo Packaging offers a wide range of products that stand out for their quality, versatility, and customization options. ",
  },
  {
    img: "/oxopackaging/p4.webp",
    text: "Kraft Boxes",
    description:
      "Boxo Packaging offers a wide range of products that stand out for their quality, versatility, and customization options. ",
  },
  {
    img: "/oxopackaging/p5.webp",
    text: "Gable Boxes",
    description:
      "Boxo Packaging offers a wide range of products that stand out for their quality, versatility, and customization options. ",
  },
  {
    img: "/oxopackaging/p6.webp",
    text: "Rigid Boxes",
    description:
      "Boxo Packaging offers a wide range of products that stand out for their quality, versatility, and customization options. ",
  },
  {
    img: "/oxopackaging/p7.webp",
    text: "Custom Mylar Bags",
    description:
      "Boxo Packaging offers a wide range of products that stand out for their quality, versatility, and customization options. ",
  },
  {
    img: "/oxopackaging/p8.webp",
    text: "Coffee Packaging",
    description:
      "Boxo Packaging offers a wide range of products that stand out for their quality, versatility, and customization options. ",
  },
  {
    img: "/oxopackaging/p9.webp",
    text: "Kraft Boxes",
    description:
      "Boxo Packaging offers a wide range of products that stand out for their quality, versatility, and customization options. ",
  },
  {
    img: "/oxopackaging/p9.webp",
    text: "Gable Boxes",
    description:
      "Boxo Packaging offers a wide range of products that stand out for their quality, versatility, and customization options. ",
  },
  {
    img: "/oxopackaging/p10.webp",
    text: "Rigid Boxes",
    description:
      "Boxo Packaging offers a wide range of products that stand out for their quality, versatility, and customization options. ",
  },
  {
    img: "/oxopackaging/p11.webp",
    text: "Custom Mylar Bags",
    description:
      "Boxo Packaging offers a wide range of products that stand out for their quality, versatility, and customization options. ",
  },
  {
    img: "/oxopackaging/p12.webp",
    text: "Coffee Packaging",
    description:
      "Boxo Packaging offers a wide range of products that stand out for their quality, versatility, and customization options. ",
  },
  {
    img: "/oxopackaging/p13.webp",
    text: "Kraft Boxes",
    description:
      "Boxo Packaging offers a wide range of products that stand out for their quality, versatility, and customization options. ",
  },
  {
    img: "/oxopackaging/p14.webp",
    text: "Gable Boxes",
    description:
      "Boxo Packaging offers a wide range of products that stand out for their quality, versatility, and customization options. ",
  },
];

const slides2: SlideData[] = [
  {
    img: "/oxopackaging/p9.webp",
    text: "Gable Boxes",
    description:
      "Boxo Packaging offers a wide range of products that stand out for their quality, versatility, and customization options. ",
  },
  {
    img: "/oxopackaging/p10.webp",
    text: "Rigid Boxes",
    description:
      "Boxo Packaging offers a wide range of products that stand out for their quality, versatility, and customization options. ",
  },
  {
    img: "/oxopackaging/p11.webp",
    text: "Custom Mylar Bags",
    description:
      "Boxo Packaging offers a wide range of products that stand out for their quality, versatility, and customization options. ",
  },
  {
    img: "/oxopackaging/p12.webp",
    text: "Coffee Packaging",
    description:
      "Boxo Packaging offers a wide range of products that stand out for their quality, versatility, and customization options. ",
  },
  {
    img: "/oxopackaging/p13.webp",
    text: "Kraft Boxes",
    description:
      "Boxo Packaging offers a wide range of products that stand out for their quality, versatility, and customization options. ",
  },
  {
    img: "/oxopackaging/p14.webp",
    text: "Gable Boxes",
    description:
      "Boxo Packaging offers a wide range of products that stand out for their quality, versatility, and customization options. ",
  },
  {
    img: "/oxopackaging/p15.webp",
    text: "Rigid Boxes",
    description:
      "Boxo Packaging offers a wide range of products that stand out for their quality, versatility, and customization options. ",
  },
  {
    img: "/oxopackaging/p16.webp",
    text: "Custom Mylar Bags",
    description:
      "Boxo Packaging offers a wide range of products that stand out for their quality, versatility, and customization options. ",
  },
  {
    img: "/oxopackaging/p17.webp",
    text: "Coffee Packaging",
    description:
      "Boxo Packaging offers a wide range of products that stand out for their quality, versatility, and customization options. ",
  },
  {
    img: "/oxopackaging/p18.webp",
    text: "Kraft Boxes",
    description:
      "Boxo Packaging offers a wide range of products that stand out for their quality, versatility, and customization options. ",
  },
  {
    img: "/oxopackaging/p19.webp",
    text: "Gable Boxes",
    description:
      "Boxo Packaging offers a wide range of products that stand out for their quality, versatility, and customization options. ",
  },
  {
    img: "/oxopackaging/p1.webp",
    text: "Rigid Boxes",
    description:
      "Boxo Packaging offers a wide range of products that stand out for their quality, versatility, and customization options. ",
  },
  {
    img: "/oxopackaging/p2.webp",
    text: "Custom Mylar Bags",
    description:
      "Boxo Packaging offers a wide range of products that stand out for their quality, versatility, and customization options. ",
  },
  {
    img: "/oxopackaging/p3.webp",
    text: "Coffee Packaging",
    description:
      "Boxo Packaging offers a wide range of products that stand out for their quality, versatility, and customization options. ",
  },
  {
    img: "/oxopackaging/p4.webp",
    text: "Kraft Boxes",
    description:
      "Boxo Packaging offers a wide range of products that stand out for their quality, versatility, and customization options. ",
  },
  {
    img: "/oxopackaging/p5.webp",
    text: "Gable Boxes",
    description:
      "Boxo Packaging offers a wide range of products that stand out for their quality, versatility, and customization options. ",
  },
  {
    img: "/oxopackaging/p6.webp",
    text: "Rigid Boxes",
    description:
      "Boxo Packaging offers a wide range of products that stand out for their quality, versatility, and customization options. ",
  },
  {
    img: "/oxopackaging/p7.webp",
    text: "Custom Mylar Bags",
    description:
      "Boxo Packaging offers a wide range of products that stand out for their quality, versatility, and customization options. ",
  },
  {
    img: "/oxopackaging/p8.webp",
    text: "Coffee Packaging",
    description:
      "Boxo Packaging offers a wide range of products that stand out for their quality, versatility, and customization options. ",
  },
  {
    img: "/oxopackaging/p9.webp",
    text: "Kraft Boxes",
    description:
      "Boxo Packaging offers a wide range of products that stand out for their quality, versatility, and customization options. ",
  },
];

export default function ProductSliders() {
  return (
    <div className="max-w-[1370px] mx-auto pt-32">
      <SectionIntro
        align="start"
        tagline="Box Best"
        heading="Bestsellers in Boxes"
        subHeading="Packaging solutions that look as good as they perform. Quality packaging that delivers style and safety."
        className="pb-8"
      />
      <CarouselSlider slides={slides1} direction="left" />
      <CarouselSlider slides={slides2} direction="left" />
    </div>
  );
}
