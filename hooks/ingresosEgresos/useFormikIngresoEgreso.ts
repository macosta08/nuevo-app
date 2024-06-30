import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useMemo } from 'react';
import { FormikProps, IngresosEgresosProps } from 'types';
// import { useRouter } from 'next/router';

const useFormikIngresoEgreso = ({ data }: { data: IngresosEgresosProps }) => {
  // const router = useRouter();
  const initialValues = useMemo(
    () => ({
      monto: data?.monto || '',
      concepto: data?.concepto || '',
      fecha: data?.fecha || '',
    }),
    [data]
  );

  const validationSchema = Yup.object({
    monto: Yup.string().required('Campo requerido'),
    concepto: Yup.string().required('Campo requerido'),
    fecha: Yup.string().required('Campo requerido'),
  });

  const formik: FormikProps = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => {},
    enableReinitialize: true,
  });

  // const { values } = formik;
  //   const [createUsuarioMutation] = useMutation(CREATE_USUARIO, {
  //     onCompleted: () => {
  //       toast.success('Referencia creado exitosamente');
  //     },
  //     onError: () => {
  //       toast.error(
  //         'No se ha podido crear el referencia, comuníquese con soporte.'
  //       );
  //     },
  //   });
  //   const [updateUsuarioMutation] = useMutation(UPDATE_USUARIO, {
  //     onCompleted: () => {
  //       toast.success('Referencia creado exitosamente');
  //     },
  //     onError: () => {
  //       toast.error(
  //         'No se ha podido crear el referencia, comuníquese con soporte.'
  //       );
  //     },
  //   });

  const handleMutation = async () => {
    // if(router?.query?.id){
    //     await updateUsuarioMutation({
    //         variables: {
    //           where: {
    //             id: router?.query?.id,
    //           },
    //           data: {
    //             nombre: values?.nombre,
    //             name: values?.name,
    // lastName: values?.lastName,
    // email: values?.email,
    // telefono: values?.telefono,
    // rol: values?.rol,
    //           },
    //         },
    //         refetchQueries: [GET_ALL_USERS],
    //       });
    // }else {
    //     await createUsuarioMutation({
    //         variables: {
    //           where: {
    //             id: '',
    //           },
    //           data: {
    //             nombre: values?.nombre,
    //             name: values?.name,
    // lastName: values?.lastName,
    // email: values?.email,
    // telefono: values?.telefono,
    // rol: values?.rol,
    //           },
    //         },
    //         refetchQueries: [GET_ALL_USERS],
    //       });
    // }
  };

  return {
    formik,
    handleMutation,
  };
};

export { useFormikIngresoEgreso };
