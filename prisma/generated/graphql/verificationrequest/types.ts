import { gql } from 'apollo-server-micro';

const VerificationRequestTypes = gql`
  type VerificationRequest {
    id: ID!
    identifier: String!
    token: String!
    expires: DateTime!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    verificationRequests: [VerificationRequest]
    verificationRequest(id: String!): VerificationRequest
  }

  input VerificationRequestCreateInput {
    identifier: String!
    token: String!
    expires: DateTime!
  }

  input VerificationRequestWhereUniqueInput {
    id: String!
  }

  input VerificationRequestUpdateInput {
    identifier: StringInput
    token: StringInput
    expires: DateTimeInput
  }

  type Mutation {
    createVerificationRequest(
      data: VerificationRequestCreateInput
    ): VerificationRequest

    updateVerificationRequest(
      where: VerificationRequestWhereUniqueInput!
      data: VerificationRequestUpdateInput
    ): VerificationRequest

    deleteVerificationRequest(
      where: VerificationRequestWhereUniqueInput!
    ): VerificationRequest
  }
`;
export { VerificationRequestTypes };
