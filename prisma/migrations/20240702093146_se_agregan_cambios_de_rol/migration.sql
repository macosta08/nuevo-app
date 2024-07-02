/*
  Warnings:

  - The values [Superadmin,Admin,Medico,Paciente] on the enum `Enum_RoleName` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the `HST_examenesRealizados` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TMP_examenesRealizados` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Enum_RoleName_new" AS ENUM ('Usuario', 'Administrador');
ALTER TABLE "Role" ALTER COLUMN "name" TYPE "Enum_RoleName_new" USING ("name"::text::"Enum_RoleName_new");
ALTER TYPE "Enum_RoleName" RENAME TO "Enum_RoleName_old";
ALTER TYPE "Enum_RoleName_new" RENAME TO "Enum_RoleName";
DROP TYPE "Enum_RoleName_old";
COMMIT;

-- DropTable
DROP TABLE "HST_examenesRealizados";

-- DropTable
DROP TABLE "TMP_examenesRealizados";
