import React from "react";
import clsx from "clsx";

const H3 = ({
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
        `lg:text-3xl md:text-xl text-lg text-center font-bold text-gray-900 py-4 w-full font-instruction`,
        align == "center" ? "text-center" : "text-start"
      )}
    >
      {children}
    </h2>
  );
};

export default H3;
