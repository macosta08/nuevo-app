import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

function BackButton() {
  const backIcon = '/img/icons/backbutton.svg';
  const router = useRouter();
  return (
    <button
      type='button'
      className='text-darkBlue500 absolute mx-1 mt-8 flex items-center justify-center rounded-lg  font-semibold  md:pl-4 lg:px-3'
      onClick={() => router.back()}
    >
      <Image src={backIcon} alt='logo' quality={100} width={40} height={40} />
    </button>
  );
}

export default BackButton;
