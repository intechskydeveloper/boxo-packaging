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
  type?: "default" | "simple";
}

const ButtonLink = ({
  className,
  children,
  href = "/",
  variant,
  size,
  type,
  ...restProps
}: buttonProps) => {
  return type == "default" ? (
    <Button
      className={clsx("relative cursor-pointer", className)}
      variant={variant}
      size={size}
      {...restProps}
    >
      <Link href={href} className="absolute inset-0" />
      {children}
    </Button>
  ) : (
    <button
      className={clsx("relative cursor-pointer", className)}
      {...restProps}
    >
      <Link href={href} className="absolute inset-0" />
      {children}
    </button>
  );
};

export default ButtonLink;
