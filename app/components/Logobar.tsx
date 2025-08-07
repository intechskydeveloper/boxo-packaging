import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChevronDown, Heart, Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";

const Logobar = () => {
  return (
    <div className="max-w-[1370px] mx-auto flex flex-row justify-between items-center h-[86px] px-4 bg">
      <div className="h-[77px] w-auto flex items-center py-2">
        <Image
          src="/logo.webp"
          alt="logo"
          width={150}
          height={82}
          className="h-full w-auto object-contain"
          priority
        />
      </div>

      <div className="translate-x-8 flex flex-row  border-[1.5px] border-[#d4d7da] h-[45px] items-center pl-4 rounded-xs -z-50 gap-3 min-w-[500px]">
        <input
          type="text"
          placeholder="Search for designs..."
          className="placeholder:text-xs placeholder:text-gray-400 text-sm outline-none border-none focus:ring-0 w-full"
        />
        <Link
          href={"#"}
          className="flex flex-row gap-1 text-xs items-center pl-4 min-w-[100px] border-l-[1.5px] border-l-[#d4d7da] h-full"
        >
          All Category
          <ChevronDown size={14} className="mt-1" />
        </Link>
        <button className="bg-black h-full flex items-center justify-center rounded-r-xs min-w-[45px]">
          <Search size={18} color="#ffffff" />
        </button>
      </div>
      <div className="flex flex-row gap-4 items-center">
        <Button
          variant={"outline"}
          className="flex flex-row items-center gap-2 border-none text-sm"
        >
          <User strokeWidth={"1.7"} />
          Acconts
        </Button>
        <Button
          variant={"outline"}
          className="flex flex-row items-center gap-2 border-none text-sm"
        >
          <Heart />
          WishList
        </Button>
        <Button
          variant={"outline"}
          className="flex flex-row items-center gap-2 border-none text-sm"
        >
          <ShoppingCart />
          Cart
        </Button>
      </div>
    </div>
  );
};

export default Logobar;
