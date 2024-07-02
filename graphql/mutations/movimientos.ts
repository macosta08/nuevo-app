import { gql } from '@apollo/client';

const UPDATE_MOVIMIENTO = gql`
    mutation UpdateMovimiento($where: MovimientoWhereUniqueInput!, $data: MovimientoUpdateInput) {
        updateMovimiento(where: $where, data: $data) {
            id
        }
    }
`;

const CREATE_MOVIMIENTO = gql`
    mutation CreateMovimiento($data: MovimientoCreateInput) {
        createMovimiento(data: $data) {
            id
        }
    }
`;

export { UPDATE_MOVIMIENTO, CREATE_MOVIMIENTO };
