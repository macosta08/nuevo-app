import NextAuth from 'next-auth';
import Auth0Provider from 'next-auth/providers/auth0';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from 'config/prisma';

export const options = {
  callbacks: {
    async signIn({ user }) {
      return user?.enabled && !user?.deleted;
    },
    async session(session) {
      const newSession = (await prisma.session.findFirst({
        where: {
          userId: session.user.id,
        },
        include: {
          user: {
            include: {
              role: true,
            },
          },
        },
      })) as any;
      return newSession;
    },
  },
  providers: [
    Auth0Provider({
      wellKnown: `https://${process.env.AUTH0_DOMAIN}/`,
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      issuer: process.env.AUTH0_DOMAIN,
      authorization: `https://${process.env.AUTH0_DOMAIN}/authorize?response_type=code&prompt=login`,
    }),
  ],

  adapter: PrismaAdapter(prisma),
};

export default (req, res) => NextAuth(req, res, options);
