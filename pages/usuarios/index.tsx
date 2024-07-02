import React  from 'react';
import TextPrimary from '@components/AtomicDesign/Atoms/TextPrimary';
import { Button } from '@components/ui/button';
import TableUsuarios from '@components/AtomicDesign/Molecules/TableUsuarios';
import router from 'next/router';
import { useQuery } from '@apollo/client';
import { GET_ALL_USERS } from 'graphql/queries/usuarios';
import { Page } from '@prisma/client';
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

function Usuarios() {
  const { data: dataUser } = useQuery(GET_ALL_USERS, {
    fetchPolicy: 'cache-and-network',
  });
  return (
    <div className='flex flex-col p-4 px-10 gap-8 items-center h-screen'>
      <div className='w-full justify-between flex'>
        <TextPrimary text='Usuarios' />
        <Button onClick={() => router.push(`/usuarios/nuevo`)}>
          Nuevo usuario
        </Button>
      </div>
      <TableUsuarios data={dataUser?.users} />
    </div>
  );
}

export default Usuarios;

