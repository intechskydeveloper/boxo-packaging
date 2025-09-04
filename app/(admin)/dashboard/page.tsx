import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Stats from "@/components/dashboard/Stats";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV008",
    paymentStatus: "Paid",
    totalAmount: "$280.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV009",
    paymentStatus: "Pending",
    totalAmount: "$190.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV010",
    paymentStatus: "Paid",
    totalAmount: "$410.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV011",
    paymentStatus: "Unpaid",
    totalAmount: "$320.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV012",
    paymentStatus: "Paid",
    totalAmount: "$490.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV013",
    paymentStatus: "Pending",
    totalAmount: "$210.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV014",
    paymentStatus: "Paid",
    totalAmount: "$580.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV015",
    paymentStatus: "Unpaid",
    totalAmount: "$360.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV016",
    paymentStatus: "Paid",
    totalAmount: "$475.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV017",
    paymentStatus: "Paid",
    totalAmount: "$235.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV018",
    paymentStatus: "Pending",
    totalAmount: "$185.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV019",
    paymentStatus: "Unpaid",
    totalAmount: "$425.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV020",
    paymentStatus: "Paid",
    totalAmount: "$330.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV021",
    paymentStatus: "Paid",
    totalAmount: "$510.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV022",
    paymentStatus: "Pending",
    totalAmount: "$265.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV023",
    paymentStatus: "Unpaid",
    totalAmount: "$390.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV024",
    paymentStatus: "Paid",
    totalAmount: "$540.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV025",
    paymentStatus: "Paid",
    totalAmount: "$295.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV026",
    paymentStatus: "Pending",
    totalAmount: "$175.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV027",
    paymentStatus: "Unpaid",
    totalAmount: "$460.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV028",
    paymentStatus: "Paid",
    totalAmount: "$590.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV029",
    paymentStatus: "Paid",
    totalAmount: "$370.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV030",
    paymentStatus: "Pending",
    totalAmount: "$225.00",
    paymentMethod: "Credit Card",
  },
];

const page = async () => {
  return (
    <div className="flex flex-col w-full px-2 md:px-4 lg:px-6 xl:px-8 2xl:px-10">
      <Stats />
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-screen max-w-md rounded-lg border md:min-w-full"
      >
        <ResizablePanel defaultSize={50}>
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell className="font-medium">
                    {invoice.invoice}
                  </TableCell>
                  <TableCell>{invoice.paymentStatus}</TableCell>
                  <TableCell>{invoice.paymentMethod}</TableCell>
                  <TableCell className="text-right">
                    {invoice.totalAmount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right">$2,500.00</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <div className="h-full">
            <span className="font-semibold">Categories and Sub Categories</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default page;
