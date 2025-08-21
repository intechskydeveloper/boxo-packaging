import { SlideData } from "@/components/Common/CarouselSlider";
import SectionIntro from "@/components/Common/SectionIntro";
import ImageGallery from "@/components/sections/Home/ImageGallery";
import React from "react";

const slides: SlideData[] = [
  {
    img: "/oxopackaging/p1.webp",
    alt: "Image of custom files and folders",
  },
  {
    img: "/oxopackaging/p2.webp",
    alt: "Image of custom eco-friendly boxes",
  },
  {
    img: "/oxopackaging/p3.webp",
    alt: "Image of custom product boxes",
  },
  {
    img: "/oxopackaging/p4.webp",
    alt: "Image of custom retail display boxes",
  },
  {
    img: "/oxopackaging/p5.webp",
    alt: "Image of custom folding boxes",
  },
  {
    img: "/oxopackaging/p6.webp",
    alt: "Image of custom gift boxes",
  },
  {
    img: "/oxopackaging/p7.webp",
    alt: "Image of custom rigid boxes",
  },
  {
    img: "/oxopackaging/p8.webp",
    alt: "Image of custom CBD boxes",
  },
  {
    img: "/oxopackaging/p9.webp",
    alt: "Image of custom bakery boxes",
  },
  {
    img: "/oxopackaging/p10.webp",
    alt: "Image of custom candle boxes",
  },
  {
    img: "/oxopackaging/p11.webp",
    alt: "Image of custom apparel boxes",
  },
  {
    img: "/oxopackaging/p12.webp",
    alt: "Image of custom toy boxes",
  },
  {
    img: "/oxopackaging/p13.webp",
    alt: "Image of custom pharmaceutical boxes",
  },
  {
    img: "/oxopackaging/p14.webp",
    alt: "Image of custom soap boxes",
  },
  {
    img: "/oxopackaging/p15.webp",
    alt: "Image of custom corrugated inserts and trays",
  },
  {
    img: "/oxopackaging/p16.webp",
    alt: "Image of custom kraft boxes",
  },
  {
    img: "/oxopackaging/p17.webp",
    alt: "Image of custom gable boxes",
  },
  {
    img: "/oxopackaging/p18.webp",
    alt: "Image of custom window boxes",
  },
  {
    img: "/oxopackaging/p19.webp",
    alt: "Image of custom jewelry boxes",
  },
  {
    img: "/oxopackaging/p20.webp",
    alt: "Image of custom electronics boxes",
  },
  {
    img: "/oxopackaging/p1.webp",
    alt: "Image of custom pillow boxes",
  },
  {
    img: "/oxopackaging/p2.webp",
    alt: "Image of custom tuck boxes",
  },
  {
    img: "/oxopackaging/p3.webp",
    alt: "Image of custom mylar bags",
  },
  {
    img: "/oxopackaging/p4.webp",
    alt: "Image of custom chocolate boxes",
  },
];

const page = () => {
  return (
    <>
      <SectionIntro
        isHero
        align="start"
        tagline="Portfolio"
        heading="The House of Best Custom Printing & Proficient Packaging Solutions"
        subHeading="BOXO Packaging is a USA- based manufacturers' hub for producing all sorts of Custom Boxes in exquisite style. Your products will no longer have to be wrapped in standard boring boxes. We can create personalized subscription boxes in all sizes and classes according to clients' requirements and product specifications."
        className="pb-8 mt-32"
      />
      <ImageGallery data={slides} className="pb-20" />
    </>
  );
};

export default page;
