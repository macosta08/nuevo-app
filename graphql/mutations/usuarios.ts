import { gql } from '@apollo/client';

const UPDATE_USUARIO = gql`
  mutation UpdateUser($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
    updateUser(data: $data, where: $where) {
      id
    }
  }
`;

const CREATE_USUARIO = gql`
  mutation CreateUser($data: UserCreateInput) {
    createUser(data: $data) {
      id
    }
  }
`;

export { UPDATE_USUARIO, CREATE_USUARIO };
