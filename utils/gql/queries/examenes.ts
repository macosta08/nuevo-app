import { gql } from '@apollo/client';

const GET_EXAMENES_BY_ID = gql`
  query Examenes_byId($examenesByIdId: String!) {
    examenes_byId(id: $examenesByIdId) {
      typeDocument
      pathS3
      updatedAt
      nameProcess
      idExamen
      id
      createdAt
    }
  }
`;

export default GET_EXAMENES_BY_ID;
