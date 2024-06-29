import { gql } from '@apollo/client';

const GET_USER = gql`
  query User($userId: String!) {
    user(id: $userId) {
      id
      name
      cedula
      email
      role {
        id
        name
      }
    }
  }
`;

export default GET_USER;
