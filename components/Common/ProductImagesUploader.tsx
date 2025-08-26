"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { PlusIcon, Trash2 } from "lucide-react";

type ProductImage = {
  src: string;
  alt: string;
};

type Props = {
  images: ProductImage[];
  onChange: (images: ProductImage[]) => void;
};

export default function ProductImagesUploader({ images, onChange }: Props) {
  const [file, setFile] = useState<File | null>(null);
  const [alt, setAlt] = useState("");

  const handleAdd = () => {
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const newImage = { src: reader.result as string, alt };

      const updated = [...images, newImage];
      onChange(updated);

      setFile(null);
      setAlt("");
    };
    reader.readAsDataURL(file);
  };

  const handleDelete = (index: number) => {
    const updated = images.filter((_, i) => i !== index);
    onChange(updated);
  };

  return (
    <Card className="space-y-4 p-4">
      <div className="flex gap-2 items-end">
        <div className="flex flex-col flex-1">
          <Label className="pb-2">Upload Image</Label>
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />
        </div>
        <div className="flex flex-col flex-1">
          <Label className="pb-2">Alt Text</Label>
          <Input
            type="text"
            value={alt}
            onChange={(e) => setAlt(e.target.value)}
            placeholder="Enter alt text..."
          />
        </div>
        <Button
          onClick={handleAdd}
          disabled={!file}
          size={"icon"}
          variant={"secondary"}
          className="bg-secondary hover:bg-secondary/90 text-white disabled:opacity-90 disabled:cursor-not-allowed"
          type="button"
        >
          <PlusIcon />
        </Button>
      </div>

      <div className="space-y-2">
        {images.map((img, index) => (
          <Card key={index} className="py-1">
            <CardContent className="flex items-center justify-between gap-4 p-2 px-3">
              <div className="flex items-center gap-4">
                <Image
                  src={img.src}
                  alt={img.alt}
                  className="w-20 h-20 object-cover rounded-md border"
                  width={80}
                  height={80}
                />
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{img.alt}</span>
                  <span className="text-xs text-gray-500">Index: {index}</span>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleDelete(index)}
                type="button"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </Card>
  );
}
