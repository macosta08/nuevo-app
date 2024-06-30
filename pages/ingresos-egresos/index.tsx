import React from 'react';
import TextPrimary from '@components/AtomicDesign/Atoms/TextPrimary';
import { Button } from '@components/ui/button';
import TableIngresosEgresos from '@components/AtomicDesign/Molecules/TableIngresosEgresos';
import { IngresosEgresosProps } from 'types';
import PaginationComponent from '@components/AtomicDesign/Molecules/PaginationComponent';
import router from 'next/router';

function IngresosEgresos() {
  // Ejemplo de datos de prueba
  const data: IngresosEgresosProps[] = [
    {
      id: '1',
      usuario: 'Liam Johnson',
      concepto: 'Fulfilled',
      fecha: '2023-06-23',
      monto: '$250.00',
    },
    {
      id: '2',
      usuario: 'Liam Johnson',
      concepto: 'Fulfilled',
      fecha: '2023-06-23',
      monto: '$250.00',
    },
    {
      id: '3',
      usuario: 'Liam Johnson',
      concepto: 'Fulfilled',
      fecha: '2023-06-23',
      monto: '$250.00',
    },
    {
      id: '4',
      usuario: 'Liam Johnson',
      concepto: 'Fulfilled',
      fecha: '2023-06-23',
      monto: '$250.00',
    },
    {
      id: '5',
      usuario: 'Liam Johnson',
      concepto: 'Fulfilled',
      fecha: '2023-06-23',
      monto: '$250.00',
    },
    {
      id: '6',
      usuario: 'Liam Johnson',
      concepto: 'Fulfilled',
      fecha: '2023-06-23',
      monto: '$250.00',
    },
  ];
  return (
    <div className='flex h-screen flex-col items-center gap-8 p-4'>
      <div className='flex w-full justify-between'>
        <TextPrimary text='Ingresos y egresos' />
        <Button onClick={() => router.push(`/ingresos-egresos/nuevo`)}>
          Nuevo
        </Button>
      </div>
      <TableIngresosEgresos data={data} />
      <PaginationComponent />
    </div>
  );
}

export default IngresosEgresos;
