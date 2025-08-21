import { Custom, Lower, Meter, Van } from "@/utils/Svgs";
import { CheckIcon, Icon } from "lucide-react";

const steps = [
  {
    id: "01",
    icon: <Custom />,
    name: "Full Customization",
    status: "Size & Design",
    info: "You can change the sizes and style by your choice",
  },
  {
    id: "02",
    icon: <Van />,
    name: "Free delivery in USA",
    status: "All States",
    info: "Free Deliver for all order in all states of United States of America",
  },
  {
    id: "03",
    icon: <Meter />,
    name: "Fast turnaround",
    status: "5-7 days",
    info: "Including overnight production and delivery in 6 days",
  },
  {
    id: "04",
    icon: <Lower />,
    name: "Lowest MOQ",
    status: "50 Units",
    info: "MOQ (Minimux Orders Quantity) of just 50 units per design",
  },
];

export default function Progress() {
  return (
    <section aria-label="Progress" className="max-w-[1370px] mx-auto pt-10">
      <ol
        role="list"
        className="divide-y divide-gray-300 rounded-xl border border-gray-300 md:flex md:divide-y-0"
      >
        {steps.map((step, stepIdx) => (
          <li key={step.name} className="relative md:flex md:flex-1">
            <div className="flex ">
              <span className="flex flex-col items-start px-6 py-4 text-sm font-medium">
                {step.icon}
                <div className=" mt-2 text-sm font-medium text-gray-500">
                  <h3 className="font-bold text-black font-instruction">
                    {step.name}{" "}
                    <span className="font-normal text-gray-600">
                      ({step.status})
                    </span>
                  </h3>
                  <p className="mt-1">{step.info}</p>
                </div>
              </span>
            </div>

            {stepIdx !== steps.length - 1 ? (
              <>
                {/* Arrow separator for lg screens and up */}
                <div
                  aria-hidden="true"
                  className="absolute right-0 top-0 hidden h-full w-5 md:block"
                >
                  <svg
                    fill="none"
                    viewBox="0 0 20 80"
                    preserveAspectRatio="none"
                    className="size-full text-gray-300"
                  >
                    <path
                      d="M0 -2L20 40L0 82"
                      stroke="currentcolor"
                      vectorEffect="non-scaling-stroke"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </>
            ) : null}
          </li>
        ))}
      </ol>
    </section>
  );
}
