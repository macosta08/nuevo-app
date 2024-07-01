/*
  Warnings:

  - You are about to drop the column `cedula` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "cedula",
ADD COLUMN     "telefono" TEXT;
