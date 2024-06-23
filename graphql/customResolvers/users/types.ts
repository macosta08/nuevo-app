import { gql } from 'apollo-server-micro';

const UserTypes = gql`
  input UserWhereInput {
    AND: [UserWhereInput]
    OR: [UserWhereInput]
    NOT: [UserWhereInput]
    id: StringFilter
    deleted: BoolFilter
    enabled: BoolFilter
    email: StringFilter
    image: StringFilter
    name: StringFilter
    cedula: StringFilter
    roles: RoleListRelationFilter
  }

  input UserOrderByWithRelationInput {
    id: Enum_orderByStates
    deleted: Enum_orderByStates
    enabled: Enum_orderByStates
    email: Enum_orderByStates
    emailVerified: Enum_orderByStates
    image: Enum_orderByStates
    name: Enum_orderByStates
    cedula: Enum_orderByStates
    createdAt: Enum_orderByStates
    updatedAt: Enum_orderByStates
  }

  input UserCreateInput {
    roles: RoleCreateNestedManyWithoutUsersInput
    accounts: AccountCreateNestedManyWithoutUserInput
  }

  input UserUpdateInput {
    roles: RoleUpdateManyWithoutUsersInput
  }
  type User {
    totalcount: Int
  }
  type Query {
    users(
      where: UserWhereInput
      orderBy: [UserOrderByWithRelationInput]
      take: Int
      skip: Int
    ): [User]
  }

  type Mutation {
    createUser(data: UserCreateInput): User
  }
`;
export { UserTypes };
