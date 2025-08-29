import React from "react";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "../ui/button";

const AuthNav = () => {
  return (
    <nav className="w-full absolute bg-transparent flex flex-row justify-end top-7 -right-8 ">
      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  );
};

export default AuthNav;
