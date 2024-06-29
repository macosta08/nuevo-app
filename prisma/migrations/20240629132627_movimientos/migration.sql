-- CreateEnum
CREATE TYPE "Enum_Concepto" AS ENUM ('Ingreso', 'Egreso');

-- CreateTable
CREATE TABLE "Movimiento" (
    "id" TEXT NOT NULL,
    "monto" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "descripcion" TEXT,
    "concepto" "Enum_Concepto" NOT NULL,
    "userId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Movimiento_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Movimiento" ADD CONSTRAINT "Movimiento_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
