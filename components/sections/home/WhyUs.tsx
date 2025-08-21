import Image from "next/image";
import React from "react";
import SectionIntro from "../../common/SectionIntro";
import P from "../../common/P";

const WhyUs = () => {
  return (
    <section className="pt-32 max-w-[1370px] mx-auto">
      <SectionIntro
        align="start"
        tagline="Why Us"
        heading=" Why Choose Us?"
        subHeading="Provides advanced features like time tracking, integrating with third party apps (calendar / Google drive), creating subtasks."
        className="mb-10 md:mb-14 lg:pb-0"
      />
      <div className="relative">
        <div className="w-full flex h-[600px] items-center py-2 rounded-3xl">
          <Image
            src="/WhyUs/p2.webp"
            alt="logo"
            width={1370}
            height={600}
            className="w-full h-full object-cover rounded-3xl"
            loading="lazy"
            quality={90}
          />
        </div>

        <div className="absolute inset-0">
          <div className="lg:w-7/12 md:w-8/12 h-full pl-6 pr-6 md:pr-0 py-8 grid grid-cols-6 grid-rows-9 gap-4 bg-[#FAFDEE]">
            <div className="col-span-2 row-span-6 bg-[#F0ECFB] rounded-3xl flex flex-col items-center justify-center px-4 xl:px-6 py-4  xl:py-6">
              <h3 className="text-lg lg:text-xl xl:text-2xl  font-bold font-instruction text-start w-full">
                Lower Prices
              </h3>
              <div className="h-[170px] w-auto flex items-center py-2">
                <Image
                  src="/vectors/v7.svg"
                  alt="Lower price"
                  width={150}
                  height={150}
                  className="h-full w-auto object-contain"
                  loading="lazy"
                />
              </div>
              <P className="text-xs xl:text-sm z-10">
                Maximize reward on every purchase. Identify top card for each
                purchase
              </P>
            </div>
            <div className="col-span-2 row-span-3 col-start-3 bg-[#FEF7DB] rounded-3xl flex flex-row px-4 xl:px-6 py-3 xl:py-5">
              <div className="flex flex-col w-full ">
                <h3 className="text-lg lg:text-xl xl:text-2xl  font-bold font-instruction text-start w-full z-10">
                  Protective Packaging
                </h3>
                <P className="text-xs xl:text-sm z-10">
                  Maximize reward on every purchase.
                </P>
                <div className="h-[80px] w-auto flex items-center py-2 -translate-y-7 self-end">
                  <Image
                    src="/vectors/v3.png"
                    alt="Lower price"
                    width={150}
                    height={150}
                    className="h-full w-auto object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-2 row-span-3 col-start-5 bg-[#F1F6E4] rounded-3xl px-4">
              <div className="flex flex-col w-full h-full justify-between">
                <div className="h-[60px] w-auto flex items-center self-end pr-1">
                  <Image
                    src="/vectors/v4.png"
                    alt="Lower price"
                    width={150}
                    height={150}
                    className="h-full w-auto object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="pb-4">
                  <h3 className="text-lg lg:text-xl xl:text-2xl  font-bold font-instruction text-start w-full">
                    For Every Industry
                  </h3>
                  <P className="text-xs xl:text-sm z-10">
                    Maximize reward on every purchase.
                  </P>
                </div>
              </div>
            </div>
            <div className="col-span-4 row-span-3 col-start-3 row-start-4 bg-[#FCDFE9] rounded-3xl flex flex-row p-6">
              <div className="flex flex-col ">
                <h3 className="text-lg lg:text-xl xl:text-2xl  font-bold font-instruction text-start w-full">
                  100% Satisfaction Guarantee
                </h3>
                <P className="text-xs xl:text-sm z-10">
                  Maximize reward on every purchase.
                </P>
              </div>
              <div className="h-[160px] w-auto flex items-center py-4">
                <Image
                  src="/vectors/v2.png"
                  alt="Lower price"
                  width={150}
                  height={150}
                  className="h-full w-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col-span-4 row-span-3 row-start-7 bg-[#FDE9DD] rounded-3xl p-6">
              <div className="flex flex-row justify-between h-full items-center">
                <div className="h-full">
                  <h3 className="text-lg lg:text-xl xl:text-2xl  font-bold font-instruction text-start w-full">
                    Low Minimum Order Quantities
                  </h3>
                  <P className="text-xs xl:text-sm z-10">
                    Maximize reward on every purchase.
                  </P>
                </div>
                <div className="h-[200px] w-auto flex items-center py-4">
                  <Image
                    src="/vectors/v5.png"
                    alt="Lower price"
                    width={150}
                    height={150}
                    className="h-full w-auto object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-2 row-span-3 col-start-5 row-start-7 bg-[#EEF2F5] rounded-3xl px-6 py-3">
              <div className="flex flex-col">
                <h3 className="text-lg lg:text-xl xl:text-2xl  font-bold font-instruction text-start w-full">
                  Durable Materials
                </h3>
                <P className="text-xs xl:text-sm z-10">
                  Maximize reward on every purchase.
                </P>
                <div className="h-[60px] w-auto flex items-center self-end -translate-y-4">
                  <Image
                    src="/vectors/v6.png"
                    alt="Lower price"
                    width={150}
                    height={150}
                    className="h-full w-auto object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
