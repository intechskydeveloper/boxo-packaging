/*
  Warnings:

  - You are about to drop the column `type` on the `Category` table. All the data in the column will be lost.
  - Added the required column `typeId` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Category" DROP COLUMN "type",
ADD COLUMN     "typeId" INTEGER NOT NULL;

-- DropEnum
DROP TYPE "public"."CategoryType";

-- CreateTable
CREATE TABLE "public"."CategoryType" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CategoryType_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CategoryType_name_key" ON "public"."CategoryType"("name");

-- AddForeignKey
ALTER TABLE "public"."Category" ADD CONSTRAINT "Category_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "public"."CategoryType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
