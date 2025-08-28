"use client";

import { use, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import TableHandler from "@/components/Common/TableHandler";
import H2 from "@/components/Common/H2";
import CategorySelector from "@/components/Common/CategorySelector";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Editor } from "@/components/Common/DynamicEditor";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getCategoriesWithSubCategories } from "@/app/actions/category";
import { toast } from "sonner";
import { createProduct } from "@/app/actions/product";
import { Card } from "@/components/ui/card";
import ProductImagesUploader from "@/components/Common/ProductImagesUploader";

type SubCategory = {
  id: string;
  name: string;
  categoryId: number;
};

type Category = {
  id: number;
  name: string;
  subcategories: SubCategory[];
};

type Spec = {
  rowTitle: string;
  rowData: string;
};

export default function BoxesForm() {
  const [specs, setSpecs] = useState<Spec[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [description, setDescription] = useState<any>(null);
  const [bottomDescription, setBottomDescription] = useState<any>(null);
  const [images, setImages] = useState<{ src: string; alt: string }[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const [loading, setLoading] = useState(false);

  const handleSpecsChange = (data: any[]) => {
    setSpecs(data);
  };

  const handleCategoriesChange = (selected: any) => {
    setSelectedCategories(selected);
  };

  useEffect(() => {
    console.log("Selected Images:", images);
  }, [images]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await getCategoriesWithSubCategories();
        if (res.success) {
          setCategories(res.data!);
        } else {
          toast("Error Failed to fetch categories.");
        }
      } catch (err) {
        console.error("❌ Error fetching categories:", err);
        toast("Something went wrong while fetching categories.");
      }
    }
    fetchCategories();
  }, []);

  useEffect(() => {
    console.log("This is description ", description);
  }, [description]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);
      const formData = new FormData(e.currentTarget);
      const name = formData.get("name") as string;
      const altText = formData.get("altText") as string;
      const imageExplanation = formData.get("imageExplanation") as string;
      const inStock = formData.get("inStock") === "on";
      const richTextContent = description ? await description : null;
      const bottomDescriptionContent = bottomDescription
        ? await bottomDescription
        : null;

      const productData = {
        name,
        richText: richTextContent,
        inStock,
        categoryIds: selectedCategories,
        specifications: specs,
        bottomDescription: bottomDescriptionContent,
        images,
        altText,
        imageExplanation,
      };

      const result = await createProduct(productData);
      console.log("✅ Product created successfully:", result);
      toast(`Product Created was added successfully 🎉`);

      e.currentTarget?.reset();
      setDescription("");
      setBottomDescription("");
      setSelectedCategories([]);
      setSpecs([]);
    } catch (error) {
      console.error("❌ Error creating product:", error);
      toast("Something went wrong while creating the product.");
    } finally {
      console.log("🔄 handleSubmit finished.");
      setLoading(false);
    }
  };

  return (
    <section className="mt-10 px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8 2xl:px-10 max-w-[1370px] w-full mb-[30%]">
      <H2 className="text-xl font-bold">Boxes Management</H2>
      <form onSubmit={handleSubmit} className="mt-6 max-w-2xl flex flex-col">
        <div className="grid gap-3 w-full">
          <Label htmlFor="product-name">Product Title (Name)</Label>
          <Input
            id="product-name"
            defaultValue={""}
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
            defaultValue={""}
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
        <div className="mt-10">
          <Label className="py-0 pb-4">Description at the Bottom of Page</Label>
          <ProductImagesUploader images={images} onChange={setImages} />
        </div>
        <div className="grid gap-3 w-full mt-10">
          <Label htmlFor="altText">Image Alt Text</Label>
          <Input
            id="altText"
            defaultValue={""}
            name="altText"
            type="text"
            required
            className="border-gray-500/50"
          />
        </div>
        <div className="grid gap-3 w-full mt-10">
          <Label htmlFor="imageExplanation">Image Explaination</Label>
          <Input
            id="imageExplanation"
            defaultValue={""}
            name="imageExplanation"
            type="text"
            required
            className="border-gray-500/50"
          />
        </div>
        <div className="flex w-full flex-col mt-10">
          <Label className="py-0 pb-4">Add Details</Label>
          <Card className=" border border-gray-500/50 p-4">
            <Tabs defaultValue="specs" className="w-full gap-0">
              <TabsList className="w-full ">
                <TabsTrigger value="specs">Specifications Table</TabsTrigger>
                <TabsTrigger value="description">Description</TabsTrigger>
              </TabsList>
              <TabsContent value="specs">
                <TableHandler
                  initialData={specs}
                  onChange={handleSpecsChange}
                />
              </TabsContent>
              <TabsContent value="description" className="mt-6">
                <Editor
                  onEditorChange={setDescription}
                  initialContent={description}
                />
              </TabsContent>
            </Tabs>
          </Card>
        </div>
        <div className="mt-10">
          <Label className="py-0 pb-4">Description at the Bottom of Page</Label>
          <Editor
            onEditorChange={setBottomDescription}
            initialContent={bottomDescription}
          />
        </div>
        <div className="flex flexrow items-center justify-between mt-10">
          <div className="flex items-center gap-2 pl-1">
            <Checkbox
              id="terms"
              defaultChecked
              name="inStock"
              className="border-gray-500/50 data-[state=checked]:bg-secondary data-[state=checked]:text-white dark:data-[state=checked]:bg-secondary data-[state=checked]:border-secondary "
            />
            <Label htmlFor="terms">Available in Stock</Label>
          </div>
          <Button
            type="submit"
            className="mt-4 self-end bg-secondary hover:bg-secondary/90 text-white"
            disabled={loading}
          >
            {loading ? "Saving..." : "Save Product"}
          </Button>
        </div>
      </form>
    </section>
  );
}
