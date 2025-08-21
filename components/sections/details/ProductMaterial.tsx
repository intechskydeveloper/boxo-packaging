import SectionIntro from "@/components/Common/SectionIntro";
import { generateUniqueKey } from "@/utils/generateUniqueKey";
import Image from "next/image";
import React from "react";

const ProductMaterial = () => {
  return (
    <section className="max-w-[1370px] mx-auto mt-20">
      <SectionIntro
        align="start"
        // tagline="Best Colletion"
        heading="Material used in Boxes"
        subHeading="Explore our handpicked selection of best-selling and trending products, chosen just for you."
        className="pb-8"
      />
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 xl:gap-8 md:gap-4 gap-2 ">
        {Array.from({ length: 4 }).map((item: any, index) => (
          <div
            key={generateUniqueKey(`${item}`)}
            className={`flex flex-col px-4 py-6 items-center  ${
              index % 2 == 0 ? "bg-muted" : "bg-secondary"
            } rounded-xl`}
          >
            {/* {console.log(item)} */}
            <div className="h-[220px] w-auto flex items-center py-2">
              <Image
                src={
                  index == 0
                    ? "/material/m1.png"
                    : index == 1
                    ? "/material/m2.png"
                    : index == 2
                    ? "/material/m3.png"
                    : "/material/m4.png"
                }
                alt="logo"
                width={150}
                height={82}
                className="h-full w-auto object-contain"
                priority
              />
            </div>
            <div className="flex flex-col gap-1 mt-6">
              <h2 className="text-lg font-bold text-white font-instruction ">
                Rigid
              </h2>
              <p className="text-white md:text-sm text-xs">
                Custom phone case boxes are an elegant choice for your brand to
                attract buyers in the market. We offer excellent customization
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductMaterial;
