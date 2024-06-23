export function renameEnums(enumName) {
  return enumName;
}

export function getLastFiveMonths() {
  const chartLabels = [];

  const month2 = [
    {
      value: '01',
      name: 'Enero',
    },
    {
      value: '02',
      name: 'Febrero',
    },
    {
      value: '03',
      name: 'Marzo',
    },
    {
      value: '04',
      name: 'Abril',
    },
    {
      value: '05',
      name: 'Mayo',
    },
    {
      value: '06',
      name: 'Junio',
    },
    {
      value: '07',
      name: 'Julio',
    },
    {
      value: '08',
      name: 'Agosto',
    },
    {
      value: '09',
      name: 'Septiembre',
    },
    {
      value: '10',
      name: 'Octubre',
    },
    {
      value: '11',
      name: 'Noviembre',
    },
    {
      value: '12',
      name: 'Diciembre',
    },
  ];
  const d = new Date();
  d.setDate(1); // <---- this
  for (let mMonth = 0; mMonth < 5; mMonth += 1) {
    chartLabels[mMonth] = month2[d.getMonth()];
    d.setMonth(d.getMonth() - 1);
  }
  return chartLabels;
}

type documentTypeOptionTypy = {
  id: string;
  name: string;
};

export const documentTypeOption: documentTypeOptionTypy[] = [
  { id: 'RC', name: 'Registro civil de nacimiento' },
  { id: 'TI', name: 'Tarjeta de identidad' },
  { id: 'CC', name: 'Cédula de ciudadanía' },
  { id: 'TE', name: 'Tarjeta de extranjería' },
  { id: 'CE', name: 'Cédula de extranjería' },
  { id: 'PP', name: 'Pasaporte' },
  { id: 'DE', name: 'Tipo de documento extranjero' },
];

export const getTypeDocument = (document: string) => {
  const splitdocument: string = document?.split('-')[0];
  const result = documentTypeOption?.find((d) => d.id === splitdocument);

  return result
    ? {
        value: result.id,
        label: result.name,
      }
    : {
        value: 'CC',
        label: 'Cédula de ciudadanía',
      };
};

// Función para formatear la fecha
export function formatDate(dateString) {
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  return formattedDate;
}

export function obtenerNumeroIdentificación(inputString) {
  const match = inputString && inputString?.match(/[A-Z]+(\d+)/);
  const cedula = inputString && inputString?.replace(/\D/g, '');
  if (match) {
    return match[0];
  }
  if (cedula) {
    return cedula;
  }
  return inputString;
}

export function verificarRol(find) {
  const rolesPermitidos = ['Superadmin', 'Admin', 'Medico', 'Paciente'];

  if (rolesPermitidos.includes(find)) {
    return find;
  }
  return null;
}
