import { useFormik } from 'formik';
import * as Yup from 'yup';
import {  IngresosEgresosProps } from 'types';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { CREATE_MOVIMIENTO, UPDATE_MOVIMIENTO } from 'graphql/mutations/movimientos';
import { toast } from '@components/ui/use-toast';
import { GET_MOVIMIENTOS } from 'graphql/queries/movimientos';
import { currencyStringToFloat } from 'utils/functions/currencyString';

const useFormikIngresoEgreso = ({ ...data }: IngresosEgresosProps) => {
  const router = useRouter();

  const validationSchema = Yup.object({
    monto: Yup.string().required('Campo requerido'),
    concepto: Yup.string().required('Campo requerido'),
    fecha: Yup.string().required('Campo requerido'),
  });

  const formik = useFormik({
    initialValues: data,
    validationSchema,
    onSubmit: () => {},
    enableReinitialize: true,
  });

  const { values, isValid } = formik;

  const isCompleted = {
    onCompleted: () => {
      toast({
        description: 'Referencia creado exitosamente.',
      });
      router.push('/ingresos-egresos');
    },
    onError: () => {
      toast({
        variant: 'destructive',
        description:
          'No se ha podido crear el referencia, comuníquese con soporte.',
      });
    },
  };
    const [createMovimiento] = useMutation(CREATE_MOVIMIENTO, isCompleted);
    const [updateMovimiento] = useMutation(UPDATE_MOVIMIENTO, isCompleted);

  const handleMutation = async () => {
    if(router?.query?.id !== 'nuevo'){
        await updateMovimiento({
            variables: {
              where: {
                "id": router?.query?.id,
              },
              data: {
                "concepto": {
                  set:  values?.concepto
                },
                "descripcion":  {
                  set:  values?.descripcion,
                }, 
                "fecha":  {
                  set: new Date(values?.fecha).toISOString(),
                },
                "monto":  {
                  set: currencyStringToFloat(values?.monto),
                },
                "userId":  {
                  set: values?.userId
                },
              },
            },
            refetchQueries: [GET_MOVIMIENTOS],
          });
    }else {
        await createMovimiento({
            variables: {
              data: {
                "concepto": values?.concepto,
                "descripcion": values?.descripcion,
                "fecha":  new Date(values?.fecha).toISOString(),
                "monto": currencyStringToFloat(values?.monto),
                "userId": values?.userId
              },
            },
            refetchQueries: [GET_MOVIMIENTOS],
          });
    }
  };

  return {
    formik,
    isValid,
    handleMutation,
  };
};

export { useFormikIngresoEgreso };
