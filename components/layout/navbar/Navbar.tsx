import React from "react";

import MdNavbar from "./MdNavbar";
import { SmNavbar } from "./SmNavbar";

const Navbar = () => {
  return (
    <nav className="border border-b-[1.5px] w-full fixed z-50 bg-white">
      <MdNavbar />
      <SmNavbar />
    </nav>
  );
};

export default Navbar;
