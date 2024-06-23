import React from 'react';
import Image from 'next/image';
import { formatDate } from 'utils/codeFunctions';
import DownloadButton from '@components/buttons/DownloadButton ';

const greenIcon = '/img/icons/GREENDOWNLOAD.svg';

function EnableCard({ orderNumber, title, date, link, state }) {
  const formattedDate = formatDate(date);

  return (
    <DownloadButton fileName={link}>
      <div className='group mb-4 flex h-[258px] w-[394px] flex-col rounded-[20px] bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)]'>
        <div className='flex justify-end'>
          <div className='flex h-[42px] min-w-[182px] items-center justify-center gap-4 rounded-bl-[20px] rounded-tr-[20px] bg-purple-300 px-2'>
            <p className='font-fourthFont text-white'>Orden</p>
            <p className='font-thirdFont text-white'>{orderNumber}</p>
          </div>
        </div>

        <div className='relative w-full px-[5%] pb-2 pt-4'>
          <div className='has-tooltip'>
            <span className='tooltip rounded bg-gray-100 p-1 text-left text-purple-2000 shadow-lg'>
              {title}
            </span>
            <p className='truncate text-left font-fourthFont text-[26px] text-purple-2000'>
              {title}
            </p>
          </div>
        </div>

        <div className='flex w-full flex-grow flex-col items-start px-[5%] pb-4 pt-4 text-[18px]'>
          <p className='mb-2 flex gap-2 font-secondaryFont text-black-100'>
            <span className='font-fourthFont'>Fecha:</span> {formattedDate}
          </p>
        </div>

        <div className='mt-auto flex items-center justify-between rounded-b-[20px] bg-green-100/40 pl-[5%] pr-[3%]'>
          <p className='flex font-secondaryFont text-black-300'>{state}</p>
          <span className='pr-[2%] pt-[2%]'>
            <Image
              src={greenIcon}
              alt='Descargar'
              quality={100}
              width={46}
              height={46}
              className='h-auto max-w-full'
            />
          </span>
        </div>
      </div>
    </DownloadButton>
  );
}

function ResultsCard({ examenes = [] }) {
  return (
    <div className='grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 xl:grid-cols-3'>
      {examenes?.map((examen) => (
        <EnableCard
          key={examen?.id}
          orderNumber={examen?.idExamen}
          title={examen?.nameProcess}
          date={examen?.createdAt}
          link={examen?.pathS3}
          state='Reporte listo'
        />
      ))}
    </div>
  );
}

export default ResultsCard;
