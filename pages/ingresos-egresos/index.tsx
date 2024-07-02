import React from 'react';
import TextPrimary from '@components/AtomicDesign/Atoms/TextPrimary';
import { Button } from '@components/ui/button';
import TableIngresosEgresos from '@components/AtomicDesign/Molecules/TableIngresosEgresos';
import router from 'next/router';
import { useQuery } from '@apollo/client';
import { GET_MOVIMIENTOS } from 'graphql/queries/movimientos';
import safeJsonStringify from 'safe-json-stringify';
import matchRoles from 'utils/matchRoles';
import { PrivateComponent } from '@components/RBAC/PrivateComponent';
import { useSession } from 'next-auth/react';

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
function IngresosEgresos() {
  const { data: session }: any = useSession();
  const { data: dataMovimientos } = useQuery(GET_MOVIMIENTOS, {
    fetchPolicy: 'cache-and-network',
  });

  return (
    <div className='flex h-screen flex-col items-center gap-8 p-4'>
      <div className='flex w-full justify-between'>
        <TextPrimary text='Ingresos y egresos' />
        <PrivateComponent roleList={['Administrador']} userRole={session?.user?.role?.name}>
        <Button onClick={() => router.push(`/ingresos-egresos/nuevo`)}>
          Nuevo
        </Button></PrivateComponent>
      </div>
      <TableIngresosEgresos data={dataMovimientos?.movimientos} />
    </div>
  );
}

export default IngresosEgresos;
