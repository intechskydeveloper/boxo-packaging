import Image from "next/image";
import Tagline from "../../common/Tagline";
import SectionIntro from "../../common/SectionIntro";

export default function ImagesSection() {
  return (
    <section className="max-w-[1370px] mx-auto px-4 py-12">
      <SectionIntro
        align="center"
        tagline="Sustainable future"
        heading="Let’s create together"
        subHeading="Grow your business with eco-friendly alternatives to packaging. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, alias."
        className="pb-8"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative group rounded-xl overflow-hidden group">
          <Image
            src="/n1.webp"
            alt="Eco-friendly packaging"
            width={800}
            height={600}
            loading="lazy"
            className="w-full h-[500px] object-cover group-hover::scale-105"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
            <p className="text-xs font-semibold tracking-widest text-white mb-2">
              ECO-FRIENDLY PACKAGING
            </p>
            <h3 className="text-xl font-semibold text-white mb-4 max-w-[80%]">
              Go green with sustainably responsible packaging
            </h3>
            <button className="border w-fit border-white hover:border-[#01AD87] text-white px-4 py-2 rounded hover:bg-[#01AD87] duration-300 transition">
              Browse products
            </button>
          </div>
        </div>

        <div className="relative rounded-xl overflow-hidden group">
          <Image
            src="/n2.webp"
            alt="Sustainable future"
            width={800}
            height={600}
            loading="lazy"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
            <p className="text-xs font-semibold tracking-widest text-white mb-2">
              SUSTAINABILITY EFFORTS
            </p>
            <h3 className="text-xl font-semibold text-white mb-4 max-w-[80%]">
              PakFactory’s mission towards a greener future
            </h3>
            <button className="border w-fit border-white hover:border-[#01AD87] text-white px-4 py-2 rounded hover:bg-[#01AD87] duration-300 transition">
              Learn how we do it
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
