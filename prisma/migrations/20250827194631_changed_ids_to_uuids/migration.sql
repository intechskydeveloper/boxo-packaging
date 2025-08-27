/*
  Warnings:

  - The primary key for the `ProductSubCategory` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `SubCategory` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "public"."ProductSubCategory" DROP CONSTRAINT "ProductSubCategory_subCategoryId_fkey";

-- AlterTable
ALTER TABLE "public"."ProductSubCategory" DROP CONSTRAINT "ProductSubCategory_pkey",
ALTER COLUMN "subCategoryId" SET DATA TYPE TEXT,
ADD CONSTRAINT "ProductSubCategory_pkey" PRIMARY KEY ("productId", "subCategoryId");

-- AlterTable
ALTER TABLE "public"."SubCategory" DROP CONSTRAINT "SubCategory_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "SubCategory_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "SubCategory_id_seq";

-- AddForeignKey
ALTER TABLE "public"."ProductSubCategory" ADD CONSTRAINT "ProductSubCategory_subCategoryId_fkey" FOREIGN KEY ("subCategoryId") REFERENCES "public"."SubCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
