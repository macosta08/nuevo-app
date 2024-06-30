import { gql } from 'apollo-server-micro';

const SessionTypes = gql`
  type Session {
    id: ID!
    sessionToken: String!
    expires: DateTime!
    user: User!
    userId: String!
  }

  type Query {
    sessions: [Session]
    session(id: String!): Session
  }

  input SessionCreateInput {
    sessionToken: String!
    expires: DateTime!
    userId: String!
  }

  input SessionWhereUniqueInput {
    id: String!
  }

  input SessionUpdateInput {
    sessionToken: StringInput
    expires: DateTimeInput
    userId: StringInput
  }

  type Mutation {
    createSession(data: SessionCreateInput): Session

    updateSession(
      where: SessionWhereUniqueInput!
      data: SessionUpdateInput
    ): Session

    deleteSession(where: SessionWhereUniqueInput!): Session
  }
`;
export { SessionTypes };
