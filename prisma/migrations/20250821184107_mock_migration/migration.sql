-- CreateTable
CREATE TABLE "public"."Categoy" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" VARCHAR(300) NOT NULL,
    "reviews" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Categoy_pkey" PRIMARY KEY ("id")
);
