import { FormikErrors, FormikValues } from 'formik';

export type LinkItem = {
  name: string;
  link: string;
  icon: string;
};

export type LinkItemCard = {
  name: string;
  link: string;
  icon: string;
  description: string;
};

export interface IngresosEgresosProps {
  id?: string | undefined;
  usuario?: string | undefined;
  concepto: string | undefined;
  fecha: string | undefined;
  monto: string | undefined;
}

export interface UsuariosProps {
  id: string | undefined;
  name: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
  telefono: string | undefined;
  rol: string | undefined;
}

export interface FormikProps {
  values: FormikValues;
  initialValues: FormikValues;
  handleChange: (e: React.ChangeEvent<unknown>) => void;
  errors: FormikErrors<FormikValues>;
  handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
  // setFieldValue: (
  //   field: string,
  //   value:
  //     | {
  //         label: string;
  //         value: string | boolean | number;
  //       }
  //     | unknown,
  //   shouldValidate?: boolean | undefined
  // ) => void;
}

export interface FormProps {
  handleMutation: () => Promise<void>;
}
