import { gql } from 'apollo-server-micro';
import { AccountTypes } from './account/types';
import { SessionTypes } from './session/types';
import { UserTypes } from './user/types';
import { VerificationRequestTypes } from './verificationrequest/types';
import { MovimientoTypes } from './movimiento/types';
import { PageTypes } from './page/types';
import { RoleTypes } from './role/types';

const genericTypes = gql`
  scalar DateTime
  scalar Json
  scalar Bytes
  scalar Decimal
  scalar BigInt
  input StringInput {
    set: String
  }
  input FloatInput {
    set: Float
  }
  input BooleanInput {
    set: Boolean
  }
  input IntInput {
    set: Int
  }
  input DateTimeInput {
    set: DateTime
  }
  input DecimalInput {
    set: Decimal
  }
`;

export const types = [
  genericTypes,
  AccountTypes,
  SessionTypes,
  UserTypes,
  VerificationRequestTypes,
  MovimientoTypes,
  PageTypes,
  RoleTypes,
];
