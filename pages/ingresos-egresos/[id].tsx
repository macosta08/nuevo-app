import React from 'react';
import TextSecundary from '@components/AtomicDesign/Atoms/TextSecundary';
import { Button } from '@components/ui/button';
import TextInput from '@components/AtomicDesign/Atoms/TextInput';
import { useFormikIngresoEgreso } from 'hooks/ingresosEgresos/useFormikIngresoEgreso';
import { useRouter } from 'next/router';
import NumberInput from '@components/AtomicDesign/Atoms/NumberInput';
import RadioInput from '@components/AtomicDesign/Atoms/RadioInput';
import { Enum_Concepto as enumConcepto } from '@prisma/client';
import TextArea from '@components/AtomicDesign/Atoms/Textarea';
import { GET_MOVIMIENTO } from 'graphql/queries/movimientos';
import { useQuery } from '@apollo/client';
import { useSession } from 'next-auth/react';
import { isoStringToDate } from 'utils/functions/currencyString';

function IngresosEgresosId() {
  const router = useRouter();
  const { data: session }: any = useSession();
  const { data: dataMovimiento } = useQuery(GET_MOVIMIENTO, {
   variables: {
    movimientoId: router.query.id as string
   },
    fetchPolicy: 'cache-and-network',
  });

  // aqui hay que pasar la data que venga del query
  const data = {
    monto: dataMovimiento?.movimiento?.monto || '',
    concepto: dataMovimiento?.movimiento?.concepto || '',
    fecha: isoStringToDate(dataMovimiento?.movimiento?.fecha) || '',
    descripcion: dataMovimiento?.movimiento?.descripcion || '',
    userId: dataMovimiento?.movimiento?.userId || session?.user?.id,
  };
  const { formik, isValid, handleMutation } = useFormikIngresoEgreso({ ...data });

  const optionConcepto = Object?.keys(enumConcepto)?.map(
    (index) => ({
      id: enumConcepto[index],
      name: enumConcepto[index],
    })
  );

  return (
    <div className='flex h-screen flex-col items-center gap-8 p-4'>
      <TextSecundary
        text={
          router.query.id === 'nuevo'
            ? 'Nuevo movimiento'
            : 'Edición de movimiento'
        }
      />
      <section className='mx-auto w-full max-w-4xl rounded-md bg-purple-200 p-6 shadow-md dark:bg-gray-800'>
        <form onSubmit={formik.handleSubmit} className='mt-4 space-y-6'>
          <NumberInput 
            label='Monto' 
            name='monto' 
            prefix={'$'}
            value={formik?.values?.monto} 
            onChange={formik.handleChange} 
            thousandSeparator
          /> 
          <TextInput
            label='Fecha'
            type='date'
            placeholder='Ingrese la fecha'
            name='fecha'
            value={formik?.values?.fecha}
            onChange={formik.handleChange}
          />

      <div className='flex w-full  flex-col gap-3 rounded-md  p-2'>
            <span className='text-gray-700 dark:text-gray-200'>Concepto</span>
            <div className='flex gap-4'>
              {optionConcepto &&
                optionConcepto?.map((concepto) => (
                <RadioInput
                  key={concepto?.id}
                  label={concepto?.name}
                  type='radio'
                  name='concepto'
                  extraclass={concepto?.name === 'Ingreso'}
                  value={formik?.values?.concepto}
                  checked={formik?.values?.concepto === concepto?.id}
                  onChange={() => {
                    formik.setFieldValue('concepto', concepto?.id);
                  }}
                  error={formik.errors.concepto}
                  required
                />
                ))}
            </div>
          </div>
          <TextArea
            label='Descripción'
            placeholder='Escribe aquí...'
            name='descripcion'
            value={formik?.values?.descripcion}
            onChange={formik.handleChange}
          />
          <div className='flex justify-end'>
            <Button onClick={() => handleMutation()} disabled={!isValid}>Guardar</Button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default IngresosEgresosId;
