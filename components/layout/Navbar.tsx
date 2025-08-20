import React from "react";
import MdNavbar from "./navbar/MdNavbar";
import { SmNavbar } from "./navbar/SmNavbar";

const Navbar = () => {
  return (
    <nav className=" w-full fixed z-50 bg-secondary">
      <MdNavbar />
      <SmNavbar />
    </nav>
  );
};

export default Navbar;
