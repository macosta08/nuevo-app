import { AccountResolvers } from './account/resolvers';
import { PageResolvers } from './page/resolvers';
import { RoleResolvers } from './role/resolvers';
import { SessionResolvers } from './session/resolvers';
import { UserResolvers } from './user/resolvers';
import { MovimientoResolvers } from './movimiento/resolvers';
import { VerificationRequestResolvers } from './verificationrequest/resolvers';

export const resolvers = [
  AccountResolvers,
  PageResolvers,
  RoleResolvers,
  SessionResolvers,
  UserResolvers,
  MovimientoResolvers,
  VerificationRequestResolvers,
];
