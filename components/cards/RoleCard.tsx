import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const doubleUserIcon = '/img/icons/DOUBLEPERSON.svg';
const cardImage = '/img/banner/imgCard.png';

function RoleCard({ title, text, link }) {
  return (
    <div className='flex items-center justify-center'>
      <Link href={link}>
        <div className='flex h-[420px] w-[311px] cursor-pointer flex-col items-center rounded-[40px] border-b-[3px] border-purple-2000 bg-grey-400 shadow-[0px_4px_4px_rgba(77,44,226,0.25)] hover:bg-purple-400 md:mb-4 md:flex md:h-auto md:w-full md:flex-row md:items-start md:border-none md:shadow-[-4px_4px_4px_rgba(0,0,0,0.25)] '>
          <span className='md:flex md:items-center'>
            <Image
              src={cardImage}
              alt='logo'
              quality={100}
              width={420}
              height={280}
              className='md:w-420 md:h-280'
            />
          </span>
          <div className='flex w-full justify-between px-8 pb-2 pt-8 md:flex md:flex-col md:items-start'>
            <h1 className='mb-4 hidden font-primaryFont text-purple-2000 md:flex '>
              {title}
            </h1>
            <p className='mb-4 font-primaryFont text-[25px] text-purple-2000 md:hidden '>
              {title}
            </p>
            <span className='pr-[2%] pt-[2%] md:hidden'>
              <Image
                src={doubleUserIcon}
                alt='logo'
                quality={100}
                width={33}
                height={33}
              />
            </span>
            <p className='hidden w-56 font-thirdFont text-[14px] text-black-300 md:flex md:w-auto md:text-xl '>
              {text}
            </p>
          </div>
          <span className='hidden pr-[2%] pt-[2%] md:flex'>
            <Image
              src={doubleUserIcon}
              alt='logo'
              quality={100}
              width={71}
              height={71}
            />
          </span>
          <div className='flex items-center justify-start text-left md:hidden'>
            <p className='w-56 font-thirdFont text-[14px] text-black-300 '>
              {text}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default RoleCard;
