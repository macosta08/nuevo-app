import { gql } from 'apollo-server-micro';

const HST_examenesRealizadosTypes = gql`
  type HST_examenesRealizados {
    id: ID!
    typeDocument: String!
    nameProcess: String!
    idExamen: String
    pathS3: String
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    hST_examenesRealizadoss: [HST_examenesRealizados]
    hST_examenesRealizados(id: String!): HST_examenesRealizados
  }

  input HST_examenesRealizadosCreateInput {
    typeDocument: String!
    nameProcess: String!
    idExamen: String
    pathS3: String
  }

  input HST_examenesRealizadosWhereUniqueInput {
    id: String!
  }

  input HST_examenesRealizadosUpdateInput {
    typeDocument: StringInput
    nameProcess: StringInput
    idExamen: StringInput
    pathS3: StringInput
  }

  type Mutation {
    createHST_examenesRealizados(
      data: HST_examenesRealizadosCreateInput
    ): HST_examenesRealizados

    updateHST_examenesRealizados(
      where: HST_examenesRealizadosWhereUniqueInput!
      data: HST_examenesRealizadosUpdateInput
    ): HST_examenesRealizados

    deleteHST_examenesRealizados(
      where: HST_examenesRealizadosWhereUniqueInput!
    ): HST_examenesRealizados
  }
`;
export { HST_examenesRealizadosTypes };
