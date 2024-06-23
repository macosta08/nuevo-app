import prisma from 'config/prisma';

const UserResolvers = {
  Query: {
    users: async (_, args) => {
      const userAr = await prisma.user.findMany({
        orderBy: args.orderBy,
        where: args.where,
        take: args.take,
        skip: args.skip,
      });
      const count = await prisma.user.count({
        where: args.where,
      });
      return userAr.map((obj) => ({ ...obj, totalcount: count }));
    },

    user: async (_, args) => {
      return await prisma.user.findUnique({
        where: {
          id: args.id,
        },
      });
    },
  },

  Mutation: {
    createUser: async (_, args) => {
      return await prisma.user.create({
        data: {
          ...args.data,
          accounts: args.data.accounts,
          roles: args.data.roles,
        },
      });
    },
  },
};

export { UserResolvers };
