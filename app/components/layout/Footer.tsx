import { Button } from "@/components/ui/button";
import {
  Dribbble,
  Facebook,
  Instagram,
  Linkedin,
  MailCheck,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="max-w-[1370px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-0 mx-auto mt-10 mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8 py-8 border-t-[1.5px]">
      <div className="flex flex-col md:pr-6 w-full">
        <div className="h-[70px] w-auto flex items-center py-2">
          <Image
            src="/logo.webp"
            alt="logo"
            width={150}
            height={82}
            className="h-full w-auto object-contain"
            priority
          />
        </div>
        <p className="text-sm text-[#7a7a7a] pt-3 pb-4">
          FoodTrove is the biggest market of grocery products. Get your daily
          needs from our store.
        </p>
        <div className="gap-1.5 flex flex-col">
          <div className="gap-3 flex flex-row">
            <MapPin color="#01AD87" size={18} className="mt-0.5" />
            <p className="text-sm text-[#7a7a7a]">
              51 Green St.Huntington ohaio beach ontario, NY 11746 KY 4783, USA.
            </p>
          </div>
          <div className="gap-3 flex flex-row">
            <MailCheck color="#01AD87" size={16} className="mt-0.5" />
            <p className="text-sm text-[#7a7a7a]">example@email.com</p>
          </div>
          <div className="gap-3 flex flex-row">
            <Phone color="#01AD87" size={15} className="mt-0.5" />
            <p className="text-sm text-[#7a7a7a]">+91 123 4567890</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 w-full">
        <div>
          <h3 className="font-bold text-xl text-[#35424E]">Information</h3>
          <div className="flex flex-col mt-3 gap-2">
            <Link href={"/"} className=" text-[#7a7a7a] text-sm">
              About Us
            </Link>
            <Link href={"/"} className=" text-[#7a7a7a] text-sm">
              Delivery Information
            </Link>
            <Link href={"/"} className=" text-[#7a7a7a] text-sm">
              Delivery Information
            </Link>
            <Link href={"/"} className=" text-[#7a7a7a] text-sm">
              Privacy Policy
            </Link>
            <Link href={"/"} className=" text-[#7a7a7a] text-sm">
              Terms & Conditions
            </Link>
            <Link href={"/"} className=" text-[#7a7a7a] text-sm">
              contact Us
            </Link>
            <Link href={"/"} className=" text-[#7a7a7a] text-sm">
              Support Center
            </Link>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-xl text-[#35424E]">Useful Links</h3>
          <div className="flex flex-col mt-3 gap-2">
            <Link href={"/"} className=" text-[#7a7a7a] text-sm">
              Dairy & Bakery
            </Link>
            <Link href={"/"} className=" text-[#7a7a7a] text-sm">
              Fruits & Vegetable
            </Link>
            <Link href={"/"} className=" text-[#7a7a7a] text-sm">
              Snack & Spice
            </Link>
            <Link href={"/"} className=" text-[#7a7a7a] text-sm">
              Juice & Drinks
            </Link>
            <Link href={"/"} className=" text-[#7a7a7a] text-sm">
              Chicken & Meat
            </Link>
            <Link href={"/"} className=" text-[#7a7a7a] text-sm">
              Fast Food
            </Link>
            <Link href={"/"} className=" text-[#7a7a7a] text-sm">
              Juice & Drinks
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:col-span-1 w-full bg-red600 md:col-span-2 mt-10 lg:mt-0">
        <div>
          <h3 className="font-bold text-xl text-[#35424E]">
            Subscribe our Newsletter
          </h3>
          <div className="flex flex-row mt-3  border-[1.5px] border-[#d4d7da] h-[45px] max-w-full lg:max-w-[350px] pl-4 rounded-lg -z-50 gap-3">
            <input
              type="text"
              placeholder="Search for designs..."
              className="placeholder:text-xs placeholder:text-gray-400 text-sm outline-none border-none focus:ring-0 w-full"
            />
            <button className="h-full flex items-center justify-center rounded-r-xs min-w-[45px]">
              <Send size={18} color="#000000" />
            </button>
          </div>
        </div>
        <div className="flex flex-row gap-1.5 mt-4">
          <Button
            variant={"outline"}
            size={"icon"}
            className="border-[#d4d7da]"
          >
            <Facebook color="#35424E" />
          </Button>
          <Button
            variant={"outline"}
            size={"icon"}
            className="border-[#d4d7da]"
          >
            <Dribbble color="#35424E" />
          </Button>
          <Button
            variant={"outline"}
            size={"icon"}
            className="border-[#d4d7da]"
          >
            <Instagram color="#35424E" />
          </Button>
          <Button
            variant={"outline"}
            size={"icon"}
            className="border-[#d4d7da]"
          >
            <Linkedin color="#35424E" />
          </Button>
        </div>
        <div className="flex flex-row gap-1.5 mt-6">
          <div className="h-[70px] w-auto flex items-center">
            <Image
              src="/products/p1.webp"
              alt="logo"
              width={150}
              height={82}
              className="h-full w-auto object-contain rounded-sm"
              priority
            />
          </div>
          <div className="h-[70px] w-auto flex items-center">
            <Image
              src="/products/p2.webp"
              alt="logo"
              width={150}
              height={82}
              className="h-full w-auto object-contain rounded-sm"
              priority
            />
          </div>
          <div className="h-[70px] w-auto flex items-center">
            <Image
              src="/products/p3.webp"
              alt="logo"
              width={150}
              height={82}
              className="h-full w-auto object-contain rounded-sm"
              priority
            />
          </div>
          <div className="h-[70px] w-auto flex items-center">
            <Image
              src="/products/p4.webp"
              alt="logo"
              width={150}
              height={82}
              className="h-full w-auto object-contain rounded-sm"
              priority
            />
          </div>
          <div className="h-[70px] w-auto flex items-center">
            <Image
              src="/products/p5.webp"
              alt="logo"
              width={150}
              height={82}
              className="h-full w-auto object-contain rounded-sm"
              priority
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
