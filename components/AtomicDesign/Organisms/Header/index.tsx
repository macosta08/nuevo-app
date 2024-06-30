import React from 'react';
import DropdownMenuComponent from '../../Molecules/DropdownMenuComponent';
import { BreadcrumbComponent } from '../../Molecules/BreadcrumbComponent';

const Header = () => {
  return (
    <header className='sticky top-0 z-30 flex h-14 items-center justify-between gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6'>
      <BreadcrumbComponent />
      <DropdownMenuComponent />
    </header>
  );
};

export default Header;
