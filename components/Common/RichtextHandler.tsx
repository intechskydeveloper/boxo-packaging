import clsx from "clsx";
import React from "react";

const RichtextHandler = ({
  html = "",
  className,
}: {
  html: string;
  className?: string;
}) => {
  return (
    <div className={clsx(className, "max-w-[1370px] mx-0 font-instruction")}>
      <div
        className="prose prose-lg prose-headings:font-semibold prose-h1:text-4xl prose-h2:text-2xl prose-h3:text-xl leading-[20px] text-sm prose-h1:mb-0 prose-h1:pb-0 max-w-full text-justify prose-h2:my-0 prose-h2:py-0 prose-h2:mt-2 prose-h3:my-0 prose-h3:mt-2 prose-h3:py-0 prose-p:my-0 prose-p:py-0 prose-ul:my-0 prose-ol:my-0 prose-li:mb-1 prose-li:font-extrabold prose-blockquote:my-0 prose-table:my-0"
        dangerouslySetInnerHTML={{ __html: html || "" }}
      />
    </div>
  );
};

export default RichtextHandler;
