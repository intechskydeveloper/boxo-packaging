import React from "react";
import Tagline from "./Tagline";

type Prop = {
  tagline?: string;
  heading: string;
  subHeading?: string;
};

const SectionIntro = ({ tagline, heading, subHeading }: Prop) => {
  return (
    <div className="text-center mb-8 max-w-[1370px] mx-auto">
      <Tagline title={tagline} />
      <h2 className="headingTwo">{heading}</h2>
      <p className="subHeadingTwo">{subHeading}</p>
    </div>
  );
};

export default SectionIntro;
