import * as React from 'react';
import Image from 'next/image';

type HeadType = {
  title: string;
  img?: any;
};

function HeadBarImg({ title, img }: HeadType) {
  return (
    <div className='flex h-[100px] w-full items-center px-[10%] shadow-[0_4px_4px_rgba(0,0,0,0.25)] md:px-[8%] lg:px-[5%]'>
      <span className='flex items-center rounded-[50%] bg-purple-500 p-1'>
        <Image src={img} alt='logo' quality={100} width={58} height={59} />
      </span>
      <h3 className='w-[337px] pl-4 font-fourthFont text-black-100'>{title}</h3>
    </div>
  );
}

export default HeadBarImg;
