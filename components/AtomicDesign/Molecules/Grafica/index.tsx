import React from 'react';
import PieChart, {
  Connector,
  Font,
  Label,
  Legend,
  Series,
} from 'devextreme-react/pie-chart';
import TextPrimary from '../../Atoms/TextPrimary';


const Grafica = ({titulo, data, argument, value}: {titulo: string, data: {
    motivo: string;
    cantidad: number;
}[], argument: string | undefined, value: string | undefined}) => {
  return (
      <div className='bg-white w-full max-w-[480px]   gap-4 flex flex-col p-2 md:p-4 rounded-lg shadow-md'>
        <div className='self-stretch text-blue-950 text-xl font-bold  leading-normal'>
          {titulo}
        </div>
        <div className=' w-full justify-center items-center flex'>
          <PieChart
            id='pie'
            palette='Harmony Light'
            paletteExtensionMode='blend'
            dataSource={data}
            width={360}
            className=' -mt-7'
          >
            <Legend
              orientation='horizontal'
              itemTextPosition='right'
              horizontalAlignment='center'
              verticalAlignment='bottom'
              columnCount={4}
            />

            <Series argumentField={argument} valueField={value}>
              <Label
                visible={true}
                position='columns'
              >
                <Font size={16} />
                <Connector visible={true} width={0.5} />
              </Label>
            </Series>
          </PieChart>
        </div>
      </div>
  );
};

export { Grafica };