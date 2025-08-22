import H2 from "@/components/Common/H2";
import { CategoriesTabs } from "@/components/dashboard/CategoriesTabs";
import React from "react";

const page = () => {
  return (
    <section className="mt-10 px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8 2xl:px-10">
      <H2>Categories Management</H2>
      <CategoriesTabs />
    </section>
  );
};

export default page;
