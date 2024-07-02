import { gql } from 'apollo-server-micro';

const MovimientoTypes = gql`
  type Movimiento {
    id: ID!
    monto: Float!
    fecha: DateTime!
    descripcion: String
    concepto: Enum_Concepto!
    user: User
    userId: String
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    movimientos: [Movimiento]
    movimiento(id: String!): Movimiento
    totalConceptoEgreso: Int
    totalConceptoIngreso: Int
  }

  input MovimientoCreateInput {
    monto: Float!
    fecha: DateTime!
    descripcion: String
    concepto: Enum_Concepto!
    userId: String
  }

  input MovimientoWhereUniqueInput {
    id: String!
  }

  input MovimientoUpdateInput {
    monto: FloatInput
    fecha: DateTimeInput
    descripcion: StringInput
    concepto: Enum_ConceptoInput
    userId: StringInput
  }

  type Mutation {
    createMovimiento(data: MovimientoCreateInput): Movimiento

    updateMovimiento(
      where: MovimientoWhereUniqueInput!
      data: MovimientoUpdateInput
    ): Movimiento

    deleteMovimiento(where: MovimientoWhereUniqueInput!): Movimiento
  }
`;
export { MovimientoTypes };
