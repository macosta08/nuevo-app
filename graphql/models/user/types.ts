import { gql } from 'apollo-server-micro';

const UserTypes = gql`
  type User {
    id: ID!
    email: String
    emailVerified: DateTime
    image: String
    name: String
    lastName: String
    telefono: String
    deleted: Boolean!
    enabled: Boolean!
    role: Role!
    roleId: String!
    movimientos: [Movimiento]
    account: Account
    sessions: [Session]
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  input UserCreateInput {
    email: String
    emailVerified: DateTime
    image: String
    name: String
    lastName: String
    telefono: String
    deleted: Boolean!
    enabled: Boolean!
    roleId: String
    account: AccountInput
  }

  input UserWhereUniqueInput {
    id: String!
  }

  # input AccountCreateInput {
  #   provider: String
  #   providerAccountId: String
  #   type: String
  # }

  input AccountInput {
    create: AccountCreateInput
  }

  input UserUpdateInput {
    email: StringInput
    emailVerified: DateTimeInput
    image: StringInput
    name: StringInput
    lastName: StringInput
    telefono: StringInput
    deleted: BooleanInput
    enabled: BooleanInput
    roleId: StringInput
  }

  type Query {
    users: [User]
    user(id: String!): User
  }

  type Mutation {
    createUser(data: UserCreateInput): User

    updateUser(where: UserWhereUniqueInput!, data: UserUpdateInput): User

    deleteUser(where: UserWhereUniqueInput!): User
  }
`;
export { UserTypes };
