import { useQuery } from '@apollo/client';
import DownloadCSVButton from '@components/AtomicDesign/Atoms/DownloadCSVButton';
import TextPrimary from '@components/AtomicDesign/Atoms/TextPrimary';
import CardTotal from '@components/AtomicDesign/Molecules/CardTotal';
import { Grafica } from '@components/AtomicDesign/Molecules/Grafica';
import {
  GET_ALL_MOVIMIENTOS,
  GET_EGRESOS,
  GET_INGRESOS,
} from 'graphql/queries/movimientos';
import safeJsonStringify from 'safe-json-stringify';
import matchRoles from 'utils/matchRoles';

export async function getServerSideProps(ctx) {
  const { rejected, isPublic, page } = await matchRoles(ctx);
  return {
    props: {
      rejected,
      isPublic,
      page: JSON.parse(safeJsonStringify(page)),
    },
  };
}

function Graficas() {
  const { data: dataMovimientos } = useQuery(GET_ALL_MOVIMIENTOS, {
    fetchPolicy: 'cache-and-network',
  });
  const { data: dataIngreso } = useQuery(GET_INGRESOS, {
    fetchPolicy: 'cache-and-network',
  });
  const { data: dataEgresos } = useQuery(GET_EGRESOS, {
    fetchPolicy: 'cache-and-network',
  });

  const ingresos = {
    monto: dataIngreso?.totalConceptoIngreso,
    concepto: 'Ingreso',
  };

  const egresos = {
    monto: dataEgresos?.totalConceptoEgreso,
    concepto: 'Egreso',
  };

  return (
    <div className='flex flex-col items-center gap-10 p-4'>
      <TextPrimary text='Sistemas de gestión de ingresos y gastos' />
      <div className='w-full flex gap-4 justify-center'>
        <div>
          {dataIngreso && dataEgresos && (
            <div className='flex w-full justify-between gap-10'>
              <Grafica
                titulo='Ingresos y egresos'
                data={[ingresos, egresos]}
                argument='concepto'
                value='monto'
              />
            </div>
          )}
        </div>
        <div>
          {dataMovimientos && (
            <DownloadCSVButton data={dataMovimientos?.movimientos} />
          )}
        {dataIngreso && dataEgresos &&  <CardTotal
            totalEgreso={egresos?.monto}
            totalIngreso={ingresos?.monto}
          />}
        </div>
      </div>
    </div>
  );
}

export default Graficas;
