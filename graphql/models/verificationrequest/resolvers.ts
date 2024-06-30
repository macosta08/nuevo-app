import prisma from '@/config/prisma';

const VerificationRequestResolvers = {
  VerificationRequest: {},
  Query: {
    verificationRequests: async () => {
      return await prisma.verificationRequest.findMany({});
    },
    verificationRequest: async (_: any, args: any) => {
      return await prisma.verificationRequest.findUnique({
        where: {
          id: args.id,
        },
      });
    },
  },
  Mutation: {
    createVerificationRequest: async (_: any, args: any) => {
      return await prisma.verificationRequest.create({
        data: {
          ...args.data,
          expires: new Date(args.data.expires).toISOString(),
        },
      });
    },
    updateVerificationRequest: async (_: any, args: any) => {
      return await prisma.verificationRequest.update({
        where: {
          id: args.where.id,
        },
        data: {
          ...args.data,
          ...(args.data.expires && {
            expires: new Date(args.data.expires).toISOString(),
          }),
        },
      });
    },
    deleteVerificationRequest: async (_: any, args: any) => {
      return await prisma.verificationRequest.delete({
        where: {
          id: args.where.id,
        },
      });
    },
  },
};

export { VerificationRequestResolvers };
