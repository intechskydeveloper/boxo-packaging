import GetQuoteForm from "@/components/Common/GetQuoteForm";
import PaymentMethodLogos from "@/components/Common/PaymentMethods";
import ReadMore from "@/components/Common/ReadMore";

export default function ProductDetailsPanel({ product }: any) {
  return (
    <div className="px-10">
      <h1 className="text-3xl font-semibold pb-3 mb-0 max-w-md">
        {product.title}
      </h1>
      <ReadMore text="Chocolate gift boxes are one of the most luxurious boxes used to present love and affection. Chocolates are the small little eateries that are so tempting that it becomes harder for one to resist. As time progresses, the ways of customizing are also getting up-to-date. But with the velvety and chocolatey taste, the way they are presented inside the box is essential, and the same goes for the outer representation of the box. This chocolate gift packaging is in such a suitable manner that its theme is depicted in accordance with the lovely treats. OXO Packaging provides the finest curated chocolate gift packaging with the best quality. So, call us now to get a quote, and let’s work together." />
      <GetQuoteForm />
      {/* <PaymentMethodLogos
        paymentLogos={[
          "/payment/paypal.svg",
          "/payment/mastercard.svg",
          "/payment/visa.svg",
          "/payment/discover.svg",
          "/payment/amex.svg",
        ]}
      /> */}
    </div>
  );
}
