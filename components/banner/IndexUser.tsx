// Banner que muestra título de bienvenida al usuario, rol e imagen de usuario inicio
import Image from 'next/image';

function SecondSection({ rol, name }) {
  return (
    <div>
      <div className='my-16 flex gap-8'>
        <div className='flex items-start gap-3'>
          <span className='hidden rounded-[50%] border-2 border-grey-900 p-1 md:flex'>
            <Image
              src='/img/logos/IGlogo1.png'
              alt='logo'
              quality={100}
              width={70}
              height={70}
              className='rounded-full'
            />
          </span>
        </div>
        <div className='flex flex-col'>
          <h1 className='font-primaryFont text-black-100'>Bienvenido/a</h1>
          <p className='font-thirdFont text-black-100'>{name}</p>
          <p className='font-thirdFont text-black-100'>{rol}</p>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
