import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionIntro from "../../common/SectionIntro";

export function FAQ() {
  const faqs = [
    {
      value: "item-1",
      question: "What is the benefit of custom packaging?",
      answer: `Custom packaging can offer several benefits, including increased
        brand recognition, enhanced product protection, and improved
        customer experience. Custom packaging can also help differentiate
        a product from competitors and communicate specific messages to
        the consumer.`,
    },
    {
      value: "item-2",
      question: "What is difference between corrugated & cardboard packaging?",
      answer: `Corrugated packaging is made from a combination of flat liner
        board and fluted corrugated medium to create a lightweight yet
        strong material suitable for shipping boxes and other protective
        packaging. Cardboard is a heavier and thicker material than
        corrugated and is generally used for retail or product packaging.`,
    },
    {
      value: "item-3",
      question: "How can packaging be designed for e-commerce?",
      answer: `Packaging designed for e-commerce should be durable, lightweight,
        and easy to open. It should also be able to withstand the rigors
        of transportation and protect the product inside. Additionally,
        e-commerce packaging can be designed to include branding and
        marketing messages to enhance the customer experience.`,
    },
  ];

  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
      <SectionIntro
        align="center"
        tagline="Any Question?"
        heading="Frequently Asked Questions"
        className="pb-8"
      />
      <Accordion
        type="single"
        collapsible
        className="w-full max-w-[1370px] mx-auto pb-10"
      >
        {faqs.map(({ value, question, answer }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-lg font-bold cursor-pointer my-3">
              {question}
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance text-lg font-light">
              <p>{answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
