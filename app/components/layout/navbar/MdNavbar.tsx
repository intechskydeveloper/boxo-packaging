import React from "react";
import { MenuItems } from "./MenuItems";
import { Mail, Phone } from "lucide-react";

const MdNavbar = () => {
  return (
    <div className="max-w-[1370px] md:flex hidden px-4 lg:px-8 2xl:px-0 mx-auto flex-row justify-between items-center h-[55px] ">
      {/* <Button variant={"outline"} size={"icon"} className="border-none">
          <AlignLeft size={40} color="#000000" />
        </Button> */}
      <div className="">
        <MenuItems />
      </div>
      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-4 gap-2 items-end">
        <div className="gap-1.5 flex flex-row items-center justify-center">
          <Mail size={16} />
          <p className="text-xs font-semibold">sales@boxopackaging.com</p>
        </div>
        <div className="gap-1 items-center flex flex-row justify-center">
          <Phone size={15} />
          <p className="text-xs font-semibold">+92 (367) 987 987</p>
        </div>
      </div>
    </div>
  );
};

export default MdNavbar;
