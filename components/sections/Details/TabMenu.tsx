import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AlternatingImage from "./AlternatingImage";
import { ProductSpecs } from "@/utils/types";
import RichtextHandler from "@/components/Common/RichtextHandler";

const tabledata = [
  {
    name: "Box Style",
    description: "Cigar Boxes",
  },
  {
    name: "Dimension (L + W + H)",
    description: "All Custom Sizes and Shapes",
  },
  {
    name: "Materials",
    description:
      "10pt to 28pt (60lb to 400lb) Eco-Friendly Kraft, E-flute Corrugated, Bux Board, Cardstock",
  },
  {
    name: "Printing",
    description:
      "Blank/Without Printing, CMYK, CMYK + 1 PMS color, CMYK + 2 PMS colors",
  },
  {
    name: "Finishing",
    description:
      "Glossy / Matte Lamination, Aqueous Coating, UV Process, Hot Foiling, Embossing",
  },
  {
    name: "Included Options",
    description: "Die Cutting, Gluing, Scored, Perforation",
  },
  {
    name: "Additional Options",
    description: "Eco-Friendly, Recycled Boxes, Biodegradable",
  },
  {
    name: "Proof",
    description:
      "Flat View Template, 3D Mock-up, Physical Sampling (On request)",
  },
  {
    name: "Turnaround",
    description: "Standard 8-10 Business Days, Expedite 6-8 Business Days",
  },
  {
    name: "Shipping",
    description: "FLAT",
  },
];

export function TabMenu({
  specification,
  richText,
}: {
  specification: ProductSpecs[];
  richText: string;
}) {
  return (
    <div className="flex w-full flex-col  gap-6 max-w-[1370px] mx-auto lg:-translate-y-6">
      <Tabs defaultValue="specifications">
        <TabsList className=" rounded-sm gap-3 px-2 my-1 bg-transparent">
          <TabsTrigger
            className="rounded-[3px] data-[state=active]:bg-primary data-[state=active]:text-white"
            value="specifications"
          >
            Specification
          </TabsTrigger>
          <TabsTrigger
            value="description"
            className="rounded-[3px] data-[state=active]:bg-primary data-[state=active]:text-white"
          >
            Description
          </TabsTrigger>
          <TabsTrigger
            value="design"
            className="rounded-[3px] data-[state=active]:bg-primary data-[state=active]:text-white"
          >
            Design
          </TabsTrigger>
        </TabsList>
        <TabsContent value="description">
          <Card className="px-10 pb-10">
            <RichtextHandler html={richText} />
          </Card>
        </TabsContent>
        <TabsContent value="specifications">
          <Card className="py-0">
            <div className="relative overflow-x-auto rounded-2xl">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 border-none">
                <tbody>
                  {specification.map((item) => (
                    <tr
                      key={item.rowTitle}
                      className="bg-white border-b border-gray-200 first:border-t-[1px]"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap border-b border-r-[1px] border-gray-200 max-w-1/4"
                      >
                        {item.rowTitle}
                      </th>
                      <td className="px-6 py-4 border-b border-gray-200">
                        {item.rowData}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </TabsContent>
        <TabsContent value="design">
          <AlternatingImage />
        </TabsContent>
      </Tabs>
    </div>
  );
}
