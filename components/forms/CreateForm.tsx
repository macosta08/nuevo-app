// formulario para crear usuarios

import InputNumber from '@components/inputs/inputNumber/InputNumber';
import GET_USERS from 'utils/gql/queries/users';
import useFormData from 'hooks/useFormData';
import { useMutation } from '@apollo/client';
import Link from 'next/link';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useToastContext } from 'context/toast';
import { CREATE_USER } from 'utils/gql/mutations/users';
import { createUserTransformation } from 'utils/gql/transformations/users';
import { createUser, postEmail } from 'utils/api';
import InputText from '@components/inputs/inputText';
import SelectInput from '@components/inputs/inputSelect/';
import Button from '@components/buttons/Buttons';
import router from 'next/router';
import { documentTypeOption } from 'utils/codeFunctions';
import { useToast } from '@components/ui/use-toast';

type ComponentProps = {
  rolesOption: { id: string; name: string }[];
};

export default function CreateForm({ rolesOption }: ComponentProps) {
  const { form, formData, updateFormData } = useFormData(null);

  const { toast } = useToast();
  const [createUserMutation] = useMutation(CREATE_USER, {
    refetchQueries: [GET_USERS],
  });
  const [roles, setRoles] = useState([]);
  const [documentType, setDocumentType] = useState<any>(null);
  const [loadingEmail, setLoadingEmail] = useState<any>(false);
  const typeDocument: string =
    documentType?.value && formData?.cedula
      ? `${documentType?.value}-${formData?.cedula}`
      : 'N/A';

  const submitForm = async (e: any) => {
    e.preventDefault();

    const password = nanoid();

    try {
      const { usuario } = await createUser({
        name: formData.name,
        email: formData.email,
        password,
        email_verified: false,
        verify_email: false,
      });
      if (usuario) {
        const user = {
          ...formData,
          typeDocument,
          roles,
          image: usuario.picture,
          auth0Id: usuario.user_id,
        };
        const { data } = createUserTransformation(user);
        await createUserMutation({
          variables: { data },
        })
          .then(async () => {
            toast({
              description: 'Usuario creado exitosamente',
            });
            await sendMailCreateUser(password);
            router.push({
              pathname: `/admin/users`,
            });
          })
          .catch(() =>
            toast({
              variant: 'destructive',
              description: 'Ocurrió error creando un usuarioo',
            })
          );
      } else {
        toast({
          variant: 'destructive',
          description: 'eeeeeOcurrió error creando un usuarioo',
        });
      }
    } catch (err) {
      toast({
        variant: 'destructive',
        description: 'aaaaaaaOcurrió error creando un usuarioo',
      });
    }
  };

  const sendMailCreateUser = async (password) => {
    await postEmail({
      email: formData.email,
      name: formData.name,
      password,
    }).then((response) => {
      if (response.status === 'message sent') {
        toast({
          description: 'Correo enviado exitosamente',
        });
        setLoadingEmail(false);
        return;
      }
      toast({
        variant: 'destructive',
        description: 'Ocurrió un error enviando el correo',
      });
      setLoadingEmail(false);
    });
  };

  return (
    <div>
      <form
        ref={form}
        onSubmit={submitForm}
        onChange={updateFormData}
        className='w-full space-y-6'
      >
        <div className='flex flex-col items-center justify-center lg:flex-row lg:gap-32 '>
          <div className='h-auto w-[300px] md:w-[420px]'>
            <div className='mb-8'>
              <InputText
                type='text'
                name='name'
                label='Nombre Completo'
                placeholder='Nombre'
                extraClassNames='font-secondaryFont gap-y-2'
              />
            </div>
            <div className='mb-8'>
              <SelectInput
                opts={documentTypeOption}
                placeholder='Seleccionar tipo de documento'
                selectName='documentType'
                text='Tipo de documento'
                setSelected={(selected): void => setDocumentType(selected)}
              />
            </div>
            <div className='mb-8'>
              <InputNumber
                name='cedula'
                label='Cédula'
                placeholder='Cédula'
                thousandSeparator={false}
                extraClassNames='font-secondaryFont gap-y-2'
              />
            </div>
            <div className='mb-8'>
              <InputText
                type='email'
                name='email'
                label='Correo electrónico'
                placeholder='email'
                extraClassNames='font-secondaryFont gap-y-2'
              />
            </div>
            <div className='mb-8'>
              <SelectInput
                opts={rolesOption}
                placeholder='Seleccionar el rol'
                selectName='roles'
                text='Rol'
                setSelected={(selected): void => setRoles(selected)}
              />
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-y-4 lg:flex-row lg:gap-8'>
          <Button
            text='Crear'
            type='submit'
            priority='secundary'
            size='small'
            disabled={loadingEmail}
          />
          <Link href='/admin/users'>
            <Button
              text='Cancelar'
              type='submit'
              priority='third'
              size='small'
              onClick={() => {
                router.push({
                  pathname: `/admin/users`,
                });
              }}
            />
          </Link>
        </div>
      </form>
    </div>
  );
}
