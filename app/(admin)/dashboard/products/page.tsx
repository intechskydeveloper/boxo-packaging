"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import TableHandler from "@/components/Common/TableHandler";
import H2 from "@/components/Common/H2";
import CategorySelector from "@/components/Common/CategorySelector";
import { categories } from "@/utils/data";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Editor } from "@/components/Common/DynamicEditor";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function BoxesForm() {
  const [specs, setSpecs] = useState<any[]>([]);

  const handleSpecsChange = (data: any[]) => {
    setSpecs(data);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const productData = {
      name: formData.get("name"),
      specifications: specs,
    };

    console.log("Submitting:", productData);
  };

  const handleCategoriesChange = (selected: any[]) => {
    console.log("Selected Categories:", selected);
  };

  return (
    <section className="mt-10 px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8 2xl:px-10 max-w-[1370px] w-full mb-[30%]">
      <H2 className="text-xl font-bold">Boxes Management</H2>
      <form onSubmit={handleSubmit} className="mt-6 max-w-2xl flex flex-col">
        <div className="grid gap-3 w-full">
          <Label htmlFor="product-name">Product Title (Name)</Label>
          <Input
            id="product-name"
            name="name"
            type="text"
            required
            className="border-gray-500/50"
          />
        </div>
        <div className="grid gap-3 w-full mt-10">
          <Label htmlFor="product-description">Product Description</Label>
          <Textarea
            id="product-description"
            name="description"
            required
            className="border-gray-500/50 min-h-[75px]"
          />
        </div>
        <div className="mt-10">
          <Label className="py-0 pb-4">Select Category</Label>
          <CategorySelector
            categories={categories}
            onChange={handleCategoriesChange}
          />
        </div>

        <div className="flex w-full flex-col gap-6 mt-10">
          <Tabs defaultValue="specs" className="w-full">
            <TabsList className="w-full">
              <TabsTrigger value="specs">Specifications</TabsTrigger>
              <TabsTrigger value="description">Description</TabsTrigger>
            </TabsList>

            <TabsContent value="specs">
              <div className="mt-2">
                <TableHandler initialData={[]} onChange={handleSpecsChange} />
              </div>
            </TabsContent>

            <TabsContent value="description">
              <div className="mt-2">
                <Editor />
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <div className="mt-10">
          <Label className="py-0 pb-4">Description at the Bottom of Page</Label>
          <Editor />
        </div>
        <div className="flex flexrow items-center justify-between mt-10">
          <div className="flex items-center gap-2 pl-1">
            <Checkbox
              id="terms"
              defaultChecked
              className="border-gray-500/50"
            />
            <Label htmlFor="terms">Available in Stock</Label>
          </div>
          <Button type="submit" className="mt-4 self-end">
            Save Product
          </Button>
        </div>
      </form>
    </section>
  );
}
