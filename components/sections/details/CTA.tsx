import H3 from "@/components/Common/H3";
import { Button } from "@/components/ui/button";
import React from "react";

const CTA = () => {
  return (
    <section className="flex flex-col items-start justify-start mt-20 max-w-[1370px] mx-auto bg-gray-300/60 pb-10 pt-6 sm:px-6 px-4 md:px-10 rounded-xl">
      <H3 className="py-0">
        Custom Boxes - Save Money With The Right Boxes - Get Ready To Save
      </H3>
      <p className="mb-4">
        Get in touch with WeCustomBoxes today to learn more about what makes us
        the best in the industry
      </p>
      <div className="flex gap-4 ">
        <Button>Get a Quote</Button>
        <Button variant={"outline"} className="border-non">
          Call Us
        </Button>
      </div>
    </section>
  );
};

export default CTA;
