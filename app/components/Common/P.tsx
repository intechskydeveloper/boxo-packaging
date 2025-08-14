import clsx from "clsx";
import React from "react";

const P = ({
  align,
  className,
  children,
}: {
  align?: "center" | "start";
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={clsx(
        className,
        `text-gray-600 lg:max-w-2xl max-w-lg font-instruction`,
        align == "center"
          ? "text-center mx-auto"
          : "md:text-start text-justify "
      )}
    >
      {children}
    </p>
  );
};

export default P;
