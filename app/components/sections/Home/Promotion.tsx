import React from "react";
import VideoSection from "../../Common/VideoSection";
import SectionIntro from "../../Common/SectionIntro";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import P from "../../Common/P";

const Promotion = () => {
  return (
    <section
      className="flex flex-col w-full max-w-[1300px] py-20 mx-auto items-center"
      id="promotion"
    >
      <div className="flex flex-row gap-16 pb-14 items-center">
        <div className="max-w-5/12">
          <SectionIntro
            tagline="Promotion"
            heading="Explore Our Signature Packaging Solutions"
            align="start"
            className="mb-4 "
          />
          <div className="flex flex-row gap-4">
            <Button className="relative">
              <Link href={"tel:+18777462696"} className={"absolute inset-0"} />
              Get A Quote
            </Button>
            <Button
              variant={"outline"}
              className="relative hover:underline border-none"
            >
              <Link href={"tel:+18777462696"} className={"absolute inset-0"} />
              Call us
            </Button>
          </div>
        </div>
        <div className="">
          <P className="max-w-2xl">
            Boxo Packaging offers a wide range of products that stand out for
            their quality, versatility, and customization options. Our popular
            products are designed to meet the unique needs of businesses across
            different industries. Whether you are looking for food packaging,
            CBD packaging, mylar bags, or special cardstock boxes, we have
            everything from custom boxes to shipping boxes in high-quality and
            eco-friendly materials.
          </P>
        </div>
      </div>
      <VideoSection />
    </section>
  );
};

export default Promotion;
