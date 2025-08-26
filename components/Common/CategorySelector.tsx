"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { X } from "lucide-react";

type SubCategory = {
  id: string;
  name: string;
};

type CategoryGroup = {
  group: string;
  subcategories: SubCategory[];
};

export default function CategorySelector({
  categories,
  onChange,
}: {
  categories: CategoryGroup[];
  onChange?: (selected: SubCategory[]) => void;
}) {
  const [selected, setSelected] = useState<SubCategory[]>([]);

  const toggleCategory = (sub: SubCategory) => {
    let updated: SubCategory[];
    if (selected.find((s) => s.id === sub.id)) {
      updated = selected.filter((s) => s.id !== sub.id);
    } else {
      updated = [...selected, sub];
    }
    setSelected(updated);
    onChange?.(updated);
  };

  const removeBadge = (id: string) => {
    const updated = selected.filter((s) => s.id !== id);
    setSelected(updated);
    onChange?.(updated);
  };

  return (
    <div className="flex flex-col">
      <div className="border rounded-b-none rounded-md border-t p-3 w-full">
        <div className="flex flex-wrap gap-2">
          {selected.length === 0 && (
            <span className="text-sm text-gray-500">
              No categories selected
            </span>
          )}
          {selected.map((sub) => (
            <Badge
              key={sub.id}
              variant="default"
              className="flex items-center gap-1"
            >
              {sub.name}
              <button
                type="button"
                onClick={() => removeBadge(sub.id)}
                className="ml-1"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
        </div>
      </div>

      <ScrollArea className="h-64 w-full border rounded-md rounded-t-none p-3">
        <div className="w-full space-y-4">
          {categories.map((group) => (
            <div key={group.group} className="space-y-1">
              <h3 className="font-medium text-sm">{group.group}</h3>
              <div className="space-y-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {group.subcategories.map((sub) => (
                  <div key={sub.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={sub.id}
                      checked={selected.some((s) => s.id === sub.id)}
                      onCheckedChange={() => toggleCategory(sub)}
                    />
                    <label htmlFor={sub.id} className="text-sm cursor-pointer">
                      {sub.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
