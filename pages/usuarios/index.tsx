import React, { useState } from 'react';
import TextPrimary from '@components/AtomicDesign/Atoms/TextPrimary';
import { Button } from '@components/ui/button';
import { UsuariosProps } from 'types';
import PaginationComponent from '@components/AtomicDesign/Molecules/PaginationComponent';
import TableUsuarios from '@components/AtomicDesign/Molecules/TableUsuarios';
import router from 'next/router';
// import { useQuery } from '@apollo/client';
// import { GET_ALL_USERS } from '@/graphql/queries/usuarios';

function Usuarios() {
  // Ejemplo de datos de prueba
  const dataPrueba: UsuariosProps[] = [
    {
      id: '1',
      name: 'Liam ',
      lastName: 'Johnson',
      email: 'Fulfilled@gmail.com',
      telefono: '5135464321',
      rol: '4',
    },
    {
      id: '2',
      name: 'Liam ',
      lastName: 'Johnson',
      email: 'Fulfilled@gmail.com',
      telefono: '5135464321',
      rol: '4',
    },
    {
      id: '3',
      name: 'Liam ',
      lastName: 'Johnson',
      email: 'Fulfilled@gmail.com',
      telefono: '5135464321',
      rol: '4',
    },
    {
      id: '4',
      name: 'Liam ',
      lastName: 'Johnson',
      email: 'Fulfilled@gmail.com',
      telefono: '5135464321',
      rol: '4',
    },
    {
      id: '5',
      name: 'Liam ',
      lastName: 'Johnson',
      email: 'Fulfilled@gmail.com',
      telefono: '5135464321',
      rol: '4',
    },
    {
      id: '6',
      name: 'Liam ',
      lastName: 'Johnson',
      email: 'Fulfilled@gmail.com',
      telefono: '5135464321',
      rol: '4',
    },
  ];
  const [dataArray, setDataArray] = useState<UsuariosProps[]>(dataPrueba);
  // const { data: dataQuery } = useQuery(GET_ALL_USERS, {
  //   onCompleted: (data) => {
  //     if (data?.usuarios?.length > 0) {
  //       setDataArray(dataQuery?.usuarios);
  //     }
  //   },
  //   fetchPolicy: 'cache-and-network',
  // });

  return (
    <div className='flex flex-col p-4 px-10 gap-8 items-center h-screen'>
      <div className='w-full justify-between flex'>
        <TextPrimary text='Usuarios' />
        <Button onClick={() => router.push(`/usuarios/nuevo`)}>
          Nuevo usuario
        </Button>
      </div>
      <TableUsuarios data={dataArray} />
         <PaginationComponent />
         <div>
ffffffffffff
           </div>
    </div>
  );
}

export default Usuarios;
