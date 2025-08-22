"use client";
import { createCategoryType } from "@/app/actions/categoryType";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTransition } from "react";
import { toast } from "sonner";

export function CategoriesTabs() {
  const [isPending, startTransition] = useTransition();

  async function handleAction(formData: FormData) {
    try {
      await createCategoryType(formData);
      toast.success("Category Type created successfully!");
    } catch (err: any) {
      toast.error(err.message || "Something went wrong!");
    }
  }

  return (
    <div className="flex w-full max-w-sm flex-col gap-6 mt-4">
      <Tabs defaultValue="category">
        <TabsList>
          <TabsTrigger value="category">Category</TabsTrigger>
          <TabsTrigger value="sub-category">Sub Category</TabsTrigger>
          <TabsTrigger value="category-type">Category Type</TabsTrigger>
        </TabsList>
        <TabsContent value="category">
          <Card>
            <CardHeader>
              <CardTitle>Category</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you&apos;re
                done.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-name">Name</Label>
                <Input id="tabs-demo-name" defaultValue="Pedro Duarte" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-username">Username</Label>
                <Input id="tabs-demo-username" defaultValue="@peduarte" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="sub-category">
          <Card>
            <CardHeader>
              <CardTitle>Sub Category</CardTitle>
              <CardDescription>
                Change your password here. After saving, you&apos;ll be logged
                out.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-current">Current password</Label>
                <Input id="tabs-demo-current" type="password" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-new">New password</Label>
                <Input id="tabs-demo-new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="category-type">
          <form
            action={(formData) => startTransition(() => handleAction(formData))}
          >
            <Card>
              <CardHeader>
                <CardTitle>Create Category Type</CardTitle>
              </CardHeader>

              <CardContent className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="type-name">Category Type Name</Label>
                  <Input
                    id="type-name"
                    type="text"
                    name="name"
                    placeholder="e.g. Industry"
                    required
                  />
                </div>
              </CardContent>

              <CardFooter>
                <Button type="submit" disabled={isPending}>
                  {isPending ? "Saving..." : "Save"}
                </Button>
              </CardFooter>
            </Card>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  );
}
