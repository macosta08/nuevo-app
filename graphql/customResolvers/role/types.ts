import { gql } from 'apollo-server-micro';

const RoleTypes = gql`
  input RoleListRelationFilter {
    every: RoleWhereInput
    some: RoleWhereInput
    none: RoleWhereInput
  }

  input EnumEnum_RoleNameNullableFilter {
    equals: Enum_RoleName
  }

  input RoleWhereInput {
    AND: [RoleWhereInput]
    OR: [RoleWhereInput]
    NOT: [RoleWhereInput]
    id: StringFilter
    name: EnumEnum_RoleNameNullableFilter
    icon: StringFilter
  }

  input RoleWhereUniqueInput {
    id: String
    name: Enum_RoleName
  }

  input RoleCreateNestedManyWithoutUsersInput {
    connect: [RoleWhereUniqueInput]
  }

  input  RoleUpdateManyWithoutUsersInput {
    disconnect: [RoleWhereUniqueInput]
    connect: [RoleWhereUniqueInput]
  }

  type Query {
    roles(where: RoleWhereInput): [Role]
  }
`;
export { RoleTypes };
