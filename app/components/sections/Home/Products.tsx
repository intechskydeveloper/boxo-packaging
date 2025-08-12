import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Products = () => {
  return (
    <div className="max-w-[1370px] mx-auto px-4 pt-20">
      <h2 className="sectionHeadingLeft">Products</h2>
      <div className="flex flex-row w-full gap-4">
        <div className="w-[25%] ">
          <div className="my-4 gap-1 flex flex-col">
            <Button
              className="w-full justify-between border-none text-[#01AD87] hover:bg-gray-200"
              variant={"outline"}
            >
              All Products <ArrowRight size={"12"} />
            </Button>
            <Button
              className="w-full justify-between border-none hover:bg-gray-200"
              variant={"outline"}
            >
              Packaging Boxes <ArrowRight size={"12"} />
            </Button>
            <Button
              className="w-full justify-between border-none hover:bg-gray-200"
              variant={"outline"}
            >
              Mylar bags <ArrowRight size={"12"} />
            </Button>
            <Button
              className="w-full justify-between border-none hover:bg-gray-200"
              variant={"outline"}
            >
              Stickers
              <ArrowRight size={"12"} />
            </Button>
            <Button
              className="w-full justify-between border-none hover:bg-gray-200"
              variant={"outline"}
            >
              Card Products <ArrowRight size={"12"} />
            </Button>
            <Button
              className="w-full justify-between border-none hover:bg-gray-200"
              variant={"outline"}
            >
              Stickers
              <ArrowRight size={"12"} />
            </Button>
            <Button
              className="w-full justify-between border-none hover:bg-gray-200"
              variant={"outline"}
            >
              Card Products <ArrowRight size={"12"} />
            </Button>
          </div>

          <div className="h-auto w-full flex items-center px-2 mt-4">
            <Image
              src="/p4.jfif"
              alt="logo"
              fill={false}
              width={0}
              height={0}
              sizes="100vw"
              className="h-full w-full object-contain rounded-lg"
            />
          </div>
        </div>
        <div className="grid-cols-4 grid w-full px-2 gap-3">
          {Array.from({ length: 8 }).map((item, index: number) => (
            <div
              className="flex flex-col items-center "
              key={`products ${index}`}
            >
              <div className="h-[275px] w-auto flex items-center py-2">
                <Image
                  src={`/packaging/p${index + 1}.webp`}
                  alt="logo"
                  width={150}
                  height={82}
                  className="h-full w-auto object-contain rounded-xl transition-all hover:scale-105 duration-300"
                  priority
                />
              </div>
              <h3 className="text-sm px-2 text-start w-full  font-semibold mt-2">
                Women Hot Collection
              </h3>
              <p className="text-sm mt-1 px-2 text-start w-full  font-semibold">
                $ 29.00
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex flex-row justify-end  items-end pr-1 text-[#50B893] mt-4">
        <Button variant={"outline"} className="border-none">
          See all <ArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default Products;
