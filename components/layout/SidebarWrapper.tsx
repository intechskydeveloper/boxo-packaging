"use client";

import Sidebar from "@/components/layout/Sidebar";
import { useUser } from "@clerk/nextjs";
import React from "react";

const SidebarWithRoles = () => {
  const { user, isLoaded } = useUser();

  // Wait until user data is loaded before rendering
  if (!isLoaded) {
    return null;
  }

  // Check the publicMetadata for the "role" property
  const isAdmin = user?.publicMetadata?.role === "admin";

  return <>{isAdmin && <Sidebar />}</>;
};

export default SidebarWithRoles;
