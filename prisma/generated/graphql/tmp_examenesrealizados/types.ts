import { gql } from 'apollo-server-micro';

const TMP_examenesRealizadosTypes = gql`
  type TMP_examenesRealizados {
    id: ID!
    typeDocument: String!
    nameProcess: String!
    idExamen: String
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    tMP_examenesRealizadoss: [TMP_examenesRealizados]
    tMP_examenesRealizados(id: String!): TMP_examenesRealizados
  }

  input TMP_examenesRealizadosCreateInput {
    typeDocument: String!
    nameProcess: String!
    idExamen: String
  }

  input TMP_examenesRealizadosWhereUniqueInput {
    id: String!
  }

  input TMP_examenesRealizadosUpdateInput {
    typeDocument: StringInput
    nameProcess: StringInput
    idExamen: StringInput
  }

  type Mutation {
    createTMP_examenesRealizados(
      data: TMP_examenesRealizadosCreateInput
    ): TMP_examenesRealizados

    updateTMP_examenesRealizados(
      where: TMP_examenesRealizadosWhereUniqueInput!
      data: TMP_examenesRealizadosUpdateInput
    ): TMP_examenesRealizados

    deleteTMP_examenesRealizados(
      where: TMP_examenesRealizadosWhereUniqueInput!
    ): TMP_examenesRealizados
  }
`;
export { TMP_examenesRealizadosTypes };
