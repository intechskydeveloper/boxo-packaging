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
        `lg:text-5xl md:text-3xl max-w-sm sm:max-w-md md:max-w-full text-2xl text-center font-bold text-gray-900 py-2 lg:py-4 w-full font-instruction`,
        align == "center" ? "text-center mx-auto" : "text-start"
      )}
    >
      {children}
    </h2>
  );
};

export default H2;
