/*
  Warnings:

  - You are about to drop the column `image` on the `books` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "books" DROP COLUMN "image",
ALTER COLUMN "publicationDate" SET DATA TYPE TEXT;
