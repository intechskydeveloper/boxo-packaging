import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AlignRight, Search, ShoppingCart, Volleyball } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import SlidingContact from "@/components/Common/SlidingContact";
import ButtonLink from "@/components/Common/ButtonLink";

const navigationData = [
  {
    tabName: "About Us",
    href: "/",
    content: {
      pages: [
        { name: "Our Team", link: "/our-team" },
        { name: "How We Work", link: "/how-we-work" },
        { name: "Partners", link: "/partners" },
        { name: "Careers & Internships", link: "/careers-internships" },
      ],
      extraLinks: [
        {
          icon: <Volleyball />, // Replace with a relevant icon for packaging
          label: "Customer Support",
          link: "/support",
        },
      ],
    },
  },
  {
    tabName: "Products",
    href: "/products",
    content: {
      columns: [
        [
          { name: "Custom Boxes", link: "/products/custom-boxes" },
          { name: "Gift Packaging", link: "/products/gift-packaging" },
          { name: "Eco-Friendly Packaging", link: "/products/eco-friendly" },
        ],
        [
          { name: "Food Packaging", link: "/products/food-packaging" },
          { name: "Retail Packaging", link: "/products/retail-packaging" },
          { name: "Special Offers 2025", link: "/special-offers-2025" },
        ],
      ],
      footer: {
        title: "Ready to order?",
        description: "Get your packaging designed and delivered quickly.",
        ctaHref: "/contact",
        ctaText: "Request a Quote",
      },
    },
  },
  {
    tabName: "Portfolio",
    href: "/#portfolio",
    content: {
      cards: [
        {
          title: "Luxury Gift Box",
          desc: "Premium rigid box with custom foil stamping.",
          img: "/images/luxury-box.jpg",
          link: "/portfolio/luxury-box",
        },
        {
          title: "Eco Kraft Box",
          desc: "Eco-friendly packaging for sustainable brands.",
          img: "/images/kraft-box.jpg",
          link: "/portfolio/kraft-box",
        },
      ],
      pages: [
        { name: "Portfolio Masonry", link: "/portfolio/masonry" },
        { name: "Portfolio Showcase", link: "/portfolio/showcase" },
        { name: "Portfolio List", link: "/portfolio/list" },
        { name: "Custom Designs", link: "/portfolio/custom-designs" },
        { name: "Special Editions", link: "/portfolio/special-editions" },
      ],
    },
  },
  {
    tabName: "Contact",
    href: "/contact-us",
    content: {
      pages: [
        { name: "Request a Quote", link: "/request-quote" },
        { name: "FAQs", link: "/faqs" },
        {
          name: "Client Login",
          link: "https://client.packagingstore.com/login",
        },
      ],
    },
  },
];

const SmNavbar = () => {
  return (
    <div className="w-full md:hidden flex flex-col">
      <SlidingContact />
      <div className="w-full flex flex-row bg-white justify-between px-4">
        <div className="h-[77px] w-auto flex items-center py-2">
          <Image
            src="/logo.webp"
            alt="logo"
            width={150}
            height={82}
            className="h-full w-auto object-contain"
            priority
          />
        </div>
        <div className="flex flex-row lg:gap-4 items-center">
          <Button
            variant={"outline"}
            className="flex lg:hidden flex-row items-center gap-2 border-none text-sm px-0 lg:has-[>svg]:px-0 has-[>svg]:px-3"
          >
            <Search size={18} color="#000000" strokeWidth={"1.6"} />
          </Button>
          <Button
            variant={"outline"}
            className="flex flex-row items-center gap-2 border-none text-sm px-0 lg:has-[>svg]:px-0 has-[>svg]:px-3"
          >
            <ShoppingCart />
            <p className="hidden lg:block">Cart</p>
          </Button>
          <S />
        </div>
      </div>
    </div>
  );
};

const S = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant={"outline"}
          size={"icon"}
          className="border-none flex lg:hidden"
        >
          <AlignRight size={40} color="#000000" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col p-0 pt-12 lg:hidden">
        <SheetTitle className="sr-only">
          Boxo packaging navigation sheet
        </SheetTitle>
        <div className="flex-1 overflow-y-auto">
          <Navigation />
        </div>
      </SheetContent>
    </Sheet>
  );
};

function Navigation() {
  return (
    <nav className="w-full bg-white px-2 py-4">
      {" "}
      <Accordion type="single" collapsible className="w-full">
        {navigationData.map((item, index) => (
          <AccordionItem
            key={item.tabName}
            value={`item-${index}`}
            className="px-2"
          >
            <AccordionTrigger className="py-3 text-sm font-semibold hover:text-gray-700 hover:no-underline">
              {item.tabName}
            </AccordionTrigger>
            <AccordionContent className="mb-4 flex flex-col gap-4 rounded-md border border-gray-300 px-1.5 py-4">
              {item.content.columns && (
                <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                  {item.content.columns.map((col, colIndex) => (
                    <div
                      key={`content column ${colIndex}`}
                      className="flex flex-col gap-2"
                    >
                      {col.map((item, linkIndex) => (
                        <ButtonLink
                          key={item.name}
                          href={item.link}
                          variant="outline"
                          className="w-full justify-start border-none shadow-none hover:text-neutral-900"
                        >
                          {item.name}
                        </ButtonLink>
                      ))}
                    </div>
                  ))}
                </div>
              )}
              {item.content.pages && (
                <div className="flex flex-col gap-2">
                  {item.content.pages.map((page, pageIndex) => (
                    <ButtonLink
                      key={page.name}
                      href={page.link}
                      variant="outline"
                      className="justify-start border-none shadow-none hover:text-neutral-900"
                    >
                      {page.name}
                    </ButtonLink>
                  ))}
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="flex w-full flex-col gap-2 border-t border-t-gray-200 py-3">
        <ButtonLink
          href="/"
          variant="outline"
          className="mx-2 justify-start border-none hover:text-neutral-900"
        >
          Docs
        </ButtonLink>
        <ButtonLink
          href="/"
          variant="outline"
          className="mx-2 justify-start border-none hover:text-neutral-900"
        >
          Contact Us
        </ButtonLink>
      </div>
    </nav>
  );
}

export { SmNavbar, S };
