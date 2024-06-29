import prisma from 'config/prisma';

const UserResolvers = {
  User: {
    accounts: async (parent: any, _: any) =>
      await prisma.account.findMany({
        where: {
          user: {
            is: {
              id: {
                equals: parent.id,
              },
            },
          },
        },
      }),
    sessions: async (parent: any, _: any) =>
      await prisma.session.findMany({
        where: {
          user: {
            is: {
              id: {
                equals: parent.id,
              },
            },
          },
        },
      }),
    movimientos: async (parent: any, _: any) =>
      await prisma.movimiento.findMany({
        where: {
          user: {
            is: {
              id: {
                equals: parent.id,
              },
            },
          },
        },
      }),
    role: async (parent: any, _: any) => {
      if (parent.roleId) {
        return await prisma.role.findUnique({
          where: {
            id: parent.roleId,
          },
        });
      }
      return null;
    },
  },
  Query: {
    users: async () => await prisma.user.findMany({}),
    user: async (_: any, args: any) =>
      await prisma.user.findUnique({
        where: {
          id: args.id,
        },
      }),
  },
  Mutation: {
    createUser: async (_: any, args: any) =>
      await prisma.user.create({
        data: {
          ...args.data
        },
      }),
    updateUser: async (_: any, args: any) =>
      await prisma.user.update({
        where: {
          id: args.where.id,
        },
        data: {
          ...args.data,
        },
      }),
    deleteUser: async (_: any, args: any) =>
      await prisma.user.delete({
        where: {
          id: args.where.id,
        },
      }),
  },
};

export { UserResolvers };
