import React from 'react';
import { NextRouter, useRouter } from 'next/router';
import Link from 'next/link';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@components/ui/breadcrumb';
 import { Home } from "lucide-react";
import { capitalizeSentence, completedArrayRouters, contarSlash, isAlphanumericWithFixedLength } from './utils';

/**
 * Componente de navegación de migas de pan.
 */
const BreadcrumbComponent = () => {


const router = useRouter();
  const pathParts = completedArrayRouters(router);
  const countBack = contarSlash(router.asPath);

  const conditionComplete = (index: number) => pathParts.length !== index + 1;


  return (
    <div className='flex gap-2 w-full'>
      <button
        type='button'
        onClick={() => (countBack === 1 ? router.push('/') : router.back())}
        className='flex h-6 w-6 items-center justify-center rounded-full bg-color_proyect_blue_emerald_dark'
      >
      <Home className="h-5 w-5" />
      </button>
      <Breadcrumb>
        <BreadcrumbList>
          {pathParts?.map((link, index) => (
            <li
              className='flex gap-x-1 justify-center items-center'
              key={link?.link}
            >
              <BreadcrumbItem>
                {conditionComplete(index) ? (
                  <Link href={link?.link} passHref>
                    <BreadcrumbLink>
                      {capitalizeSentence(link?.name)}
                    </BreadcrumbLink>
                  </Link>
                ) : (
                  <span>
                    {isAlphanumericWithFixedLength(link?.name)
                      ? 'Detalles'
                      : capitalizeSentence(link?.name)}
                  </span>
                )}
              </BreadcrumbItem>
              {conditionComplete(index) && <BreadcrumbSeparator />}
            </li>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export { BreadcrumbComponent };