-- AlterTable
ALTER TABLE "public"."Product" ADD COLUMN     "altText" TEXT,
ADD COLUMN     "imageExplanation" TEXT;

-- AlterTable
ALTER TABLE "public"."ProductImage" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
