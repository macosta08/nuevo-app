import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@components/ui/table';
import { UsuariosProps } from 'types';
import { Button } from '@components/ui/button';
import { useRouter } from 'next/router';
import { Badge } from '@components/ui/badge';

function TableUsuarios({ data }: { data: UsuariosProps[] }) {
  const router = useRouter();

  const headers = ['Nombre', 'Correo', 'Teléfono', 'Rol', 'Acciones'];

  return (
    <div className='relative w-full overflow-hidden'>
      <Table>
        <TableHeader>
          <TableRow>
            {headers.map((header) => (
              <TableHead key={header} className='bg-purple-300 text-black'>
                {header.charAt(0).toUpperCase() + header.slice(1)}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
      </Table>
      <div className='max-h-[490px] overflow-y-auto'>
        <Table>
          <TableBody>
            {data &&
              data.map((item, index) => (
                <TableRow
                  key={item?.id}
                  className={index % 2 === 0 ? 'bg-accent' : ''}
                >
                  <TableCell>{item?.name}</TableCell>
                  <TableCell>{item?.email}</TableCell>
                  <TableCell>{item?.telefono}</TableCell>
                  <TableCell>
                    <Badge variant='outline'>{item?.role.name}</Badge>
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => router.push(`/usuarios/${item?.id}`)}
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

export default TableUsuarios;
