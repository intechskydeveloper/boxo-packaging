"use server";

import cloudinary from "@/utils/cloudinary";
import prisma from "@/prisma/client";
import { revalidatePath } from "next/cache";
import { slugify } from "@/utils/slugify";

export async function createSubCategory(formData: FormData) {
  const name = formData.get("name")?.toString().trim();
  const altText = formData.get("altText")?.toString().trim();
  const featured = formData.get("featured") === "on";
  const imageExplanation = formData.get("imageExplanation")?.toString().trim();
  const categoryId = Number(formData.get("categoryId"));
  const file = formData.get("file") as File | null;
  const iconFile = formData.get("iconFile") as File | null;

  if (!name || !file || !categoryId || !iconFile) {
    throw new Error("Name, Image and Category are required");
  }

  async function uploadToCloudinary(file: File, folder = "Box-Images") {
    const buffer = Buffer.from(await file.arrayBuffer());
    return new Promise<any>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      uploadStream.end(buffer);
    });
  }

  const [imageResult, iconResult] = await Promise.all([
    uploadToCloudinary(file),
    uploadToCloudinary(iconFile),
  ]);

  

  const subCategory = await prisma.subCategory.create({
    data: {
      id: slugify(name),
      name,
      image: imageResult.public_id,
      navIcon: iconResult.public_id,
      categoryId,
      altText,
      imageExplanation,
      featured,
    },
  });

  revalidatePath("/dashboard/category");

  return subCategory;
}


export async function getSubCategories(id: any) {
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

export async function getFeaturedSubCategories() {
  try {
    const subCategories = await prisma.subCategory.findMany({
      where: {
        featured: true,
      },
      orderBy: {
        createdAt: "asc",
      },
      select: {
        id: true,
        name: true,
        image: true,
        altText: true,
        imageExplanation: true,
        createdAt: true,
        featured: true,
      },
    });

    return subCategories;
  } catch (error) {
    console.error("Failed to fetch featured subcategories:", error);
    throw new Error("Could not fetch featured subcategories");
  }
}

export async function getSubCategoryWithProducts(subCategoryId: any) {
  try {
    const subCategory = await prisma.subCategory.findUnique({
      where: { id: subCategoryId },
      select: {
        name: true,
        altText: true,
        imageExplanation: true,
        products: {
          include: {
            product: {
              select: {
                id: true,
                name: true,
                createdAt: true,
                imageExplanation: true,
                altText: true,
                images: {
                  take: 1,
                },
              },
            },
          },
        },
      },
    });

    const products = subCategory?.products.map((p) => p.product) ?? [];

    return {
      ...subCategory,
      products,
    };
  } catch (error) {
    console.error("Error fetching subcategory with products:", error);
    throw new Error("Failed to fetch subcategory");
  }
}
