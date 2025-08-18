import React from "react";

const Tagline = ({ title }: { title?: string }) => {
  return (
    <span className="py-1 px-4 bg-emerald-200 mx-auto rounded-full text-xs font-medium text-emerald-600 text-center">
      {title}
    </span>
  );
};

export default Tagline;
