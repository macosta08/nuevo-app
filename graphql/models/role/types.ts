import { gql } from 'apollo-server-micro';

const RoleTypes = gql`
  type Role {
    id: ID!
    name: String!
    icon: String
    pages: [Page]
    users: [User]
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    roles: [Role]
    role(id: String!): Role
  }

  input RoleCreateInput {
    name: String!
    icon: String
  }

  input RoleWhereUniqueInput {
    id: String!
  }

  input RoleUpdateInput {
    name: StringInput
    icon: StringInput
  }

  type Mutation {
    createRole(data: RoleCreateInput): Role

    updateRole(where: RoleWhereUniqueInput!, data: RoleUpdateInput): Role

    deleteRole(where: RoleWhereUniqueInput!): Role
  }
`;
export { RoleTypes };
