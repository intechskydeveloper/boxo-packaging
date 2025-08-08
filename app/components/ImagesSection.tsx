import Image from "next/image";

export default function ImagesSection() {
  return (
    <section className="max-w-[1370px] mx-auto px-4 py-24">
      {/* Section Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">
          Let’s create a sustainable future together
        </h2>
        <p className="text-gray-600 mt-2">
          Grow your business with eco-friendly alternatives to packaging.
        </p>
      </div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="relative rounded-xl overflow-hidden group">
          <Image
            src="/n1.webp" // replace with your image
            alt="Eco-friendly packaging"
            width={800}
            height={600}
            className="w-full h-[500px] object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
            <p className="text-xs font-semibold tracking-widest text-white mb-2">
              ECO-FRIENDLY PACKAGING
            </p>
            <h3 className="text-xl font-semibold text-white mb-4 max-w-[80%]">
              Go green with sustainably responsible packaging
            </h3>
            <button className="border w-fit border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black duration-300 transition">
              Browse products
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative rounded-xl overflow-hidden group">
          <Image
            src="/n2.webp" // replace with your image
            alt="Sustainable future"
            width={800}
            height={600}
            className="w-full h-[500px] object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
            <p className="text-xs font-semibold tracking-widest text-white mb-2">
              SUSTAINABILITY EFFORTS
            </p>
            <h3 className="text-xl font-semibold text-white mb-4 max-w-[80%]">
              PakFactory’s mission towards a greener future
            </h3>
            <button className="border w-fit border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition">
              Learn how we do it
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
