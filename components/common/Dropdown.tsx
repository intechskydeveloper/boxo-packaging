"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

export default function Dropdown({
  label,
  items,
  id,
}: {
  label: string;
  items: string[];
  id: number;
}) {
  const [selected, setSelected] = useState<string>("");
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <button
            id={`floating_dropdown_${id}`}
            className={`block px-2.5 pb-2.5 pt-4 w-full h-full text-left text-sm 
              text-gray-900 bg-transparent rounded-lg border border-white appearance-none 
              dark:text-white dark:border-gray-600 dark:focus:border-white
              focus:outline-none focus:ring-0 focus:border-white peer`}
          >
            {selected || ""}
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-full">
          {items.map((item) => (
            <DropdownMenuItem
              key={item}
              onClick={() => {
                setSelected(item);
                setOpen(false); // close after selecting
              }}
              className="cursor-pointer"
            >
              {item}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Floating label that now toggles dropdown open */}
      <span
        onClick={() => setOpen((prev) => !prev)}
        className={`absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform 
          bg-muted dark:bg-gray-900 px-2 z-10 origin-[0] start-1 cursor-pointer
          ${
            selected
              ? "-translate-y-4 scale-75 top-2 text-white dark:text-white"
              : "top-1/2 -translate-y-1/2 scale-100"
          }
          peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 
          peer-focus:text-white peer-focus:dark:text-white`}
      >
        {label}
      </span>
    </div>
  );
}
