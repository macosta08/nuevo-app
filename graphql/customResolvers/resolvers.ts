import { UserResolvers } from 'graphql/customResolvers/users/resolvers';
import { ExamenesResolvers } from 'graphql/examenes/resolvers';

export const customResolvers = [UserResolvers, ExamenesResolvers];
