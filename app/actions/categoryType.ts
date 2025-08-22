// app/actions/categoryType.ts
"use server";

import prisma from "@/prisma/client";
import { revalidatePath } from "next/cache";

export async function createCategoryType(formData: FormData) {
  const name = formData.get("name")?.toString().trim();

  if (!name) {
    throw new Error("Type name is required");
  }

  const existing = await prisma.categoryType.findUnique({ where: { name } });
  if (existing) {
    throw new Error("Category type already exists");
  }

  const type = await prisma.categoryType.create({
    data: { name },
  });

  revalidatePath("/categories/types");
  return type;
}
