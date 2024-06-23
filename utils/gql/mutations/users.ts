import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation CreateUser($data: UserCreateInput) {
    createUser(data: $data) {
      id
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
    updateUser(data: $data, where: $where) {
      id
      # name
      # email
      # enabled
      # deleted
      # roles {
      #   id
      #   name
      # }
    }
  }
`;
