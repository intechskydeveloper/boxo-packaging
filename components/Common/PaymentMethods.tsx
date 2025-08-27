import Image from "next/image";

const PaymentMethodLogos = ({ paymentLogos }: { paymentLogos: string[] }) => {
  return (
    <>
      {/* <h3 className="text-lg font-extrabold font-instruction">
        Payment Methods
      </h3> */}
      <div className="flex flex-wraps mt-2 gap-2 px-1 items-center">
        {paymentLogos.map((src) => (
          <div key={src} className="relative w-auto flex items-center">
            <Image
              src={src}
              alt="Payment method logo"
              height={50}
              width={50}
              className="object-cover h-[30px] w-full"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default PaymentMethodLogos;
