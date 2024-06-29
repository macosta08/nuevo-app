import { gql } from 'apollo-server-micro';

const RoleTypes = gql`
  type Role {
    id: ID!
    name: Enum_RoleName!
    pages: [Page]
    icon: String
    users: [User]
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    roles: [Role]
    role(id: String!): Role
  }

  input RoleCreateInput {
    name: Enum_RoleName!
    icon: String
  }

  input RoleWhereUniqueInput {
    id: String!
  }

  input RoleWhereUniqueInput2 {
    id: String
    name: Enum_RoleName
  }

  input RoleCreateNestedManyWithoutUsersInput {
    connect: RoleWhereUniqueInput
  }

  input RoleUpdateInput {
    name: Enum_RoleNameInput
    icon: StringInput
  }

  type Mutation {
    createRole(data: RoleCreateInput): Role

    updateRole(where: RoleWhereUniqueInput!, data: RoleUpdateInput): Role

    deleteRole(where: RoleWhereUniqueInput!): Role
  }
`;
export { RoleTypes };
