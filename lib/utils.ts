import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const Image_By_Public_Id = (public_id: string) =>
  `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${public_id}`;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
