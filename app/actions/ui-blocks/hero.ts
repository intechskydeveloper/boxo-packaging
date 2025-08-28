"use server";
import cloudinary from "@/utils/cloudinary";
import prisma from "@/prisma/client";

export async function createHeroSlide(formData: FormData) {
  try {
    const title = formData.get("title") as string;
    const subtitle = formData.get("subtitle") as string | null;
    const buttonText = formData.get("buttonText") as string | null;
    const altText = formData.get("altText") as string | null;
    const file = formData.get("image") as File | null;

    if (!title || !buttonText || !subtitle) {
      throw new Error("Title, Subtitle and Button Text are required");
    }
    if (!file) {
      throw new Error("Image is required");
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

    const hero = await prisma.hero.create({
      data: {
        title,
        subtitle,
        buttonText,
        altText,
        image: result.public_id,
      },
    });

    console.log("Hero slide created:", hero);

    return { success: true, data: hero };
  } catch (error: any) {
    console.error("Error creating HeroCarousel:", error);
    return { success: false, error: error.message };
  }
}

export async function getAllHeros() {
  try {
    const heros = await prisma.hero.findMany({
      orderBy: {
        order: "asc",
      },
    });

    return { success: true, data: heros };
  } catch (error: any) {
    console.error("Error fetching heros:", error);
    return { success: false, error: error.message };
  }
}
