import 'reflect-metadata';
import 'ts-tiny-invariant';
import { ApolloServer } from 'apollo-server-micro';
import Cors from 'micro-cors';
import { customTypes } from 'graphql/customResolvers/types';
import { customResolvers } from 'graphql/customResolvers/resolvers';
import { getSession } from 'next-auth/react';
import { types } from 'prisma/generated/graphql/types';
import { resolvers } from 'prisma/generated/graphql/resolvers';
import { GQLEnums } from 'prisma/generated/graphql/enums';

const cors = Cors({
  allowMethods: ['POST', 'OPTIONS', 'GET', 'HEAD'],
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default cors(async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }
  const session = await getSession({ req });
  // eslint-disable-next-line no-console
  // if (process.env.NODE_ENV === 'production' && !session) {
  //   return res.status(401).send({ error: 'unauthorized' });
  // }

  const apolloServer = new ApolloServer({
    context: () => ({ session }),
    typeDefs: [...types, ...customTypes, GQLEnums],
    resolvers: [...resolvers, ...customResolvers],
    introspection: true,
  });

  await apolloServer.start();

  return apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res);
});
