import React from "react";
import clsx from "clsx";

const H2 = ({
  align,
  className,
  children,
}: {
  align?: "center" | "start";
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h2
      className={clsx(
        className,
        `lg:text-5xl md:text-3xl max-w-sm md:max-w-none text-2xl text-center font-bold text-gray-900 py-4 w-full font-instruction`,
        align == "center" ? "text-center" : "text-start"
      )}
    >
      {children}
    </h2>
  );
};

export default H2;
