import prisma from 'config/prisma';

const MovimientoResolvers = {
  Movimiento: {
    user: async (parent: any, _: any) => {
      if (parent.userId) {
        return await prisma.user.findUnique({
          where: {
            id: parent.userId,
          },
        });
      } else {
        return null;
      }
    },
  },
  Query: {
    totalConceptoEgreso: async () => {
      const result = await prisma.movimiento.aggregate({
        where: {
          concepto: 'Egreso',
        },
        _sum: {
          monto: true,
        },
      });
      return result._sum.monto || 0; // Devuelve 0 si no hay resultados
    },
    totalConceptoIngreso: async () => {
      const result = await prisma.movimiento.aggregate({
        where: {
          concepto: 'Ingreso',
        },
        _sum: {
          monto: true,
        },
      });
      return result._sum.monto || 0; // Devuelve 0 si no hay resultados
    },
    movimientos: async () => {
      return await prisma.movimiento.findMany({});
    },
    movimiento: async (_: any, args: any) => {
      return await prisma.movimiento.findUnique({
        where: {
          id: args.id,
        },
      });
    },
  },
  Mutation: {
    createMovimiento: async (_: any, args: any) => {
      return await prisma.movimiento.create({
        data: { ...args.data },
      });
    },
    updateMovimiento: async (_: any, args: any) => {
      return await prisma.movimiento.update({
        where: {
          id: args.where.id,
        },
        data: {
          ...args.data,
        },
      });
    },
    deleteMovimiento: async (_: any, args: any) => {
      return await prisma.movimiento.delete({
        where: {
          id: args.where.id,
        },
      });
    },
  },
};

export { MovimientoResolvers };
