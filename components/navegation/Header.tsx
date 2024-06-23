import React from 'react';
import Image from 'next/image';
import Button from '@components/buttons/Buttons';

function HeaderMobile() {
  return (
    <div className='mt-4 flex justify-center'>
      <Button
        text='Pago en línea'
        type='submit'
        priority='primary'
        size='medium'
      />
    </div>
  );
}

function HeaderDesktop() {
  return (
    <div className='hidden sm:block'>
      <div className='flex items-center bg-purple-800 px-[20%]  py-4 font-secondaryFont md:justify-center  lg:justify-between'>
        <div className='flex  gap-2 '>
          <span>
            <Image
              src='/img/icons/location1.svg'
              alt='logo'
              quality={100}
              width={15}
              height={15}
            />
          </span>
          <p className='w-96 cursor-pointer text-left text-sm text-white'>
            Unidad Médica Las Vegas. Carrera 46, Calle 2, Sur 45, Interior 158.
            Fase II. Medellín
          </p>
        </div>
        <div className='flex  gap-2'>
          <span>
            <Image
              src='/img/icons/phone.svg'
              alt='logo'
              quality={100}
              width={15}
              height={15}
            />
          </span>
          <p className='cursor-pointer text-left text-sm text-white  md:w-36 lg:w-auto'>
            Tel: 6044446600
          </p>
        </div>
        <div>
          <Button
            text='Pago en línea'
            type='submit'
            priority='primary'
            size='medium'
          />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div>
      <div className='sm:hidden'>
        <HeaderMobile />
      </div>
      <div className='hidden sm:block'>
        <HeaderDesktop />
      </div>
    </div>
  );
}

export default Header;
