import React, { PropsWithChildren } from 'react'
import Header from '../AtomicDesign/Organisms/Header'
import Head from 'next/head'
import Sidebar from '../AtomicDesign/Organisms/Sidebar'

const Layout = ({children}: PropsWithChildren) => {
  return (
    <>
    <Head>
      <title>Gestión de ingresos</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
    <Sidebar/>
    <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
    <Header/> {children}
    </div> </div></>
  )
}

export default Layout