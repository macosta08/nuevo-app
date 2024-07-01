import { gql } from '@apollo/client';

const GET_USER = gql`
  query User($userId: String!) {
    user(id: $userId) {
      role {
        id
        name
      }
      telefono
      email
      id
      name
    }
  }
`;

const GET_ALL_USERS = gql`
query Users {
  users {
    id
    name
    telefono
    email
    role {
      id
      name
    }
  }
}
`;

export { GET_ALL_USERS, GET_USER };
