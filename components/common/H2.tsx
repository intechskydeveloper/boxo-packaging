import React from "react";
import clsx from "clsx";

const H2 = ({
  align,
  className,
  children,
  H = "h2",
}: {
  align?: "center" | "start";
  className?: string;
  children: React.ReactNode;
  H?: "h2" | "h1" | "h3";
}) => {
  return (
    <H
      className={clsx(
        className,
        `xl:text-5xl md:text-3xl max-w-sm sm:max-w-md md:max-w-3xl text-2xl text-center font-bold text-secondary py-2 lg:py-4 w-full font-instruction`,
        align == "center" ? "text-center mx-auto" : "text-start"
      )}
    >
      {children}
    </H>
  );
};

export default H2;
