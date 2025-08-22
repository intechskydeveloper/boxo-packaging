/*
  Warnings:

  - You are about to drop the column `typeId` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the `CategoryType` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Category" DROP CONSTRAINT "Category_typeId_fkey";

-- AlterTable
ALTER TABLE "public"."Category" DROP COLUMN "typeId",
DROP COLUMN "updatedAt";

-- DropTable
DROP TABLE "public"."CategoryType";
