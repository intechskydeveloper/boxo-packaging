import SectionIntro from "../../Common/SectionIntro";

const data = [
  {
    "Feature/Benefit": "Branding",
    "Ready-Made Boxes": "Generic, no branding",
    "Custom Printed Boxes": "Fully customizable with logo, colors, text",
  },
  {
    "Feature/Benefit": "Product Fit",
    "Ready-Made Boxes": "One-size-fits-most",
    "Custom Printed Boxes": "Exact fit reduces void space and breakage",
  },
  {
    "Feature/Benefit": "Customer Experience",
    "Ready-Made Boxes": "Plain and unremarkable",
    "Custom Printed Boxes": "Memorable, boosts perceived value",
  },
  {
    "Feature/Benefit": "Marketing Potential",
    "Ready-Made Boxes": "None",
    "Custom Printed Boxes": "Acts as a branding and sales tool",
  },
  {
    "Feature/Benefit": "Material Usage",
    "Ready-Made Boxes": "May require fillers (wasteful)",
    "Custom Printed Boxes": "Optimized size saves material and cost",
  },
  {
    "Feature/Benefit": "Sustainability",
    "Ready-Made Boxes": "Often not eco-friendly",
    "Custom Printed Boxes": "Options for recycled or biodegradable stock",
  },
  {
    "Feature/Benefit": "Minimum Order Flexibility",
    "Ready-Made Boxes": "Usually bulk only",
    "Custom Printed Boxes": "Can start with low MOQs",
  },
  {
    "Feature/Benefit": "Industry Adaptability",
    "Ready-Made Boxes": "Limited designs",
    "Custom Printed Boxes": "Tailored to specific industries",
  },
  {
    "Feature/Benefit": "Cost Per Unit",
    "Ready-Made Boxes": "Lower upfront",
    "Custom Printed Boxes": "Slightly higher, but higher ROI",
  },
  {
    "Feature/Benefit": "Presentation Quality",
    "Ready-Made Boxes": "Basic",
    "Custom Printed Boxes": "Professional, high-impact",
  },
  {
    "Feature/Benefit": "Packaging Inserts",
    "Ready-Made Boxes": "Rarely included",
    "Custom Printed Boxes": "Designed for inserts, dividers, or trays",
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Table() {
  const columns = [
    "Feature/Benefit",
    "Ready-Made Boxes",
    "Custom Printed Boxes",
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 pt-32">
      <SectionIntro
        align="start"
        tagline="Specification"
        heading="Why custom printed boxes?"
        subHeading="Explore our handpicked selection of best-selling and trending products, chosen just for you."
        className="pb-8"
      />
      <div className="-mx-4 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th
                  key={index}
                  scope="col"
                  className={classNames(
                    index === 0 ? "py-3.5 pr-3 pl-4 sm:pl-6" : "px-3 py-3.5",
                    "text-left text-sm font-semibold text-gray-900"
                  )}
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td
                  className={classNames(
                    rowIndex === 0 ? "" : "border-t border-transparent",
                    "relative py-4 pr-3 pl-4 text-sm font-medium text-gray-900 sm:pl-6"
                  )}
                >
                  {row["Feature/Benefit"]}
                  {rowIndex !== 0 && (
                    <div className="absolute -top-px right-0 left-6 h-px bg-gray-200" />
                  )}
                </td>
                <td
                  className={classNames(
                    rowIndex === 0 ? "" : "border-t border-gray-200",
                    "px-3 py-3.5 text-sm text-gray-600"
                  )}
                >
                  {row["Ready-Made Boxes"]}
                </td>
                <td
                  className={classNames(
                    rowIndex === 0 ? "" : "border-t border-gray-200",
                    "px-3 py-3.5 text-sm text-gray-600"
                  )}
                >
                  {row["Custom Printed Boxes"]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
