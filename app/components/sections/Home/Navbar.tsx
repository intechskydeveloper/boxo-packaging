import React from "react";
import { MenuItems } from "./MenuItems";
import { Button } from "@/components/ui/button";
import { AlignLeft, Mail, Menu, Phone } from "lucide-react";

const Navbar = () => {
  return (
    <div className="border border-b-[1.5px] w-full fixed z-50 bg-white">
      <div className="max-w-[1370px] mx-auto flex flex-row justify-between items-center h-[55px] ">
        <Button variant={"outline"} size={"icon"} className="border-none">
          <AlignLeft size={40} color="#000000" />
        </Button>
        <div className="translate-x-20">
          <MenuItems />
        </div>
        <div className="flex flex-row items-center gap-4">
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
    </div>
  );
};

export default Navbar;
