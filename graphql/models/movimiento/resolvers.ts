import prisma from "@/config/prisma";

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
        data: { ...args.data, fecha: new Date(args.data.fecha).toISOString() },
      });
    },
    updateMovimiento: async (_: any, args: any) => {
      return await prisma.movimiento.update({
        where: {
          id: args.where.id,
        },
        data: {
          ...args.data,
          ...(args.data.fecha && {
            fecha: new Date(args.data.fecha).toISOString(),
          }),
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
