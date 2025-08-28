"use server";

import cloudinary from "@/utils/cloudinary";
import prisma from "@/prisma/client";

type ProductImageInput = {
  src: string;
  alt: string;
};

type ProductInput = {
  name: string;
  richText: string;
  inStock?: boolean;
  specifications: { rowTitle: string; rowData: string }[];
  categoryIds: string[];
  bottomDescription?: string;
  images: ProductImageInput[];
  altText: string;
  imageExplanation: string;
};

async function uploadToCloudinary(base64: string) {
  const buffer = Buffer.from(
    base64.replace(/^data:image\/\w+;base64,/, ""),
    "base64"
  );

  return new Promise<any>((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: "Box-Images" },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );
    uploadStream.end(buffer);
  });
}

export async function createProduct(data: ProductInput) {
  try {
    const uploadedImages = await Promise.all(
      data.images.map(async (img) => {
        const result = await uploadToCloudinary(img.src);
        return {
          url: result.public_id,
          alt: img.alt,
        };
      })
    );

    const newProduct = await prisma.product.create({
      data: {
        name: data.name,
        richText: data.richText,
        inStock: data.inStock ?? true,
        bottomDescription: data.bottomDescription || "",
        altText: data.altText,
        imageExplanation: data.imageExplanation,
        specifications: {
          create: data.specifications.map((spec) => ({
            rowTitle: spec.rowTitle,
            rowData: spec.rowData,
          })),
        },
        categories: {
          create: data.categoryIds.map((subCatId) => ({
            subCategory: {
              connect: { id: subCatId },
            },
          })),
        },
        images: {
          create: uploadedImages.map((img) => ({
            url: img.url,
            alt: img.alt,
          })),
        },
      },
      include: {
        specifications: true,
        categories: { include: { subCategory: true } },
        images: true,
      },
    });

    return { success: true, product: newProduct };
  } catch (error) {
    console.error("Error creating product:", error);
    return { success: false, error: "Failed to create product" };
  }
}

export async function getProductsPreview() {
  try {
    const products = await prisma.product.findMany({
      select: {
        id: true,
        name: true,
        createdAt: true,
        imageExplanation: true,
        altText: true,
        images: {
          orderBy: {
            createdAt: "asc",
          },
          take: 1,
          select: {
            id: true,
            url: true,
            createdAt: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return products;
  } catch (error) {
    console.error("Failed to fetch product previews:", error);
    throw new Error("Could not fetch products");
  }
}

export async function getProductDetail(productId: string) {
  try {
    const product = await prisma.product.findUnique({
      where: { id: productId },
      select: {
        name: true,
        inStock: true,
        altText: true,
        richText: true,
        paragraph: true,
        specifications: true,
        imageExplanation: true,
        images: {
          select: {
            id: true,
            url: true,
            alt: true,
            createdAt: true,
          },
        },
      },
    });

    return product ?? null;
  } catch (error) {
    console.error("Error fetching bottomDescription:", error);
    throw new Error("Failed to fetch bottomDescription");
  }
}

export async function getRichtext(productId: string) {
  try {
    const product = await prisma.product.findUnique({
      where: { id: productId },
      select: {
        richText: true,
      },
    });

    return product?.richText ?? null;
  } catch (error) {
    console.error("Error fetching bottomDescription:", error);
    throw new Error("Failed to fetch bottomDescription");
  }
}

export async function getBottomDescription(productId: string) {
  try {
    const product = await prisma.product.findUnique({
      where: { id: productId },
      select: {
        bottomDescription: true,
      },
    });

    return product?.bottomDescription ?? null;
  } catch (error) {
    console.error("Error fetching bottomDescription:", error);
    throw new Error("Failed to fetch bottomDescription");
  }
}
