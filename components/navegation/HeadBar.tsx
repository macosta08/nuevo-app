// banner que muestra titulo de la pagina con su imagen respectiva
import * as React from 'react';

type HeadType = {
  title: string;
  extraClassNames?: string;
};

function HeadBar({ title, extraClassNames = '' }: HeadType) {
  return (
    <div className='flex h-[100px] w-full items-center shadow-[0_4px_4px_rgba(0,0,0,0.25)] '>
      <h3
        className={`${'pl-6 font-fourthFont text-black-100 '}${extraClassNames}`}
      >
        {title}
      </h3>
    </div>
  );
}

export default HeadBar;
