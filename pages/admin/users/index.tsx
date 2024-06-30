// En esta pagina se encuentra el maestro de usuarios: la tabla de usuarios de la base de datos,
// los filtros para la tabla y los modales para editar,crear y eliminar usuarios

import React, { useEffect, useState } from 'react';
import matchRoles from 'utils/matchRoles';
import safeJsonStringify from 'safe-json-stringify';
import UsersTable from '@components/tables/UsersTable';
import GET_USERS from 'utils/gql/queries/users';
import { UPDATE_USER } from 'utils/gql/mutations/users';
import { useMutation, useQuery } from '@apollo/client';
import { useToastContext } from 'context/toast';
import Pagination from '@components/Pagination';
import InputSearch from '@components/inputs/inputSearch';
import ButtonIcon from '@components/buttons/ButtonIcon';
import HeadBarImg from '@components/navegation/HeadBarImg';
import UsersTableMobile from '@components/tables/UsersTableMobile';
import Link from 'next/link';
import { deleteUserTransformation } from 'utils/gql/transformations/users';
import DeleteUserModal from '@components/modals/DeleteUserModal';
import Loading from '@components/Loading';
import ButtonBack from '@components/buttons/ButtonBack';
import { verificarRol } from 'utils/codeFunctions';
import { useToast } from '@components/ui/use-toast';

type User = {
  id: string;
  cedula: string;
  name: string;
  roles: { id: string; name: string }[];
  enabled: boolean;
  deleted: boolean;
};

// SI ... ROLES QUERY
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

function Index() {
  // const filterIcon = '/img/icons/Filtrar.svg';
  const plusIcon = '/img/icons/plus.svg';
  const userIcon = '/img/icons/dobleUser.svg';
  const [openDeleteUserModal, setOpenDeleteUserModal] =
    useState<boolean>(false);
  // const [openFiltersModal, setOpenFiltersModal] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<any>();
  const [updateUserMutation, { loading, error }] = useMutation(UPDATE_USER, {
    refetchQueries: [GET_USERS],
  });
  const enabled = selectedUser?.enabled;
  const { toast } = useToast();
  // const [loadingSave, setLoadingSave] = useState<boolean>(false);
  const [filteredItems, setFilteredItems] = useState<any>([]);
  const [loadingItem, setLoadingItem] = useState(false);
  const [currentItems, setCurrentItems] = useState([]);
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState([]);
  const [find, setFind] = useState('');
  const [userCount, setUserCount] = useState(0);
  const tableHeaders = ['Nombre', 'Cédula', 'Correo', 'Rol', 'Acciones'];
  const tableMobileHeaders = ['Nombre', 'Rol', 'Acciones'];
  const whereFilter = {
    AND: [
      {
        OR: [
          {
            name: {
              contains: find,
              mode: 'insensitive',
            },
          },
          {
            email: {
              contains: find,
              mode: 'insensitive',
            },
          },
          {
            cedula: {
              contains: find,
              mode: 'insensitive',
            },
          },
          {
            ...(verificarRol(find) && {
              roles: {
                some: {
                  name: {
                    equals: find,
                  },
                },
              },
            }),
          },
        ],
      },
      {
        deleted: {
          equals: false,
        },
      },
    ],
  };
  // Query Users
  const { data: queryData, loading: loadingQuery } = useQuery(GET_USERS, {
    variables: {
      where: whereFilter,
      take: 5,
      skip: 0,
      orderBy: [{ enabled: 'desc' }, { createdAt: 'asc' }],
    },
    fetchPolicy: 'cache-and-network',
  });

  useEffect(() => {
    if (queryData) {
      if (queryData?.users?.length && queryData?.users?.length > 0) {
        setUserCount(queryData?.users[0]?.totalcount);
      }
      setUsers(
        queryData.users.map((user) => ({
          id: user.id,
          cedula: user.cedula,
          name: user.name,
          email: user.email,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
          enabled: user.enabled,
          deleted: user.deleted,
          roles: user.roles,
        }))
      );
    }
  }, [queryData]);

  useEffect(() => {
    setLoadingItem(loadingQuery);
  }, [loadingQuery]);

  useEffect(() => {
    setCurrentItems(filteredItems.users ?? filteredItems);
  }, [filteredItems]);

  useEffect(() => {
    setFilteredItems(users);
  }, [users]);

  useEffect(() => {
    setSelectedUser((prevState) => ({
      ...prevState,
      enabled,
    }));
  }, [enabled]);

  const deleteUser = async () => {
    const { where, data } = deleteUserTransformation(selectedUser.id);
    try {
      // setLoadingSave(true);
      await updateUserMutation({
        variables: { where, data },
      });

      if (!error) {
        toast({
          description: 'Usuario eliminado',
        });
      }
    } catch (err) {
      toast({
        variant: 'destructive',
        description: 'Ocurrió un error eliminando el usuario',
      });
      setOpenDeleteUserModal(false);
    }
    setOpenDeleteUserModal(false);
  };

  const handleDeletedUser = (user: User) => {
    setOpenDeleteUserModal(!openDeleteUserModal);
    setSelectedUser({
      id: user.id,
    });
  };

  return (
    <div>
      <Loading open={loadingQuery} />
      <DeleteUserModal
        open={openDeleteUserModal}
        setOpen={setOpenDeleteUserModal}
        deleteUser={deleteUser}
        loading={loading}
      />
      <header className='mb-12'>
        <ButtonBack />
        <HeadBarImg title='Maestro de usuarios' img={userIcon} />
      </header>
      <div className='mb-12 flex items-end justify-between px-[5%] sm:gap-6 md:w-auto'>
        <InputSearch
          type='text'
          name='search'
          value={search}
          label='Buscar'
          placeholder='Buscar'
          extraClassNames='font-secondaryFont w-auto] md:w-[653px]'
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              setFind(event.target.value);
            }
          }}
          onClick={() => setFind(search)}
        />
        <div className='hidden gap-6  md:flex'>
          <Link href='/admin/users/create'>
            <ButtonIcon
              text='Nuevo'
              type='submit'
              priority='third'
              size='small'
              icon={plusIcon}
            />
          </Link>
        </div>
        <div className='flex gap-2  md:hidden'>
          {/* <ButtonIcon
            type='submit'
            priority='icon'
            size='ssmall'
            icon={filterIcon}
            onClick={() => setOpenFiltersModal(!openFiltersModal)}
          /> */}
          <Link href='/admin/users/create'>
            <ButtonIcon
              type='submit'
              priority='iconb'
              size='ssmall'
              icon={plusIcon}
            />
          </Link>
        </div>
      </div>
      <div className='font-larsseit flex w-full flex-col justify-items-center space-y-5 px-4 lg:px-[5%]'>
        <section className='pt-3'>
          <UsersTableMobile
            dataTheader={tableMobileHeaders}
            usersShow={currentItems}
            loading={loading}
            loadingItem={loadingItem}
            handleDeleteUser={handleDeletedUser}
          />

          <UsersTable
            dataTheader={tableHeaders}
            usersShow={currentItems}
            loading={loading}
            loadingItem={loadingItem}
            handleDeleteUser={handleDeletedUser}
          />

          <Pagination
            GQL_QUERY={GET_USERS}
            data={filteredItems}
            itemsCount={userCount}
            setData={setFilteredItems}
            setLoading={setLoadingItem}
            itemsPerPage={10}
            whereInput={whereFilter}
            orderByInput={[{ enabled: 'desc' }, { createdAt: 'asc' }]}
          />
        </section>
      </div>
    </div>
  );
}

export default Index;
