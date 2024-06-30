import TextPrimary from '@components/AtomicDesign/Atoms/TextPrimary';
import { Grafica } from '@components/AtomicDesign/Molecules/Grafica';

function Graficas() {
  const dataUsuarios = [
    {
      motivo: 'Administrador',
      cantidad: 400,
    },
    {
      motivo: 'Usuario',
      cantidad: 1000,
    },
  ];
  const dataIngresosEgresos = [
    {
      motivo: 'Ingresos',
      cantidad: 100000,
    },
    {
      motivo: 'Egresos',
      cantidad: 500000,
    },
  ];
  return (
    <div className='flex flex-col items-center gap-10 p-4'>
      <TextPrimary text='Graficas' />
      <div className='flex w-full justify-between gap-10'>
        <Grafica
          titulo='Usuarios'
          data={dataUsuarios}
          argument='motivo'
          value='cantidad'
        />
        <Grafica
          titulo='Ingresos y egresos'
          data={dataIngresosEgresos}
          argument='motivo'
          value='cantidad'
        />
      </div>
    </div>
  );
}

export default Graficas;
