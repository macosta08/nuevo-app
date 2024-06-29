import prisma from 'config/prisma';

const TMP_examenesRealizadosResolvers = {
  TMP_examenesRealizados: {},
  Query: {
    tMP_examenesRealizadoss: async () => {
      return await prisma.tMP_examenesRealizados.findMany({});
    },
    tMP_examenesRealizados: async (_: any, args: any) => {
      return await prisma.tMP_examenesRealizados.findUnique({
        where: {
          id: args.id,
        },
      });
    },
  },
  Mutation: {
    createTMP_examenesRealizados: async (_: any, args: any) => {
      return await prisma.tMP_examenesRealizados.create({
        data: { ...args.data },
      });
    },
    updateTMP_examenesRealizados: async (_: any, args: any) => {
      return await prisma.tMP_examenesRealizados.update({
        where: {
          id: args.where.id,
        },
        data: { ...args.data },
      });
    },
    deleteTMP_examenesRealizados: async (_: any, args: any) => {
      return await prisma.tMP_examenesRealizados.delete({
        where: {
          id: args.where.id,
        },
      });
    },
  },
};

export { TMP_examenesRealizadosResolvers };
