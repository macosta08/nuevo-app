import { gql } from 'apollo-server-micro';

const GQLEnums = gql`
  enum Enum_Concepto {
    Ingreso
    Egreso
  }
  input Enum_ConceptoInput {
    set: Enum_Concepto
  }

  enum Enum_RoleName {
    Usuario
    Administrador
  }
  input Enum_RoleNameInput {
    set: Enum_RoleName
  }
`;

export { GQLEnums };
