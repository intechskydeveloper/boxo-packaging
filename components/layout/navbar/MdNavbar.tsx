import Link from "next/link";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  ShoppingCart,
  Heart,
  Quote,
  Menu,
  BadgePercent,
} from "lucide-react";
import { ThemeHandler } from "@/components/Common/ThemeHandler";
import Image from "next/image";
import ButtonLink from "@/components/Common/ButtonLink";
import { MenuItems } from "./MenuItems";

export default function Navbar() {
  return (
    <>
      <div className="w-full bg-white dark:bg-background mx-auto max-w-[1320px] px-3">
        {/* Top bar */}
        <div className="flex justify-between items-center py-2.5 h-[51px] text-xs font-medium text-muted dark:text-foreground">
          <nav>
            <ul className="flex gap-4">
              <li>
                <Link
                  href="#"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Track Order
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary transition-colors duration-200"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <span role="img" aria-label="clock">
                🕒
              </span>
              You can contact us 24/7{" "}
              <a
                href="tel:0800300353"
                className="font-medium py-1 px-2 rounded-full bg-gray-200 dark:text-background items-center flex justify-center"
              >
                0 800 300-353
              </a>
            </span>
            <div className="w-[1px] h-5 bg-gray-300 mx-1" />
            <Select>
              <SelectTrigger className="border-none focus-visible:ring-0 px-0 dark:bg-background hover:dark:bg-transparent hover:dark:text-white text-xs font-medium dark:text-white">
                <SelectValue placeholder="English" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="ur">Urdu</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="border-none focus-visible:ring-0 px-0 dark:bg-background hover:dark:bg-transparent hover:dark:text-white text-xs font-medium dark:text-white">
                <SelectValue placeholder="USD" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="usd">USD</SelectItem>
                <SelectItem value="eur">EUR</SelectItem>
              </SelectContent>
            </Select>
            <ThemeHandler />
          </div>
        </div>

        {/* Logo bar */}
        <div className="flex items-center justify-between py-5">
          {/* Logo */}
          <div className="relative h-10 w-[160px] my-1">
            <Link
              href="/"
              aria-label="Offex Logo"
              className="absolute inset-0 flex items-center"
            >
              <Image
                src="/v2/logo.png"
                alt="Offex - Custom Packaging Partner"
                width={160}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Search bar */}
          <form className=" px-2.5 w-full max-w-3xl">
            <div className="flex flex-row w-full rounded-[4px] ring-[1px] ring-primary border overflow-hidden h-[46px] items-center justify-center border-primary-foreground">
              <Select>
                <div className="border border-y-0 border-l-0 min-w-[70px] h-full flex items-center justify-center border-r-[1.5px]">
                  <SelectTrigger className=" h-auto focus-visible:ring-0 text-sm border-none font-normal transition-all duration-200">
                    <SelectValue placeholder="All" />
                  </SelectTrigger>
                </div>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="cat1">By Industry</SelectItem>
                  <SelectItem value="cat2">By Material</SelectItem>
                  <SelectItem value="cat3">By Style</SelectItem>
                </SelectContent>
              </Select>
              <Input
                type="search"
                placeholder="Search for products..."
                className="flex-1 border-none focus-visible:ring-0 placeholder:text-gray-400 font-normal"
              />
              <button
                type="button"
                className="rounded-[6px] cursor-pointer rounded-l-[0px] w-[53px] bg-primary-foreground h-full flex items-center justify-center"
              >
                <Search
                  className="h-5 w-5"
                  size={38}
                  color="#000000"
                  strokeWidth={1}
                />
              </button>
            </div>
          </form>

          {/* Right icons */}
          <div className="flex items-center gap-6">
            <ButtonLink
              href="/account"
              type="simple"
              className="flex flex-row gap-2  text-sm bg-transparent text-muted py-0 items-start h-[38px]"
            >
              <Quote size={20} strokeWidth={1.5} />
              <div className="flex flex-col items-start gap-0 ">
                <span className="text-gray-400 text-[10px] font-medium">
                  Touch
                </span>
                <span className="text-[14px] font-medium">Get Quote</span>
              </div>
            </ButtonLink>

            <Link
              href="/wishlist"
              className="relative flex flex-col items-start text-sm"
            >
              <Heart size={22} strokeWidth={1.5} />
              <span className="absolute -top-1 -right-2 bg-yellow-400 text-[10px] flex items-center justify-center rounded-full h-4 w-4">
                1
              </span>
            </Link>
            <Link href="/cart" className="flex items-center gap-4 text-sm">
              <div className="relative flex flex-col items-center text-sm">
                <ShoppingCart size={22} strokeWidth={1.5} />
                <span className="absolute -top-1 -right-2 bg-yellow-400 text-[10px] flex items-center justify-center rounded-full h-4 w-4">
                  0
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-400 text-[10px] font-medium">
                  Total
                </span>
                <span>$0.00</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Main navbar */}
        <div className="flex flex-row items-center justify-between h-[50px]">
          <div className="flex">
            <Select>
              <SelectTrigger className="flex w-[300px] uppercase items-center justify-center h-auto focus-visible:ring-0 text-sm border-none transition-all duration-200 text-[15px] font-medium">
                <Menu className="mb-[1px]" />
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="cat1">By Industry</SelectItem>
                <SelectItem value="cat2">By Material</SelectItem>
                <SelectItem value="cat3">By Style</SelectItem>
              </SelectContent>
            </Select>
            <MenuItems />
          </div>
          <div className="flex flex-row gap-2 items-center justify-center">
            <BadgePercent color="#1B1F22" strokeWidth={1.5} size={20} />
            <p>Best Discounts</p>
          </div>
        </div>
      </div>
      <div className="w-full h-[0.8px] bg-gray-200" />
    </>
  );
}
