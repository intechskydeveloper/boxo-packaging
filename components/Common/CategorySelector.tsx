"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { X } from "lucide-react";
import Loader from "./Loader";

type SubCategory = {
  id: number;
  name: string;
  categoryId: number;
};

type Category = {
  id: number;
  name: string;
  subcategories: SubCategory[];
};

export default function CategorySelector({
  categories,
  onChange,
}: {
  categories: Category[];
  onChange?: (selectedIds: number[]) => void;
}) {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const toggleCategory = (sub: SubCategory) => {
    let updated: number[];
    if (selectedIds.includes(sub.id)) {
      updated = selectedIds.filter((id) => id !== sub.id);
    } else {
      updated = [...selectedIds, sub.id];
    }
    setSelectedIds(updated);
    onChange?.(updated);
  };

  const removeBadge = (id: number) => {
    const updated = selectedIds.filter((sid) => sid !== id);
    setSelectedIds(updated);
    onChange?.(updated);
  };

  const findSub = (id: number) =>
    categories.flatMap((c) => c.subcategories).find((s) => s.id === id);

  return (
    <div className="flex flex-col">
      {/* Selected badges */}
      <div className="border rounded-b-none border-gray-500/50 rounded-md border-b-0 border-t p-3 w-full">
        <div className="flex flex-wrap gap-2">
          {selectedIds.length === 0 && (
            <span className="text-sm text-gray-500">
              No categories selected
            </span>
          )}
          {selectedIds.map((id) => {
            const sub = findSub(id);
            if (!sub) return null;
            return (
              <Badge
                key={sub.name}
                variant="default"
                className="flex items-center gap-1 bg-secondary"
              >
                {sub.name}
                <button
                  type="button"
                  onClick={() => removeBadge(id)}
                  className="ml-1"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            );
          })}
        </div>
      </div>

      {/* Scroll list */}
      <ScrollArea className="h-64 w-full border border-gray-500/50 rounded-md rounded-t-none p-3">
        {categories.length == 0 ? (
          <div className="flex w-full h-56 items-center justify-center self-center">
            <Loader />
          </div>
        ) : (
          <div className="w-full space-y-4">
            {categories.map((group) => (
              <div key={group.name} className="space-y-1">
                <h3 className="font-medium text-sm">{group.name}</h3>
                <div className="space-y-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                  {group.subcategories.map((sub) => (
                    <div key={sub.name} className="flex items-center space-x-2">
                      <Checkbox
                        id={sub.name}
                        checked={selectedIds.includes(sub.id)}
                        onCheckedChange={() => toggleCategory(sub)}
                        className="data-[state=checked]:bg-secondary data-[state=checked]:text-white dark:data-[state=checked]:bg-secondary data-[state=checked]:border-secondary "
                      />
                      <label
                        htmlFor={sub.name}
                        className="text-sm cursor-pointer"
                      >
                        {sub.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </ScrollArea>
    </div>
  );
}
