import { Menu, MenuList, MenuButton } from '@reach/menu-button';
import '@reach/menu-button/styles.css';
import Link from 'next/link';
import Image from 'next/image';
import { signOut } from 'next-auth/react';
import { Button } from '@components/StyledComponents';

const IGLogo = '/img/logos/logoBlanco.png';
const IGLogoBlanco = '/img/logos/LogBlanco.png';

function SmallMenu() {
  return (
    <div className=''>
      <Menu>
        <MenuButton className='ml-auto focus:outline-none'>
          <Image
            src='/img/icons/dropdownWhite.svg'
            alt='logo'
            quality={100}
            width={50}
            height={50}
          />
        </MenuButton>
        <MenuList className='slide-down animation-slide-down  mr-2 mt-8 w-32 rounded-xl bg-white p-4 py-1'>
          <div className='ml-4 flex'>
            <Link href='/'>
              <Button
                text='Inicio'
                type='button'
                priority='link'
                size='large'
              />
            </Link>
          </div>
          <div className='ml-4 flex'>
            <Button
              text='Cerrar sesión'
              type='button'
              priority='link'
              size='large'
              onClick={() => signOut()}
            />
          </div>
        </MenuList>
      </Menu>
    </div>
  );
}

export default function Navbar({ rol }) {
  return (
    <header className='bg-purple-2000 px-[5%] pb-4 pt-3 md:px-[5%] lg:mt-0 lg:w-full'>
      <nav className='flex h-auto w-full items-center justify-between font-thirdFont text-[15px] lg:gap-4'>
        <div className='hidden cursor-pointer lg:block'>
          <Link href='/'>
            <Image
              src={IGLogo}
              alt='logo'
              quality={100}
              width={230}
              height={60}
            />
          </Link>
        </div>

        <div className='cursor-pointer lg:hidden'>
          <Link href='/'>
            <Image
              src={IGLogoBlanco}
              alt='logo'
              quality={100}
              width={32}
              height={47}
            />
          </Link>
        </div>

        <div className='cursor-pointer md:flex lg:flex'>
          <div className='flex items-center gap-1 lg:gap-4'>
            <Link href='/'>
              <span className='flex items-center rounded-full border-2 border-white p-1'>
                <Image
                  src='/img/icons/dropdownWhite.svg'
                  alt='logo'
                  quality={100}
                  width={30}
                  height={30}
                  className='rounded-full'
                />
              </span>
            </Link>
            <Link href='/'>
              <div className='hidden lg:flex lg:items-center'>
                <p className='font-secondaryFont text-[24px] text-white'>
                  {rol}
                </p>
              </div>
            </Link>
            <div className='pt-1'>
              <SmallMenu />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
