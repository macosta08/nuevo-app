import { SessionResolvers } from './session/resolvers';
import { VerificationRequestResolvers } from './verificationrequest/resolvers';
import { MovimientoResolvers } from './movimiento/resolvers';
import { UserResolvers } from './user/resolvers';
import { PageResolvers } from './page/resolvers';
import { RoleResolvers } from './role/resolvers';
import { AccountResolvers } from './account/resolvers';

export const resolvers = [
  SessionResolvers,
  UserResolvers,
  VerificationRequestResolvers,
  MovimientoResolvers,
  PageResolvers,
  RoleResolvers,
  AccountResolvers,
];
