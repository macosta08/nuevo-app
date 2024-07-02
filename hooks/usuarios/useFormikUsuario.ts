import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { UsuarioProps } from 'types';
import { useMutation } from '@apollo/client';
import { CREATE_USUARIO, UPDATE_USUARIO } from 'graphql/mutations/usuarios';
import { nanoid } from 'nanoid';

import { GET_ALL_USERS } from 'graphql/queries/usuarios';
import { useToast } from '@components/ui/use-toast';
import { createUser } from 'utils/api';

const useFormikUsuario = ({ ...data }: UsuarioProps) => {
  const router = useRouter();
  const { toast } = useToast();
  const isCompleted = {
    onCompleted: () => {
      toast({
        description: 'Referencia creado exitosamente.',
      });
      router.push('/usuarios')
    },
    onError: () => {
      toast({
        variant: 'destructive',
        description:
          'No se ha podido crear el referencia, comuníquese con soporte.',
      });
    },
  };
  const [createUsuario] = useMutation(CREATE_USUARIO, isCompleted);
  const [updateUsuario] = useMutation(UPDATE_USUARIO, isCompleted);

  const validationSchema = Yup.object({
    name: Yup.string().required('Campo requerido'),
    email: Yup.string().required('Campo requerido'),
    rol: Yup.string().required('Campo requerido'),
  });
  const formik = useFormik({
    initialValues: {
      name: data?.name || '',
      email: data?.email || '',
      telefono: data?.telefono || '',
      rol: data?.rol || '',
    },
    validationSchema,
    onSubmit: () => {},
    enableReinitialize: true,
  });
  const { values, isValid } = formik;

  const handleMutation = async () => {
    if (router?.query?.id !== 'nuevo') {
      await updateUsuario({
        variables: {
          where: {
            id: router?.query?.id,
          },
          data: {
            name: { set: values?.name },
            telefono: { set: values?.telefono },
            email: { set: values?.email },
            role: {
              connect: {
                id: values.rol,
              },
            },
          },
        },
        refetchQueries: [GET_ALL_USERS],
      });
    } else {
      const password = nanoid();
      const { usuario } = await createUser({
        name: values?.name,
        email: values?.email,
        password,
        email_verified: false,
        verify_email: false,
      });
      if (usuario) {
        await createUsuario({
          variables: {
            data: {
              name: values?.name,
              email: values?.email,
              telefono: values?.telefono,
              image: usuario.picture,
              deleted: false,
              enabled: true,
              role: {
                connect: {
                  id: values.rol,
                },
              },
              accounts: {
                create: {
                  provider: 'auth0',
                  providerAccountId: usuario?.user_id,
                  type: 'oauth',
                },
              },
            },
          },
          refetchQueries: [GET_ALL_USERS],
        });
      }
    }
  };

  return {
    formik,
    isValid,
    handleMutation,
  };
};

export { useFormikUsuario };
