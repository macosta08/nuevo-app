import { gql } from 'apollo-server-micro';

const GQLEnums = gql`
  enum Enum_Concepto {
    Ingreso
    Egreso
  }
  input Enum_ConceptoInput {
    set: Enum_Concepto
  }
`;

export { GQLEnums };
