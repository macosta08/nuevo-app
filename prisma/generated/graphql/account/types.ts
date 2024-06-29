import { gql } from 'apollo-server-micro';

const AccountTypes = gql`
  type Account {
    id: ID!
    userId: String!
    type: String!
    provider: String!
    providerAccountId: String!
    refresh_token: String
    access_token: String
    expires_at: Int
    token_type: String
    scope: String
    id_token: String
    session_state: String
    oauth_token_secret: String
    oauth_token: String
    user: User!
  }

  type Query {
    accounts: [Account]
    account(id: String!): Account
  }

  input AccountCreateInput {
    userId: String
    type: String!
    provider: String!
    providerAccountId: String!
    refresh_token: String
    access_token: String
    expires_at: Int
    token_type: String
    scope: String
    id_token: String
    session_state: String
    oauth_token_secret: String
    oauth_token: String
  }

  input AccountCreateNestedManyWithoutUserInput {
    create: [AccountCreateInput]
  }

  input AccountWhereUniqueInput {
    id: String!
  }

  input AccountUpdateInput {
    userId: StringInput
    type: StringInput
    provider: StringInput
    providerAccountId: StringInput
    refresh_token: StringInput
    access_token: StringInput
    expires_at: IntInput
    token_type: StringInput
    scope: StringInput
    id_token: StringInput
    session_state: StringInput
    oauth_token_secret: StringInput
    oauth_token: StringInput
  }

  type Mutation {
    createAccount(data: AccountCreateInput): Account

    updateAccount(
      where: AccountWhereUniqueInput!
      data: AccountUpdateInput
    ): Account

    deleteAccount(where: AccountWhereUniqueInput!): Account
  }
`;
export { AccountTypes };
