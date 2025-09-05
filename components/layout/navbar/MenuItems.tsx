"use client";

import * as React from "react";
import Link from "next/link";
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import clsx from "clsx";
import Image from "next/image";
import { Boxes_by_Industries } from "@/utils/data";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function MenuItems() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-muted hover:bg-transparent hover:text-primary focus:bg-transparent focus:text-muted data-[state=open]:bg-transparent  data-[state=open]:text-primary  data-[state=open]:hover:bg-transparent data-[state=open]:focus:bg-transparent text-[15px] font-medium">
            Boxes by Industry
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-secondary">
            <ul className="grid w-[1200px] lg:grid-cols-4 md:grid-cols-3">
              {Boxes_by_Industries.map((I) => (
                <li key={I.title}>
                  <NavigationMenuLink asChild className="py-1">
                    <div className="relative flex flex-row items-center gap-3 group">
                      <Link href={I.href} className="absolute inset-0" />
                      <div className="h-[60px] w-auto flex items-center">
                        <Image
                          src={I.icon}
                          alt="logo"
                          width={150}
                          height={150}
                          className="h-full w-[60px] object-contain rounded-md"
                          loading="lazy"
                        />
                      </div>
                      <h3 className="text-sm">{I.title}</h3>
                    </div>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-muted hover:bg-transparent hover:text-primary focus:bg-transparent focus:text-muted data-[state=open]:bg-transparent  data-[state=open]:text-primary  data-[state=open]:hover:bg-transparent data-[state=open]:focus:bg-transparent text-[15px] font-medium ">
            Boxes by Material
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#" className="flex-row items-center gap-2">
                    <CircleHelpIcon />
                    Backlog
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#" className="flex-row items-center gap-2">
                    <CircleIcon />
                    To Do
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#" className="flex-row items-center gap-2">
                    <CircleCheckIcon />
                    Done
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-muted hover:bg-transparent hover:text-primary focus:bg-transparent focus:text-muted data-[state=open]:bg-transparent  data-[state=open]:text-primary  data-[state=open]:hover:bg-transparent data-[state=open]:focus:bg-transparent text-[15px] font-medium ">
            Boxes by Style
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/portfolio"
              className={clsx(
                "bg-transparent text-muted hover:bg-transparent hover:text-primary focus:bg-primary-foreground focus:text-muted text-[15px] font-medium",
                navigationMenuTriggerStyle()
              )}
            >
              Portfolio
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
