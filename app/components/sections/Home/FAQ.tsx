import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Tagline from "../../Tagline";

export function FAQ() {
  return (
    <>
      <div className="max-w-[1370px] mx-auto pt-20 items-center flex flex-col w-full">
        <Tagline title="FAQ's" />
        <h2 className="font-bold text-4xl text-center mt-4 mb-8">
          Frequently Asked Questions
        </h2>
      </div>
      <Accordion
        type="single"
        collapsible
        className="w-full max-w-[1370px] mx-auto pb-10"
        // defaultValue="item-1"/.
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg font-bold  cursor-pointer my-3">
            What is the benefit of custom packaging?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance text-lg font-thin">
            <p>
              Custom packaging can offer several benefits, including increased
              brand recognition, enhanced product protection , and improved
              customer experience. Custom packaging can also help differentiate
              a product from competitors and communicate specific messages to
              the consumer.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg font-bold  cursor-pointer  my-3">
            What is difference between corrugated & cardboard packaging?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance text-lg font-thin">
            <p>
              Corrugated packaging is made from a combination of flat liner
              board and fluted corrugated medium to create a lightweight yet
              strong material suitable for shipping boxes and another protective
              packaging. Cardboard is a heavier and thicker material than
              corruga
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg font-bold  cursor-pointer  my-3">
            How can packaging be designed for e-commerce?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance text-lg font-thin">
            <p>
              Packaging designed for e-commerce should be durable, lightweight,
              and easy to open. It should also be able to withstand the rigors
              of transportation and protect the product inside. Additionally,
              e-commerce packaging can be designed to include branding and
              marketing messages to enhance the customer experience.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
