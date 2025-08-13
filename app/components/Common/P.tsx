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
        `text-gray-600 max-w-2xl mx-auto font-instruction`,
        align == "center" ? "text-center" : "md:text-start text-justify"
      )}
    >
      {children}
    </p>
  );
};

export default P;
