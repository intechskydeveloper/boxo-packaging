import React from "react";
import MdNavbar from "./navbar/MdNavbar";
import { SmNavbar } from "./navbar/SmNavbar";

const Navbar = () => {
  return (
    <header className=" w-full ">
      {/* fixed z-50 */}
      <MdNavbar />
      <SmNavbar />
    </header>
  );
};

export default Navbar;
