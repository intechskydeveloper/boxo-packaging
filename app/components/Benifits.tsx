import Image from "next/image";
import React from "react";

const Benifits = () => {
  return (
    <div className="flex flex-col items-center py-24">
      <p className="text-[#7a7a7a] text-xs uppercase tracking-[1px] font-bold">
        discover the benifits
      </p>
      <h2 className="font-bold text-4xl mt-4">Why our Product?</h2>
      <div className="mt-8 grid grid-cols-5">
        <div className="flex flex-col items-center py-7 px-6 hover:bg-[#4DBA93] rounded-lg shadow-lg bg-[#f2f2f2] m-4 transition-colors duration-300">
          <div className="h-[60px]  w-auto flex items-center">
            <Image
              src="/products/p1.webp"
              alt="logo"
              width={150}
              height={82}
              className="h-full rounded-full w-auto object-contain"
              priority
            />
          </div>
          <h2 className="text-[16px] font-bold text-center mt-3">
            Custom Sizes
          </h2>
        </div>
        <div className="flex flex-col items-center py-7 px-6 hover:bg-[#4DBA93] rounded-lg shadow-lg bg-[#f2f2f2] m-4 transition-colors duration-300">
          <div className="h-[60px]  w-auto flex items-center">
            <Image
              src="/products/p2.webp"
              alt="logo"
              width={150}
              height={82}
              className="h-full rounded-full w-auto object-contain"
              priority
            />
          </div>
          <h2 className="text-[16px] font-bold text-center mt-3">
            Free Design
          </h2>
        </div>
        <div className="flex flex-col items-center py-7 px-6 hover:bg-[#4DBA93] rounded-lg shadow-lg bg-[#f2f2f2] m-4 transition-colors duration-300">
          <div className="h-[60px]  w-auto flex items-center">
            <Image
              src="/products/p3.webp"
              alt="logo"
              width={150}
              height={82}
              className="h-full rounded-full w-auto object-contain"
              priority
            />
          </div>
          <h2 className="text-[16px] font-bold text-center mt-3">
            Free Sample
          </h2>
        </div>
        <div className="flex flex-col items-center py-7 px-6 hover:bg-[#4DBA93] rounded-lg shadow-lg bg-[#f2f2f2] m-4 transition-colors duration-300">
          <div className="h-[60px]  w-auto flex items-center">
            <Image
              src="/products/p4.webp"
              alt="logo"
              width={150}
              height={82}
              className="h-full rounded-full w-auto object-contain"
              priority
            />
          </div>
          <h2 className="text-[16px] font-bold text-center mt-3">
            Minimum Order
          </h2>
        </div>
        <div className="flex flex-col items-center py-7 px-6 hover:bg-[#4DBA93] rounded-lg shadow-lg bg-[#f2f2f2] m-4 transition-colors duration-300">
          <div className="h-[60px]  w-auto flex items-center">
            <Image
              src="/products/p5.webp"
              alt="logo"
              width={150}
              height={82}
              className="h-full rounded-full w-auto object-contain"
              priority
            />
          </div>
          <h2 className="text-[16px] font-bold text-center mt-3">
            Swift Delivery
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Benifits;
