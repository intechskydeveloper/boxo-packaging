import ButtonLink from "@/components/Common/ButtonLink";
import { generateUniqueKey } from "@/utils/generateUniqueKey";
import { CircleArrowRight } from "lucide-react";
import Image from "next/image";

const features = [
  {
    name: "Minimal and thoughtful",
    description:
      'Our laptop sleeve is compact and precisely fits 13" devices. The zipper allows you to access the interior with ease, and the front pouch provides a convenient place for your charger cable.',
    imageSrc: "/packaging/p13.jpg",
    imageAlt:
      "White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.",
  },
  {
    name: "Refined details",
    description:
      "We design every detail with the best materials and finishes. This laptop sleeve features durable canvas with double-stitched construction, a felt interior, and a high quality zipper that hold up to daily use.",
    imageSrc: "/packaging/p14.jpg",
    imageAlt: "Detail of zipper pull with tan leather and silver rivet.",
  },
  {
    name: "Refined details",
    description:
      "We design every detail with the best materials and finishes. This laptop sleeve features durable canvas with double-stitched construction, a felt interior, and a high quality zipper that hold up to daily use.",
    imageSrc: "/packaging/p15.jpg",
    imageAlt: "Detail of zipper pull with tan leather and silver rivet.",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function AlternatingImage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:py-10 lg:max-w-[1370px]">
        <div className="space-y-16">
          {features.map((feature, featureIdx) => (
            <div
              key={generateUniqueKey(feature.name)}
              className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
            >
              <div
                className={classNames(
                  featureIdx % 2 === 0
                    ? "lg:col-start-1"
                    : "lg:col-start-8 xl:col-start-9",
                  "mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4"
                )}
              >
                <h3 className="text-xl font-bold font-instruction text-gray-900">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </p>
                <ButtonLink
                  href="/"
                  variant="outline"
                  className="border-none -ml-3 gap-1 text-primary font-extrabold flex flex-row justify-center hover:text-emerald-700 group"
                >
                  Start Customizing{" "}
                  <CircleArrowRight className="group-hover:translate-x-1 transition-all duration-300 mt-0.5" />
                </ButtonLink>
              </div>
              <div
                className={classNames(
                  featureIdx % 2 === 0
                    ? "lg:col-start-6 xl:col-start-5"
                    : "lg:col-start-1",
                  "flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8"
                )}
              >
                <Image
                  alt={feature.imageAlt}
                  src={feature.imageSrc}
                  className="aspect-5/2 w-full rounded-lg bg-gray-100 object-cover"
                  loading="lazy"
                  width={1024}
                  height={760}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
