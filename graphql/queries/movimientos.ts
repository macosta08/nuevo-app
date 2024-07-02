import { gql } from '@apollo/client';

const GET_MOVIMIENTOS = gql`
  query Movimientos {
    movimientos {
      id
      monto
      fecha
      descripcion
      concepto
      user {
        id
        name
      }
    }
  }
`;

const GET_ALL_MOVIMIENTOS = gql`
  query Movimientos {
    movimientos {
      id
      monto
      fecha
      descripcion
      concepto
      userId
    }
  }
`;

const GET_MOVIMIENTO = gql`
  query Movimiento($movimientoId: String!) {
    movimiento(id: $movimientoId) {
      id
      monto
      concepto
      descripcion
      userId
      fecha
    }
  }
`;

const GET_INGRESOS = gql`
  query Query {
    totalConceptoIngreso
  }
`;

const GET_EGRESOS = gql`
  query Query {
    totalConceptoEgreso
  }
`;

export {
  GET_MOVIMIENTOS,
  GET_MOVIMIENTO,
  GET_ALL_MOVIMIENTOS,
  GET_INGRESOS,
  GET_EGRESOS,
};
