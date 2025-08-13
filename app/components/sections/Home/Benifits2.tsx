import React from "react";
import SectionIntro from "../../Common/SectionIntro";
import { Svg1, Svg2, Svg3, Svg4, Svg5, Svg6, Svg7, Svg8 } from "@/utils/Svgs";

const benefitsData = [
  {
    icon: <Svg1 />,
    bgColor: "bg-indigo-50",
    hoverColor: "group-hover:bg-indigo-600",
    title: "Revolutionary Projectview",
    description:
      "plan and structure work how you want. Quickly organizing tasks.",
  },
  {
    icon: <Svg2 />,
    bgColor: "bg-pink-50",
    hoverColor: "group-hover:bg-pink-600",
    title: "App Integrations",
    description:
      "Bring all your tools and data together. Also join with hundreds of other apps.",
  },
  {
    icon: <Svg3 />,
    bgColor: "bg-teal-50",
    hoverColor: "group-hover:bg-teal-600",
    title: "Data Reporting",
    description:
      "Get real time insight into progress and allows teams to track their work habits",
  },
  {
    icon: <Svg4 />,
    bgColor: "bg-orange-50",
    hoverColor: "group-hover:bg-orange-600",
    title: "Workflow Builder",
    description:
      "Automated processes to coordinate your teams and increase communication.",
  },
  {
    icon: <Svg5 />,
    bgColor: "bg-indigo-50",
    hoverColor: "group-hover:bg-indigo-600",
    title: "Revolutionary Projectview",
    description:
      "plan and structure work how you want. Quickly organizing tasks.",
  },
  {
    icon: <Svg6 />,
    bgColor: "bg-pink-50",
    hoverColor: "group-hover:bg-pink-600",
    title: "App Integrations",
    description:
      "Bring all your tools and data together. Also join with hundreds of other apps.",
  },
  {
    icon: <Svg7 />,
    bgColor: "bg-teal-50",
    hoverColor: "group-hover:bg-teal-600",
    title: "Data Reporting",
    description:
      "Get real time insight into progress and allows teams to track their work habits",
  },
  {
    icon: <Svg8 />,
    bgColor: "bg-orange-50",
    hoverColor: "group-hover:bg-orange-600",
    title: "Workflow Builder",
    description:
      "Automated processes to coordinate your teams and increase communication.",
  },
];

const Benifits2 = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro
          align="center"
          tagline="Features"
          heading="Revolutionary Features"
          subHeading="Provides advanced features like time tracking, integrating with third party apps (calendar / Google drive), creating subtasks."
          className="pb-8"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefitsData.map((item, idx) => (
            <div
              key={idx}
              className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group"
            >
              <div
                className={`${item.bgColor} rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto transition-all duration-500 ${item.hoverColor}`}
              >
                {item.icon}
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">
                {item.title}
              </h4>
              <p className="text-sm font-normal text-gray-500 max-w-xs mx-auto">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benifits2;
