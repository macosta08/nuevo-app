import { gql } from 'apollo-server-micro';
import { AccountTypes } from './account/types';
import { PageTypes } from './page/types';
import { RoleTypes } from './role/types';
import { SessionTypes } from './session/types';
import { UserTypes } from './user/types';
import { MovimientoTypes } from './movimiento/types';
import { VerificationRequestTypes } from './verificationrequest/types';

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
  PageTypes,
  RoleTypes,
  SessionTypes,
  UserTypes,
  MovimientoTypes,
  VerificationRequestTypes,
];
