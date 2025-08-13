import React from "react";
import clsx from "clsx";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface buttonProps {
  className?: string;
  children: React.ReactNode;
  href: string;
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "sm" | "lg" | "default" | "icon";
}

const ButtonLink = ({
  className,
  children,
  href = "/",
  variant,
  size,
  ...restProps
}: buttonProps) => {
  return (
    <Button
      className={clsx("relative cursor-pointer", className)}
      variant={variant}
      size={size}
      {...restProps}
    >
      <Link href={href} className="absolute inset-0" />
      {children}
    </Button>
  );
};

export default ButtonLink;
