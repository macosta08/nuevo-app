import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContextProvider } from 'context/toast';
import Navbar from '@components/navegation/Navbar';
import { useSession } from 'next-auth/react';

function LayoutPublic({ children }) {
  const { data: session }: any = useSession();
  return (
    <ToastContextProvider>
      <div className='min-w-screen flex min-h-screen flex-col justify-between overflow-hidden'>
        {/* <WhatsappButton /> */}
        <header className='fixed left-0 right-0 top-0 z-30 w-full overflow-hidden'>
          {/* <Header /> */}
          <Navbar rol={session?.user?.role?.name} />
        </header>
        <main className='mt-24 h-full w-full overflow-hidden'>{children}</main>
        <footer className='h-full w-full overflow-hidden'>
          {/* <Footer /> */}
        </footer>
      </div>
    </ToastContextProvider>
  );
}
export default LayoutPublic;
