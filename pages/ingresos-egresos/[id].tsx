import React from 'react';
import TextSecundary from '@components/AtomicDesign/Atoms/TextSecundary';
import { Button } from '@components/ui/button';
import TextInput from '@components/AtomicDesign/Atoms/TextInput';
import { useFormikIngresoEgreso } from '@/hooks/ingresosEgresos/useFormikIngresoEgreso';
import { useRouter } from 'next/router';

function IngresosEgresosId() {
   const router = useRouter();
  // const { data: dataQuery } = useQuery(GET_USER, {
//  variables: {
//   id: router.query.id as string
//  },
//   onCompleted: (data) => {
//     if (data?.usuario) {
//       const usuario = data?.usuario
//       setData({
//         id: usuario.id,
//         name: usuario.name,
//         lastName: usuario.lastName,
//         email: usuario.email,
//         telefono: usuario.telefono,
//         rol: usuario.rol,
//       });
//     }
//   },
//   fetchPolicy: 'cache-and-network',
// });

// aqui hay que pasar la data que venga del query
const data = {
   monto: undefined,
   concepto: undefined,
   fecha: undefined,
}
const {formik, handleMutation} = useFormikIngresoEgreso({data})
  return (
    <div className="flex flex-col p-4 gap-8 items-center h-screen">
      <TextSecundary text= {router.query.id === 'nuevo' ? 'Nuevo movimiento' : 'Edición de movimiento'} />
      <section className="w-full max-w-4xl p-6 mx-auto bg-purple-200 rounded-md shadow-md dark:bg-gray-800">
        <form onSubmit={formik.handleSubmit} className="mt-4 space-y-6">
          <TextInput
            label="Monto"
            type="text"
            placeholder="Ingrese el monto"
            name='monto'
            value={data?.monto}
            onChange={formik.handleChange}
          />
          <TextInput
            label="Concepto"
            type="text"
            placeholder="Ingrese el concepto"
            name='concepto'
            value={data?.concepto}
            onChange={formik.handleChange}
          />
           <TextInput
            label="Fecha"
            type="date"
            placeholder="Ingrese la fecha"
            name='fecha'
            value={data?.fecha}
            onChange={formik.handleChange}
          />
          <div className="flex justify-end">
          <Button   onClick={() => handleMutation()}>Guardar</Button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default IngresosEgresosId;
