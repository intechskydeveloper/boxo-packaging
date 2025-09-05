import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  AlignRight,
  ChevronDown,
  Heart,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import Link from "next/link";
import { S } from "../../layout/navbar/SmNavbar";

const Logobar = () => {
  return (
    <section className="">
      <div className="max-w-[1370px] mx-auto hidden md:flex flex-row justify-between items-center h-[86px] px-4 lg:px-8 2xl:px-0">
        <div className="h-[77px] w-auto flex items-center py-2">
          <Image
            src="/other/logo.webp"
            alt="logo"
            width={150}
            height={82}
            className="h-full w-auto object-contain"
            priority
          />
        </div>

        <div className="translate-x-8 lg:flex hidden flex-row  border-[1.5px] border-[#d4d7da] h-[45px] items-center pl-4 rounded-sm gap-3 md:min-w-[300px] lg:min-w-[500px]">
          <input
            type="text"
            placeholder="Search for designs..."
            className="placeholder:text-xs placeholder:text-gray-400 text-sm outline-none border-none focus:ring-0 w-full"
          />
          <Link
            href={"#"}
            className="flex flex-row gap-1 text-xs items-center pl-4 min-w-[120px] border-l-[1.5px] border-l-[#d4d7da] h-full"
          >
            All Category
            <ChevronDown size={14} className="mt-1" />
          </Link>
          <button className="bg-secondary  h-full flex items-center justify-center rounded-r-sm min-w-[45px]">
            <Search size={18} color="#ffffff" />
          </button>
        </div>

        <div className="flex flex-row lg:gap-4 items-center">
          <Button
            variant={"outline"}
            className="flex lg:hidden flex-row items-center gap-2 border-none text-sm px-0 lg:has-[>svg]:px-0 has-[>svg]:px-3"
          >
            <Search size={18} color="#000000" strokeWidth={"1.6"} />
          </Button>
          <Button
            variant={"outline"}
            className="hidden lg:flex flex-row items-center gap-2 border-none text-sm px-0 lg:has-[>svg]:px-0 has-[>svg]:px-3 "
          >
            <User strokeWidth={"1.7"} />
            <p className="hidden lg:block">Acconts</p>
          </Button>
          <Button
            variant={"outline"}
            className="hidden lg:flex  flex-row items-center gap-2 border-none text-sm px-0 lg:has-[>svg]:px-0 has-[>svg]:px-3"
          >
            <Heart />
            <p className="hidden lg:block">WishList</p>
          </Button>
          <Button
            variant={"outline"}
            className="flex flex-row items-center gap-2 border-none text-sm px-0 lg:has-[>svg]:px-0 has-[>svg]:px-3"
          >
            <ShoppingCart />
            <p className="hidden lg:block">Cart</p>
          </Button>
          <S />
        </div>
      </div>
    </section>
  );
};

export default Logobar;
