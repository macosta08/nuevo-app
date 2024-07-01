import React, { useState } from 'react';
import TextPrimary from '@components/AtomicDesign/Atoms/TextPrimary';
import { Button } from '@components/ui/button';
import { UsuariosProps } from 'types';
import PaginationComponent from '@components/AtomicDesign/Molecules/PaginationComponent';
import TableUsuarios from '@components/AtomicDesign/Molecules/TableUsuarios';
import router from 'next/router';
import { useQuery } from '@apollo/client';
import { GET_ALL_USERS } from 'graphql/queries/usuarios';

function Usuarios() {
  const { data: dataUser } = useQuery(GET_ALL_USERS, {
    fetchPolicy: 'cache-and-network',
  });
 console.log('dataUser :>> ', dataUser);
  return (
    <div className='flex flex-col p-4 px-10 gap-8 items-center h-screen'>
      <div className='w-full justify-between flex'>
        <TextPrimary text='Usuarios' />
        <Button onClick={() => router.push(`/usuarios/nuevo`)}>
          Nuevo usuario
        </Button>
      </div>
      <TableUsuarios data={dataUser?.users} />
         <PaginationComponent />
    </div>
  );
}

export default Usuarios;
