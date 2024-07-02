import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@components/ui/table';
import { IngresosEgresosTotalProps } from 'types';
import {
  floatToCurrencyString,
  isoStringToDate,
} from 'utils/functions/currencyString';
import { Button } from '@components/ui/button';
import { useRouter } from 'next/router';

function TableIngresosEgresos({ data }: { data: IngresosEgresosTotalProps[] }) {
  const router = useRouter();
  // Obtén las claves de la primera fila para generar la cabecera dinámicamente
  const headers = [
    'Concepto',
    'Monto',
    'Fecha',
    'Usuario',
    'Descripción',
    'Acciones',
  ];

  return (
    <div className='relative w-full overflow-hidden'>
      <Table>
        <TableHeader>
          <TableRow>
            {headers.map((header) => (
              <TableHead
                key={header} // Usa un key único para cada TableHead
                className=' bg-purple-300 text-black'
              >
                {header.charAt(0).toUpperCase() + header.slice(1)}{' '}
                {/* Capitaliza la primera letra */}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
      </Table>
      <div className='max-h-[490px] overflow-y-auto'>
        <Table>
          <TableBody>
            {data &&
              data?.map((item, index) => (
                <TableRow
                  key={item?.id} // Usa un key único para cada TableRow
                  className={index % 2 === 0 ? 'bg-accent' : ''} // Alterna los colores de fondo de las filas
                >
                  <TableCell className='table-cell'>{item?.concepto}</TableCell>
                  <TableCell className='table-cell'>
                    {floatToCurrencyString(item?.monto)}
                  </TableCell>
                  <TableCell className='table-cell'>
                    {isoStringToDate(item?.fecha)}
                  </TableCell>
                  <TableCell className='table-cell'>
                    {item?.user?.name}
                  </TableCell>
                  <TableCell className='table-cell truncate'>
                    {item?.descripcion}
                  </TableCell>
                  <TableCell className='table-cell'>
                    <Button
                      onClick={() =>
                        router.push(`/ingresos-egresos/${item?.id}`)
                      }
                    >
                      Editar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default TableIngresosEgresos;
