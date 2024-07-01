import React from 'react';
import TextSecundary from '@components/AtomicDesign/Atoms/TextSecundary';
import { Button } from '@components/ui/button';
import TextInput from '@components/AtomicDesign/Atoms/TextInput';
import { useQuery } from '@apollo/client';
import { GET_USER } from 'graphql/queries/usuarios';
import { useRouter } from 'next/router';
import { useFormikUsuario } from 'hooks/usuarios/useFormikUsuario';
import { GET_ROLES } from 'graphql/queries/roles';
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

function UsuarioId() {
  const router = useRouter();
  const { data: usuario } = useQuery(GET_USER, {
    variables: {
      userId: router.query.id as string,
    },
    fetchPolicy: 'cache-and-network',
  });
  const { data: dataRoles } = useQuery(GET_ROLES, {
    fetchPolicy: 'cache-and-network',
  });

  // Obtén los datos iniciales del usuario para el formulario
  const data = {
    id: usuario?.user?.id || '',
    name: usuario?.user?.name || '',
    email: usuario?.user?.email || '',
    telefono: usuario?.user?.cedula || '',
    rol: usuario?.user?.role?.id || '',
  };

  // Obtén formik y la función de manejo de mutaciones desde el hook personalizado
  const { formik, handleMutation } = useFormikUsuario({ ...data });
console.log('formik.errors.name :>> ', formik.errors);
  return (
    <div className='flex h-screen flex-col items-center gap-8 p-4'>
      <section className='mx-auto w-full max-w-4xl rounded-md bg-purple-200 p-6 shadow-md dark:bg-gray-800'>
        <TextSecundary
          text={
            router.query.id === 'nuevo' ? 'Nuevo usuario' : 'Editar usuario'
          }
        />
        <form onSubmit={formik.handleSubmit} className='mt-4 space-y-6'>
          <TextInput
            label='Nombre'
            type='text'
            placeholder='Ingrese el nombre'
            name='name'
            value={formik?.values?.name}
            onChange={formik.handleChange}
            error={formik.errors.name}
            required
          />
          <TextInput
            name='email'
            label='Correo'
            type='email'
            placeholder='Ingrese el correo electronico'
            value={formik?.values?.email}
            onChange={formik.handleChange}
            disabled={router?.query?.id !== 'nuevo'}
            error={formik.errors.email}
            required
          />
          <TextInput
            name='telefono'
            label='Telefono'
            type='tel'
            placeholder='Ingrese el telefono'
            value={formik?.values?.telefono}
            onChange={formik.handleChange}
          />

          <div className='flex w-[300px]  flex-col gap-3 rounded-md bg-white p-2 shadow-md'>
            <span className='font-medium'>Selecciona un rol</span>
            <div className='flex gap-4'>
              {dataRoles &&
                dataRoles?.roles.map((role) => (
                  <TextInput
                    key={role?.id}
                    name='rol'
                    label={role?.name}
                    type='radio'
                    checked={formik?.values?.rol === role?.id}
                    value={role?.id}
                    onChange={() => {
                      formik.setFieldValue('rol', role?.id);
                    }}
                    error={formik.errors.rol}
                    required
                  />
                ))}
            </div>
          </div>

          <div className='flex justify-end'>
            <Button onClick={() => handleMutation()}>Guardar</Button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default UsuarioId;
