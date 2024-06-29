import { HST_examenesRealizadosResolvers } from './hst_examenesrealizados/resolvers';
import { TMP_examenesRealizadosResolvers } from './tmp_examenesrealizados/resolvers';
import { AccountResolvers } from './account/resolvers';
import { PageResolvers } from './page/resolvers';
import { RoleResolvers } from './role/resolvers';
import { SessionResolvers } from './session/resolvers';
import { UserResolvers } from './user/resolvers';
import { MovimientoResolvers } from './movimiento/resolvers';
import { VerificationRequestResolvers } from './verificationrequest/resolvers';

export const resolvers = [
  HST_examenesRealizadosResolvers,
  TMP_examenesRealizadosResolvers,
  AccountResolvers,
  PageResolvers,
  RoleResolvers,
  SessionResolvers,
  UserResolvers,
  MovimientoResolvers,
  VerificationRequestResolvers,
];
