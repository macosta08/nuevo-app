import { FormikErrors, FormikValues } from 'formik';

export type LinkItem = {
  name: string;
  link: string;
  icon: React.ReactNode;
};

export type LinkItemCard = {
  name: string;
  link: string;
  icon: React.ReactNode;
  description: string;
};

export interface IngresosEgresosProps {
  id?: string | undefined;
  concepto: string | undefined;
  fecha: string | undefined;
  monto: string | undefined;
  descripcion: string | undefined;
  userId: string | undefined;
}

interface UserProps {
  id: string | undefined;
  name: string | undefined;
}

export interface IngresosEgresosTotalProps {
  id?: string | undefined;
  concepto: string | undefined;
  fecha: string | undefined;
  monto: number | undefined;
  descripcion: string | undefined;
  user: UserProps;
}

export interface UsuarioProps {
  id: string | undefined;
  name: string | undefined;
  email: string | undefined;
  telefono: string | undefined;
  rol: string | undefined;
}

interface RoleProps {
  id: string | undefined;
  name: string | undefined;
}
export interface UsuariosProps {
  id: string | undefined;
  name: string | undefined;
  email: string | undefined;
  telefono: string | undefined;
  role: RoleProps;
}

export interface FormikProps {
  values: FormikValues;
  initialValues: FormikValues;
  handleChange: (e: React.ChangeEvent<unknown>) => void;
  errors: FormikErrors<FormikValues>;
  handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
  setFieldValue: (
    field: string,
    value:
      | {
          label: string;
          value: string | boolean | number;
        }
      | unknown,
    shouldValidate?: boolean | undefined
  ) => void;
}

export interface FormProps {
  handleMutation: () => Promise<void>;
}
