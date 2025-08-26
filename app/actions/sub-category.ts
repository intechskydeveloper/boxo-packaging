"use server";

import cloudinary from "@/lib/cloudinary";
import prisma from "@/prisma/client";
import { revalidatePath } from "next/cache";

export async function createSubCategory(formData: FormData) {
  const name = formData.get("name")?.toString().trim();
  const altText = formData.get("altText")?.toString().trim();
  const imageExplanation = formData.get("imageExplanation")?.toString().trim();
  const categoryId = Number(formData.get("categoryId"));
  const file = formData.get("file") as File | null;

  if (!name || !file || !categoryId) {
    throw new Error("Name, Image and Category are required");
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const result = await new Promise<any>((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: "Box-Images" },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );
    uploadStream.end(buffer);
  });

  const subCategory = await prisma.subCategory.create({
    data: {
      name,
      image: result.public_id,
      categoryId,
      altText,
      imageExplanation,
    },
  });

  revalidatePath("/dashboard/category");

  return subCategory;
}

export async function getSubCategories(id: number) {
  const subCategories = await prisma.subCategory.findMany({
    where: { id },
    select: {
      id: true,
      name: true,
      image: true,
    },
    orderBy: {
      name: "asc",
    },
  });

  return subCategories;
}
