import GetQuoteForm from "@/components/Common/GetQuoteForm";
import ReadMore from "@/components/Common/ReadMore";

export default function ProductDetailsPanel({ product }: any) {
  console.log("this is product", product);
  return (
    <div className="px-10">
      <div className="flex flex-row justify-between">
        <h1 className="text-3xl font-semibold pb-3 mb-0 max-w-md">
          {product.title}
        </h1>
        <p className="text-sm font-bold text-secondary">{product.inStock}</p>
      </div>
      {product.description && <ReadMore text={product.description} />}
      <GetQuoteForm />
    </div>
  );
}
