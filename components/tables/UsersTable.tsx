import Loading from '@components/Loading';
import { Button } from '@components/StyledComponents';
import { Tooltip } from '@material-ui/core';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { renameEnums } from 'utils/codeFunctions';
import { ThTagTable, TdTagTable } from '@components/tables/TableTags';

function UsersTable({
  dataTheader,
  usersShow,
  loading,
  loadingItem,
  handleDeleteUser,
}) {
  return (
    <div className='hidden h-[70vh] w-full overflow-auto rounded-[10px] lg:flex'>
      <table className='w-full table-fixed text-center '>
        <thead className='sticky top-0 z-20 bg-purple-200   font-fourthFont text-sm text-white'>
          <tr className='leading-normal'>
            {dataTheader.map((item) => (
              <ThTagTable name={item} />
            ))}
          </tr>
        </thead>
        {loadingItem ? (
          <tbody>
            <Loading open />
          </tbody>
        ) : (
          <tbody>
            {usersShow?.map(({ id, name, email, cedula, roles }) => (
              <tr key={id}>
                <TdTagTable>{name}</TdTagTable>
                <TdTagTable>{cedula}</TdTagTable>
                <TdTagTable>{email}</TdTagTable>
                <TdTagTable>
                  {roles &&
                    roles?.map((role) => (
                      <span className='flex flex-col' key={role.id}>
                        {renameEnums(role.name)}
                      </span>
                    ))}
                </TdTagTable>
                <TdTagTable>
                  <div className='flex flex-row justify-center space-x-2'>
                    <Tooltip
                      title='EditarUsuario'
                      enterTouchDelay={0}
                      placement='top'
                      arrow
                    >
                      <div>
                        <Button
                          type='button'
                          priority='icon'
                          size='small'
                          negative
                          extraClassName='bg-blue500'
                        >
                          <div className='flex justify-center'>
                            <Link href={`/admin/users/${id}`}>
                              <Image
                                src='/img/icons/edit.svg'
                                alt=''
                                height={18}
                                width={18}
                              />
                            </Link>
                          </div>
                        </Button>
                      </div>
                    </Tooltip>
                    <Tooltip
                      title='Eliminar Usuario'
                      enterTouchDelay={0}
                      placement='top'
                      arrow
                    >
                      <div>
                        <Button
                          type='button'
                          priority='icon'
                          size='small'
                          negative
                          extraClassName='bg-gray700'
                          disabled={loading}
                          onClick={() =>
                            handleDeleteUser({
                              id,
                            })
                          }
                        >
                          <div className='flex justify-center'>
                            <Image
                              src='/img/icons/delete.svg'
                              alt=''
                              height={18}
                              width={18}
                            />
                          </div>
                        </Button>
                      </div>
                    </Tooltip>
                  </div>
                </TdTagTable>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
}

export default UsersTable;
