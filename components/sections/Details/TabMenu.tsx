import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

export function TabMenu() {
  return (
    <div className="flex w-full flex-col  gap-6 max-w-[1370px] mx-auto lg:-translate-y-12">
      <Tabs defaultValue="specifications">
        <TabsList className=" rounded-sm gap-3 px-2 my-1">
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
        </TabsList>
        <TabsContent value="description">
          <Card className="px-10 py-10">
            <h2 className="sectionHeadingLeft">
              Unlimited Customizations In Cigar Box Packaging
            </h2>
            <p className="text-gray-500">
              Now you can get the most functional and unique?cigar boxes?with
              our unlimited customization options. To gain the desired strength
              for your packaging, you can select your desired material for their
              manufacturing, such as Kraft, cardstock, corrugated cardboard,
              etc. Our latest technology enables us to give unique shapes and
              styles to the boxes exactly as per your exclusive needs and wants.
              We will make perfectly sized packaging for your?custom-printed
              cigar boxes?so they do not experience damage during shipments.
              Moreover, you can share your designs with us, and we will give
              them the best impressions with our amazing printing. Or else you
              can ask our designers to create some intriguing designs for your
              products that will set them apart from the rest of the crowd. Our
              design support and digital samples are free of cost, which must
              excite you.
            </p>
            <h2 className="sectionHeadingLeft">
              Place Your Trust In Us, And We’ll Prove You Right Every Time
            </h2>
            <p className="text-gray-500">
              We make sure to satisfy our customers with the best products and
              services when they find us capable enough to put their trust in
              us. We do it gracefully with our finest quality packaging
              solutions, affordable rates, and some additional flavors to make
              your experience with us an incredible one. To give a visible
              highlight to your?best cigar boxes, we can make transparent
              cutouts on the packaging if you want. It will help the customers
              make an informed purchase and build their trust in your brand. The
              customers highly admire our free shipping services in the USA,
              Australia, and Canada. Our worldwide shipping is also quite
              economical as well as secure and prompt. We support your small
              requirements with our minimum order quantity of only 100 pieces.
              On top of that, the added discounts on bulk purchases of cigar
              boxes wholesale are also an exciting flavor to enjoy. Moreover,
              our 24/7 customer support is always ready to listen to your
              concerns and solve them in the shortest time possible. Now give a
              click at?www.boxopackaging.com?to land at your dream custom box
              packaging.
            </p>
          </Card>
        </TabsContent>
        <TabsContent value="specifications">
          <Card className="py-0">
            <div className="relative overflow-x-auto rounded-2xl">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 border-none">
                <tbody>
                  {tabledata.map((item) => (
                    <tr
                      key={item.name}
                      className="bg-white border-b border-gray-200 last:border-none"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap border-b border-r-[1px] border-gray-200"
                      >
                        {item.name}
                      </th>
                      <td className="px-6 py-4 border-b border-gray-200">
                        {item.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
