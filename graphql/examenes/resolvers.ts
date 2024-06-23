import prisma from 'config/prisma';

const ExamenesResolvers = {
  Query: {
    examenes_byId: async (_, args) =>
      await prisma.hST_examenesRealizados.findMany({
        where: {
          typeDocument: args.id,
          ...args.where,
        },
      }),
  },
};

export { ExamenesResolvers };
