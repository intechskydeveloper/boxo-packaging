import cloudinary from "@/utils/cloudinary";
import { NextRequest, NextResponse } from "next/server";

interface CloudinaryUploadResult {
  public_id: string;
  [key: string]: any;
}

export async function POST(request: NextRequest) {
  if (
    !process.env.CLOUDINARY_API_KEY ||
    !process.env.CLOUDINARY_API_SECRET ||
    !process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
  ) {
    return NextResponse.json(
      { error: "Cloudinary configuration is missing" },
      { status: 500 }
    );
  }

  try {
    const formData = await request.formData();
    const file = (formData.get("file") as File) || null;
    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const result = await new Promise<CloudinaryUploadResult>(
      (resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          { folder: "Box-Images" },
          (error, result) => {
            if (error) return reject(error);
            else resolve(result as CloudinaryUploadResult);
          }
        );
        uploadStream.end(buffer);
      }
    );

    console.log("Upload result:", result);

    return NextResponse.json(
      { message: "Image uploaded successfully", url: result.public_id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error uploading image:", error);
    return NextResponse.json(
      { error: "Error uploading image" },
      { status: 500 }
    );
  }
}
