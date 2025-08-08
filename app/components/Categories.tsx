import Image from "next/image";
import Link from "next/link";
import Tagline from "./Tagline";

export default function Categories() {
  return (
    <div className="py-24 sm:py-20">
      <div className="mx-auto mt-8 max-w-2xl lg:max-w-7xl xl:max-w-[1370px]">
        {/* <p className="text-[#7a7a7a] text-xs text-center uppercase tracking-[1px] font-bold">
          Shop by Category
        </p> */}
        <div className="flex flex-col items-center">
          <Tagline title="Shop by Category" />
          <h2 className="headingTwo">Product Categories</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:mt-10 lg:grid-cols-6 lg:grid-rows-2">
          <div className="flex p-px lg:col-span-4 ">
            <div className="relative group overflow-hidden w-full rounded-lg ring-1 ring-white/15 max-lg:rounded-t-[1.5rem] lg:rounded-tl-[1.5rem] border-[1px] border-gray-300 bg-white">
              <Image
                height={512}
                width={512}
                alt=""
                src="/main.jpg"
                className="h-80 w-full object-cover object-left group-hover:scale-105 transition-all duration-300"
              />
              <Link href={"/"} className="absolute inset-0" />

              <div className="p-10">
                <h3 className="text-sm/4 font-semibold text-[#7a7a7a] uppercase tracking-[1px]">
                  Releases
                </h3>
                <p className="mt-2 text-xl font-bold tracking-tight">
                  Push to deploy
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  gravida justo et nulla efficitur, maximus egestas sem
                  pellentesque.
                </p>
              </div>
            </div>
          </div>
          <div className="flex p-px lg:col-span-2">
            <div className="relative group overflow-hidden rounded-lg ring-1 ring-white/15 lg:rounded-tr-[1.5rem] border-[1px] border-gray-300 bg-white">
              <Image
                height={512}
                width={512}
                alt=""
                src="/i2.jpeg"
                className="h-80 object-cover group-hover:scale-105 transition-all duration-300"
              />
              <Link href={"/"} className="absolute inset-0" />

              <div className="p-10">
                <h3 className="text-sm/4 font-semibold text-[#7a7a7a] uppercase tracking-[1px]">
                  Integrations
                </h3>
                <p className="mt-2 text-xl font-bold tracking-tight">
                  Connect your favorite tools
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  Curabitur auctor, ex quis auctor venenatis, eros arcu rhoncus
                  massa.
                </p>
              </div>
            </div>
          </div>
          <div className="flex p-px lg:col-span-2">
            <div className="relative group overflow-hidden rounded-lg  ring-1 ring-white/15 lg:rounded-bl-[1.5rem] border-[1px] border-gray-300 bg-white">
              <Image
                height={512}
                width={512}
                alt=""
                src="/i3.jpeg"
                className="h-80 object-cover group-hover:scale-105 transition-all duration-300"
              />
              <Link href={"/"} className="absolute inset-0" />

              <div className="p-10">
                <h3 className="text-sm/4 font-semibold text-[#7a7a7a] uppercase tracking-[1px]">
                  Security
                </h3>
                <p className="mt-2 text-xl font-bold tracking-tight">
                  Advanced access control
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia.
                </p>
              </div>
            </div>
          </div>
          <div className="flex p-px lg:col-span-4">
            <div className="relative group overflow-hidden w-full rounded-lg ring-1 ring-white/15 max-lg:rounded-b-[1.5rem] lg:rounded-br-[1.5rem] border-[1px] border-gray-300 bg-white">
              <Image
                height={512}
                width={512}
                alt=""
                src="/i6.jpeg"
                className="h-80 object-cover w-full object-left group-hover:scale-105 transition-all duration-300"
              />
              <Link href={"/"} className="absolute inset-0" />
              <div className="p-10">
                <h3 className="text-sm/4 font-semibold text-[#7a7a7a] uppercase tracking-[1px]">
                  Performance
                </h3>
                <p className="mt-2 text-xl font-bold tracking-tight">
                  Lightning-fast builds
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  Sed congue eros non finibus molestie. Vestibulum euismod augue
                  vel commodo vulputate. Maecenas at augue sed elit dictum
                  vulputate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
