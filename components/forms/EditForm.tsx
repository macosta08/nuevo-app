// formulario para editar usuarios

import React, { useEffect, useState, SyntheticEvent } from 'react';
import { client } from 'graphql/client';
import safeJsonStringify from 'safe-json-stringify';
import { updateUserTransformation } from 'utils/gql/transformations/users';
import { UPDATE_USER } from 'utils/gql/mutations/users';
import { useMutation, useQuery } from '@apollo/client';
import { useToastContext } from 'context/toast';
import GET_ROLES from 'utils/gql/queries/roles';
import InputText from '@components/inputs/inputText';
import SelectInput from '@components/inputs/inputSelect';
import Button from '@components/buttons/Buttons';
import useFormData from 'hooks/useFormData';
import { useRouter } from 'next/router';
import GET_USER from 'utils/gql/queries/user';
import Loading from '@components/Loading';
import {
  documentTypeOption,
  getTypeDocument,
  obtenerNumeroIdentificación,
} from 'utils/codeFunctions';

type User = {
  id: string;
  name: string;
  email: string;
  cedula: string;
  role: { id: string; name: string };
};

type ComponentProps = {
  rolesOption: {
    label: any;
    id: string;
    name: string;
  }[];
};

// ... ROLES QUERY
export async function getServerSideProps() {
  const rejected = false;
  const resRoles = await client.query({
    query: GET_ROLES,
    fetchPolicy: 'network-only',
  });

  return {
    props: {
      roles: JSON.parse(safeJsonStringify(resRoles.data.roles)),
      rejected,
    },
  };
}

export default function EditForm({ rolesOption }: ComponentProps) {
  const idUser = window?.location?.pathname.split('/')[3];
  const router = useRouter();
  const { setToastState } = useToastContext();
  const [user, setUser] = useState<User>();
  const { form, formData, updateFormData } = useFormData(null);
  const [updateUserMutation, { loading }] = useMutation(UPDATE_USER);
  const [loadingSave, setLoadingSave] = useState<boolean>(false);
  const [role, setRole] = useState<any>(null);
  const [documentType, setDocumentType] = useState<any>(null);

  const { data: queryData, loading: loadingQuery } = useQuery(GET_USER, {
    variables: {
      userId: idUser,
    },
    fetchPolicy: 'cache-and-network',
  });
  // const [currentRole, setCurrentRole] = useState<Role>({
  //   label: user?.role?.name,
  //   value: user?.role?.id,
  // });
  useEffect(() => {
    if (queryData) {
      const fetchedUser = {
        id: queryData.user.id,
        cedula: obtenerNumeroIdentificación(queryData.user.cedula),
        name: queryData.user.name,
        email: queryData.user.email,
        role: queryData.user.role,
      };
      setUser(fetchedUser);
      setRole({
        label: fetchedUser.role.name,
        value: fetchedUser.role.id,
      });
      setDocumentType(getTypeDocument(fetchedUser.cedula));
    }
  }, [queryData]);
  //
  useEffect(() => {
    if (user) {
      setDocumentType(getTypeDocument(queryData?.user?.cedula));
    }
  }, [user?.cedula]);

  const submitForm = async (e: SyntheticEvent) => {
    e.preventDefault();
    setLoadingSave(true);
    const typeDocument: string =
      (documentType?.value && formData.cedula) || user?.cedula
        ? `${documentType?.value}-${formData.cedula || user?.cedula}`
        : 'N/A';

    const { where, data } = updateUserTransformation(
      {
        id: user?.id,
        name: formData.name || user?.name,
        email: formData.email || user?.email,
        cedula: formData.cedula || user?.cedula,
        roles: role,
        typeDocument,
      },
      queryData.user.role.id
    );
    try {
      setLoadingSave(true);
      await updateUserMutation({
        variables: { where, data },
      });
      setLoadingSave(false);
      setToastState({
        message: 'Usuario actualizado exitosamente',
        type: 'success',
      });
      router.push({
        pathname: `/admin/users`,
      });
    } catch (err) {
      setLoadingSave(false);
      setToastState({
        message: 'Ocurrió un error actualizando el usuario',
        type: 'error',
      });
    }
  };

  return (
    <div>
      {!loadingQuery && (
        <form
          ref={form}
          onSubmit={submitForm}
          onChange={updateFormData}
          className=' w-full'
        >
          <div className='flex flex-col items-center justify-center lg:flex-row lg:gap-32 '>
            <div className='h-auto w-[300px] md:w-[420px]'>
              <div className='mb-8'>
                <InputText
                  name='name'
                  placeholder='Nombre'
                  label='Nombre'
                  type='text'
                  defaultValue={user?.name}
                />
              </div>

              <div className='mb-8'>
                <SelectInput
                  opts={documentTypeOption}
                  placeholder='Seleccionar tipo de documento'
                  selectName='documentType'
                  text='Tipo de documento'
                  setSelected={(selected): void => setDocumentType(selected)}
                  selectedValue={documentType}
                  shownValue={documentType}
                />
              </div>
              <div className='mb-8'>
                <InputText
                  name='cedula'
                  label='Cédula'
                  type='text'
                  placeholder='Cédula'
                  extraClassNames='font-secondaryFont gap-y-2'
                  defaultValue={user?.cedula}
                />
              </div>
              <div className='mb-8'>
                <InputText
                  type='email'
                  name='email'
                  label='Correo electrónico'
                  placeholder='email'
                  extraClassNames='font-secondaryFont gap-y-2'
                  defaultValue={user?.email}
                />
              </div>
              <div className='mb-8'>
                <SelectInput
                  isMulti={false}
                  opts={rolesOption}
                  placeholder='Seleccionar el rol'
                  selectName='roles'
                  text='Rol'
                  setSelected={(selected): void => setRole(selected)}
                  selectedValue={role} // Ensure selectedValue is set correctly
                  shownValue={role} // Ensure shownValue is set correctly
                />
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center gap-y-4 lg:flex-row lg:gap-8'>
            <Button
              text='Editar'
              type='submit'
              priority='secundary'
              size='small'
              extraClassName='bg-blue500 text-darkBlue500'
              disabled={loading && loadingSave}
            />
            <Button
              text='Cancelar'
              type='button'
              priority='third'
              size='small'
              onClick={() => {
                router.push({
                  pathname: `/admin/users`,
                });
              }}
            />
          </div>
        </form>
      )}
      {loadingQuery && <Loading open={loadingQuery} />}
    </div>
  );
}
