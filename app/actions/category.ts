"use server";

import prisma from "@/prisma/client";

export async function createCategory(formData: FormData) {
  try {
    const name = formData.get("name") as string;

    if (!name) {
      throw new Error("Name and Image are required");
    }

    await prisma.category.create({
      data: {
        name,
      },
    });

    return { success: true };
  } catch (error: any) {
    throw new Error(error.message || "Failed to create category");
  }
}

export async function getCategories() {
  const categories = await prisma.category.findMany({
    select: {
      id: true,
      name: true,
    },
    orderBy: {
      name: "asc",
    },
  });

  return categories;
}


export async function getCategoriesWithSubCategories() {
  try {
    const categories = await prisma.category.findMany({
      select: {
        id: true,
        name: true,
        subcategories: {
          select: {
            id: true,
            name: true,
            categoryId: true,
          },
        },
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    return { success: true, data: categories };
  } catch (error) {
    console.error("Error fetching categories:", error);
    return { success: false, error: "Failed to fetch categories" };
  }
}

