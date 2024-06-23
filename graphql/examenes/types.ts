import { gql } from 'apollo-server-micro';

const ExamenesTypes = gql`
  type Examen {
    id: ID!
    typeDocument: String!
    nameProcess: String!
    idExamen: String
    pathS3: String
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  input ExamenWhereInput {
    AND: [ExamenWhereInput]
    OR: [ExamenWhereInput]
    NOT: [ExamenWhereInput]
    id: StringFilter
    typeDocument: StringFilter
    nameProcess: StringFilter
    idExamen: StringFilter
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
  }

  type Query {
    examenes_byId(id: String!, where: ExamenWhereInput): [Examen]
  }
`;

export { ExamenesTypes };
