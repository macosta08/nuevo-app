import { gql } from 'apollo-server-micro';

const UserTypes = gql`
  type User {
    id: ID!
    deleted: Boolean!
    enabled: Boolean!
    email: String
    emailVerified: DateTime
    image: String
    name: String
    cedula: String
    accounts: [Account]
    sessions: [Session]
    createdAt: DateTime!
    updatedAt: DateTime!
    movimientos: [Movimiento]
    role: Role
    roleId: String
  }

  type Query {
    users: [User]
    user(id: String!): User
  }

  input UserCreateInput {
    deleted: Boolean!
    enabled: Boolean!
    email: String
    emailVerified: DateTime
    image: String
    name: String
    cedula: String
    role: RoleCreateNestedManyWithoutUsersInput
    accounts: AccountCreateNestedManyWithoutUserInput
  }

  input UserWhereUniqueInput {
    id: String!
  }

  input UserUpdateInput {
    deleted: BooleanInput
    enabled: BooleanInput
    email: StringInput
    emailVerified: DateTimeInput
    image: StringInput
    name: StringInput
    cedula: StringInput
    role: RoleUpdateManyWithoutUsersInput
  }

  type Mutation {
    createUser(data: UserCreateInput): User

    updateUser(where: UserWhereUniqueInput!, data: UserUpdateInput): User

    deleteUser(where: UserWhereUniqueInput!): User
  }
`;
export { UserTypes };
