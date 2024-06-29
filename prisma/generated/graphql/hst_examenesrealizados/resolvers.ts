import prisma from 'config/prisma';

const HST_examenesRealizadosResolvers = {
  HST_examenesRealizados: {},
  Query: {
    hST_examenesRealizadoss: async () => {
      return await prisma.hST_examenesRealizados.findMany({});
    },
    hST_examenesRealizados: async (_: any, args: any) => {
      return await prisma.hST_examenesRealizados.findUnique({
        where: {
          id: args.id,
        },
      });
    },
  },
  Mutation: {
    createHST_examenesRealizados: async (_: any, args: any) => {
      return await prisma.hST_examenesRealizados.create({
        data: { ...args.data },
      });
    },
    updateHST_examenesRealizados: async (_: any, args: any) => {
      return await prisma.hST_examenesRealizados.update({
        where: {
          id: args.where.id,
        },
        data: { ...args.data },
      });
    },
    deleteHST_examenesRealizados: async (_: any, args: any) => {
      return await prisma.hST_examenesRealizados.delete({
        where: {
          id: args.where.id,
        },
      });
    },
  },
};

export { HST_examenesRealizadosResolvers };
