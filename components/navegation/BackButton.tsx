import React from 'react';
import { useRouter } from 'next/router';

function BackButton() {
  const router = useRouter();
  return (
    <button
      type='button'
      className='text-darkBlue500 mx-1 flex items-center justify-center rounded-lg px-3 font-semibold hover:bg-gray-200'
      onClick={() => router.back()}
      aria-label='Go back'
    >
      <i className='fas fa-arrow-circle-left block text-2xl text-yellow-200' />
    </button>
  );
}

export default BackButton;
