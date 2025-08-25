"use client";
import { createCategory, getCategories } from "@/app/actions/category";
import {
  createSubCategory,
  getSubCategories,
} from "@/app/actions/createSubCategory";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { useEffect, useState, useTransition } from "react";
import { toast } from "sonner";

export function CategoriesTabs() {
  const [isPending, startTransition] = useTransition();
  const [preview, setPreview] = useState<string | null>(null);
  const [categories, setCategories] = useState<{ id: number; name: string }[]>(
    []
  );
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  useEffect(() => {
    (async () => {
      const data = await getCategories();
      setCategories(data);
    })();
    getSubCategories(1).then((data) => {
      console.log("Subcategories for category 1:", data);
    });
  }, []);

  function handlePreview(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  }

  async function handleSubmitSubCategory(formData: FormData) {
    startTransition(async () => {
      try {
        formData.append("categoryId", String("")); // ensure categoryId sent
        const res = await createSubCategory(formData);
        toast.success("Subcategory created!");
        setPreview(null);
        formData.delete("name");
        formData.delete("file");
      } catch (err) {
        console.error(err);
        toast.error("Failed to create subcategory");
      }
    });
  }

  async function handleSubmitCategory(formData: FormData) {
    try {
      await createCategory(formData);
      toast.success("Category created successfully!");
      setPreview(null);
    } catch (err: any) {
      toast.error(err.message || "Failed to create category");
    }
  }

  return (
    <div className="flex w-full flex-col gap-6 mt-4">
      <Tabs defaultValue="sub-category" className="w-full">
        <TabsList className="w-full flex">
          <TabsTrigger value="sub-category" className="w-full">
            Sub Category
          </TabsTrigger>
          <TabsTrigger value="category" className="w-full">
            Category
          </TabsTrigger>
        </TabsList>
        <TabsContent value="sub-category" className="w-full">
          <Card className="w-full">
            <CardHeader className="w-full">
              <CardTitle className="w-full">Sub Category</CardTitle>
            </CardHeader>

            <CardContent className="w-full">
              <form
                action={handleSubmitSubCategory}
                className="grid gap-6 w-full"
              >
                <div className="grid gap-3 w-full">
                  <Label htmlFor="subcategory-name">Subcategory Name</Label>
                  <Input
                    id="subcategory-name"
                    name="name"
                    type="text"
                    required
                    className="w-full"
                  />
                </div>
                <div className="grid gap-3 w-full">
                  <Label htmlFor="subcategory-category">Select Category</Label>
                  <select
                    id="subcategory-category"
                    name="categoryId"
                    value={selectedCategory ?? ""}
                    onChange={(e) =>
                      setSelectedCategory(Number(e.target.value))
                    }
                    required
                    className="border rounded-md p-2 w-full"
                  >
                    <option value="">-- Select a Category --</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="grid gap-3 w-full">
                  <Label htmlFor="subcategory-image">Upload Image</Label>
                  <Input
                    id="subcategory-image"
                    name="file"
                    type="file"
                    accept="image/*"
                    onChange={handlePreview}
                    required
                    className="w-full"
                  />
                </div>

                {/* Preview */}
                {preview && (
                  <div className="mt-4 w-full">
                    <Label className="pb-2">Preview:</Label>
                    <Image
                      src={preview}
                      alt="Preview"
                      width={160}
                      height={160}
                      className="w-full max-w-xs rounded-lg border"
                    />
                  </div>
                )}

                <div className="grid gap-3 w-full">
                  <Label htmlFor="subcategory-name">
                    Image Alternative Text
                  </Label>
                  <Input
                    id="subcategory-name"
                    name="altText"
                    type="text"
                    className="w-full"
                  />
                </div>

                <Button type="submit" disabled={isPending} className="w-full">
                  {isPending ? "Saving..." : "Save Sub Category"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Category */}
        <TabsContent value="category" className="w-full">
          <form
            action={(formData) =>
              startTransition(() => handleSubmitCategory(formData))
            }
            className="w-full"
          >
            <Card className="w-full">
              <CardHeader className="w-full">
                <CardTitle className="w-full">Category</CardTitle>
              </CardHeader>

              <CardContent className="grid gap-6 w-full">
                <div className="grid gap-3 w-full">
                  <Label htmlFor="cat-name">Category Name</Label>
                  <Input
                    id="cat-name"
                    type="text"
                    name="name"
                    placeholder="e.g. Boxes by Industry"
                    required
                    className="w-full"
                  />
                </div>
              </CardContent>

              <CardFooter className="w-full">
                <Button type="submit" disabled={isPending} className="w-full">
                  {isPending ? "Saving..." : "Save Category"}
                </Button>
              </CardFooter>
            </Card>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  );
}
