import React from "react";
import Tagline from "./Tagline";
import H2 from "./H2";
import clsx from "clsx";
import P from "./P";

type Prop = {
  tagline?: string;
  heading: string;
  subHeading?: string;
  align?: "center" | "start";
  className?: string;
};

const SectionIntro = ({
  tagline,
  heading,
  subHeading,
  align,
  className,
}: Prop) => {
  return (
    <div
      className={clsx(
        className,
        "max-w-[1370px] mx-auto ",
        align == "center"
          ? "text-center items-start justify-start md:px-0 px-6"
          : "text-start"
      )}
    >
      {tagline && <Tagline title={tagline} />}
      <H2 align={align}>{heading}</H2>
      {subHeading && <P align={align}>{subHeading}</P>}
    </div>
  );
};

export default SectionIntro;
