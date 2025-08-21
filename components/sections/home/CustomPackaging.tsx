import React from "react";
import SectionIntro from "../../common/SectionIntro";
import ImageGallery from "./ImageGallery";
import { SlideData } from "../../common/CarouselSlider";

const slides: SlideData[] = [
  {
    img: "/oxopackaging/p1.webp",
    text: "Custom Files and Folders",
    description:
      "Boxo Packaging offers a wide range of products that stand out for their quality, versatility, and customization options.",
    alt: "Image of custom files and folders",
  },
  {
    img: "/oxopackaging/p2.webp",
    text: "Custom Eco-friendly Boxes",
    description:
      "Discover our premium, eco-friendly boxes, perfect for businesses committed to sustainability and style.",
    alt: "Image of custom eco-friendly boxes",
  },
  {
    img: "/oxopackaging/p3.webp",
    text: "Custom Product Boxes",
    description:
      "Tailor-made product boxes designed to protect your goods and enhance brand presentation.",
    alt: "Image of custom product boxes",
  },
  {
    img: "/oxopackaging/p4.webp",
    text: "Custom Retail Display Boxes",
    description:
      "Boost your sales with eye-catching retail display boxes that grab customer attention.",
    alt: "Image of custom retail display boxes",
  },
  {
    img: "/oxopackaging/p5.webp",
    text: "Custom Folding Boxes",
    description:
      "Versatile and easy-to-assemble folding boxes, ideal for a variety of products and shipping needs.",
    alt: "Image of custom folding boxes",
  },
  {
    img: "/oxopackaging/p6.webp",
    text: "Custom Gift Boxes",
    description:
      "Create memorable unboxing experiences with our elegant and customizable gift boxes.",
    alt: "Image of custom gift boxes",
  },
  {
    img: "/oxopackaging/p7.webp",
    text: "Custom Rigid Boxes",
    description:
      "Luxury rigid boxes providing a premium feel and superior protection for high-value items.",
    alt: "Image of custom rigid boxes",
  },
  {
    img: "/oxopackaging/p8.webp",
    text: "Custom CBD Boxes",
    description:
      "Specialized CBD boxes, compliant and designed to showcase your products professionally.",
    alt: "Image of custom CBD boxes",
  },
  {
    img: "/oxopackaging/p9.webp",
    text: "Custom Bakery Boxes",
    description:
      "Keep your baked goods fresh and safe with our durable and attractive bakery boxes.",
    alt: "Image of custom bakery boxes",
  },
  {
    img: "/oxopackaging/p10.webp",
    text: "Custom Candle Boxes",
    description:
      "Safeguard and highlight your candles with our custom-fit, beautifully designed candle boxes.",
    alt: "Image of custom candle boxes",
  },
  {
    img: "/oxopackaging/p11.webp",
    text: "Custom Apparel Boxes",
    description:
      "Fashion-forward apparel boxes that protect clothing and elevate your brand’s image.",
    alt: "Image of custom apparel boxes",
  },
  {
    img: "/oxopackaging/p12.webp",
    text: "Custom Toy Boxes",
    description:
      "Durable and playful toy boxes designed to captivate and protect your products.",
    alt: "Image of custom toy boxes",
  },
  {
    img: "/oxopackaging/p13.webp",
    text: "Custom Pharmaceutical Boxes",
    description:
      "Secure and professional pharmaceutical boxes meeting industry standards for safety and clarity.",
    alt: "Image of custom pharmaceutical boxes",
  },
  {
    img: "/oxopackaging/p14.webp",
    text: "Custom Soap Boxes",
    description:
      "Chic soap boxes that present your products with style while ensuring their integrity.",
    alt: "Image of custom soap boxes",
  },
  {
    img: "/oxopackaging/p15.webp",
    text: "Custom Corrugated Inserts & Trays",
    description:
      "Provide maximum protection with custom corrugated inserts and trays that fit your products perfectly.",
    alt: "Image of custom corrugated inserts and trays",
  },
  {
    img: "/oxopackaging/p16.webp",
    text: "Custom Kraft Boxes",
    description:
      "Rustic and robust kraft boxes, offering a natural look with strong, reliable protection.",
    alt: "Image of custom kraft boxes",
  },
  {
    img: "/oxopackaging/p17.webp",
    text: "Custom Gable Boxes",
    description:
      "Unique gable boxes with a convenient handle, perfect for events, gifts, and takeaways.",
    alt: "Image of custom gable boxes",
  },
  {
    img: "/oxopackaging/p18.webp",
    text: "Custom Window Boxes",
    description:
      "Showcase your products with custom window boxes that offer a clear view and a polished look.",
    alt: "Image of custom window boxes",
  },
  {
    img: "/oxopackaging/p19.webp",
    text: "Custom Jewelry Boxes",
    description:
      "Elegant and secure jewelry boxes crafted to highlight the beauty of your precious items.",
    alt: "Image of custom jewelry boxes",
  },
  {
    img: "/oxopackaging/p20.webp",
    text: "Custom Electronics Boxes",
    description:
      "High-quality electronics boxes designed to provide superior protection for sensitive devices.",
    alt: "Image of custom electronics boxes",
  },
  {
    img: "/oxopackaging/p1.webp",
    text: "Custom Pillow Boxes",
    description:
      "Uniquely shaped pillow boxes that add a touch of whimsy and elegance to your packaging.",
    alt: "Image of custom pillow boxes",
  },
  {
    img: "/oxopackaging/p2.webp",
    text: "Custom Tuck Boxes",
    description:
      "Simple yet effective tuck boxes, an industry favorite for their ease of use and versatility.",
    alt: "Image of custom tuck boxes",
  },
  {
    img: "/oxopackaging/p3.webp",
    text: "Custom Mylar Bags",
    description:
      "Keep your products fresh and secure with our durable and customizable mylar bags.",
    alt: "Image of custom mylar bags",
  },
  {
    img: "/oxopackaging/p4.webp",
    text: "Custom Chocolate Boxes",
    description:
      "Delight customers with custom chocolate boxes that are both protective and beautifully designed.",
    alt: "Image of custom chocolate boxes",
  },
];

const CustomPackaging = () => {
  return (
    <section className="max-w-[1370px] mx-auto mt-32">
      <SectionIntro
        align="start"
        tagline="Your Choice"
        heading="Your Custom Packaging Partner"
        subHeading="Explore our handpicked selection of best-selling and trending products, chosen just for you."
        className="pb-8"
      />
      <ImageGallery data={slides} />
    </section>
  );
};

export default CustomPackaging;
