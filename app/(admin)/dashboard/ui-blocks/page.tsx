"use client";
import { createHeroSlide } from "@/app/actions/ui-blocks/hero";
import H2 from "@/components/Common/H2";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { toast } from "sonner";

const Page = () => {
  const [loading, setLoading] = useState(false);


  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    buttonText: "",
    altText: "",
    image: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((prev) => ({
        ...prev,
        [name]: files ? files[0] : null,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);

      const fd = new FormData();
      fd.append("title", formData.title);
      fd.append("subtitle", formData.subtitle);
      fd.append("buttonText", formData.buttonText);
      fd.append("altText", formData.altText);
      if (formData.image) {
        fd.append("image", formData.image);
      }

      const res = await createHeroSlide(fd);

      if (res.success) {
        toast("Hero Slide created successfully");
        setFormData({
          title: "",
          subtitle: "",
          buttonText: "",
          altText: "",
          image: null,
        });
      } else {
        toast.error("Failed to create Hero Slide");
      }
    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast(error.message || "Failed to create hero slide");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mt-10 px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8 2xl:px-10 max-w-[1370px] w-full mb-[30%]">
      <H2 className="text-xl font-bold">Manage Hero Slides</H2>
      <form
        className="mt-6 max-w-2xl flex flex-col gap-6"
        onSubmit={handleSubmit}
      >
        <div className="grid gap-3 w-full">
          <Label htmlFor="title">
            Unique Title (Use SEO optimised keywords)
          </Label>
          <Input
            id="title"
            name="title"
            type="text"
            required
            value={formData.title}
            onChange={handleChange}
            className="border-gray-500/50"
          />
        </div>
        <div className="grid gap-3 w-full">
          <Label htmlFor="subtitle">Sub-title</Label>
          <Input
            id="subtitle"
            name="subtitle"
            type="text"
            required
            value={formData.subtitle}
            onChange={handleChange}
            className="border-gray-500/50"
          />
        </div>
        <div className="grid gap-3 w-full">
          <Label htmlFor="buttonText">Button Text</Label>
          <Input
            id="buttonText"
            name="buttonText"
            type="text"
            required
            value={formData.buttonText}
            onChange={handleChange}
            className="border-gray-500/50"
          />
        </div>
        <div className="flex flex-col flex-1">
          <Label className="pb-2">Upload Image</Label>
          <Input
            type="file"
            accept="image/*"
            name="image"
            onChange={handleChange}
            className="border-gray-500/50"
          />
        </div>
        <div className="grid gap-3 w-full">
          <Label htmlFor="altText">Image Alt Text</Label>
          <Input
            id="altText"
            name="altText"
            type="text"
            required
            value={formData.altText}
            onChange={handleChange}
            className="border-gray-500/50"
          />
        </div>
        <Button
          type="submit"
          className="mt-4 self-end bg-secondary hover:bg-secondary/90 text-white"
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Product"}
        </Button>
      </form>
    </section>
  );
};

export default Page;
